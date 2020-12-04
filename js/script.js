const closeReg = document.querySelector('#closeReg'),
closeCart = document.querySelector('#closeCart'),
regForm = document.querySelector('.reg'),
user = document.querySelector('#user'),
header = document.querySelector('.header'),
navItem = document.querySelectorAll('.nav_item'),
headerIcon = document.querySelectorAll('.header__icon'),
search = document.querySelector('.header__search'),
searchForm = document.querySelector('.search'),
cart = document.querySelector('#cart'),
cartForm = document.querySelector('.cart'),
overlay = document.querySelector('.overlay');

let countForSearch = 0;

search.addEventListener('click', (e) => {
    countForSearch++;
    if(countForSearch % 2 != 0){
        openSearch();
    }
    if(countForSearch % 2 == 0){
        closeSearch();
    } 
});

function openSearch(){
    search.innerHTML = '<i class="far fa-times" style="width: 16px; height: 16px;"></i>';
    searchForm.style.transform = "translate(-50%)";
    header.classList.add('header_freeze');
    overlay.style.display = 'block';
}

function closeSearch(){
    search.innerHTML = '<i class="fas fa-search" id="search"></i>';
    searchForm.style.transform = "translate(-50%, -200%)";
    header.classList.remove('header_freeze');
    overlay.style.display = 'none';
    overlay.addEventListener('click', (e) =>{
        if(e.target == overlay){
            search.innerHTML = '<i class="fas fa-search" id="search"></i>';
            searchForm.style.transform = "translate(-50%, -200%)";
            header.classList.remove('header_freeze');
            overlay.style.display = 'none';
        }
    });
}

clickOnitem(closeReg,user,regForm,cartForm);
clickOnitem(closeCart,cart,cartForm,regForm);

function clickOnitem(close, item , menu, menuclose){
    close.addEventListener('click', (e) =>{
        if(e.target == close){
            menu.style.transform = "translateX(100%)";
            header.classList.remove('header_freeze');
            overlay.style.display = 'none';
        }
    });
    
    overlay.addEventListener('click', (e) =>{
        if(e.target == overlay){
            menu.style.transform = "translateX(100%)";
            header.classList.remove('header_freeze');
            overlay.style.display = 'none';
        }
    });

    item.addEventListener('click', (e) => {
        if(e.target == item){
            menuclose.style.transform = "translateX(100%)";
            menu.style.transform = "translateX(0)";
            header.classList.add('header_freeze');
            overlay.style.display = 'block';
        }
    });
}

window.addEventListener('scroll', () => {
    if(window.pageYOffset != 0){
        header.style.cssText = 'background-color: white; position: fixed; height: 70px; transition: .5s all;';
        header.classList.remove('header__active');
        header.classList.add('header__active_color');
        regForm.style.top = '70px';
        cartForm.style.top = '70px';
        searchForm.style.top = '70px';
    } else {
        header.style.cssText = 'transition: .5s all;';
        header.classList.add('header__active');
        regForm.style.top = '90px';
        cartForm.style.top = '90px';
        searchForm.style.top = '90px';
    }
});

const burger = document.querySelector('.header__burger'),
    menu = document.querySelector('.burgerinner');

let countForBurger = 0;

burger.addEventListener('click', (e) => {
    countForBurger++;
    if(countForBurger % 2 != 0){
        open();
    }
    if(countForBurger % 2 == 0){
        close();
    } 
});

function close(){
    burger.innerHTML = '<i class="fas fa-bars"></i>';
    menu.style.transform = 'translateX(-100%)';
    overlay.style.display = 'none';
}

function open(){
    burger.innerHTML = '<i class="far fa-times"></i>';
    menu.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
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
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },

       
  ]
});


const arrowWatch = document.querySelectorAll('.watch .slick-arrow');
const arrowStrap = document.querySelectorAll('.strap .slick-arrow');

const buttonsWatch = document.querySelectorAll('.watch .slick-dots li button');
const buttonsStrap = document.querySelectorAll('.strap .slick-dots li button');
const buttonsStory= document.querySelectorAll('.storymobile .slick-dots li button');


const listsWatch = document.querySelectorAll('.watch .slick-dots li');
const listsStrap = document.querySelectorAll('.strap .slick-dots li');
const listsStory = document.querySelectorAll('.storymobile .slick-dots li');

function connect(arrow, buttons) { 
    let number = 0;
    
    arrow[0].addEventListener('click', () => {
        if(number == buttons.length){
            number--;
        }
        if(number > 0){
            number--;
            console.log(number);
            setStyle(buttons, number);
            
        }
    });
    
    arrow[1].addEventListener('click', () => {
        if(number < 0){
            number++;
        }
        if(number < buttons.length-1){
            number++;
            console.log(number);
            setStyle(buttons, number);
            
        }
    });
    
    buttons.forEach((button, i) => {
        button.addEventListener('click', (e) => {
            if(e.target == button){
                number =  i;
            }
        });
    });
}


function setStyle(buttons, number){
    buttons.forEach(dot => dot.style.background = '#000000');
    buttons.forEach(dot => dot.style.border = 'none');
    buttons[number].style.border = '2px solid #c40d2e';
    buttons[number].style.background = '#ffffff';
}


const slideWatch = document.querySelector('.watch .slick-slide');
const slideStrap = document.querySelector('.strap .slick-slide');
const slideStory = document.querySelectorAll('.storymobile .slick-slide');

function setTouchConnect(slides,buttons){
    slides.forEach((slide,i) => {
        slide.addEventListener('touchmove', () => {
            if(slide.classList.contains('slick-active')){
                setStyleMobile(buttons, i, slides.length);
            } 
        });
    });
}

let next;
function setStyleMobile(buttons, number, length){
    next = number + 1;
    if(next < length ){
        setStyle(buttons, next);
    } else {
        next = number - 1; 
        setStyle(buttons, next);
    }
}


function colorFirst(lists, dots) {
    
    dots.forEach(dot => {
        dot.innerHTML = '';
        dots.forEach(dot => dot.style.background = '#000000');
        dots[0].style.border = '2px solid #c40d2e';
        dots[0].style.background = '#ffffff';
    });
    
    
    lists.forEach((list , i)=> {
        list.addEventListener('click', () => {
            if(list.classList.contains('slick-active')){
                dots.forEach(dot => dot.style.background = '#000000');
                dots.forEach(dot => dot.style.border = 'none');
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

const contactUs = document.querySelector('[data-contact="contact"]');
const contact = document.querySelector('.contact');
const closeContact = document.querySelector('.contact__close');

contactUs.addEventListener('click', (e) => {
    contact.style.display = 'block';

});

closeContact.addEventListener('click', (e) => {
    contact.style.display = 'none';
});