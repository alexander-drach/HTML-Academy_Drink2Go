/* mobile menu */
const humb = document.querySelector('.humb');
const header = document.querySelector('.page-header');

humb.addEventListener('click', () => {
  header.classList.toggle('open-menu');
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* range */
const sliders = document.querySelectorAll('input[type="range"]');
const valueRangeFrom = document.getElementById('range-from');
const valueRangeTo = document.getElementById('range-to');

sliders[0].addEventListener('input', (e) => {
  if (+sliders[0].value > +sliders[1].value) {
    sliders[1].value = +sliders[0].value;
  }
});

sliders[1].addEventListener('input', (e) => {
  if (+sliders[1].value < +sliders[0].value) {
    sliders[0].value = +sliders[1].value;
  }
});

sliders.forEach((slider) => {
  slider.addEventListener('change', () => {
    valueRangeFrom.value = sliders[0].value;
    valueRangeTo.value = sliders[1].value;
  })
});

/* map */
let geo_lon = 59.9684;
let geo_lat = 30.3176;

let element = document.getElementById('map');
let map = L.map(element);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="<http://osm.org/copyright>">OpenStreetMap</a> contributors'
}).addTo(map);

let target = L.latLng(geo_lon, geo_lat);

map.setView(target, 18);

const iconOptions = {
  iconUrl: 'img/marker-map.svg',
  iconSize: [38, 50],
}

const customIcon = L.icon(iconOptions);

let markerOptions = {
  icon: customIcon
}

L.marker(target, markerOptions).addTo(map);
