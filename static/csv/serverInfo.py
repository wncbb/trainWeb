import time
import os   
  
import atexit  
import time   
import psutil  

from threading import Thread

is_server_info_thread=None


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

def server_info_thread():
    """Example of how to send server generated events to clients."""
    sleep_time=2
    while True:
        cpu=getCPUState()
        memory=getMemoryState()
        str="%s,%s" % (cpu, memory)
        f=open('./svinfo.csv', 'w')
        f.write(str)
        time.sleep(sleep_time)

def main():
    global is_server_info_thread
    if is_server_info_thread is None:
        is_server_info_thread = Thread(target=server_info_thread)
        is_server_info_thread.daemon = True
        is_server_info_thread.start()
    


if __name__ == '__main__':
    main()
    while True:
        time.sleep(10)
