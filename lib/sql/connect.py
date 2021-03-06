from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base




DB_CONNECT_STRING = 'mysql+mysqldb://root:mysql123@localhost/mnt2?charset=utf8'
engine = create_engine(DB_CONNECT_STRING, echo=False, pool_size = 100, pool_recycle=7200)

DB_Session=sessionmaker(bind=engine)
session=DB_Session()

BaseModel = declarative_base()
def init_db():
    BaseModel.metadata.create_all(engine)
def drop_db():
    BaseModel.metadata.drop_all(engine)
