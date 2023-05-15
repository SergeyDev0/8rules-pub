// Показать/Скрыть шапку в зависимости от скролла
let header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
  const onScrollHeader = () => {
    let prevScroll = window.pageYOffset;
    let currentScroll;
    window.addEventListener("scroll", () => {
      currentScroll = window.pageYOffset;
      const headerHidden = () => header.classList.contains("hide");
      if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add("hide");
        document.querySelector(".header__nav-list").classList.add("hide");
      };
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove("hide");
      };
      prevScroll = currentScroll;
    });
  };
  onScrollHeader();
});

// Открытие/Закрытие дропа для ассортимента

let dropdown = document.querySelector('.header__nav-item--dropdown');
let dropdownItems = document.querySelectorAll('.header__nav-item--dropdown li');
let dropdownButton = document.querySelector('.dropdown--link button');

dropdown.addEventListener('mouseover', () => {
  dropdown.classList.remove('hide');
});

dropdown.addEventListener('mouseout', () => {
  dropdown.classList.add('hide');
});

dropdownButton.addEventListener('click', (e) => {
  dropdown.classList.remove('hide');
});

dropdownButton.addEventListener('mouseover', () => {
  dropdown.classList.remove('hide');
});

dropdownButton.addEventListener('mouseout', () => {
  dropdown.classList.add('hide');
});

dropdownItems.forEach(s => {
  s.addEventListener('click', () => {
    dropdown.classList.add('hide');
  })
});

