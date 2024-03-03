const mobileMenu = document.getElementById('mobileMenu');
const burger = document.getElementById('burger');
const logo = document.querySelector('.logo');
const logoSvg = document.querySelector('.logo > svg');
let isActive = false;

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    isActive = !isActive;

    if (isActive) {
        logoSvg.classList.add('white-fill');
    } else {
        logoSvg.classList.remove('white-fill');
    }
});