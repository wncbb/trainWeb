#!/usr/bin/env python

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on available packages.

from lib.serverInfo import getServerStat

from lib.sql.user import User
from lib.sql.station import Station
from lib.sql.sensor import Sensor
from lib.sql.eqp import Eqp
from lib.sql.auth import Auth

from datetime import datetime

async_mode = None

if async_mode is None:
    try:
        import eventlet
        async_mode = 'eventlet'
    except ImportError:
        pass

    if async_mode is None:
        try:
            from gevent import monkey
            async_mode = 'gevent'
        except ImportError:
            pass

    if async_mode is None:
        async_mode = 'threading'

    print('async_mode is ' + async_mode)

# monkey patching is necessary because this application uses a background
# thread
if async_mode == 'eventlet':
    import eventlet
    eventlet.monkey_patch()
elif async_mode == 'gevent':
    from gevent import monkey
    monkey.patch_all()

import time
from threading import Thread
from flask import Flask, render_template, session, request, jsonify, redirect, url_for
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect
from flask.ext.sqlalchemy import SQLAlchemy
import hashlib

# from lib.eqp import hasEqp, addEqp, getAllEqp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app, async_mode=async_mode)
thread = None

def isAllowed(session):
    ret=1
    if(('id' in session) and ('username' in session) and ('level' in session)):
        verifyRst=User.verifyUser({'id': session['id'], 'username': session['username'], 'level': session['level']})
        if(verifyRst['status']==5):
            ret=1
        else:
            ret=0
    else:
        ret=0
    if(ret==0):
        if('id' in session):
            del session['id']
        if('username' in session):
            del session['username']
        if('level' in session):
            del session['level']
    return ret

def deal_privilege(session):
    ret={}
    ret['level']=session['level']
    return ret



#v0.1 response index page
@app.route('/')
def deal_index():
    inData={}
    if(isAllowed(session)):
        inData=deal_privilege(session)
        return render_template('index.html', inData=inData)
    else:
        return redirect(url_for('deal_login'))

#v0.1 response eqp page
@app.route('/eqp')
def deal_eqp():
    inData=None
    if(isAllowed(session)):
        if(session['level']!=-1):
            inData=deal_privilege(session)
            inData['stationInfo']=Station.select({})['data']
            inData['addEqpSensorInfo']=Sensor.info({})['data']
            inData['addAuthSensorInfo']=Sensor.specialInfo({'in':{}, 'out':{'type': 'addAuth', 'username': session['username'], 'level': session['level']}})['data']
            inData['addAuthUserInfo']=User.select({'level': 1})['data']
            return render_template('eqp.html', inData=inData)

    else:
        return redirect(url_for('deal_login'))

#v0.1 response manage page
@app.route('/manage')
def deal_manage():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    inData=None
    if(session['level']==2):
        return render_template('error.html', inData=inData)
    if(session['level']==1):
        inData=deal_privilege(session)
        inData['addEqpSensorInfo']=[]
        inData['allSensorInfo']=[]
        tmpAllSensor=Sensor.info({})['data']
        for tmp1 in tmpAllSensor:
            if(not tmp1.has_key('username')):
                continue
            elif(tmp1['username']==session['username']):
                inData['allSensorInfo'].append(tmp1)
        return render_template('manage.html', inData=inData)
    if(session['level']==0):
        inData=deal_privilege(session)
        inData['stationInfo']=Station.select({})['data']
        inData['addEqpSensorInfo']=Sensor.info({})['data']
        inData['addAuthSensorInfo']=Sensor.specialInfo({'in':{}, 'out':{'type': 'addAuth', 'username': session['username'], 'level': session['level']}})['data']
        inData['addAuthUserInfo']=User.select({'level': 1})['data']
        return render_template('manage.html', inData=inData)

@app.route('/history')
def deal_history():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    inData=None
    if(session['level']==2):
        return render_template('error.html', inData=inData)
    if(session['level']==1):
        inData=deal_privilege(session)
        inData['addEqpSensorInfo']=[]
        inData['allSensorInfo']=[]
        tmpAllSensor=Sensor.info({})['data']
        for tmp1 in tmpAllSensor:
            if(not tmp1.has_key('username')):
                continue
            elif(tmp1['username']==session['username']):
                inData['allSensorInfo'].append(tmp1)
        return render_template('history.html', inData=inData)
    if(session['level']==0):
        inData=deal_privilege(session)
        inData['stationInfo']=Station.select({})['data']
        inData['addEqpSensorInfo']=Sensor.info({})['data']
        inData['addAuthSensorInfo']=Sensor.specialInfo({'in':{}, 'out':{'type': 'addAuth', 'username': session['username'], 'level': session['level']}})['data']
        inData['addAuthUserInfo']=User.select({'level': 1})['data']
        return render_template('history.html', inData=inData)


