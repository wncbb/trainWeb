/**
 * Created by jbkj on 16-3-18.
 */

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}

function dealTab() {

    var eqpTabJq = $("#eqp-tab");
    var stationTabJq = $("#station-tab");
    var sensorTabJq = $("#sensor-tab");
    var userTabJq = $("#user-tab");
    var authTabJq = $("#auth-tab");

    var tabJqArray = [];
    tabJqArray.push(eqpTabJq);
    tabJqArray.push(stationTabJq);
    tabJqArray.push(sensorTabJq);
    tabJqArray.push(userTabJq);
    tabJqArray.push(authTabJq);

    var eqpCtnJq = $("#eqp-manage");
    var stationCtnJq = $("#station-manage");
    var sensorCtnJq = $("#sensor-manage");
    var userCtnJq = $("#user-manage");
    var authCtnJq = $("#auth-manage");

    var ctnJqArray = [];
    ctnJqArray.push(eqpCtnJq);
    ctnJqArray.push(stationCtnJq);
    ctnJqArray.push(sensorCtnJq);
    ctnJqArray.push(userCtnJq);
    ctnJqArray.push(authCtnJq);

    function dealClick(inNum) {
        for (var i = 0; i < tabJqArray.length; ++i) {
            if (i == inNum) {
                tabJqArray[i].removeClass('tab-item').addClass('tab-item-active');
                ctnJqArray[i].removeClass('display-none');
            }
            else {
                tabJqArray[i].removeClass('tab-item-active').addClass('tab-item');
                ctnJqArray[i].addClass('display-none');
            }
        }

    };

    eqpTabJq.click(function () {
        dealClick(0);
    });
    stationTabJq.click(function () {
        dealClick(1);
        $("#station-refresh").trigger('click');
    });
    sensorTabJq.click(function () {
        dealClick(2);
        $("#sensor-refresh").trigger('click');

    });
    userTabJq.click(function () {
        dealClick(3);
        $("#user-refresh").trigger('click');
    });
    authTabJq.click(function () {
        dealClick(4);
        $("#auth-refresh").trigger('click');
    });

}

function dealTab3(inData) {

    var eqpTabJq = $("#eqp-tab");
    var stationTabJq = $("#station-tab");
    var sensorTabJq = $("#sensor-tab");
    var userTabJq = $("#user-tab");
    var authTabJq = $("#auth-tab");

    var tabJqArray = [];
    tabJqArray.push(eqpTabJq);
    tabJqArray.push(stationTabJq);
    tabJqArray.push(sensorTabJq);
    tabJqArray.push(userTabJq);
    tabJqArray.push(authTabJq);

    var eqpCtnJq = $("#eqp-manage");
    var stationCtnJq = $("#station-manage");
    var sensorCtnJq = $("#sensor-manage");
    var userCtnJq = $("#user-manage");
    var authCtnJq = $("#auth-manage");

    var ctnJqArray = [];
    ctnJqArray.push(eqpCtnJq);
    ctnJqArray.push(stationCtnJq);
    ctnJqArray.push(sensorCtnJq);
    ctnJqArray.push(userCtnJq);
    ctnJqArray.push(authCtnJq);

    function dealClick(inNum) {
        for (var i = 0; i < tabJqArray.length; ++i) {
            if (i == inNum) {
                tabJqArray[i].removeClass('tab-item').addClass('tab-item-active');
                ctnJqArray[i].removeClass('display-none');
            }
            else {
                tabJqArray[i].removeClass('tab-item-active').addClass('tab-item');
                ctnJqArray[i].addClass('display-none');
            }
        }

    };

    switch (inData) {
        case 0:
            dealClick(0);
            $("#eqp-refresh").trigger('click');

            break;
        case 1:
            dealClick(1);
            $("#station-refresh").trigger('click');
            break;
        case 2:
            dealClick(2);
            $("#sensor-refresh").trigger('click');
            break;
        case 3:
            dealClick(3);
            $("#user-refresh").trigger('click');
            break;
        case 4:
            dealClick(4);
            $("#auth-refresh").trigger('click');
            break;
        default:
            $("#eqp-refresh").trigger('click');
            dealClick(0);
            break;

    }

    //eqpTabJq.click(function(){
    //    dealClick(0);
    //});
    //stationTabJq.click(function(){
    //    dealClick(1);
    //    $("#station-refresh").trigger('click');
    //});
    //sensorTabJq.click(function(){
    //    dealClick(2);
    //    $("#sensor-refresh").trigger('click');
    //
    //});
    //userTabJq.click(function(){
    //    dealClick(3);
    //    $("#user-refresh").trigger('click');
    //});
    //authTabJq.click(function(){
    //    dealClick(4);
    //    $("#auth-refresh").trigger('click');
    //});

}


function dealTab2() {

    var eqpTabJq = $("#eqp-tab");
    var stationTabJq = $("#station-tab");
    var sensorTabJq = $("#sensor-tab");
    var userTabJq = $("#user-tab");
    var authTabJq = $("#auth-tab");

    //var tabJqArray=[];
    //tabJqArray.push(eqpTabJq);
    //tabJqArray.push(stationTabJq);
    //tabJqArray.push(sensorTabJq);
    //tabJqArray.push(userTabJq);
    //tabJqArray.push(authTabJq);
    //
    //var eqpCtnJq=$("#eqp-manage");
    //var stationCtnJq=$("#station-manage");
    //var sensorCtnJq=$("#sensor-manage");
    //var userCtnJq=$("#user-manage");
    //var authCtnJq=$("#auth-manage");
    //
    //var ctnJqArray=[];
    //ctnJqArray.push(eqpCtnJq);
    //ctnJqArray.push(stationCtnJq);
    //ctnJqArray.push(sensorCtnJq);
    //ctnJqArray.push(userCtnJq);
    //ctnJqArray.push(authCtnJq);
    //
    //function dealClick(inNum){
    //    for(var i=0; i<tabJqArray.length; ++i){
    //        if(i==inNum){
    //            tabJqArray[i].removeClass('tab-item').addClass('tab-item-active');
    //            ctnJqArray[i].removeClass('display-none');
    //        }
    //        else{
    //            tabJqArray[i].removeClass('tab-item-active').addClass('tab-item');
    //            ctnJqArray[i].addClass('display-none');
    //        }
    //    }
    //
    //};


    eqpTabJq.click(function () {
        //dealClick(0);
        location.href = '/manage?type=0';
    });
    stationTabJq.click(function () {
        //dealClick(1);
        //$("#station-refresh").trigger('click');
        location.href = '/manage?type=1';

    });
    sensorTabJq.click(function () {
        //dealClick(2);
        //$("#sensor-refresh").trigger('click');
        location.href = '/manage?type=2';


    });
    userTabJq.click(function () {
        //dealClick(3);
        //$("#user-refresh").trigger('click');
        location.href = '/manage?type=3';

    });
    authTabJq.click(function () {
        //dealClick(4);
        //$("#auth-refresh").trigger('click');
        location.href = '/manage?type=4';

    });

}


