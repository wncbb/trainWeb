#!/usr/bin/env python

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on available packages.

import csv
import time
from lib.sql.atkinfo import Atkinfo

async_mode = None


timeItv2=10    # read web_log cycle time
timeItv2a=2    # if no data, sleep timeItv2a then continue read db

sendTimes=10 #when read data from db, not send data at once, but send it by sendTimes times

timeItv3=600   #web_log record delay time or time window

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


# monkey patching is necessary because this application uses a background
# thread
if async_mode == 'eventlet':
    import eventlet
    eventlet.monkey_patch()
elif async_mode == 'gevent':
    from gevent import monkey
    monkey.patch_all()

from threading import Thread
from flask import Flask, render_template, session, request
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect

app = Flask(__name__)
app.config['SECRET_KEY'] = 'what are you nong sha lai!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None

lastTime=0

def readDb(timeSpan):
    ret=Atkinfo.retData(timeSpan, 'py')
    return ret

def send_thread(sendData):
    dataLen=len(sendData)
    print(dataLen)
    if(len(sendData)==0):
        time.sleep(timeItv2a)
        return
    everyLen=dataLen/sendTimes
    if(everyLen==0):
        everyLen=1
    everySleep=timeItv2/sendTimes
    for i in range(sendTimes):
        startI=i*everyLen
        stopI=(i+1)*everyLen
        if(stopI==startI):
            stopI=stopI+1
        print("startI:", startI, " stopI:", stopI)
        socketio.emit('attack array', sendData[startI:stopI])
        time.sleep(everySleep)
    return


def background_thread():

    while True:
        sendData=readDb(timeItv3)
        thread=Thread(target=send_thread, args=(sendData,))
        thread.daemon=True
        thread.start()
        time.sleep(1)



@socketio.on('connect')
def deal_ws_connect():
    global thread
    if thread is None:
        thread = Thread(target=background_thread)
        thread.daemon = True
        thread.start()
    


if __name__ == '__main__':
    #socketio.run(app, port=1234, host='192.168.0.40', debug=True )
    socketio.run(app, port=1234, host='192.168.0.40')
