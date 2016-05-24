from connect import engine, session, BaseModel, init_db, drop_db
from sqlalchemy import Column, or_, desc
from sqlalchemy.types import String, Integer, String, DateTime
from sqlalchemy.orm import scoped_session, sessionmaker
from datetime import datetime

class Domain(BaseModel):
    __tablename__ = 'domain'
    id = Column(Integer, primary_key=True)
    name = Column(String(80), unique=True, nullable=False)
    count = Column(Integer, default=0)
    ftime = Column(DateTime)
    ltime = Column(DateTime)

    def __init__(self,name,count,ftime,ltime):
        self.name = name
        self.count = count
        if(ftime != None):
            self.ftime = ftime
        else:
            self.ftime = datetime.now()
        if(ltime != None):
            self.ltime = ltime
        else:
            self.ltime = datetime.now()

    def __repr__(self):
        return '<domain: %r %r>' % (self.id, self.name)

    @staticmethod
    def info(num):
        ret={}
        ret['data']=[]
        query=session.query(Domain)
        pureData=query.filter().order_by(desc(Domain.count)).limit(num).all()
        for tmpData in pureData:
            tmp={}
            tmp['name']=tmpData.name
            tmp['count']=tmpData.count
            ret['data'].append(tmp)
        return ret


    @staticmethod
    def check(name):
        '''
        :param name:
        :return: {1:'success', 2:'name repeat', 3:'name is empty'}
        '''
        if(name == ''):
            return 3
        Session = scoped_session(sessionmaker(autoflush=True, bind=engine))
        query = Session.query(Domain)
        tmpDomain = query.filter(Domain.name == name).first()
        Session.close()
        if(tmpDomain != None):
            return 2
        return 1

    @staticmethod
    def add(name,count=0):
        '''
        :param name:
        :return: {1:'success', 2:'name repeat'}
        '''
        ret = 1
        ret = Domain.check(name)
        if(ret != 1):
            return ret
        if(count == 0):
            count = 1
        ftime = datetime.now()
        ltime = datetime.now()
        curDomain = Domain(name,count,ftime,ltime)

        Session = scoped_session(sessionmaker(autoflush=True, bind=engine))
        Session.add(curDomain)
        Session.commit()
        Session.close()
        #session.add(curDomain)
        #session.commit()
        return ret

    @staticmethod
    def updateDomain(Name_DICT = {}):
        '''
        :param Name_DICT:
        :return: {1:'success', 2:'name is empty', 3:'failed'}
        '''
        try:
            Session = scoped_session(sessionmaker(autoflush=True, bind=engine))
            if(Name_DICT == None):
                return 3
            for name in Name_DICT.keys():
                #print("add name: %s" %name)
                ret = 1
                ret = Domain.check(name)
                if(ret == 1):
                    Domain.add(name,Name_DICT[name])
                    continue
                elif(ret == 2):
                    curCount = Session.query(Domain.count).filter(Domain.name == name).first()
                    if(curCount == None):
                        continue
                    else:
                        count = int(curCount[0]) + Name_DICT[name]
                        Session.query(Domain).filter(Domain.name == name).update({'count':count, 'ltime':datetime.now()})
                        Session.commit()
                else:
                    continue
        except:
            Session.rollback()
            #raise
        finally:
            Session.close()
        return 1;

init_db()