#      
# Copyright (c) 2014, Lambo Wang, All rights reserved.      
# Use of this source code is governed by a GNU v2 license that can be      
# found in the LICENSE file.      
#     
# Logs:  
# Transplant to system by Lambo Wang, 2012-11-28      
# Add function of get cpu state and get memory state by Lambo Wang,2012-11-29      
# first add to Git of OSChina,2014-10-24 by Lambo Wang     
# support for psutil(v3.2.2),2015-11-12 by Lambo Wang  
"""    
Shows real-time system statistics.    
Author: Lambo Wang <lambo.wang@icloud.com>    
"""  
  
import sys  
import os   
  
import atexit  
import time   
import psutil  
  
#print "Welcome,current system is",os.name," 3 seconds late start to get data..."      
  
line_num = 1  
  
#function of Get CPU State;  
def getCPUState(interval=1):  
    return str(psutil.cpu_percent(interval))    
#function of Get Memory      
def getMemoryState():   
        phymem = psutil.virtual_memory()  
        line = "%s,%s"%(  
            str(int(phymem.used/1024/1024)),  
            str(int(phymem.total/1024/1024))  
            )  
        return line      

cpu=getCPUState()
memory=getMemoryState()
str="%s,%s" % (cpu, memory)
f=open('./svinfo.csv', 'w')
f.write(str)