function dealAddEqp() {
    $("#eqp-submit").click(function () {
        var sendData = {};
        sendData.name = $("#eqp-name").val();
        sendData.number = $("#eqp-number").val();
        sendData.mac = $("#eqp-mac").val();
        sendData.ip = $("#eqp-ip").val();
        sendData.sensorId = $("#eqp-sensor-id").val();
        //console.log("sendData: "+JSON.stringify(sendData));
        // return:{1:'success', 2:'name repeat', 3:'number repeat', 4:'mac repeat', 5:'name is empty', 6:'number is empty', 7:'mac is empty', 8:'sensor id dose not exist'}

        var errorType = {};
        errorType[2] = '设备名称重复';
        errorType[3] = '设备编号重复';
        errorType[4] = '设备MAC地址重复'
        errorType[5] = '设备名称不能为空';
        errorType[6] = '设备编号不能为空';
        errorType[7] = '设备MAC地址不能为空'
        errorType[8] = '传感器编号错误';
        errorType[9] = '设备IP地址不能为空'
        $.ajax({
            type: 'POST',
            url: '/tmp/addEqp',
            data: sendData,
            dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg))
                if (msg.status == 1) {
                    $("#add-eqp-info").removeClass("add-error-text").addClass("add-text").css("display", "block").html('添加成功&nbsp;<i id="eqp-info-remove" class="icon-remove-sign"></i>');
                    $("#eqp-refresh").trigger("click");
                }
                else {
                    $("#add-eqp-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html(errorType[msg.status] + '&nbsp;<i id="eqp-info-remove" class="icon-remove-sign"></i>');

                }
                $("#eqp-info-remove").click(function () {
                    $("#add-eqp-info").css("display", "none");
                });

            },
            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
                $("#add-eqp-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('添加失败&nbsp;<i id="eqp-info-remove" class="icon-remove-sign"></i>');
                $("#eqp-info-remove").click(function () {
                    $("#add-eqp-info").css("display", "none");
                });
            }
        });
    });

}


function dealAddStation() {
    $("#station-submit").click(function () {
        var sendData = {};
        sendData.name = $("#station-name").val();
        sendData.number = $("#station-number").val();
        sendData.supervisor = $("#station-user").val();
        //console.log("sendData: "+JSON.stringify(sendData));
        var errorType = {};
        errorType[2] = '部门名称重复';
        errorType[3] = '部门编号重复';
        errorType[4] = '部门名称不能为空';
        errorType[5] = '部门编号不能为空';
        $.ajax({
            type: 'POST',
            url: '/tmp/addStation',
            data: sendData,
            dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(msg.status);
                if (msg.status == 1) {
                    $("#add-station-info").removeClass("add-error-text").addClass("add-text").css("display", "block").html('添加成功&nbsp;<i id="station-info-remove" class="icon-remove-sign"></i>');
                    $("#station-refresh").trigger('click');

                }
                else {
                    $("#add-station-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html(errorType[msg.status] + '&nbsp;<i id="station-info-remove" class="icon-remove-sign"></i>');

                }
                $("#station-info-remove").click(function () {
                    $("#add-station-info").css("display", "none");
                });

            },
            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
                $("#add-station-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('添加失败&nbsp;<i id="station-info-remove" class="icon-remove-sign"></i>');
                $("#station-info-remove").click(function () {
                    $("#add-station-info").css("display", "none");
                });
            }
        });
    });

}

function dealAddSensor() {
    $("#sensor-submit").click(function () {
        var sendData = {};
        sendData.type = 'sensor';
        sendData.op = 'add';
        sendData.name = $("#sensor-name").val();
        sendData.number = $("#sensor-number").val();
        sendData.mac = $("#sensor-mac").val();
        sendData.ip = $("#sensor-ip").val();
        sendData.stationId = $("#sensor-station-id").val();
        console.log("sendData: " + JSON.stringify(sendData));
        var errorType = {};
        errorType[2] = '传感器名称重复';
        errorType[3] = '传感器编号重复';
        errorType[4] = '传感器MAC重复';
        errorType[5] = '部门编号不存在';
        errorType[6] = '传感器名称不能为空';
        errorType[7] = '传感器编号不能为空';
        errorType[8] = '传感器IP不能为空';
        errorType[9] = '传感器MAC不能为空';

        $.ajax({
            type: 'POST',
            url: '/tmp/change',
            data: sendData,
            dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(msg.status);
                if (msg.status == 1) {
                    $("#add-sensor-info").removeClass("add-error-text").addClass("add-text").css("display", "block").html('添加成功&nbsp;<i id="sensor-info-remove" class="icon-remove-sign"></i>');
                    $("#sensor-refresh").trigger('click');
                }
                else {
                    $("#add-sensor-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html(errorType[msg.status] + '&nbsp;<i id="sensor-info-remove" class="icon-remove-sign"></i>');

                }
                $("#sensor-info-remove").click(function () {
                    $("#add-sensor-info").css("display", "none");
                });

            },
            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
                $("#add-sensor-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('添加失败&nbsp;<i id="sensor-info-remove" class="icon-remove-sign"></i>');
                $("#sensor-info-remove").click(function () {
                    $("#add-sensor-info").css("display", "none");
                });
            }
        });
    });

}