@app.route('/tmp/getAtkinfo', methods=['POST'])
def deal_tmp_getAtkinfo():
    from lib.sql.atkinfo2 import Atkinfo2
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    inData=request.form.to_dict()
    ret={}
    ret['data']=Atkinfo2.retTable(inData)
    return jsonify(ret)


#v0.1 response world 2d map
@app.route('/world-2d')
def deal_world_2d():
    if(isAllowed(session)):
        return render_template('world-2d.html')
    else:
        return redirect(url_for('deal_login'))

#v0.1 response world 3d map
@app.route('/world-3d')
def deal_3d_3():
    if(isAllowed(session)):
        return render_template('world-3d.html')
    else:
        return redirect(url_for('deal_login'))

#v0.1 response china 2d map
@app.route('/china-2d')
def deal_china():
    if(isAllowed(session)):
        return render_template('china-2d.html')
    else:
        return redirect(url_for('deal_login'))

#v0.1 response error page
@app.route('/error')
def deal_error():
    inData={}
    inData['errorCode']=2
    return render_template('error.html', inData=inData)

#v0.1 response user page
@app.route('/user', methods=['GET', 'POST'])
def deal_user():
    if(0==isAllowed(session)):
        return redirect(url_for('deal_login'))
    else:
        inData={}
        inData['newPwError']=0
        inData['oldPwError']=0
        inData['changeInfo']=0
        inData['username']=session['username']
        inData['level']=session['level']
        newname=session['username']
        if('GET'==request.method):
            return render_template('user.html', inData=inData)
        if('POST'==request.method):

            if(request.form['new-passwd-a']!=request.form['new-passwd-b']):
                inData['newPwError']=1
                return render_template('user.html', inData=inData)

            newname=session['username']

            if(request.form['newname']!=session['username']):
                newname=request.form['newname']
            tmp=User.verifyUser({'username':session['username'], 'passwd':request.form['old-passwd']})
            #checkRet=checkUser(session['username'], request.form['old-passwd'])
            if(tmp['status']==1):
                User.changePw({'id':session['id'], 'newUsername': newname, 'newPasswd': request.form['new-passwd-a']})
                session['username']=newname
                inData['changeInfo']=1
                return render_template('user.html', inData=inData)
            else:
                inData['oldPwError']=1
                return render_template('user.html', inData=inData)

#v0.1 login
@app.route('/login', methods=['GET', 'POST'])
def deal_login():
    inData={}
    if('GET'==request.method):
        if(('id' in session) and int(session['id'])>0):
            return redirect(url_for('deal_index'))
        inData['showError']=0
        return render_template('login.html', inData=inData)
    if('POST'==request.method):
        if(isAllowed(session)==1):
            return redirect(url_for('deal_index'))
        else:
            verifyRst=User.verifyUser({'username':request.form['name'], 'passwd':request.form['passwd']})
            if(verifyRst['status']==1):
                session['id']=verifyRst['id'];
                session['username']=verifyRst['username'];
                session['level']=verifyRst['level'];
                return redirect(url_for('deal_index'))
            else:
                inData['showError']=1
                return render_template('login.html', inData=inData)

#v0.1 logout
@app.route('/logout')
def deal_logout():
    del session['username']
    del session['id']
    del session['level']
    return redirect(url_for('deal_login'))

#v0.1 get cpu, memory, disk information of server
@app.route('/tmp/server_info')
def deal_tmp_server_info():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    else:
        return jsonify(getServerStat())

#v0.1 get pie information
@app.route('/tmp/pie')
def deal_tmp_pie():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    else:
        from lib.sql.agent import Agent
        from lib.sql.domain import Domain
        from lib.sql.host import Host
        ret={}
        ret['data']={}
        ret['data']['station']=Station.eqpNum()['data']
        ret['data']['host']=Host.info(5)['data']
        ret['data']['domain']=Domain.info(5)['data']
        ret['data']['agent']=Agent.info(5)['data']

        return jsonify(ret)
        #return '12'

