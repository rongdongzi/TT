window.onload=function () {
    setInterval(function () {
        showTime()
    }, 500)};
    function checkTime(i) {
        if(i<10){
            i="0"+i;
        }
        return i;
    }

    function showTime() {
        
        var mydate = new Date();
        var year = mydate.getFullYear();
        var month = mydate.getMonth() + 1;
        var date = mydate.getDate();
        var d = mydate.getDay();
        var h = mydate.getHours();
        var m = mydate.getMinutes();
        var s = mydate.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        
        var weekday = new Array(7);
        weekday[0] = "星期日";
        weekday[1] = "星期一";
        weekday[2] = "星期二";
        weekday[3] = "星期三";
        weekday[4] = "星期四";
        weekday[5] = "星期五";
        weekday[6] = "星期六";
        var txt = document.getElementById('show');

        txt.innerHTML = year + '年' + month + '月' + date + '日' + weekday[d] + h + '时' + m + '分' + s + '秒';

}
