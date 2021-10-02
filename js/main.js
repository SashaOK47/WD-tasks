document.addEventListener("DOMContentLoaded", () => {
    (function() {
        const additionalTrigger = document.querySelector('.additional-services__button');
        const additionalBlock = document.querySelector('.additional-services__list');
              
        additionalTrigger.addEventListener('click', () => {
            additionalBlock.classList.toggle('additional-services__list--active');
            additionalTrigger.classList.toggle('js-rotate');
        })
    }());

    (function() {
        const prev = document.querySelector('.cars__slider-arrow--left');
        const next = document.querySelector('.cars__slider-arrow--right');
        const slides = document.querySelectorAll('.cars__slider-item');
        const tabs = document.querySelectorAll('.tabs__input');
        const dots = document.querySelectorAll('.slider-dots__input');
        let index = 0;
    
        const activeSlide = n => {
            for(slide of slides) {
                slide.classList.remove('cars__slider-item--active');
            }
            slides[n].classList.add('cars__slider-item--active');
        }
        const activeTab = n => {
            for(tab of tabs) {
                tab.checked = false;
            }
            tabs[n].checked = true;;
        }
        const activeDot = n => {
            for(dot of dots) {
                dot.checked = false;
            }
            dots[n].checked = true;;
        }
        const nextSlide = () => {
            if(index == slides.length - 1) {
                index = 0;
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            } else {
                index++;
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            }
        }
    
        const prevSlide = () => {
            if(index == 0) {
                index = slides.length - 1
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            } else {
                index--;
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            }
        }
    
        tabs.forEach((item, indexTab) => {
            item.addEventListener('click', () => {
                index = indexTab;
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            });
        });
        dots.forEach((item, indexDot) => {
            item.addEventListener('click', () => {
                index = indexDot;
                activeSlide(index);
                activeTab(index);
                activeDot(index);
            });
        });
    
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);
    }());


    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

});