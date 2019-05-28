$(document).ready(function () {

    function clock() {
        let time = new Date();
        $('#clock').html(time);
    }

    setInterval(clock, 1000);
});

