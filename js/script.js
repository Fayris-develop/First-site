"use strict";
window.onload = function() {

let tags = document.getElementsByClassName('elements');
// let tagsBot = document.getElementsByClassName('advertising__tags-bot-group');


// function setTransition(sec) { 
//   if (sec == 0) {
//     for (let i = 0; i < tags.length; i++) {
//       tags[i].style.transition = "auto";
//       tagsBot[i].style.transition = "auto";
//     }
//   } 
//   else {
//     for (let i = 0; i < tags.length; i++) {
//       tags[i].style.transition = sec +"s";
//       tagsBot[i].style.transition = sec +"s";
//     }
//   }
// }

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

// for (let i = 0; i < tags.length; i++) {
//   tags[i].style.top = "50%";
//   tags[i].style.left = "50%";   
//   tags[i].style.right = "50%";

//   tagsBot[i].style.top = "50%";
//   tagsBot[i].style.left = "50%";   
//   tagsBot[i].style.right = "50%";
// }


// setTimeout(setTransition,99,1); 
setTimeout(playAnimation,100); 
// setTimeout(setTransition,1000,0); 
  
// window.addEventListener(`resize`, event => {
//   playAnimation();
// }, false);  


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























