const hamburger = document.querySelector('#hamburger');
const hamburgerClose = document.querySelector('#icon-close');
const mobileNav = document.querySelector('#mobile-nav');

const toggleMenu = () => {
    hamburger.classList.toggle('hide');
    hamburgerClose.classList.toggle('hide');
    mobileNav.classList.toggle('hide');
}
hamburger.addEventListener('click', toggleMenu);
hamburgerClose.addEventListener('click', toggleMenu);