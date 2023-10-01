addEventListener('load', function () {
    var counterElement = document.getElementById('counter');
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');

    var intervalId;
    var minutes = 0;
    var seconds = 0;


    function updateCounter() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        var formattedMinutes = ("0" + minutes).slice(-2);
        var formattedSeconds = ("0" + seconds).slice(-2);

        counterElement.textContent = formattedMinutes + ":" + formattedSeconds;
    }

    function startCounter() {
        intervalId = setInterval(updateCounter, 500);
        startBtn.disabled = true;
    }

    function stopCounter() {
        clearInterval(intervalId);
        startBtn.disabled = false;
    }

    startBtn.addEventListener('click', startCounter);
    stopBtn.addEventListener('click', stopCounter);
});