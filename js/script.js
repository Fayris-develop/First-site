"use strict";
window.onload = function() {

let tags = document.getElementsByClassName('elements');
// let tagsBot = document.getElementsByClassName('advertising__tags-bot-group');
const pop_up = document.querySelector('.pop-up');
const pop_up__overlay = document.querySelector(".pop-up__overlay");
const pop_up__menu = document.querySelector('.pop-up__menu');
const pop_up__name = document.querySelector('.pop-up__name');
const pop_up__number = document.querySelector('.pop-up__number');
const pop_up__label = document.querySelector('.pop-up__label');
const pop_up__email = document.querySelector('.pop-up__email');
const pop_up__button = document.querySelector('.pop-up__button');
const pop_up__close = document.querySelector('.pop-up__close');

const button = document.querySelectorAll('button');
const call_back = document.getElementsByClassName('call-back');
const orange_button = document.getElementsByClassName('orange-button');

const i_doing__cost = document.querySelector('.i-doing__cost');
const example__to_order = document.querySelector('.example__to-order');
const bottom_menu__call_back = document.querySelector('.bottom-menu__call-back');

const header__button = document.querySelector('.header__button');
const header__overlay = document.querySelector('.header__overlay');
const header__navigation = document.querySelector('.header__navigation');
const navigation__menu = document.querySelector('.navigation__menu');

const navigation__li = document.querySelectorAll('.navigation__menu li');



function playAnimation() {   
  // for (let i = 0; i < tags.length; i++) {
  //   tags[i].classList.add("elements--active");
  //   tagsBot[i].classList.add("elements--active");
  // }
  tags[0].classList.add("elements--active");
  tags[1].classList.add("elements--active");
  // tagsBot[0].classList.add("elements--active");



//   if (window.innerWidth > 1575) {
//     tags[0].style.top = "83px";
//     tags[0].style.left = "-192px";
//     tags[0].style.right = "auto";
//     tags[1].style.top = "118px";
//     tags[1].style.left = "auto";
//     tags[1].style.right = "696px";
//     tags[2].style.top = "297px";
//     tags[2].style.left = "-114px";
//     tags[2].style.right = "auto";
//     tags[3].style.top = "450px";
//     tags[3].style.left = "574px";
//     tags[3].style.right = "auto";
//     tags[4].style.top = "570px";
//     tags[4].style.left = "16px";
//     tags[4].style.right = "auto";

//     tagsBot[0].style.top = "-27px";
//     tagsBot[0].style.left = "-289px";
//     tagsBot[0].style.right = "auto";
//     tagsBot[1].style.top = "-13px";
//     tagsBot[1].style.left = "auto";
//     tagsBot[1].style.right = "-216px";
//     tagsBot[2].style.top = "188px";
//     tagsBot[2].style.left = "-193px";
//     tagsBot[2].style.right = "auto";
//     tagsBot[3].style.top = "236px";
//     tagsBot[3].style.left = "auto";
//     tagsBot[3].style.right = "-49px";
//     tagsBot[4].style.top = "175px";
//     tagsBot[4].style.left = "auto";
//     tagsBot[4].style.right = "-288px";
//   }

//   if (window.innerWidth <= 1575 && window.innerWidth > 832) {
//     tags[0].style.top = "88px";
//     tags[0].style.left = "61px";
//     tags[0].style.right = "auto";
//     tags[1].style.top = "64px";
//     tags[1].style.left = "auto";
//     tags[1].style.right = "70px";
//     tags[2].style.top = "562px";
//     tags[2].style.left = "45px";
//     tags[2].style.right = "auto";
//     tags[3].style.top = "166px";
//     tags[3].style.left = "auto";
//     tags[3].style.right = "512px";
//     tags[4].style.top = "502px";
//     tags[4].style.left = "auto";
//     tags[4].style.right = "611px";

//     tagsBot[0].style.top = "-59px";
//     tagsBot[0].style.left = "119px";
//     tagsBot[0].style.right = "auto";
//     tagsBot[1].style.top = "222px";
//     tagsBot[1].style.left = "auto";
//     tagsBot[1].style.right = "39px";
//     tagsBot[3].style.top = "250px";
//     tagsBot[3].style.left = "auto";
//     tagsBot[3].style.right = "422px";
//   }

//   if (window.innerWidth <= 832) {
//     tags[0].style.top = "20px";
//     tags[0].style.left = "50px";
//     tags[0].style.right = "auto";
//     tags[2].style.top = "114px";
//     tags[2].style.left = "36px";
//     tags[2].style.right = "auto";
//     tags[3].style.top = "50px";
//     tags[3].style.left = "auto";
//     tags[3].style.right = "30px";
//     tags[4].style.top = "-5px";
//     tags[4].style.left = "auto";
//     tags[4].style.right = "127px";
//   }
}

setTimeout(playAnimation,100); 

// for (let i = 0; i < navigation.length; i++) {
//   navigation[i].addEventListener("click", function(e){
//     e.preventDefault(); 
//     window.scrollTo({
//       top: y_scroll[i],
//       behavior: "smooth"
//     }); 
//   });
// }


// see_more[0].addEventListener("click", function(e){
//   e.preventDefault(); 
//   window.scrollTo({
//     top: y_scroll[0],
//     behavior: "smooth"
//   }); 
// });

const smoothLinks = document.querySelectorAll('[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        let id = smoothLink.getAttribute('href');
        let clss = id.replace ("#", "."); 
        document.querySelector(clss).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// pop_up.addEventListener("mouseover", function(e){
//   pop_up_zone = true;
// });

// pop_up.addEventListener("mouseout", function(e){
//   pop_up_zone = false;
// });


pop_up__button.addEventListener("click", function(e){
  if (pop_up__name.value != ""){
    if (pop_up__number.value != ""){
        alert("Данные успешно отправленны");
        pop_up.style.display = "none";
    }
    else {
      pop_up__number.style.backgroundColor = "#ffcece";
      alert("Введите телефон");
    }

  }
  else {
    pop_up__name.style.backgroundColor = "#ffcece";
    alert("Введите имя");
  }
});

pop_up__name.addEventListener("click", function(e){
  pop_up__name.style.backgroundColor = "#fff";
});
pop_up__name.addEventListener("keydown", function(e){
  pop_up__name.style.backgroundColor = "#fff";
});
pop_up__number.addEventListener("click", function(e){
  pop_up__number.style.backgroundColor = "#fff";
});
pop_up__number.addEventListener("keydown", function(e){
  pop_up__number.style.backgroundColor = "#fff";
});

//Закрыть pop_up

pop_up__close.addEventListener("click", function(e){
  pop_up.style.display = "none";

  pop_up__label.style.display = "block";
  pop_up__email.style.display = "block";
  pop_up__menu.style.height = "500px";
});

pop_up__overlay.addEventListener("click", function(e){
  pop_up.style.display = "none";

  pop_up__label.style.display = "block";
  pop_up__email.style.display = "block";
  pop_up__menu.style.height = "500px";
});

//Открыть pop_up

i_doing__cost.addEventListener("click", function(e){
  pop_up.style.display = "block";
});
example__to_order.addEventListener("click", function(e){
  pop_up.style.display = "block";
});

for (let i = 0; i < call_back.length; i++) {
  call_back[i].addEventListener("click", function(e){
    pop_up.style.display = "block";

    pop_up__label.style.display = "none";
    pop_up__email.style.display = "none";
    pop_up__menu.style.height = "410px";
  });
}

// меняем цвет кнопок при наведении
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", function(e){
    if (button[i].classList.contains("orange-button")) {
      button[i].style.backgroundColor = "#fd8570";
    }
  });
  button[i].addEventListener("mouseout", function(e){
    if (button[i].classList.contains("orange-button")) {
      button[i].style.backgroundColor = "#ff4e2e";
    }
  });
}