function dealAddUser() {
    $("#user-submit").click(function () {
        var sendData = {};
        sendData.name = $("#user-name").val();
        sendData.passwda = $("#user-passwd-a").val();
        sendData.passwdb = $("#user-passwd-b").val();
        sendData.level = $("#user-level").val();

        if (sendData.name == '') {
            $("#add-user-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('用户名不能为空&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');
            $("#user-info-remove").click(function () {
                $("#add-user-info").css("display", "none");
            });
            return;
        }
        if (sendData.passwda != sendData.passwdb) {
            $("#add-user-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('两次密码输入不一致&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');
            $("#user-info-remove").click(function () {
                $("#add-user-info").css("display", "none");
            });
            return;
        }
        if (sendData.passwda.length < 6) {
            $("#add-user-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('密码长度不能小于6&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');
            $("#user-info-remove").click(function () {
                $("#add-user-info").css("display", "none");
            });
            return;
        }

        //console.log("sendData: "+JSON.stringify(sendData));
        var errorType = {};
        errorType[2] = '两次密码不一致';
        errorType[3] = '已经存在该用户名';
        $.ajax({
            type: 'POST',
            url: '/tmp/addUser',
            data: sendData,
            dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(msg.status);
                if (msg.status == 1) {
                    $("#add-user-info").removeClass("add-error-text").addClass("add-text").css("display", "block").html('添加成功&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');
                    $("#user-refresh").trigger('click');
                }
                else {
                    $("#add-user-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html(errorType[msg.status] + '&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');

                }
                $("#user-info-remove").click(function () {
                    $("#add-user-info").css("display", "none");
                });

            },
            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
                $("#add-user-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('添加失败&nbsp;<i id="user-info-remove" class="icon-remove-sign"></i>');
                $("#user-info-remove").click(function () {
                    $("#add-user-info").css("display", "none");
                });
            }
        });
    });

}


function dealAddAuth() {
    $("#auth-submit").click(function () {
        var sendData = {};
        sendData.userId = parseInt($("#auth-username").val());
        sendData.sensorId = parseInt($("#auth-sensor-number").val());
        var errorType = {};
        errorType[2] = '用户不存在';
        errorType[3] = '传感器编号不存在';
        errorType[4] = '该授权已经存在';
        errorType[5] = '该传感器已有管理员';
        errorType[6] = '该用户不是管理员';
        $.ajax({
            type: 'POST',
            url: '/tmp/addAuth',
            data: sendData,
            dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(msg.status);
                if (msg.status == 1) {
                    $("#add-auth-info").removeClass("add-error-text").addClass("add-text").css("display", "block").html('添加成功&nbsp;<i id="auth-info-remove" class="icon-remove-sign"></i>');
                    $("#auth-refresh").trigger('click');
                }
                else {
                    $("#add-auth-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html(errorType[msg.status] + '&nbsp;<i id="auth-info-remove" class="icon-remove-sign"></i>');

                }
                $("#auth-info-remove").click(function () {
                    $("#add-auth-info").css("display", "none");
                });

            },
            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
                $("#add-auth-info").removeClass("add-text").addClass("add-error-text").css("display", "block").html('添加失败&nbsp;<i id="auth-info-remove" class="icon-remove-sign"></i>');
                $("#auth-info-remove").click(function () {
                    $("#add-auth-info").css("display", "none");
                });
            }
        });
    });

}


function refreshEqp() {
    function addLine(inData) {
        var ftimeDateObj = new Date(inData['ftime']);
        var ltimeDateObj = new Date(inData['ltime']);
        var is24online = inData['valid'] & 0x01;
        var is24onlineStr = '';
        if (is24online == 1) {
            is24onlineStr = 'fa-check-square-o';
        } else {
            is24onlineStr = 'fa-square-o';
        }

        function isOnlineByItv(inMSeconds) {
            var timeItv = 50 * 60;
            var nowSeconds = Date.parse(new Date()) / 1000;
            var lastSeeSeconds = Date.parse((new Date(inMSeconds))) / 1000;
            var isOnline = false;
            if ((nowSeconds - lastSeeSeconds) < timeItv) {
                isOnline = true;
            }
            return isOnline;
        }
        var isOnline=isOnlineByItv(Date.parse((new Date(inData.ltime))));
        var onlineStr='';
        if (inData['online'] == 1 && isOnline) {
            onlineStr='1';
        } else {
            onlineStr='0';
        }

        var validStr=parseInt(inData['valid'], 2).toString();
        var s24onlineStr=validStr.substr(validStr.length-1, 1);

        return '<div class="eqp-show-line clear-fix"  data-24online="' + s24onlineStr + '"  data-online="' + onlineStr + '"  data-valid="' + inData['valid'] + '"  data-station="' + inData['stationName'] + '" data-auth="' + inData['authority'] + '" data-id="' + inData['id'] + '">\
                        <div class="eqp-show-line-head">\
                            <i class="fa fa-laptop">&nbsp;设备</i>\
                        </div>\
                        <div class="eqp-show-line-item">\
                            <span class="title-color">设备名称</span>\
                            <br><span data-name="1">' +
            inData['name'] +
            '</span></div>\
            <div class="eqp-show-line-item">\
                <span class="title-color">24小时在线</span>\
                <br><span>' +
            '<span class="fa ' + is24onlineStr + '" data-type="show24online"></span>' +
            '</span></div>\
            <div class="eqp-show-line-item">\
                <span class="title-color">设备编号</span>\
                <br>' +
            inData['id'] +
            '</div>\
            <div class="eqp-show-line-item">\
                <span class="title-color">设备MAC</span>\
                <br>' +
            inData['mac'] +
            '</div>\
             <div class="eqp-show-line-item">\
                <span class="title-color">设备IP</span>\
                <br>' +
            inData['ip'] +
            '</div>\
             <div class="eqp-show-line-item">\
                <span class="title-color">设备所属传感器</span>\
                <br>' +
            inData['sensorName'] +
            '</div>\
             <div class="eqp-show-line-item">\
                <span class="title-color">设备所属部门</span>\
                <br>' +
            inData['stationName'] +
            '</div>\
             <div class="eqp-show-line-item">\
                <span class="title-color">管理员名称</span>\
                <br>' +
            inData['username'] +
            '</div>\
             <div class="eqp-show-line-item">\
                <span class="title-color">第一次发现时间</span>\
                <br>' +
            ftimeDateObj.Format('yyyy-MM-dd D hh:mm:ss') +
            '</div>\
            <div class="eqp-show-line-item">\
                <span class="title-color">最近发现时间</span>\
                <br>' +
            ltimeDateObj.Format('yyyy-MM-dd D hh:mm:ss') +
            '</div>\
            <div class="eqp-show-line-cmd">\
                <i class="fa fa-pencil">&nbsp;修改</i><br>\
            </div>\
            <div class="eqp-show-line-cmd">\
                <i class="fa fa-calendar-check-o">&nbsp;授权</i><br>\
            </div>\
        </div>';
    }


    $("#eqp-refresh").click(function () {

        $.ajax({
            type: 'POST',
            url: '/tmp/refreshEqp',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(msg);
                $("#eqp-show").children().remove();
                for (var i in msg['data']) {
                    var item = msg['data'][i];
                    var tmpLineJq = $(addLine(item));
                    if (item['authority'] == 0) {
                        console.log('redddd');
                        tmpLineJq.find('.eqp-show-line-head').css('background', '#c33');
                    }
                    //console.log('id:'+item['id']+' authority:'+item['authority']+' name:'+item['name']);
                    $('#eqp-show').append(tmpLineJq);
                    //    $("#eqp-show").append('<div class="show-line" id="eqp-'+item['id']+'">\
                    //    <div class="show-item vl-width">'
                    //        + item['name'] +
                    //        '</div>\
                    //        <div class="show-item vl-width">'
                    //        + item['number'] +
                    //        '</div>\
                    //        <div class="show-item lg-width">'
                    //        + item['ip'] +
                    //        '</div>\
                    //        <div class="show-item vl-width">'
                    //        + item['mac'] +
                    //        '</div>\
                    //        <div class="show-item vl-width">'
                    //        + item['sensorNumber'] +
                    //        '</div>\
                    //        <div class="show-item lg-width">'
                    //        + item['username'] +
                    //        '</div>\
                    //        <div class="show-item vl-width">'
                    //        + item['stationName'] +
                    //        '</div>\
                    //        <div class="show-item tn-width" >\
                    //            <i title="修改" class="icon-pencil" data-type="eqp-edit" data-id="'+item['id']+'"></i>\
                    //        </div>\
                    //        <div class="show-item tn-width">\
                    //            <i title="删除" class="icon-trash"  data-type="eqp-remove" data-id="'+ item['id']+'"></i>\
                    //        </div>\
                    //    </div>');
                }
                console.log(JSON.stringify('refresh-eqp: ' + msg));
                dealEqp();
                showType();
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });
        //dealEqp();
    });
}

function refreshStation() {

    function addLine(inData) {
        return '<div class="station-line" data-id="' + inData['id'] + '">\
                        <div class="station-line-head">\
                            <i class="fa fa-train">&nbsp;部门</i>\
                        </div>\
                        <div class="station-line-item">\
                            <span class="title-color">部门名称</span>\
                        </div>\
                        <input type="text" disabled value="' + inData['name'] + '" title="' + inData['name'] + '" class="input-disabled">\
                        <div class="station-line-item">\
                            <span class="title-color">部门编号</span>\
                        </div>\
                        <input type="text" disabled value="' + inData['number'] + '" title="' + inData['number'] + '" class="input-disabled">\
                        <div class="station-line-item">\
                            <span class="title-color">部门管理员</span>\
                        </div>\
                        <input type="text" disabled value="' + inData['supervisor'] + '" title="' + inData['supervisor'] + '" class="input-disabled">\
                        <button>提交</button>\
                        <button>取消</button>\
                        <div class="station-line-cmd">\
                            <i class="fa fa-trash">&nbsp;删除</i>\
                        </div>\
                        <div class="station-line-cmd">\
                            <i class="fa fa-pencil">&nbsp;修改</i>\
                        </div>\
                        <div class="station-line-cmd" data-sb="station-edit-sb" style="display: none;">\
                            <i class="fa fa-circle-o-notch ">&nbsp;提交</i>\
                        </div>\
                    </div>';
    }

    $("#station-refresh").click(function () {

        $.ajax({
            type: 'POST',
            url: '/tmp/refreshStation',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg));
                $("#station-show").children().remove();
                for (var i in msg['data']) {
                    console.log('i:' + i);
                    var item = msg['data'][i];
                    var lineJq = $(addLine(item));
                    $('#station-show').append(lineJq);
                    //console.log(JSON.stringify(item))
                    //$("#station-show").append('<div class="show-line">\
                    //<div class="show-item vl-width">'
                    //    + item['number'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['name'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['user'] +
                    //    '</div>\
                    //</div>');
                }
                //console.log(JSON.stringify(msg));
                dealStation();
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });

    });
}

