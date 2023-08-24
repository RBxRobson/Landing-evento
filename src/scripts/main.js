
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


const countdown = setInterval(function () {
    const eventDate = new Date("Apr 24, 2024 00:00:00");
    const eventTimeStamp = eventDate.getTime();
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeDistance = eventTimeStamp - currentTimeStamp;
    const minutesMS = 1000 * 60;
    const hoursMS = minutesMS * 60;
    const daysMS = hoursMS * 24;

    const days = Math.floor(timeDistance / daysMS);
    const hours = Math.floor((timeDistance % daysMS) / hoursMS);
    const minutes = Math.floor((timeDistance % hoursMS) / minutesMS);
    const seconds = Math.floor((timeDistance % minutesMS) / 1000);

    document.getElementById('countdown').innerHTML = `<span>${days}D</span> <span>${hours}H</span> <span>${minutes}M</span> <span>${seconds}S</span>`

    if (timeDistance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "evento expirado"
    }
}, 1000)
