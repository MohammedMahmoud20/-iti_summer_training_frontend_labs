addEventListener('load', function () {
    var img = document.getElementsByTagName("img")[0];
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var startSlideshowBtn = document.createElement("button");
    var stopSlideshowBtn = document.createElement("button");
    var counter = 1;
    var slideshowInterval;

    function startSlideshow() {
        slideshowInterval = setInterval(function () {
            counter++;
            if (counter === 8)
                counter = 1;
            img.src = "images/" + counter + ".jpg";
        }, 1000);
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    next.addEventListener('click', function () {
        counter++;
        if (counter === 8)
            counter = 1;
        img.src = "images/" + counter + ".jpg";
    });

    prev.addEventListener('click', function () {
        counter--;
        if (counter === 0)
            counter = 7;
        img.src = "images/" + counter + ".jpg";
    });

    startSlideshowBtn.textContent = "Slideshow";
    startSlideshowBtn.addEventListener('click', startSlideshow);

    stopSlideshowBtn.textContent = "Stop";
    stopSlideshowBtn.addEventListener('click', stopSlideshow);

    var div = document.querySelector("div");
    div.appendChild(startSlideshowBtn);
    div.appendChild(stopSlideshowBtn);


    function generateRandomGradient() {
        var color1 = getRandomColor();
        var color2 = getRandomColor();
        var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
        return gradient;
    }


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeBackgroundColor() {
        var gradient = generateRandomGradient();
        document.body.style.background = gradient;
    }

    changeBackgroundColor();

    var changeColorBtn = document.createElement("button");
    changeColorBtn.textContent = "Change Background Color";
    changeColorBtn.addEventListener('click', changeBackgroundColor);

    div.appendChild(changeColorBtn);
});