function refreshSensor() {
    var options = [];
    var stationSelectJq = $('#sensor-station-id');
    var stationOptions = stationSelectJq.find('option');
    var stationLen = stationOptions.length;
    console.log('stationLen:' + stationLen);
    var tmpJq;
    var i;
    for (i = 1; i < stationLen; ++i) {
        tmpJq = $(stationOptions.eq(i));
        options.push({
            'val': tmpJq.val(),
            'text': tmpJq.text()
        });
    }
    console.log(JSON.stringify(options));
    function retStationInfo(inData) {
        var ret = '<option value="0">请选择部门</option>';
        //var ret='';
        var i;
        for (i = 0; i < inData.length; ++i) {
            ret = ret + '<option value="' + inData[i]['val'] + '">' + inData[i]['text'] + '</option>';
        }
        return ret;
    }

    $("#sensor-refresh").click(function () {
        function addLine(inData) {
            return '<div class="sensor-show-line" data-id="' + inData['id'] + '">\
                        <div class="sensor-show-line-head">\
                            <i class="fa fa-eye">&nbsp;传感器</i>\
                        </div>\
                        <div class="sensor-show-line-item">\
                            <span class="title-color">传感器名称</span>\
                            <br>\
                            <input class="text-input" value="' + inData['name'] + '" disabled>\
                        </div>\
                        <div class="sensor-show-line-item">\
                            <span class="title-color">传感器MAC</span>\
                            <br>\
                            <input class="text-input" value="' + inData['mac'] + '" disabled>\
                        </div>\
                        <div class="sensor-show-line-item">\
                            <span class="title-color">传感器IP</span>\
                            <br>\
                            <input class="text-input" value="' + inData['ip'] + '" disabled>\
                        </div>\
                        <div class="sensor-show-line-item">\
                            <span class="title-color">传感器所属部门</span>\
                            <br>\
                            <select class="select" value="' + inData['stationId'] + '" disabled>'
                + retStationInfo(options) +
                '</select>\
            </div>\
            <div class="sensor-show-line-item">\
                <span class="title-color">传感器管理员</span>\
                <br>'
                + inData['username'] +
                '</div>\
                <div class="sensor-show-line-cmd">\
                    <i class="fa fa-pencil">&nbsp;修改</i>\
                    <i class="fa fa-trash">&nbsp;删除</i>\
                </div>\
                <div class="sensor-show-line-cmd-sb"  style="display: none;">\
                    <i class="fa fa-circle-o-notch">&nbsp;提交</i>\
                </div>\
            </div>';
        }

        $.ajax({
            type: 'POST',
            url: '/tmp/refreshSensor',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg));
                $("#sensor-show").children().remove();
                for (var i in msg['data']) {
                    var item = msg['data'][i];
                    var lineJq = $(addLine(item));
                    lineJq.find('select').val(item['stationId']);
                    $('#sensor-show').append(lineJq);
                    $('#sensor-show').append('<div class="clear-float"></div>');
                    //console.log(JSON.stringify(item))
                    //$("#sensor-show").append('<div class="show-line">\
                    //<div class="show-item vl-width">'
                    //    + item['number'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['mac'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['ip'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['stationNumber'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['stationName'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['username'] +
                    //    '</div>\
                    //</div>');
                }
                dealSensor();
                //console.log(JSON.stringify(msg));
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });

    });
}

function refreshUser() {
    function addLine(inData) {
        function level2text(inLevel) {
            var ret;
            switch (inLevel) {
                case 0:
                    ret = '高级管理员';
                    break;
                case 1:
                    ret = '管理员';
                    break;
                case 2:
                    ret = '普通用户';
                    break;
            }
            return ret;
        }

        return '<div class="line" data-id="' + inData['id'] + '">\
                            <div class="left level-' + inData['level'] + '">\
                                <i class="fa fa-user">&nbsp;'
            + level2text(inData['level']) +
            '</i>\
        </div>\
        <div class="name">'
            + inData['username'] +
            '</div>\
            <div class="cmd">\
                <i class="fa fa-trash" title="删除用户">&nbsp;删除</i>\
            </div>\
            <div class="cmd">\
                <i class="fa fa-pencil" title="修改信息">&nbsp;修改</i>\
            </div>\
        </div>';
    }


    $("#user-refresh").click(function () {
        var levelInfo = [];
        levelInfo[0] = '高级管理员';
        levelInfo[1] = '管理员';
        levelInfo[2] = '普通用户';
        var level0Jq = $('#user-show-0');
        var level1Jq = $('#user-show-1');
        var level2Jq = $('#user-show-2');

        $.ajax({
            type: 'POST',
            url: '/tmp/refreshUser',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg))
                level0Jq.children().remove();
                level1Jq.children().remove();
                level2Jq.children().remove();

                for (var i in msg['data']) {
                    var item = msg['data'][i];
                    switch (item['level']) {
                        case 0:
                            level0Jq.append($(addLine(item)));
                            break;
                        case 1:
                            level1Jq.append($(addLine(item)));
                            break;
                        case 2:
                            level2Jq.append($(addLine(item)));
                            break;
                        default:
                            break;
                    }
                    //console.log(JSON.stringify(item))
                    //$("#user-show").append('<div class="show-line">\
                    //<div class="show-item vl-width">'
                    //    + item['username'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + levelInfo[item['level']] +
                    //    '</div>\
                    //    <div class="show-item tn-width">\
                    //        <i title="修改" class="icon-pencil"></i>\
                    //    </div>\
                    //    <div class="show-item tn-width">\
                    //        <i title="删除" class="icon-trash"></i>\
                    //    </div>\
                    //</div>');
                }
                dealUser();
                //console.log(JSON.stringify(msg));
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });

    });
}

