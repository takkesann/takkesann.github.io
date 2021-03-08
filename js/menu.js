const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.hamburger-menu');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
    btn.classList.toggle('close-btn');
});