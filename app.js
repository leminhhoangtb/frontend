var curDate = new Date();
var time1= curDate.getHours();
var time2= curDate.getMinutes();
var time3= curDate.getSeconds();
var curDay = curDate.getDate();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();
document.getElementById('current-time').innerHTML = " "+ time1+":"+time2+":"+time3+" "+ curDay + "/" + curMonth + "/" + curYear;