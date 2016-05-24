/**
 * Created by jbkj on 16-3-11.
 */
var eqpType = [
    {
        'name': 'computer',
        'icon': 'icon-laptop',
        'background': '#65c147'
    },
    {
        'name': 'phone',
        'icon': 'icon-mobile-phone',
        'background': '#00ff99'

    },
    {
        'name': 'router',
        'icon': 'icon-hdd',
        'background': '#006699'

    },
    {
        'name': 'switch board',
        'icon': 'icon-random',
        'background': '#66cc00'

    },
];

function isOnlineByItv(inMSeconds){
    var timeItv = 50 * 60;
    var nowSeconds = Date.parse(new Date()) / 1000;
    var lastSeeSeconds = Date.parse((new Date(inMSeconds))) / 1000;
    var isOnline = false;
    if ((nowSeconds - lastSeeSeconds) < timeItv) {
        isOnline = true;
    }
    return isOnline;
}

var AddEqp={
    createNew: function(ctnJq, oneJq, clearJq){
        var ret={};
        ret.ctnJq=ctnJq;
        ret.oneJq=oneJq;
        ret.clearJq=clearJq;

        ret.deleteChild=function(){
            ret.ctnJq.find('.one-eqp').remove();
        };


        ret.init=function(inData){
            ret.deleteChild();
            for(var i=0; i<inData.length; ++i)
            {
                ret.add(inData[i]);
            }
        };
        ret.add=function(inData){
            //var timeItv=50*60;
            //var nowSeconds=Date.parse(new Date())/1000;
            //var lastSeeSeconds=Date.parse((new Date(inData.ltime)))/1000;
            //var isOnline=false;
            //if((nowSeconds-lastSeeSeconds)<timeItv){
            //    isOnline=true;
            //}
            var isOnline=isOnlineByItv(Date.parse((new Date(inData.ltime))));

            //console.log(inData);
            var tmp={
                "authority":1,
                "ftime":"Fri, 25 Mar 2016 18:26:21 GMT",
                "id":2,
                "ip":"sadfsadf",
                "ltime":"Fri, 25 Mar 2016 18:26:21 GMT",
                "mac":"sadfasdf2",
                "name":"asdf",
                "number":"asfdas",
                "sensorId":1,
                "sensorName":"name",
                "stationName":"station-name-1",
                "userId":14,
                "userName":"g1"
            };

            var validStr=inData['valid'].toString(2);
            var s24onlineStr=validStr.substr(validStr.length-1, 1);

            var addJq=ret.oneJq.clone(true);
            addJq.css('display', 'block');
            addJq.removeAttr("id");
            addJq.attr('data-auth', inData['authority'].toString());
            addJq.attr('data-station', inData['stationName']);
            addJq.attr('data-24online', s24onlineStr);
            addJq.attr('data-id', inData['id']);
            if(inData['online']==1 && isOnline) {
                addJq.attr('data-online', '1');
            }else{
                addJq.attr('data-online', '0');
            }
            var labelLineJq=addJq.find('.label-line');

            var s24onlineJq=labelLineJq.find('.label').eq(0);
            console.log(s24onlineJq.attr('class'));
            var validStr=inData['valid'].toString();
            var is24online=validStr.substr(validStr.length-1, 1);
            if(is24online=='1'){
                s24onlineJq.css('display', 'inline-block');
            }else{
                console.log('no 24 online');
            }

            if(inData['authority']==0){
                addJq.find('.top').css('background', '#c33');
            }

            var aliveBtnJq=addJq.find('.alive-btn');
            if((inData['online']==1) && (isOnline)){
                aliveBtnJq.removeClass('disable-btn').addClass('breath-btn');
            }else{
                aliveBtnJq.removeClass('breath-btn').addClass('disable-btn');
            }

            var allLinesJq=addJq.find('.text-line');

            var nameJq=$(allLinesJq.get(0));
            nameJq.find('.text-line-right').text(inData['name']);

            var numberJq=$(allLinesJq.get(1));
            numberJq.find('.text-line-right').text(inData['id']);

            var ipJq=$(allLinesJq.get(2));
            ipJq.find('.text-line-right').text(inData['ip']);

            var macJq=$(allLinesJq.get(3));
            macJq.find('.text-line-right').text(inData['mac']);

            var sensorJq=$(allLinesJq.get(4));
            sensorJq.find('.text-line-right').text(inData['sensorName']);

            var stationJq=$(allLinesJq.get(5));
            stationJq.find('.text-line-right').text(inData['stationName']);

            var userJq=$(allLinesJq.get(6));
            userJq.find('.text-line-right').text(inData['userName']);

            var ftimeJq=$(addJq.find('.time-line').get(1));
            //ftimeJq.text(inData['ftime']);
            var ftimeDateObj=new Date(inData['ftime']);
            ftimeJq.text(ftimeDateObj.Format('yyyy-MM-dd D hh:mm:ss'));
            var ltimeJq=$(addJq.find('.time-line').get(3));
            var ltimeDateObj=new Date(inData['ltime']);
            ltimeJq.text(ltimeDateObj.Format('yyyy-MM-dd D hh:mm:ss'));


            ret.clearJq.before(addJq);

        };
        return ret;
    }
};

