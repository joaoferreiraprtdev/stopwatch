function stopWatch() {

    function getHourFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString("pt-PT", {
            hour12: false,
            timeZone: "GMT",
        });
    }

    const watch = document.querySelector(".watch");
    const start = document.querySelector(".start");
    const pause = document.querySelector(".pause");
    const restart = document.querySelector(".restart");
    let timer;
    let seconds = 0;

    function startWatch() {
        timer = setInterval(() => {
            seconds++;
            watch.innerHTML = getHourFromSeconds(seconds);
        }, 1000);
    }

    start.addEventListener("click", function (event) {
        watch.classList.remove("paused");
        clearInterval(timer);
        startWatch();
    });

    pause.addEventListener("click", function (event) {
        clearInterval(timer);
        watch.classList.add("paused");
    });

    restart.addEventListener("click", function (event) {
        clearInterval(timer);
        watch.innerHTML = "00:00:00";
        seconds = 0;
    });

};

stopWatch();
