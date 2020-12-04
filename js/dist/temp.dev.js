"use strict";

var closeReg = document.querySelector('#closeReg'),
    closeCart = document.querySelector('#closeCart'),
    regForm = document.querySelector('.reg'),
    user = document.querySelector('#user'),
    header = document.querySelector('.header'),
    navItem = document.querySelectorAll('.nav_item'),
    headerIcon = document.querySelectorAll('.header__icon'),
    search = document.querySelector('#search'),
    cart = document.querySelector('#cart'),
    cartForm = document.querySelector('.cart');
var arrowWatch = document.querySelectorAll('.watch .slick-arrow');
var arrowStrap = document.querySelectorAll('.strap .slick-arrow');
var buttonsWatch = document.querySelectorAll('.watch .slick-dots li button');
var buttonsStrap = document.querySelectorAll('.strap .slick-dots li button');
var buttonsStory = document.querySelectorAll('.storymobile .slick-dots li button');
var listsWatch = document.querySelectorAll('.watch .slick-dots li');
var listsStrap = document.querySelectorAll('.strap .slick-dots li');
var listsStory = document.querySelectorAll('.storymobile .slick-dots li');
var slideWatch = document.querySelector('.watch .slick-slide');
var slideStrap = document.querySelector('.strap .slick-slide');
var slideStory = document.querySelectorAll('.storymobile .slick-slide');
clickOnitem(closeReg, user, regForm);
clickOnitem(closeCart, cart, cartForm);

function clickOnitem(close, item, menu) {
  close.addEventListener('click', function (e) {
    if (e.target == close) {
      menu.style.transform = "translateX(100%)";
      header.classList.remove('header_freeze');
    }
  });
  item.addEventListener('click', function (e) {
    if (e.target == item) {
      menu.style.transform = "translateX(0)";
      header.classList.add('header_freeze');
    }
  });
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset != 0) {
    header.style.cssText = 'background-color: white; position: fixed; height: 70px; transition: .5s all;';
    header.classList.remove('header__active');
    header.classList.add('header__active_color');
    regForm.style.top = '70px';
    cartForm.style.top = '70px';
  } else {
    header.style.cssText = 'transition: .5s all;';
    header.classList.add('header__active');
    regForm.style.top = '90px';
    cartForm.style.top = '90px';
  }
});
var burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.burgerinner'),
    overlay = document.querySelector('.burgerinner__overlay'),
    body = document.querySelector('body');
var count = 0;
burger.addEventListener('click', function (e) {
  count++;

  if (count % 2 != 0) {
    open();
  }

  if (count % 2 == 0) {
    close();
  }

  console.log(count);
});

function close() {
  burger.innerHTML = '<i class="fas fa-bars"></i>';
  menu.style.transform = 'translateX(-100%)';
  body.style.overflow = 'visible';
}

function open() {
  burger.innerHTML = '<i class="far fa-times"></i>';
  menu.style.transform = 'translateX(0)';
  body.style.overflow = 'hidden';
}

$('.storymobile__wrapper').slick({
  dots: true,
  speed: 300,
  infinite: false,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '',
  nextArrow: ''
});
$('.watches__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="action action_left" id="left"><svg aria-labelledby="" viewBox="0 0 15 15"xmlns="http://www.w3.org/2000/svg" role="img"><path d="m15 5.41-7.5 7.91-7.5-7.91 1.95-1.95 5.55 5.83 5.55-5.83z"></path></svg></button>',
  nextArrow: '<button class="action action_right" id="right"><svg aria-labelledby="" viewBox="0 0 15 15"xmlns="http://www.w3.org/2000/svg" role="img"><path d="m15 5.41-7.5 7.91-7.5-7.91 1.95-1.95 5.55 5.83 5.55-5.83z"></path></svg></button>',
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false
    }
  }]
});

function connect(arrow, buttons) {
  var number = 0;
  arrow[0].addEventListener('click', function () {
    if (number == buttons.length) {
      number--;
    }

    if (number > 0) {
      number--;
      console.log(number);
      setStyle(buttons, number);
    }
  });
  arrow[1].addEventListener('click', function () {
    if (number < 0) {
      number++;
    }

    if (number < buttons.length - 1) {
      number++;
      console.log(number);
      setStyle(buttons, number);
    }
  });
  buttons.forEach(function (button, i) {
    button.addEventListener('click', function (e) {
      if (e.target == button) {
        number = i;
      }
    });
  });
}

function setStyle(buttons, number) {
  buttons.forEach(function (dot) {
    return dot.style.background = '#000000';
  });
  buttons.forEach(function (dot) {
    return dot.style.border = 'none';
  });
  buttons[number].style.border = '2px solid #c40d2e';
  buttons[number].style.background = '#ffffff';
}

function setTouchConnect(slides, buttons) {
  slides.forEach(function (slide, i) {
    slide.addEventListener('touchmove', function () {
      if (slide.classList.contains('slick-active')) {
        setStyleMobile(buttons, i, slides.length);
      }
    });
  });
}

var next;

function setStyleMobile(buttons, number, length) {
  next = number + 1;

  if (next < length) {
    setStyle(buttons, next);
  } else {
    next = number - 1;
    setStyle(buttons, next);
  }
}

function colorFirst(lists, dots) {
  dots.forEach(function (dot) {
    dot.innerHTML = '';
    dots.forEach(function (dot) {
      return dot.style.background = '#000000';
    });
    dots[0].style.border = '2px solid #c40d2e';
    dots[0].style.background = '#ffffff';
  });
  lists.forEach(function (list, i) {
    list.addEventListener('click', function () {
      if (list.classList.contains('slick-active')) {
        dots.forEach(function (dot) {
          return dot.style.background = '#000000';
        });
        dots.forEach(function (dot) {
          return dot.style.border = 'none';
        });
        dots[i].style.border = '2px solid #c40d2e';
        dots[i].style.background = '#ffffff';
      }
    });
  });
}

colorFirst(listsStrap, buttonsStrap);
colorFirst(listsWatch, buttonsWatch);
colorFirst(listsStory, buttonsStory);
connect(arrowWatch, buttonsWatch);
connect(arrowStrap, buttonsStrap);
setTouchConnect(slideWatch, buttonsWatch);
setTouchConnect(slideStory, buttonsStory);
setTouchConnect(slideStrap, buttonsStrap);
var contactUs = document.querySelector('[data-contact="contact"]');
var contact = document.querySelector('.contact');
var closeContact = document.querySelector('.contact__close');
contactUs.addEventListener('click', function (e) {
  console.log("here");
  contact.style.display = 'block';
});
closeContact.addEventListener('click', function (e) {
  contact.style.display = 'none';
});