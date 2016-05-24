/**
 * Created by jbkj on 16-3-18.
 */
function dealChangePasswd(){
    if($("#error-info").text().replace(/(^\s*)|(\s*$)/g, "")=="")
    {
        $("#change-passwd-dropdown").slideUp(0);
    }
    $("#change-passwd").click(function(){
        $("#change-passwd-dropdown").slideToggle(200);
    });

}

function changeUserLevel(){
    var userLevelJq=$("#user-level");
    var intLevel=parseInt(userLevelJq.text());
    var levelInfo=[];
    levelInfo[0]='高级管理员';
    levelInfo[1]='管理员';
    levelInfo[2]='普通用户';
    userLevelJq.text(levelInfo[intLevel]);
}

$(document).ready(function(){
    dealChangePasswd();
    changeUserLevel();
});