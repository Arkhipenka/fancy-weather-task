import { keyWeather_2 } from "./keys";

async function getWeather(lat, lon, lang) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${keyWeather_2}&q=${lat},${lon}&days=3&lang=${lang}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data
}
export default getWeather;