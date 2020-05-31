require('./styles/index.scss');
require('./styles/index.scss');

import geoFindMe from './js/location.js';

import getImg from './js/getImg';
import getGeoData from './js/getGeo';
//import getWeather from './js/weather.js';
const body = document.getElementById("body");

document.addEventListener('DOMContentLoaded', async () => {

  await geoFindMe();
  const img = await getImg("spring");

  body.style.backgroundImage = `url(${img.photos.photo[0].url_h})`


});
