const city = document.getElementById('city');
const date = document.getElementById('date');
const term = document.getElementById('term');
const time = document.getElementById('time');
const wind = document.getElementById('wind')
const weatherStatus = document.getElementById('weatherStatus');
const temp_2 = document.getElementById('temp-2');
const humidity = document.getElementById('humidity');
const day_2 = document.getElementById('day-2');
const day_3 = document.getElementById('day-3');
const day_4 = document.getElementById('day-4');
const pic = document.getElementById('pic');

import map, { marker } from './map';

import getGeoData from './getGeo';

async function init(data, lang) {


    city.innerText = `${data.location.name},${data.location.country}`;
    weatherStatus.innerText = `${data.current.condition.text}`
    const now = new Date();

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let timerId = setTimeout(function tick() {
        let timeNow = new Date();
        time.innerText = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`

        timerId = setTimeout(tick, 1000);
    }, 1000);
    date.innerText = new Intl.DateTimeFormat(lang, options).format(now);
    if (lang === 'ru') {
        wind.innerText = `Ветер: ${data.current.wind_mph} м/с`
        temp_2.innerHTML = `Кажущая температутура: ${data.current.temp_c} <sup>o</sup>`
        humidity.innerText = `Влажность: ${data.current.humidity}%`
    }
    const tempNow = Math.round(data.current.temp_c);
    term.innerHTML = `${tempNow} <sup>o</sup>`;
    pic.src = `https:${data.current.condition.icon}`
    map.setCenter([data.location.lon, data.location.lat]);
    marker.setLngLat([data.location.lon, data.location.lat])


    day_2.innerText = now.getDay() + 1;
    day_3.innerText = now.getDay() + 2;
    day_4.innerText = now.getDay() + 3;

}
export default init