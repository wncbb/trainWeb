from connect import engine, session, BaseModel, init_db, drop_db
from sqlalchemy import Column, ForeignKey, or_, func
from sqlalchemy.types import String, Integer, DateTime
from datetime import datetime
from sensor import Sensor
from user import User

class Auth_old(BaseModel):
    __tablename__='auth_old'
    id=Column(Integer, primary_key=True)
    userId=Column(Integer)
    sensorId=Column(Integer)
    time=Column(DateTime)
    valid = Column(Integer, default=1)

    def __init__(self, userId, sensorId, time):
        self.userId=userId
        self.sensorId=sensorId
        self.time=time

    def __repr__(self):
        return '<auth: %d %d %d>' % (self.id, self.userId, self.sensorId)



    @staticmethod
    def add(userId, sensorId):
        ret=1
        curAuth=Auth_old(userId, sensorId, datetime.now())
        session.add(curAuth)
        session.commit()
        return ret






init_db()
