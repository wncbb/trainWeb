/**
 * Created by jbkj on 16-3-18.
 */

function deal_nav(){
    var href=window.location.href;
    var hrefArray=href.split('\/');
    var fileName=hrefArray[hrefArray.length-1].replace(/\?.*/, '');
    console.log("fileName: "+fileName);
    switch(fileName){
        case 'index':
            $("#index").addClass("nav-active");
            break;
        case '':
            $("#index").addClass("nav-active");
            break;
        case 'eqp':
            $("#eqp").addClass("nav-active");
            break;
        case 'user':
            $("#user").addClass("nav-active");
            break;
        case 'manage':
            $("#manage").addClass("nav-active");
            break;
    }
}

Date.prototype.Format = function(fmt)
{ //author: meizz
    function dateToWeek(inDate) {
        var str = "";
        var week = inDate.getDay();
        if (week == 0) {
            str = "星期日";
        } else if (week == 1) {
            str = "星期一";
        } else if (week == 2) {
            str = "星期二";
        } else if (week == 3) {
            str = "星期三";
        } else if (week == 4) {
            str = "星期四";
        } else if (week == 5) {
            str = "星期五";
        } else if (week == 6) {
            str = "星期六";
        }
        return str;
    }


  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds(),             //毫秒
      "D" :dateToWeek(this)
  };
  if(/(y+)/.test(fmt))
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)
    if(new RegExp("("+ k +")").test(fmt))
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  return fmt;
}


$(document).ready(function(){
    deal_nav();

});