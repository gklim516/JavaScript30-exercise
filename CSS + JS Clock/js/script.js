const secondHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);