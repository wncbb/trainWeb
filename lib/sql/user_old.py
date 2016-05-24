from connect import engine, session, BaseModel, init_db, drop_db
from sqlalchemy import Column
from sqlalchemy.types import String, Integer, DateTime
from datetime import datetime
import hashlib

class User_old(BaseModel):
    __tablename__='userv2_old'
    id=Column(Integer, primary_key=True)
    username=Column(String(80))
    passwd=Column(String(100))
    level=Column(Integer)
    time=Column(DateTime)
    valid=Column(Integer, default=1)

    def __init__(self, username, passwd, level):
        self.username=username
        pwMD5=hashlib.md5()
        pwMD5.update("%s%s" % (username, passwd))
        self.passwd=str(pwMD5.hexdigest())
        self.level=level
        self.time=datetime.now()
    def __repr__(self):
        return '<id: %r %r %d %r>' % (self.id, self.username, self.level, self.passwd)

    @staticmethod
    def check(username):
        ret=1
        query=session.query(User_old)
        tmpUser=query.filter_by(username=username, valid=1).first()
        #tmpUser=query.filter(User.username==username).first()
        if(tmpUser!=None):
            ret=3
        return ret

    @staticmethod
    def add(inData):
        tmpUser=User_old(inData.username, inData.passwd, inData.level)
        session.add(tmpUser)
        session.commit()

init_db()