#v0.1 add station
@app.route('/tmp/addStation', methods=['POST'])
def deal_tmp_addStation():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['status']=0
        postData=request.form.to_dict()
        errorCode=Station.add(postData['name'], postData['number'], postData['supervisor'], '123')
        ret['status']=errorCode
        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 refresh station
@app.route('/tmp/refreshStation', methods=['POST'])
def deal_tmp_refreshStation():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['data']=Station.select({})['data'];
        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 refresh sensor
@app.route('/tmp/refreshSensor', methods=['POST'])
def deal_tmp_refreshSensor():
    inData=None
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['data']=Sensor.info({})['data'];
        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 refresh eqp
@app.route('/tmp/refreshEqp', methods=['POST'])
def deal_tmp_refreshEqp():

    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))

    if(session['level']==0):
        ret={}
        ret['status']=1
        ret['data']=Eqp.info({})['data'];
        return jsonify(ret)

    if(session['level']==1):
        ret={}
        ret['data']=[]
        ret['status']=1
        allEqp=Eqp.info({})['data'];
        for tmpEqp in allEqp:
            if(tmpEqp.has_key('username')):
                if(tmpEqp['username']==session['username']):
                    ret['data'].append(tmpEqp)
        return jsonify(ret)
    if(session['level']==2):
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 add user
@app.route('/tmp/addUser', methods=['POST'])
def deal_tmp_addUser():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['status']=0
        errorCode=0
        postData=request.form.to_dict()
        if(postData['passwda']!=postData['passwdb']):
            ret['status']=2
            return jsonify(ret)
        ret['status']=User.add(postData['name'], postData['passwda'], postData['level'])


        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 refresh user
@app.route('/tmp/refreshUser', methods=['POST'])
def deal_tmp_refreshUser():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['data']=User.select({})['data']
        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 add auth
@app.route('/tmp/addAuth', methods=['POST'])
def deal_tmp_addAuth():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['status']=0
        postData=request.form.to_dict()

        ret['status']=Auth.add(postData['userId'], postData['sensorId'])

        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 refresh auth
@app.route('/tmp/refreshAuth', methods=['POST'])
def deal_tmp_refreshAuth():
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        ret['data']=Auth.info({})['data']
        return jsonify(ret)
    else:
        inData={}
        inData['errorCode']=3
        return render_template('error.html', inData=inData)

#v0.1 edit
@app.route('/tmp/change', methods=['POST'])
def deal_tmp_change():
    '''
    :return: {1: 'success', 0: 'this is no type or data in post'}
    '''
    if(not isAllowed(session)):
        return redirect(url_for('deal_login'))
    if(session['level']==0):
        ret={}
        inData=request.form.to_dict()
        ret['status']=0
        if(inData.has_key('type')):
            if(inData['type']=='eqp'):
                if(inData['op']=='edit'):
                    ret['status']=Eqp.update_eqp2(inData, 0, session['id'])
                if(inData['op']=='auth'):
                    ret['status']=Eqp.update_eqp2(inData, 0, session['id'])
            elif(inData['type']=='station'):
                if(inData['op']=='edit'):
                    ret['status']=Station.update_station2(inData)
                elif(inData['op']=='del'):
                    ret['status']=Station.delete_station2(inData)
            elif(inData['type']=='user'):
                if(inData['op']=='edit'):
                    ret['status']=User.update_user2(inData)
                elif(inData['op']=='del'):
                    ret['status']=User.del_user2(inData)
                else:
                    ret['status']=0
            elif(inData['type']=='auth'):
                if(inData['op']=='del'):
                    ret['status']=Auth.delete_auth2(inData)
                else:
                    ret['status']=0
            elif(inData['type']=='sensor'):
                if(inData['op']=='edit'):
                    ret['status']=Sensor.update_sensor2(inData)
                elif(inData['op']=='add'):
                    ret['status']=Sensor.add2(inData)
                else:
                    ret['status']=0
        else:
            ret['status']=0

        return jsonify(ret)
    if(session['level']==1):
        ret={}
        inData=request.form.to_dict()
        ret['status']=0
        if(inData.has_key('type')):
            if(inData['type']=='eqp'):
                ret['status']=Eqp.update_eqp2(inData, 1, session['id'])
        else:
            ret['status']=0

        return jsonify(ret)

#v0.1 response 404 error
@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404


app.secret_key = 'A0Zr98j/3yX 34v3v332v/,?RT'

if __name__ == '__main__':
    socketio.run(app, debug=True, host='192.168.0.40', port=80)