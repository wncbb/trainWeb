/**
 * Created by jbkj on 16-5-22.
 */

function getAtkinfo(start_time, stop_time){
    var sendData={};
    sendData.start_time=start_time||0;
    sendData.stop_time=stop_time||-1;
    var ctnJq=$('#ctn');

    var infoArray=[];

    function addOneLine(inArg){
        var addStr='<div class="table-line">\
            <div class="table-line-item sm-width">'
                +inArg.time+
            '</div>\
            <div class="table-line-item tn-width">'
                +inArg.sensorId+
            '</div>\
            <div class="table-line-item tn-width">'
                +attackInfoA[parseInt(inArg['attackId'])]['name']+
            '</div>\
            <div class="table-line-item md-width">'
                +inArg.src.ip+':'+inArg.src.port+
            '</div>\
            <div class="table-line-item md-width">'
                +inArg.dst.ip+':'+inArg.dst.port+
            '</div>\
            <div class="table-line-item tn-width">'
                +inArg.protocalA+
            '</div>\
            <div class="table-line-item md-width">'
                +inArg.infos+
            '</div>\
            <div class="table-line-item md-width">'
                +inArg.references+
            '</div>\
        </div>';
        return addStr;
    }

    function addAllLines(inArg){
        var frg=document.createDocumentFragment();

        var i=0;
        for(i=0; i<inArg.length; ++i){
           frg.appendChild($(addOneLine(inArg[i])).get(0));
        }
        ctnJq.find('.table-line').remove();
        console.log(frg);
        ctnJq.append(frg);
    }


    $.ajax({
        type: 'POST',
        url: '/tmp/getAtkinfo',
        //contentType: 'application/json; charset=utf-8',
        success: function (msg) {
            console.log(msg);
            infoArray=msg.data;
            addAllLines(msg.data);
        },
        error: function(err){
            console.log('error: '+err);
        }
    })

}


$(document).ready(function(){

});