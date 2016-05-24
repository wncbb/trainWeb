import time
import os

import atexit
import time
import psutil

def getDiskStat():
    hd={}
    disk = os.statvfs("/")
    hd['available'] = disk.f_bsize * disk.f_bavail/1024/1024/1024
    hd['all'] = disk.f_bsize * disk.f_blocks/1024/1024/1024
    hd['free'] = disk.f_bsize * disk.f_bfree/1024/1024/1024
    hd['used'] = hd['all']-hd['free']

    return hd


def getCPUStat(interval=1):
    return psutil.cpu_percent(interval)

def getMemoryStat():
    phymem = psutil.virtual_memory()
    mem={}
    mem['used']=int(phymem.used/1024/1024)
    mem['all']=int(phymem.total/1024/1024)
    return mem

def getServerStat():
    svInfo={}
    svInfo['cpu']=getCPUStat()
    svInfo['mem']=getMemoryStat()
    svInfo['disk']=getDiskStat()

    return svInfo






if __name__ == '__main__':
    getServerStat