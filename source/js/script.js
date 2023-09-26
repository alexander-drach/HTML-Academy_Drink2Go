/* mobile menu */
const humb = document.querySelector('.humb');
const header = document.querySelector('.page-header');
const nav = document.querySelector('.nav');

const addClassMobileMenu = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    nav.classList.add('mobile-menu');
  } else {
    nav.classList.remove('mobile-menu')
  }
}

addClassMobileMenu();

window.addEventListener("resize", addClassMobileMenu);

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