function refreshEqp(eqpJq){
    function refresh(){

        $.ajax({
            type: 'POST',
            url: '/tmp/refreshEqp',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                console.log(JSON.stringify(msg));
                eqpJq.init(msg['data']);
                allShow();
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });
    }
    refresh();
}

function showEqpInfo2(eqp){
    refreshEqp(eqp);
    setInterval(function(){
        refreshEqp(eqp);
    }, 60000);
}

function authorityShow() {
    var val = $('#authority-type').val();
    if (val == 'all') {
        return;
    }
    else {
        $("#all-eqp").find(".one-eqp:not([data-auth='" + val + "'])").css("display", "none");
    }
}
function stationShow() {
    var val = $('#station-type').val();
    if (val == 'all') {
        return;
    }
    else {
        $("#all-eqp").find(".one-eqp:not([data-station='" + val + "'])").css("display", "none");
    }
}

function s24onlineShow() {
    var val = $('#24online-type').val();
    console.log('val: '+val);
    if (val == 'all') {
        return;
    }
    else {
        $("#all-eqp").find(".one-eqp:not([data-24online='" + val + "'])").css("display", "none");
    }
}

function onlineShow() {
    var val = $('#online-type').val();
    console.log('val: '+val);
    if (val == 'all') {
        return;
    }
    else {
        $("#all-eqp").find(".one-eqp:not([data-online='" + val + "'])").css("display", "none");
    }
}

function allShow() {
    $("#all-eqp").find(".one-eqp").css("display", "block");
    authorityShow();
    stationShow();
    s24onlineShow();
    onlineShow();

}

function showType(){

    $("#authority-type").change(function () {
        allShow();
    });
    $("#station-type").change(function () {
        allShow();
    });
    $('#24online-type').change(function(){
        allShow();
    });
    $('#online-type').change(function(){
        allShow();
    });
}

function dealToCsv(){
    $('#to-csv').click(function(){
        var getCsvObj=$('#get-csv').get(0);
        $.ajax({
            type: 'POST',
            url: '/tmp/refreshEqp',
            //contentType: 'application/json; charset=utf-8',
            success: function (msg) {
                //console.log(JSON.stringify(msg));
                var str = "col1,col2,col3\nvalue1,value2,value3";
                str =  encodeURIComponent(str);
                getCsvObj.href = "data:text/csv;charset=utf-8,"+str;
                getCsvObj.click();
                console.log('success');
            },

            error: function (xhr, err) {
                console.log("err: " + JSON.stringify(err));
            }
        });

        //this.click();
    });
}

$(document).ready(function(){
    var addEqp=AddEqp.createNew($("#all-eqp"), $("#sample-eqp"), $("#all-eqp-clear"));
    //addEqp.init(eqpInfo);
    showEqpInfo2(addEqp);

    showType();


});