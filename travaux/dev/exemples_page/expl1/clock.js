"use strict"

$(document).ready(function(){
    var ctx = $("#clock")[0].getContext("2d");
    var cw = $("#clock")[0].width, ch = $("#clock")[0].height;
    
    var date = new Date();
    var hr = String(date.getHours()), mn = String(date.getMinutes());
    if(hr.length!=2)
        hr = "0"+hr;
    if(mn.length!=2)
        mn = "0"+mn;
    var time = `${hr}:${mn}`;
    setInterval(function(){
        var date = new Date();
        var hr = String(date.getHours()), mn = String(date.getMinutes());

        if(hr.length!=2) {hr = "0"+hr}
        if(mn.length!=2) {mn = "0"+mn}
        if(time[2]==":") {time = `${hr} ${mn}`} else {time = `${hr}:${mn}`}

        ctx.fillStyle = "#100";
        ctx.fillRect(0,0,cw,ch);
        ctx.font = "64px dseg";
        ctx.fillStyle = "#400";
        ctx.fillText("88:88", 1, 73);
        ctx.fillStyle = "#F00";
        ctx.fillText(time, 1, 73);
    }, 500);
    
});