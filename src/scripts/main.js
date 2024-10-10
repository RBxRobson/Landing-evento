
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


const countdown = setInterval(function () {
    let eventDate = new Date("Apr 24, 2024 00:00:00");
    let now = new Date();
    
    if (now > eventDate) {
        eventDate.setFullYear(eventDate.getFullYear() + 1); // Adiciona um ano
    }

    const eventTimeStamp = eventDate.getTime();
    const currentTimeStamp = now.getTime();

    const timeDistance = eventTimeStamp - currentTimeStamp;
    const minutesMS = 1000 * 60;
    const hoursMS = minutesMS * 60;
    const daysMS = hoursMS * 24;

    const days = Math.floor(timeDistance / daysMS);
    const hours = Math.floor((timeDistance % daysMS) / hoursMS);
    const minutes = Math.floor((timeDistance % hoursMS) / minutesMS);
    const seconds = Math.floor((timeDistance % minutesMS) / 1000);

    const spanGroup = `<span>${days}D</span> <span>${hours}H</span> <span>${minutes}M</span> <span>${seconds}S</span>`;
    document.getElementById('countdown').innerHTML = spanGroup;
}, 1000)
