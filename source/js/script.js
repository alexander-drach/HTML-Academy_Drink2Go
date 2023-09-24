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
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
