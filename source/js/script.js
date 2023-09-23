/* mobile menu */
const humb = document.querySelector('.humb');
const header = document.querySelector('.page-header');

humb.addEventListener('click', () => {
  header.classList.toggle('open-menu');
})