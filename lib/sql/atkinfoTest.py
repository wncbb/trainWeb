from atkinfo import Atkinfo
from datetime import datetime
import time
import random

while(True):
    Atkinfo.add((int(random.random()*7))%7, time.time(), '11:11:11:11:11:11',\
                'malware', '111.111.111.111', '65535', str(random.uniform(-180, 180))[0:10],\
                str(random.uniform(-90, 90))[0:10], '222:222:222:222', '65534', \
                str(random.uniform(-180, 180))[0:10], str(random.uniform(-90, 90))[0:10], 'tcp', 'trails', 'refer', 'infos')
    time.sleep(0.1)


#
# ret=Atkinfo.retData(100000, 'py')
#
# print(ret)





