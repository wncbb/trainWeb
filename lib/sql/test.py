from eqp import Eqp
from sensor import Sensor
from station import Station

# ret=Eqp.change_authority(1, 0)
# print(ret)
# ret=Eqp.update_eqp2({'id':1, 'mac':'0407a'})
# print(ret)

# ret=Sensor.update_sensor2({'id':1, 'ip':'1234567'})
# print(ret)

ret=Station.update_station2({'id':1, 'supervisor':'wahaha'})
print(ret)


