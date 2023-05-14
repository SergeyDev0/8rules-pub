let openSection = document.querySelectorAll(".section__wrapper-title");

openSection.forEach(item => {
  item.onclick = function(e) {
    e.currentTarget.nextElementSibling.classList.toggle('hide');
    e.currentTarget.querySelector('.section__arrow-icon').classList.toggle('active');
  }
})