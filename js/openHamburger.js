let hamburgerButton = document.querySelector('.header__hamburger-button');
let hamburgerList = document.querySelector('.header__nav-list');

hamburgerButton.addEventListener('click', () => {
  hamburgerList.classList.toggle('hide');
})