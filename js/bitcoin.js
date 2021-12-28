const display = document.getElementById('btc-price')

axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        let thePrice = res.data.ticker.price
        let newPrice = (Math.round(thePrice * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        display.innerHTML = `$${newPrice}`
    })

    .catch(err => {
        console.log("ERROR", err)
    })

const getBTCprice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR", err)
    }
}

/// COUNTDOWN

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const newYears = "27 March 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


}

countdown();

setInterval(countdown, 1000);