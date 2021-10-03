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

    (function() {
        const timer = document.querySelector(".form__footer-timer");
        let time = new Date().setHours(new Date().getHours() + 6);
        // Для проверки
        // let time = new Date().setMinutes(new Date().getMinutes() + 1);
    

        const timerId = setInterval(() => {
        const now = new Date().getTime();
        const distance = time - now;

        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0"+ seconds : seconds;

        timer.innerHTML = `${hours}:${minutes}:${seconds}`;
        if (distance < 0) {
          clearInterval(timerId);
          timer.innerHTML = 'Время истекло';
          timer.style.fontSize = '5rem';
          timer.style.lineHeight = '4rem';
        }
    }, 1000);
    }());

    (function() {
        const form = document.querySelector('.form');
        const inputName = document.querySelector('.form__contacts-name');
        const inputPhone = document.querySelector('.form__contacts-phone');

        form.addEventListener('submit', e => {
            if(inputName.value === '') {
                e.preventDefault();
                inputName.classList.add('error');
            } else {
                inputName.classList.remove('error');
            }

            if(inputPhone.value === '') {
                e.preventDefault();
                inputPhone.classList.add('error');
            } else {
                inputPhone.classList.remove('error');
            }
        });
    }());

    (function() {
        const inputCity = document.querySelector('.cities__add-input');
        const selectCities = document.querySelector('.cities__select');

        inputCity.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
              event.preventDefault();
              let newOption = new Option(event.target.value, "");
              selectCities.append(newOption);
              inputCity.value = "";
            }
          });
    }());

    (function() {
        Share = {
            vkontakte: function(purl, ptitle, pimg, text) {
                url  = 'http://vkontakte.ru/share.php?';
                url += 'url='          + encodeURIComponent(purl);
                url += '&title='       + encodeURIComponent(ptitle);
                url += '&description=' + encodeURIComponent(text);
                url += '&image='       + encodeURIComponent(pimg);
                url += '&noparse=true';
                Share.popup(url);
            },
            facebook: function(purl, ptitle, pimg, text) {
                url  = 'http://www.facebook.com/sharer.php?s=100';
                url += '&p[title]='     + encodeURIComponent(ptitle);
                url += '&p[summary]='   + encodeURIComponent(text);
                url += '&p[url]='       + encodeURIComponent(purl);
                url += '&p[images][0]=' + encodeURIComponent(pimg);
                Share.popup(url);
            },
            popup: function(url) {
                window.open(url,'','toolbar=0,status=0,width=626,height=436');
            }
        };
    }());

    (function() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header__menu');
        const menuLink = document.querySelectorAll('.menu__link');
    
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
        });
        if(window.innerWidth <= 767) {
            menuLink.forEach(link => {
                link.addEventListener('click', () => {
                    burger.classList.remove('active');
                    menu.classList.remove('active');
                })
            });
        }
    }());

    (function() {
        const reviewsList = document.querySelector('.reviews__list');
        reviewsList.addEventListener('click', e => {
            const current = e.target;
            const reviewsBtn = current.classList.contains('reviews__more-btn');
            if(reviewsBtn) {
                const commentMore = e.target.parentNode.querySelector('.reviews__comment-more');
                const dots = e.target.parentNode.querySelector('.reviews__comment-dots');
                commentMore.classList.toggle('toggle-text');
                dots.classList.toggle('toggle-dots');
                current.textContent = current.textContent.includes('Читать полностью') ? "Скрыть" : 'Читать полностью';
            }
        });
    }())
});