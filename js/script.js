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

const see_more = document.querySelector('.see-more');
const i_doing__cost = document.querySelector('.i-doing__cost');
const example__to_order = document.querySelector('.example__to-order');
const bottom_menu__call_back = document.querySelector('.bottom-menu__call-back');

const header__button = document.querySelector('.header__button');
const header__overlay = document.querySelector('.header__overlay');
const header__navigation = document.querySelector('.header__navigation');
const navigation__menu = document.querySelector('.navigation__menu');

const navigation__li = document.querySelectorAll('.navigation__menu li');

function playAnimation() {   
  tags[0].classList.add("elements--active");
  tags[1].classList.add("elements--active");
}

setTimeout(playAnimation,100); 


//Ajax забросы

function CreateRequest()
{
  let Request = false;
  if (window.XMLHttpRequest)
  {
      //Gecko-совместимые браузеры, Safari, Konqueror
      Request = new XMLHttpRequest();
  }
  else if (window.ActiveXObject)
  {
      //Internet explorer
      try
      {
            Request = new ActiveXObject("Microsoft.XMLHTTP");
      }    
      catch (CatchException)
      {
            Request = new ActiveXObject("Msxml2.XMLHTTP");
      }
  } 
  if (!Request)
  {
      alert("Невозможно создать XMLHttpRequest");
  }    
  return Request;
} 

/*
Функция посылки запроса к файлу на сервере
r_method  - тип запроса: GET или POST
r_path    - путь к файлу
r_args    - аргументы вида a=1&b=2&c=3...
r_handler - функция-обработчик ответа от сервера
*/
function SendRequest(r_method, r_path, r_args, r_handler)
{
  //Создаём запрос
  var Request = CreateRequest();
  
  //Проверяем существование запроса еще раз
  if (!Request)
  {
    return;
  }
  
  //Назначаем пользовательский обработчик
  Request.onreadystatechange = function()
  {
    //Если обмен данными завершен
    if (Request.readyState == 4)
    {
        //Передаем управление обработчику пользователя
        r_handler(Request);
    }
  }
  
  //Проверяем, если требуется сделать GET-запрос
  if (r_method.toLowerCase() == "get" && r_args.length > 0)
  r_path += "?" + r_args;
  
  //Инициализируем соединение
  Request.open(r_method, r_path, true);
  
  if (r_method.toLowerCase() == "post")
  {
    //Если это POST-запрос
    
    //Устанавливаем заголовок
    Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");
    //Посылаем запрос
    Request.send(r_args);
  }
  else
  {
      //Если это GET-запрос        
      //Посылаем нуль-запрос
      Request.send(null);
  }
} 

//Прием ответа
let Handler = function(Request)
{   
  console.log(Request);
}

let project_name = "Вася";
let admin_email = "GGconcurs@yandex.ru";
let form_subject = "Заявка";

//==============

//Навигация

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

see_more.addEventListener("click", function(e){
  document.querySelector(".i-doing").scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

//Pop-up

pop_up__button.addEventListener("click", function(e){
  if (pop_up__name.value != ""){
    if (pop_up__number.value != ""){
        let textPost	= "project_name=" + pop_up__name.value + 
        "&admin_email=" + admin_email + 
        "&form_subject=" + form_subject + 
        "&Имя=" + pop_up__name.value + 
        "&Телефон=" + pop_up__number.value +
        "&Email=" + pop_up__email.value;
        SendRequest("POST",'php/mail.php',textPost,Handler);
        
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

//всплывающее меню
//открыть

header__button.addEventListener("click", function(e){
  header__overlay.style.display = "block";

  header__navigation.classList.add("header__navigation--menu");
  navigation__menu.classList.add("navigation__menu--burger");
});

//закрыть

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


let im = new Inputmask("8 (999) 999-99-99");
im.mask(pop_up__number);

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