function refreshAuth() {
    function addLine(inData) {
        return '<div class="auth-show-line" data-id="' + inData['id'] + '">\
                        <div class="auth-show-line-head">\
                            <i class="fa fa-key">&nbsp;授权</i>\
                        </div>\
                        <div class="auth-show-line-item">\
                            <span class="title-color">\
                                用户名\
                            </span>\
                            <br>'
            + inData['userName'] +
            '</div>\
            <div class="auth-show-line-item">\
                <span class="title-color">\
                    所管辖传感器名称\
                </span>\
                <br>'
            + inData['sensorName'] +
            '</div>\
            <div class="auth-show-line-item">\
                <span class="title-color">\
                    管辖传感器所属部门名称\
                </span>\
                <br>'
            + inData['stationName'] +
            '</div>\
            <div class="auth-show-line-cmd">\
                <i class="fa fa-trash">删除</i>\
            </div>\
        </div>';
    }

    $("#auth-refresh").click(function () {
        $.ajax({
            type: 'POST',
            url: '/tmp/refreshAuth',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg));
                $("#auth-show").children().remove();
                for (var i in msg['data']) {
                    var item = msg['data'][i];
                    //console.log(JSON.stringify(item))
                    $('#auth-show').append($(addLine(item)));
                    $('#auth-show').append('<div class="clear-float"></div>');
                    //$("#auth-show").append('<div class="show-line">\
                    //<div class="show-item vl-width">'
                    //    + item['username'] +
                    //    '</div>\
                    //    <div class="show-item vl-width">'
                    //    + item['sensorNumber']+
                    //    '</div>'+
                    //    '<div class="show-item sl-width">'
                    //    + item['stationName']+
                    //    '</div>'+
                    //    '<div class="show-item sl-width">'
                    //    + item['stationNumber']+
                    //    '</div>\
                    //</div>');
                }
                dealAuth();
                //console.log(JSON.stringify(msg));
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });

    });
}

function dealDelete() {
    $('.icon-trash').click(function () {
        console.log('hahah');
        var tId = $(this).attr('data-id');
        var tType = $(this).attr('data-type');
        var tLine;
        console.log('click delete');
        switch (tType) {
            case 'eqp-remove':
                tLine = $("#eqp-show").find('#eqp-' + tId);
                console.log(tLine);
                var dItem = {};
                dItem['id'] = tId;
                dItem['number'] = tLine.find('.show-item:eq(1)').text();
                var cfm = confirm('确定要删除设备(编号:' + dItem['number'] + ')?');
                console.log(cfm);
                break;
        }

    });
}

function deleteServer(inType, inId) {
    var sendData = {};
    sendData['type'] = inType;
    sendData['id'] = inId;
    $.ajax({
        type: 'POST',
        url: '/tmp/delete',
        data: sendData,
        dataType: 'json',
        //contentType: 'application/json; charset=utf-8',
        success: function (msg) {
            console.log(JSON.stringify(msg));

        },
        error: function (xhr, err) {
            console.log("err: " + JSON.stringify(err));

        }
    });

}

