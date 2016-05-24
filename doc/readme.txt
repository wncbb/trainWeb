1.--------------------./app2.py
@app.route('/')
def deal_index():
处理首页页面(/)

@app.route('/eqp')
def deal_eqp():
处理设备页面(/eqp)

@app.route('/manage')
def deal_manage():
处理管理页面(/manage)

@app.route('/world-2d')
def deal_world_2d():
处理全球2D页面(/world-2d)

@app.route('/world-3d')
def deal_3d_3():
处理全球3D页面(/world-3d)

@app.route('/china-2d')
def deal_china():
处理中国2D页面(/china-2d)

@app.route('/error')
def deal_error():
处理错误页面(/error)

@app.route('/user', methods=['GET', 'POST'])
def deal_user():
处理用户界面(/user)

@app.route('/login', methods=['GET', 'POST'])
def deal_login():
处理登录界面(/login)

@app.route('/logout')
def deal_logout():
处理退出页面(/logout)

@app.route('/tmp/server_info')
def deal_tmp_server_info():
首页需要不断获取CPU、内存、硬盘使用率情况，该路由返回这些信息

@app.route('/tmp/pie')
def deal_tmp_pie():
首页四个饼图需要获取相关信息，该路由返回相关信息

@app.route('/tmp/addStation', methods=['POST'])
def deal_tmp_addStation():
添加火车站，该路由处理添加火车站功能

@app.route('/tmp/refreshStation', methods=['POST'])
def deal_tmp_refreshStation():
返回当前数据库中火车站信息

@app.route('/tmp/addUser', methods=['POST'])
def deal_tmp_addUser():
处理增加用户请求

@app.route('/tmp/refreshUser', methods=['POST'])
def deal_tmp_refreshUser():
返回当前所有用户信息

@app.route('/tmp/addAuth', methods=['POST'])
def deal_tmp_addAuth():
处理增加权限请求

@app.route('/tmp/refreshAuth', methods=['POST'])
def deal_tmp_refreshAuth():
返回当前所有授权信息

@app.route('/tmp/change', methods=['POST'])
def deal_tmp_change():
处理数据库操作


2.--------------------./lib/sql
数据库操作文件所在目录

atkinfo.py
./ws2.py python websocket服务器需要数据库中表atkinfo，该文件为相关的操作

atkinfo.py
./ws2.js node.js websocket服务器需要数据库中表atkinfo2，该文件为相关的操作

auth.py
操纵授权表文件

connect.py
mysql数据库连接文件

eqp.py
与表eqp操作相关

sensor.py
与表sensor操作相关

station.py
与表station操作相关

user.py
与表user操作相关

3.--------------------./lib/sv
serverinfo.py
获取CPU、内存、硬盘信息

4.--------------------./node_modules
nodejs websocket服务器所需依赖文件

5.--------------------./static
网页静态文件目录

6.--------------------./static/2d
世界2D地图所需静态文件

7.--------------------./static/css
网页文件所需CSS文件

8.--------------------./static/font
网页文件所需字体文件

9.--------------------./static/images
全球2D地图所需图片

10.--------------------./static/img
网页文件所需图片

11.--------------------./static/js
网页文件所需js文件
all1.js:eqp页面所需js
all2.js:/页面所需js
attackTypeConfig.js:世界3D地图、中国2D地图右侧攻击类型数据
d3.js:d3.js未压缩版（可以替换为压缩版）
error.js:error页面所需js
getpixelcolor.js:获取当前鼠标点击处的颜色
jquery-2.2.0.js:jquery2.2.0未压缩版
login.js:login页面所需js
main.js:最上方导航栏所需js文件
manage.js:manage页面所需js
moment.min.js:日期时间js库
socket.io.js:socketIO未压缩版
topojson.v1.min.js:topojson库
user.js:user页面所需js
wsConfig.js:webSocket配置文件


12.--------------------./static/js/3d2
全球3D地图所需js文件
attack-ws.js:对io.js做一次封装
control.js:世界3D地图中非canvas操作
deal-ws.js:对websocket传回的数据进行处理
earthMain2.js:对planetaryjs_color2.js做进一步的封装
main-3d-3.js:世界3D地图的主要js文件，功能调用主要在该文件中
planetaryjs_color2.js:修改的planetary.js(http://planetaryjs.com/)
stationInfo.js:可以在地图中标上小圆点，格式如注释所示


13.--------------------./static/js/china
中国2D地图所需js文件
attack-ws.js:对io.js做一次封装
control-cn.js:中国2D地图中非canvas操作
deal-ws.js:对websocket传回的数据进行处理
earthMain_cn.js:对planetaryjs_cn.js做进一步的封装
main-3d_cn.js:中国2D地图的主要js文件，功能调用主要在该文件中
planetaryjs_cn.js:修改的planetary.js(http://planetaryjs.com/)

14.--------------------./static/js/map
echarts所需地图文件

15.--------------------./static/js/build
echarts所在目录

16.--------------------./static/json
网页文件所需json文件

17.--------------------./templates
网页文件模版(flask使用Jinja2模版)
404.html:
china-2d.html:中国2D地图


18.--------------------









