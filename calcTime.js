$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);

});

function clockUpdate() {
    let date = new Date();
    function addZero(x) {
        if (x < 10) {
            return x = '0' + x;
        } else {
            return x;
        }
    }

    function twelveHour(x) {
        if (x > 12) {
            return x = x - 12;
        } else if (x == 0) {
            return x = 12;
        } else {
            return x;
        }
    }

    let h = addZero(twelveHour(date.getHours()));
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());

    $('.digital-clock').text(h + ':' + m + ':' + s)

}
