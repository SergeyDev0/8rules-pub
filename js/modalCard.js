let cards = document.querySelectorAll(".section__card");
let modal = document.querySelector(".modal__wrapper-card");
let modalCard = document.querySelector(".modal__card");

cards.forEach((card) => {
  card.onclick = (event) => {
    let targetCard = event.currentTarget.closest(".section__card");
    let titleModal = targetCard.querySelector(".section__card-title").textContent;
    let descriptionModal = targetCard.querySelector(".section__card-description").textContent;
    let imgModal = targetCard.querySelector(".section__card-img").src;
    
    modal.querySelector(".modal__card-img").src = imgModal;
    modal.querySelector(".modal__card-title").textContent = titleModal;
    modal.querySelector(".modal__card-description").textContent = descriptionModal;
    modal.classList.remove("hide");
  };
});

modal.onclick = (e) => {
  e.target != modalCard && modal.classList.add("hide");
};