function dealUser() {
    function editUser() {
        //$('#user-show .edit-block').slideUp(0);

        $("#user-show .fa-pencil").click(function () {
            var lineJq = $(this).parents('.line');
            var userId = parseInt(lineJq.attr('data-id'));
            var username = lineJq.find('.name').text().trim();
            var findEditBlockJq = lineJq.find('.user-edit-block');
            if (findEditBlockJq.length == 0) {
                var addEditBlockJq = $('body > .user-edit-block').clone();
                lineJq.append(addEditBlockJq);
                addEditBlockJq.css('display', 'block');
                addEditBlockJq.slideUp(0);
                addEditBlockJq.slideDown(400);
                var msgJq = addEditBlockJq.find('.user-edit-block-line-msg');
                var inputsJq = addEditBlockJq.find('input');
                console.log(inputsJq.length);

                var nameJq = $(inputsJq.get(0));
                var cNameJq = $(inputsJq.get(1));
                var levelJq = addEditBlockJq.find('select');
                var cLevelJq = $(inputsJq.get(2));
                var pw1Jq = $(inputsJq.get(3));
                var cPwJq = $(inputsJq.get(4));
                var pw2Jq = $(inputsJq.get(5));

                console.log(nameJq.attr('data-info'));
                console.log(cNameJq.attr('data-info'));
                console.log(cLevelJq.attr('data-info'));
                console.log(pw1Jq.attr('data-info'));
                console.log(cPwJq.attr('data-info'));
                console.log(pw2Jq.attr('data-info'));

                cNameJq.click(function () {
                    if ($(this).is(':checked')) {
                        nameJq.attr('disabled', false);
                        nameJq.removeClass('disabled').addClass('abled');
                    }
                    else {
                        nameJq.attr('disabled', true);
                        nameJq.removeClass('abled').addClass('disabled');
                    }
                });
                cLevelJq.click(function () {
                    if ($(this).is(':checked')) {
                        levelJq.attr('disabled', false);
                        levelJq.removeClass('disabled').addClass('abled');
                    }
                    else {
                        levelJq.attr('disabled', true);
                        levelJq.removeClass('abled').addClass('disabled');

                    }
                });
                cPwJq.click(function () {
                    if ($(this).is(':checked')) {
                        pw1Jq.attr('disabled', false);
                        pw2Jq.attr('disabled', false);
                        pw1Jq.removeClass('disabled').addClass('abled');
                        pw2Jq.removeClass('disabled').addClass('abled');

                    }
                    else {
                        pw1Jq.attr('disabled', true);
                        pw2Jq.attr('disabled', true);
                        pw1Jq.removeClass('abled').addClass('disabled');
                        pw2Jq.removeClass('abled').addClass('disabled');
                    }
                });


                var buttonsJq = addEditBlockJq.find('button');
                var submitJq = $(buttonsJq.get(0));
                var cancelJq = $(buttonsJq.get(1));
                nameJq.attr('value', username);
                submitJq.click(function () {
                    var sendData = {};
                    sendData.type = 'user';
                    sendData.op = 'edit';
                    sendData.id = userId;
                    console.log(sendData);

                    if (cNameJq.is(':checked')) {
                        if (nameJq.val() == '') {
                            msgJq.text('*用户名不能为空');
                            //alert('密码长度需要大于等于6');
                            return;
                        }
                        else {
                            sendData.username = nameJq.val();
                        }
                    }
                    //sendData.username=nameJq.val();
                    if (cLevelJq.is(':checked')) {
                        sendData.level = parseInt(levelJq.val());
                    }

                    if (cPwJq.is(':checked')) {
                        if (pw1Jq.val() != pw2Jq.val()) {
                            msgJq.text('*两次输入密码不一致');

                            //alert('两次输入密码不一致');
                            return;
                        }
                        if ((pw1Jq.val() == '') && (pw2Jq.val() == '')) {
                            msgJq.text('*两次输入密码不能为空');
                            //alert('两次输入密码不能为空');
                            pw1Jq.val('');
                            pw2Jq.val('');
                            return;
                        }
                        if ((pw1Jq.val().length < 6)) {
                            msgJq.text('*密码长度需要大于等于6');
                            //alert('密码长度需要大于等于6');
                            return;

                        }
                        sendData.passwd = pw1Jq.val();
                    }
//------------------------------------------------------------------------------------------------------------------------

                    console.log(JSON.stringify(sendData));

                    //sendData.level = $("#user-level").val();
                    //console.log("sendData: "+JSON.stringify(sendData));
                    //                    :return: {
                    //    1:'success',
                    //    12:'no id',
                    //    13:'id not exist',
                    //    14:'username is none',
                    //    15:'level is illegal',
                    //    16:'passwd is too short',
                    //    17:'already has user'
                    //}
                    var errorMsg = {};
                    errorMsg[0] = '修改用户信息失败';
                    errorMsg[12] = '修改用户信息失败';
                    errorMsg[13] = '修改用户信息失败';
                    errorMsg[14] = '用户名不能为空';
                    errorMsg[15] = '修改用户信息失败';
                    errorMsg[16] = '密码长度不能小于6';
                    errorMsg[17] = '已经存在该用户名';

                    $.ajax({
                        type: 'POST',
                        url: '/tmp/change',
                        data: sendData,
                        dataType: 'json',
                        //contentType: 'application/json; charset=utf-8',
                        success: function (msg) {
                            console.log('aaaaaaaaaa:' + msg.status);
                            if (msg.status == 1) {
                                //$("#user-refresh").trigger('click');
                                msgJq.css('color', '#0769ad').text('*修改成功');
                                alert('用户信息修改成功');
                                $('#user-refresh').trigger('click');
                                //alert('用户'+sendData.name+'信息修改成功');

                            }
                            else {
                                msgJq.text('*' + errorMsg[msg.status]);
                                //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                            }


                        },
                        error: function (xhr, err) {
                            console.log("err: " + errorMsg[12]);

                        }
                    });


// -----------------------------------------------------------------------------------------------------------------------


                });
                cancelJq.click(function () {
                    console.log('cancel');
                    addEditBlockJq.slideUp(100, function () {
                        addEditBlockJq.remove()
                    });
                });


            }
            else {
                findEditBlockJq.slideUp(100, function () {
                    $(this).remove()
                });
                //editBlocksJq.remove();
            }


        });
    }

    function delUser() {
        $("#user-show .fa-trash").click(function () {
            var lineJq = $(this).parents('.line');
            var userId = parseInt(lineJq.attr('data-id'));
            var username = lineJq.find('.name').text().trim();
            var makeSure = confirm('您真的要删除用户' + username + '吗?');
            if (makeSure) {
                var sendData = {};
                sendData.id = userId;
                sendData.type = 'user';
                sendData.op = 'del';

                //sendData.level = $("#user-level").val();
                //console.log("sendData: "+JSON.stringify(sendData));
                var errorType = {};
                errorType[2] = '两次密码不一致';
                errorType[3] = '已经存在该用户名';
                console.log(JSON.stringify(sendData));
                $.ajax({
                    type: 'POST',
                    url: '/tmp/change',
                    data: sendData,
                    dataType: 'json',
                    //contentType: 'application/json; charset=utf-8',
                    success: function (msg) {

                        if (msg.status == 1) {
                            $("#user-refresh").trigger('click');
                            alert('删除用户' + username + '成功');
                            //alert('用户'+sendData.name+'信息修改成功');

                        }
                        else {
                            alert('删除用户' + username + '失败');
                            //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                        }

                    },
                    error: function (xhr, err) {
                        console.log("err: " + JSON.stringify(err));
                        alert('删除用户' + username + '失败');
                    }
                });


            } else {

            }
        });

    }

    editUser();
    delUser();
}

function dealEqp() {
    function editEqp() {
        $('#eqp-show .fa-pencil').click(function () {
            var lineJq = $(this).parents('.eqp-show-line');
            console.log(lineJq.attr('data-id'));
            var editBlocksJq = lineJq.find('.eqp-edit-block');
            var clearFloatJq = $('<div class="clear-float"></div>');
            if (editBlocksJq.length == 0) {
                var addEditBlockJq = $('body > .eqp-edit-block').clone();
                lineJq.append(addEditBlockJq);
                lineJq.append(clearFloatJq);
                addEditBlockJq.slideUp(0);
                addEditBlockJq.slideDown(400);
                addEditBlockJq.css('display', 'block');
                var inputNameJq = addEditBlockJq.find('input').eq(0);
                var eqpNameJq = lineJq.find('span[data-name=1]');
                var show24onlineJq = lineJq.find('span[data-type="show24online"]');
                var edit24onlineJq = addEditBlockJq.find('span[data-type="edit24online"]');
                console.log(eqpNameJq.text());
                inputNameJq.val(eqpNameJq.text());
                if (show24onlineJq.hasClass('fa-square-o')) {
                    edit24onlineJq.addClass('fa-square-o');
                } else {
                    edit24onlineJq.addClass('fa-check-square-o');
                }
                edit24onlineJq.click(function () {
                    if (edit24onlineJq.hasClass('fa-square-o')) {
                        edit24onlineJq.removeClass('fa-square-o').addClass('fa-check-square-o');
                    } else {
                        edit24onlineJq.removeClass('fa-check-square-o').addClass('fa-square-o');
                    }
                });
                var cancelJq = $(addEditBlockJq.find('button').get(0));
                var eebMsgJq = addEditBlockJq.find('.eeb-msg');
                cancelJq.click(function () {
                    console.log('cancel');
                    addEditBlockJq.remove();
                    lineJq.find('.clear-float').remove();
                });
                var submitJq = $(addEditBlockJq.find('button').get(1));
                submitJq.click(function () {
                    console.log('submit');
                    var sendData = {};
                    sendData.id = lineJq.attr('data-id');
                    sendData.type = 'eqp';
                    sendData.op = 'edit';
                    sendData.name = inputNameJq.val();

                    if (edit24onlineJq.hasClass('fa-square-o')) {
                        sendData.valid = parseInt(lineJq.attr('valid')) & 0xfffe;
                    } else {
                        sendData.valid = parseInt(lineJq.attr('valid')) | 0x0001;
                    }

                    console.log(JSON.stringify(sendData));
                    $.ajax({
                        type: 'POST',
                        url: '/tmp/change',
                        data: sendData,
                        dataType: 'json',
                        //contentType: 'application/json; charset=utf-8',
                        success: function (msg) {
                            console.log('authEqp ret: ' + JSON.stringify(msg));
                            if (msg.status == 1) {
                                eebMsgJq.css('color', '#0769ad');
                                eebMsgJq.text('设备名称 (' + sendData.id + ') 修改成功');
                                eqpNameJq.text(sendData.name);
                                if (edit24onlineJq.hasClass('fa-square-o')) {
                                    show24onlineJq.removeClass('fa-check-square-o').addClass('fa-square-o');
                                } else {
                                    show24onlineJq.removeClass('fa-square-o').addClass('fa-check-square-o');
                                }
                                //$('#eqp-refresh').trigger('click');
                                //alert('用户'+sendData.name+'信息修改成功');

                            }
                            else {
                                eebMsgJq.css('color', '#d30d15');
                                eebMsgJq.text('修改设备 (' + sendData.id + ') 失败');

                                //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                            }

                        },
                        error: function (xhr, err) {
                            console.log("err: " + JSON.stringify(err));
                            alert('修改权限设备 (' + sendData.id + ')' + '失败');
                        }
                    });

                });

            } else {
                var rmEditBlockJq = editBlocksJq;
                rmEditBlockJq.stop(true).slideUp(0, function () {
                    rmEditBlockJq.remove()
                });
                lineJq.find('.clear-float').remove();
            }
        });
    }

    function deleteEqp() {
        $('#eqp-show .fa-trash').click(function () {
            var lineJq = $(this).parents('.eqp-show-line');
            var eqpId = parseInt(lineJq.attr('data-id'));
            console.log('delete Eqp id:' + eqpId);

        });
    }

    function authEqp() {
        $('#eqp-show .fa-calendar-check-o').click(function () {
            var lineJq = $(this).parents('.eqp-show-line');
            var eqpId = parseInt(lineJq.attr('data-id'));
            var isAuth = parseInt(lineJq.attr('data-auth'));
            console.log('authority Eqp id:' + eqpId);
            var sendData = {};
            sendData.type = 'eqp';
            sendData.op = 'auth';
            sendData.id = eqpId;
            sendData.authority = ((isAuth == 0) ? 1 : 0);

            var errorType = {};
            errorType[2] = '两次密码不一致';
            errorType[3] = '已经存在该用户名';
            console.log(JSON.stringify(sendData));
            $.ajax({
                type: 'POST',
                url: '/tmp/change',
                data: sendData,
                dataType: 'json',
                //contentType: 'application/json; charset=utf-8',
                success: function (msg) {
                    console.log('authEqp ret: ' + JSON.stringify(msg));
                    if (msg.status == 1) {
                        $("#user-refresh").trigger('click');
                        alert('修改权限设备 (' + sendData.id + ') 成功');
                        $('#eqp-refresh').trigger('click');
                        //alert('用户'+sendData.name+'信息修改成功');

                    }
                    else {
                        alert('修改权限设备 (' + sendData.id + ')' + '失败');
                        //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                    }

                },
                error: function (xhr, err) {
                    console.log("err: " + JSON.stringify(err));
                    alert('修改权限设备 (' + sendData.id + ')' + '失败');
                }
            });

        });
    }


    editEqp();
    deleteEqp();
    authEqp();
}
function dealStation() {
    function editStation() {
        $('#station-show .fa-pencil').click(function () {
            var lineJq = $(this).parents('.station-line');
            console.log('station' + lineJq.attr('data-id'));
            var inputsJq = lineJq.find('input');
            var nameJq = $(inputsJq.get(0));
            var numberJq = $(inputsJq.get(1));
            var userJq = $(inputsJq.get(2));
            var submitJq = lineJq.find('[data-sb=station-edit-sb]');
            var editJq = lineJq.find('.fa-pencil');
            var rmJq = lineJq.find('.fa-trash');

            if (inputsJq.is(':disabled')) {
                inputsJq.attr('disabled', false);
                submitJq.css('display', 'block');
                submitJq.mouseover(function () {
                    submitJq.css({'color': '#c30', 'cursor': 'default'});
                }).mouseout(function () {
                    submitJq.css('color', '#000');

                });
                inputsJq.removeClass('input-disabled').addClass('input-abled');
                editJq.css('color', '#d30d15');
                submitJq.click(function () {
                    var sendData = {};
                    sendData.type = 'station';
                    sendData.op = 'edit';
                    var inputs = lineJq.find('input');
                    var nameJq = $(inputs.eq(0));
                    var numberJq = $(inputs.eq(1));
                    var supervisorJq = $(inputs.eq(2));
                    sendData.id = parseInt(lineJq.attr('data-id'));
                    sendData.name = nameJq.val();
                    sendData.number = numberJq.val();
                    sendData.supervisor = supervisorJq.val();
                    //return: {0:'errror', 1:'success', 2:'no this id', 3:'iData has no key id', 4:'name input is none', 5:'number is none', 6:'supervisor is none'},
                    //7:'phone is none'}
                    var errorMsg = {};
                    errorMsg[4] = '部门名称不能为空';
                    errorMsg[5] = '部门编号不能为空';
                    errorMsg[6] = '部门管理员不能为空';
                    errorMsg[7] = '部门电话不能为空';

                    console.log(nameJq.val() + ' ' + numberJq.val() + ' ' + supervisorJq.val());
                    $.ajax({
                        type: 'POST',
                        url: '/tmp/change',
                        data: sendData,
                        dataType: 'json',
                        //contentType: 'application/json; charset=utf-8',
                        success: function (msg) {
                            console.log('authEqp ret: ' + JSON.stringify(msg));
                            if (msg.status == 1) {
                                alert('部门信息修改 (' + sendData.id + ') 成功');
                                $('#station-refresh').trigger('click');
                                //alert('用户'+sendData.name+'信息修改成功');

                            }
                            else {
                                if (msg.status > 3) {
                                    alert('部门信息修改 (' + sendData.id + ')' + '失败:' + errorMsg[msg.status]);
                                } else {
                                    alert('部门信息修改 (' + sendData.id + ')' + '失败');
                                }
                                //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                            }
                            //submitJq.css('display', 'none');
                            inputsJq.attr('disabled', true);
                            submitJq.css('display', 'none');
                            inputsJq.removeClass('input-abled').addClass('input-disabled');
                            editJq.css('color', '#000');
                        },
                        error: function (xhr, err) {
                            console.log("err: " + JSON.stringify(err));
                            alert('部门信息修改 (' + sendData.id + ')' + '失败');
                            //submitJq.css('display', 'none');
                            inputsJq.attr('disabled', true);
                            submitJq.css('display', 'none');
                            inputsJq.removeClass('input-abled').addClass('input-disabled');
                            editJq.css('color', '#000');
                        }
                    });


                });


            } else {
                inputsJq.attr('disabled', true);
                submitJq.css('display', 'none');
                inputsJq.removeClass('input-abled').addClass('input-disabled');
                editJq.css('color', '#000');

            }

            //editJq.click(function(){
            //    console.log('edit');
            //});
        });
    }

    function deleteStation() {
        $('#station-show .fa-trash').click(function () {
            var isOk = confirm('您真的要删除该部门信息吗?');
            if (isOk == false) {
                return;
            }

            var lineJq = $(this).parents('.station-line');
            console.log('station edit id:' + lineJq.attr('data-id'));
            var sendData = {};
            sendData.type = 'station';
            sendData.op = 'del';
            sendData.id = parseInt(lineJq.attr('data-id'));
            $.ajax({
                type: 'POST',
                url: '/tmp/change',
                data: sendData,
                dataType: 'json',
                //contentType: 'application/json; charset=utf-8',
                success: function (msg) {
                    if (msg.status == 1) {
                        alert('部门信息删除 (' + sendData.id + ') 成功');
                        $('#station-refresh').trigger('click');

                        //alert('用户'+sendData.name+'信息修改成功');

                    }
                    else {
                        alert('部门信息删除 (' + sendData.id + ')' + '失败');
                        //alert('用户'+sendData.name+'信息修改失败'+'<br>'+errorType[msg.status]);
                    }
                },
                error: function (xhr, err) {
                    console.log("err: " + JSON.stringify(err));
                    alert('部门信息删除 (' + sendData.id + ')' + '失败');
                }
            });


        });
    }

    editStation();
    deleteStation();

}

function dealSensor() {
    function changeAbled(inJq, isAbled) {
        if (isAbled) {
            inJq.attr('disabled', false);
            inJq.css('border', '1px solid #000');
        } else {
            inJq.attr('disabled', true);
            inJq.css('border', '1px solid #fff');
        }
    }

    function editSensor() {
        $('#sensor-show .fa-pencil').click(function () {

            var lineJq = $(this).parents('.sensor-show-line');
            var sensorId = parseInt(lineJq.attr('data-id'));
            var editJq = $(this);
            var nameJq = $(lineJq.find('input').eq(0));
            var macJq = $(lineJq.find('input').eq(1));
            var ipJq = $(lineJq.find('input').eq(2));
            var stationIdJq = $(lineJq.find('select').eq(0));
            var sbOutJq = lineJq.find('.sensor-show-line-cmd-sb');
            var sbInJq = lineJq.find('.fa-circle-o-notch');
            console.log(nameJq.val() + ' ' + macJq.val() + ' ' + ipJq.val() + ' ' + stationIdJq.val());

            if (sbOutJq.css('display') == 'none') {
                sbOutJq.css('display', 'block');
                sbInJq.mouseenter(function () {
                    $(this).css({'color': '#c30', 'cursor': 'default'});
                }).mouseleave(function () {
                    $(this).css('color', '#000');
                });

                changeAbled(nameJq, true);
                changeAbled(macJq, true);
                changeAbled(ipJq, true);
                changeAbled(stationIdJq, true);
                editJq.css('color', '#c30');
                sbInJq.click(function () {
                    var sendData = {};
                    sendData.id = sensorId;
                    sendData.type = 'sensor';
                    sendData.op = 'edit';
                    sendData.name = nameJq.val();
                    sendData.ip = ipJq.val();
                    sendData.mac = macJq.val();
                    sendData.stationId = parseInt(stationIdJq.val());
                    var errorMsg = {};
                    errorMsg[3] = '传感器ID不存在';
                    errorMsg[11] = '传感器名不能为空';
                    errorMsg[12] = '传感器IP不能为空';
                    errorMsg[13] = '传感器MAC不能为空';
                    errorMsg[21] = '部门信息错误';

                    console.log(JSON.stringify(sendData));
                    $.ajax({
                        type: 'POST',
                        url: '/tmp/change',
                        dataType: 'json',
                        data: sendData,
                        success: function (msg) {
                            console.log('---------------', JSON.stringify(msg));
                            if (msg.status == 1) {
                                alert('111修改传感器信息成功');
                                $('#sensor-refresh').trigger('click');
                                //changeAbled(nameJq, false);
                                //changeAbled(macJq, false);
                                //changeAbled(ipJq, false);
                                //changeAbled(stationIdJq, false);
                                //sbOutJq.css('display', 'none');
                                //editJq.css('color', '#000');

                            } else {
                                if (errorMsg[parseInt(msg.status)] != undefined) {
                                    alert(errorMsg[parseInt(msg.status)]);
                                } else {
                                    alert('修改传感器信息失败');
                                }

                            }

                        },
                        error: function (xhr, err) {
                            alert('修改传感器信息失败!');
                            $('#auth-refresh').trigger('click');

                        }
                    });


                });

            } else {
                changeAbled(nameJq, false);
                changeAbled(macJq, false);
                changeAbled(ipJq, false);
                changeAbled(stationIdJq, false);
                sbOutJq.css('display', 'none');
                editJq.css('color', '#000');
            }

        });
    }

    function deleteSensor() {
        $('#sensor-show .fa-trash').click(function () {
            var lineJq = $(this).parents('.sensor-show-line');
            var sensorId = parseInt(lineJq.attr('data-id'));
            var editJq = lineJq.find('.fa-pencil');

            console.log('sensor delete id:' + sensorId);
        });
    }

    editSensor();
    deleteSensor();
}

function dealAuth() {
    function deleteAuth() {
        var errorMsg = {};
        errorMsg[2] = '删除权限失败';
        errorMsg[3] = '删除权限失败';
        $('#auth-show .fa-trash').click(function () {
            var lineJq = $(this).parents('.auth-show-line');
            var authId = parseInt(lineJq.attr('data-id'));
            var sendData = {};
            sendData.type = 'auth';
            sendData.op = 'del';
            sendData.id = parseInt(authId);
            console.log(lineJq.attr('data-id'));
            console.log('auth delete id:' + authId);
            $.ajax({
                type: 'POST',
                url: '/tmp/change',
                dataType: 'json',
                data: sendData,
                success: function (msg) {
                    if (msg.status == 1) {
                        alert('删除权限成功');
                    } else {
                        alert('删除权限失败');
                    }
                    $('#auth-refresh').trigger('click');
                },
                error: function (xhr, err) {
                    alert('删除权限失败');
                    $('#auth-refresh').trigger('click');

                }
            });
        });
    }

    deleteAuth();
}

function authorityShow() {
    var val = $('#authority-type').val();
    console.log('data auth: ', val);
    if (val == 'all') {
        return;
    }
    else {
        $("#eqp-show").find(".eqp-show-line:not([data-auth='" + val + "'])").css("display", "none");
    }
}
function stationShow() {
    var val = $('#station-type').val();
    if (val == 'all') {
        return;
    }
    else {
        $("#eqp-show").find(".eqp-show-line:not([data-station='" + val + "'])").css("display", "none");
    }
}

function s24onlineShow() {
    var val = $('#24online-type').val();
    console.log('val: ' + val);
    if (val == 'all') {
        return;
    }
    else {
        $("#eqp-show").find(".eqp-show-line:not([data-24online='" + val + "'])").css("display", "none");
    }
}

function onlineShow() {
    var val = $('#online-type').val();
    console.log('val: ' + val);
    if (val == 'all') {
        return;
    }
    else {
        $("#eqp-show").find(".eqp-show-line:not([data-online='" + val + "'])").css("display", "none");
    }
}

function allShow() {

    $("#eqp-show").find(".eqp-show-line").css("display", "block");
    authorityShow();
    stationShow();
    s24onlineShow();
    onlineShow();

}

function showType() {

    $("#authority-type").change(function () {
        allShow();
    });
    $("#station-type").change(function () {
        allShow();
    });
    $('#24online-type').change(function () {
        allShow();
    });
    $('#online-type').change(function () {
        allShow();
    });
}

$(document).ready(function () {

    //dealUser();
    //dealEqp();
    //dealStation();

    dealAddEqp();
    dealAddStation();
    dealAddSensor();
    dealAddUser();
    dealAddAuth();

    refreshEqp();
    refreshStation();
    refreshSensor();
    refreshUser();
    refreshAuth();


    dealTab2();
    dealTab3(parseInt(getQueryString('type')));


    //console.log(getQueryString('type'));
    //$("#eqp-refresh").trigger('click');

});