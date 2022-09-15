// hamburger menu
const menu = document.querySelector('.menu input');
const nav = document.querySelector('.top-nav ul');

menu.addEventListener('click', () => {
    nav.classList.toggle('popup');
} );

// preloader
const preloader = document.getElementById('preload');

window.addEventListener('load', () => {
    preloader.style.display = 'none';
} );