bottom_menu__call_back.addEventListener("mouseover", function(e){
  if (window.innerWidth <= 832) {
    bottom_menu__call_back.style.backgroundColor = "#fd8570";
  }
});
bottom_menu__call_back.addEventListener("mouseout", function(e){
    bottom_menu__call_back.style.backgroundColor = "";
});

//меню

header__button.addEventListener("click", function(e){
  header__overlay.style.display = "block";

  header__navigation.classList.add("header__navigation--menu");
  navigation__menu.classList.add("navigation__menu--burger");
});

header__overlay.addEventListener("click", function(e){
  header__overlay.style.display = "none";

  header__navigation.classList.remove("header__navigation--menu");
  navigation__menu.classList.remove("navigation__menu--burger");
});
for (let i = 0; i < navigation__li.length; i++) {
  navigation__li[i].addEventListener("click", function(e){
    header__overlay.style.display = "none";

    header__navigation.classList.remove("header__navigation--menu");
    navigation__menu.classList.remove("navigation__menu--burger");
  });
}

new Swiper('.example', {
  wrapperClass: 'example__list',
  slideClass: 'example__item',

  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  // direction: 'vertical',

  breakpoints: {
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 2,
      // spaceBetween: 0,
    },
  },

  // If we need pagination
  pagination: {
    el: '.example__pagination',
    type: 'bullets',
    bulletClass: 'example__pagination-item',
    bulletActiveClass: 'example__pagination-item_active',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.example__arrow--right',
    prevEl: '.example__arrow--left',
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});


}























