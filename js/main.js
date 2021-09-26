document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.header__burger'),
          menu = document.querySelector('.header__menu'),
          additionalTrigger = document.querySelector('.additional-services__button'),
          additionalBlock = document.querySelector('.additional-services__list');
          
    additionalTrigger.addEventListener('click', () => {
        additionalBlock.classList.toggle('additional-services__list--active');
        additionalTrigger.classList.toggle('js-rotate');
    })


    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

});