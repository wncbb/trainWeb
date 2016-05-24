from connect import engine, session, BaseModel, init_db, drop_db
from sqlalchemy import Column, ForeignKey, or_, func
from sqlalchemy.types import String, Integer, String, DateTime
from datetime import datetime
from sensor import Sensor

class Eqp(BaseModel):
    __tablename__='eqp'
    id=Column(Integer, primary_key=True)
    name=Column(String(80), nullable=False, default='unknownHost')
    number=Column(String(80), nullable=False, default='empty')
    ip=Column(String(80), nullable=False)
    mac=Column(String(80), unique=True)
    ftime=Column(DateTime)
    ltime=Column(DateTime)
    authority=Column(Integer)
    sensorMac=Column(String(80))
    valid = Column(Integer, default=1)
    online=Column(Integer, default=0)

    def __init__(self, name, number, ip, mac, ftime, ltime, authority, sensorMac):
        self.name=name
        self.number=number
        self.ip=ip
        self.mac=mac
        self.authority=authority
        if(ftime!=None):
            self.ftime=ftime
        else:
            self.ftime=datetime.now()
        if(ltime!=None):
            self.ltime=ltime
        else:
            self.ltime=datetime.now()
        if(sensorMac!=None):
            self.sensorMac=sensorMac
    def __repr__(self):
        return '<eqp: %d %r>' % (self.id, self.number)

    @staticmethod
    def check(name, number, ip, mac):
        '''
        :param name:
        :param number:
        :param stationId:
        :return:{1:'success', 2:'name repeat', 3:'number repeat', 4:'mac repeat', 5:'name is empty', 6:'number is empty', 7:'mac is empty', 8:'sensor id dose not exist'
        9:'ip is empty'
        }
        '''
        ret=1
        if(name==''):
            ret=5
            return ret
        if(number==''):
            ret=6
            return ret
        if(mac==''):
            ret=7
            return ret
        if(ip==''):
            ret=9
            return ret

        query=session.query(Eqp)
        tmpEqp=query.filter(or_(Eqp.mac==mac)).all()
        for tEqp in tmpEqp:
            # if(tEqp.name==name):
            #     ret=2
            #     return ret
            # if(tEqp.number==number):
            #     ret=3
            #     return ret
            if(tEqp.mac==mac):
                ret=4
                return ret


        return ret

    @staticmethod
    def add(name, number, ip, mac, ftime, ltime, authority, sensorMac):
        '''
        1: success
        2: username repeat
        '''
        ret=1
        ret=Eqp.check(name, number, ip, mac)

        if(ret!=1):
            return ret
        curEqp=Eqp(name, number, ip, mac, ftime, ltime, authority, sensorMac)

        session.add(curEqp)
        session.commit()
        return ret

    @staticmethod
    def select(inData):
        ret={}
        ret['status']=1
        ret['data']=[]
        query=session.query(Eqp)
        allEqp=None

        if('id' in inData):
            allEqp=query.filter(Eqp.id==inData['id']).all()
        elif('number' in inData):
            allEqp=query.filter(Eqp.number==inData['number']).all()
        elif('name' in inData):
            allEqp=query.filter(Eqp.name==inData['name']).all()
        elif('sensorMac' in inData):
            allEqp=query.filter(Eqp.sensorMac==inData['sensorMac']).all()
        else:
            allEqp=query.filter().all()

        for tmpData in allEqp:
            if(tmpData.valid==0):
                next
            tmp={}
            tmp['id']=tmpData.id
            tmp['name']=tmpData.name
            tmp['number']=tmpData.number
            tmp['ip']=tmpData.ip
            tmp['mac']=tmpData.mac
            tmp['ftime']=tmpData.ftime
            tmp['ltime']=tmpData.ltime
            tmp['authority']=tmpData.authority
            tmp['sensorMac']=tmpData.sensorMac
            tmp['online']=tmpData.online
            tmp['valid']=tmpData.valid
            ret['data'].append(tmp)
        return ret

    @staticmethod
    def info(inData):
        from user import User
        from sensor import Sensor
        from station import Station
        from auth import Auth
        allEqpData=Eqp.select(inData)

        userInfo={}
        sensorInfo={}
        stationInfo={}
        authInfo={}
        #print(allEqpData)

        for tmp in allEqpData['data']:
            
            t=tmp['number']
            tmpAllSensor=Sensor.select({'number': t})
            if(len(tmpAllSensor['data'])==0):
                tmp['sensorName']='not find'
                tmp['stationName']='not find'
                tmp['username']='not find'
            else:
                curSensor=tmpAllSensor['pureData'][0]
                tmp['sensorName']=curSensor.name

                tmpAllStation=Station.select({'id': curSensor.stationId})
                if(len(tmpAllStation['data'])==0):
                    tmp['stationName']='not find'
                else:
                    curStation=tmpAllStation['pureData'][0]
                    tmp['stationName']=curStation.name
                    tmp['userName']=curStation.supervisor

                tmpAllAuth=Auth.select({'sensorId': curSensor.id})
                # if(len(tmpAllAuth['data'])==0):
                #     tmp['username']='not find'
                # else:
                #     tmpAllUser=User.select({'id': tmpAllAuth['pureData'][0].userId})
                #     if(len(tmpAllUser['data'])==0):
                #         tmp['username']='not find'
                #     else:
                #         tmp['username']=tmpAllUser['data'][0]['username']


        return allEqpData

    @staticmethod
    def search_sensorId(mac):
        '''
        :param mac:
        :return:{-1:'sensor id does not exist', sensorId}
        '''
        sensorQuery = session.query(Sensor.id)
        tmpSensorId = sensorQuery.filter(Sensor.mac == mac).first()
        if(tmpSensorId == None):
            return -1
        else:
            return int(tmpSensorId[0])

    @staticmethod
    def has_record(ip, mac):
        '''
        :param ip:
        :param mac:
        :return:{-1:'ip and mac not match', 0:'has no record in DB', 1:'has record in DB'}
        '''
        query = session.query(Eqp)
        tmpEqp = query.filter(or_(Eqp.ip == ip, Eqp.mac == mac)).first()
        if(tmpEqp == None):
            return 0
        else:
            tmpEqp = query.filter(and_(Eqp.ip == ip, Eqp.mac == mac)).first()
            if(tmpEqp == None):
                return -1
            else:
                return 1

    @staticmethod
    def update_eqp(ip, mac, name, sensorId):
        '''
        :param ip:
        :param mac:
        '''
        #ret = 1
        #ret = Eqp.check(name, 1, ip, mac, sensorId)
        #if(ret != 1):
        #    return ret
        query = session.query(Eqp.ftime)
        tmpEqp = query.filter(and_(Eqp.ip == ip, Eqp.mac == mac)).first()
        if(tmpEqp == None):
            session.query(Eqp).filter(Eqp.ip == ip, Eqp.mac == mac).update({'ftime':datetime.now(), 'ltime':datetime.now(), 'sensorId':sensorId, 'name':name})
            session.commit()
        else:
            session.query(Eqp).filter(Eqp.ip == ip, Eqp.mac == mac).update({'ltime':datetime.now(), 'sensorId':sensorId, 'name':name})
            session.commit()
        return


    @staticmethod
    def change_authority(id, isAuth):
        query=session.query(Eqp);
        tmpEqp=query.filter(Eqp.id==id).first()
        ret=0
        if(tmpEqp!=None):
            tmpEqp.authority=isAuth
            session.commit()
            ret=1
        return ret

    @staticmethod
    def delEqp(inData):
        '''
        :param: inData
        :return: {1:'success', 2:'wrong param'}
        '''
        if('SensorId' in inData):
            session.query(Eqp).filter(Eqp.sensorId == inData['SensorId'], Eqp.valid == 1).update({'valid':0})
            session.commit()
            return 1
        elif('EqpId' in inData):
            session.query(Eqp).filter(Eqp.id == inData['EqpId'], Eqp.valid == 1).update({'valid':0})
            session.commit()
            return 1
        else:
            return 2

    @staticmethod
    def updateAuth(inData):
        '''
        :param: inData
        :return: {1:'success', 2:'wrong param', 3:'no eqp id'}
        '''
        if('EqpId' in inData):
            if('Auth' in inData and inData['Auth'] != ''):
                session.query(Eqp).filter(Eqp.id == inData['Eqpid'], Eqp.valid == 1).update({'authority':inData['Auth']})
            if('Number' in inData and inData['Number'] != ''):
                session.query(Eqp).filter(Eqp.id == inData['Eqpid'], Eqp.valid == 1).update({'number':inData['Number']})
            session.commit()
            return 1
        else:
            return 2


    @staticmethod
    def update_eqp2(inData, level, userId):
        '''
        :param inData:
        :return: {0:'errror', 1:'success', 12:'no this id', 13:'iData has no key id'}
        '''

        ret=1
        if(not inData.has_key('id')):
            ret=3
            return ret

        query=session.query(Eqp)
        tmpEqp=query.filter(Eqp.id==inData['id']).first()
        if(tmpEqp==None):
            ret=2
            return ret

        if(level==1):
            from auth import Auth
            authQuery=session.query(Auth)
            from sensor import Sensor
            sensorQuery=session.query(Sensor)
            tmpSensor=sensorQuery.filter(Sensor.mac==tmpEqp.sensorMac).first()
            if(tmpSensor==None):
                ret=2
                return ret

            tmpAuth=authQuery.filter(Auth.userId==userId, Auth.sensorId==tmpSensor.id).first()
            if(tmpAuth==None):
                ret=2
                return ret



        if(inData.has_key('name')):
            tmpEqp.name=inData['name']
        if(inData.has_key('number')):
            tmpEqp.number=inData['number']
        if(inData.has_key('ip')):
            tmpEqp.ip=inData['ip']
        if(inData.has_key('mac')):
            tmpEqp.mac=inData['mac']
        if(inData.has_key('authority')):
            tmpEqp.authority=inData['authority']
        if(inData.has_key('valid')):
            tmpEqp.valid=inData['valid']
        session.commit()
        return ret




init_db()
