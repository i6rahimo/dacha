$(function() {


// Шторка при загрузке на телефоне
let touchstartY = 0;
let touchendY = 0;

const body = document.querySelector('body'),
      gestureZone = document.querySelector('.curtain');

gestureZone.addEventListener('touchstart', function(event) {
  touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
  touchendY = event.changedTouches[0].screenY;
  handleGesture();
}, false); 

function handleGesture() {
  if (touchendY < touchstartY) {
    gestureZone.style.transform = "translateY(" + (-100) + "%)";
    setTimeout(function(){
      body.style.overflow = "visible";
    }, 500);    
  }
}



// PHONE CALL LIGHTBOX
const lbox_link = $('.callback'),
      lbox = $('#callback_modal'),
      lboxIcon = $('.callback__icon'),
      lboxClose = $('.callback__close');

lbox_link.click(function() {
  $(this).toggleClass('active');
  lbox.toggleClass('show');
  lboxIcon.toggleClass('hide');
  lboxClose.toggleClass('show');
});




var lazyLoadInstance = new LazyLoad({
  elements_selector: ".lazy"
});




// Gallery caption
Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: [
      "counter",
      "close",
    ],
  },
  //infinite: false,
  //loop: false,
  autoFocus: false  
});




// Anchor
$('a[href^="#"').click(function() {
  var startPosition = $(this.hash).offset().top;
  $('html, body').animate({
    scrollTop: startPosition
  }, 750);
  setTimeout(function() {   
    history.pushState('',document.title,window.location.pathname);
  }, 0);
});



//Go to top
$(window).scroll(function() {
  var position = $(window).scrollTop(),
      goTop = $('.go-top'),
      block_position = $('#projects').offset().top;
  if (position > block_position) {
      goTop.addClass('show');
  } else {
      goTop.removeClass('show');
  }
});




const promo_slider = new Swiper("#promo_slider", {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  lazy: {
    loadPrevNext: true,
  },
  speed: 1500,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false
});




let mySwiper;

const dachnyeSlider = document.querySelector("#dachnye_slider");

function mobileSlider() {
  if (window.innerWidth <= 991 && dachnyeSlider.dataset.mobile == 'false') {
    mySwiper = new Swiper(dachnyeSlider, {
      autoHeight: true,
      spaceBetween: 30,
      speed: 500,
      allowTouchMove: false,
      navigation: {
        prevEl: "#dachnye_prev",
        nextEl: "#dachnye_next",
      },
      pagination: {
        el: '#dachnye_count',
        type: 'fraction'      
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        }
      }
    });

    dachnyeSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 991) {
    dachnyeSlider.dataset.mobile = 'false';
    if (dachnyeSlider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});





var dd_37_nav = new Swiper("#dd_37_nav", {    
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500
});
var dd_37 = new Swiper("#dd_37", {
  speed: 500,
  // navigation: {
  //   prevEl: "#dd_37_prev",
  //   nextEl: "#dd_37_next",
  // },
  thumbs: {
    swiper: dd_37_nav,
  },
});

var dd_61_nav = new Swiper("#dd_61_nav", {    
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500
});
var dd_61 = new Swiper("#dd_61", {
  speed: 500,
  // navigation: {
  //   prevEl: "#dd_61_prev",
  //   nextEl: "#dd_61_next",
  // },
  thumbs: {
    swiper: dd_61_nav,
  },
});

var dd_80_nav = new Swiper("#dd_80_nav", {    
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500
});
var dd_80 = new Swiper("#dd_80", {
  speed: 500,
  // navigation: {
  //   prevEl: "#dd_80_prev",
  //   nextEl: "#dd_80_next",
  // },
  thumbs: {
    swiper: dd_80_nav,
  },
});

var dd_92_nav = new Swiper("#dd_92_nav", {    
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500
});
var dd_92 = new Swiper("#dd_92", {
  speed: 500,
  // navigation: {
  //   prevEl: "#dd_92_prev",
  //   nextEl: "#dd_92_next",
  // },
  thumbs: {
    swiper: dd_92_nav,
  },
});

var dd_102_nav = new Swiper("#dd_102_nav", {    
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500
});
var dd_102 = new Swiper("#dd_102", {
  speed: 500,
  // navigation: {
  //   prevEl: "#dd_102_prev",
  //   nextEl: "#dd_102_next",
  // },
  thumbs: {
    swiper: dd_102_nav,
  },
});



const projectSlider = $('.project__slider');
const projectNav = $('.project__slider button');

projectNav.click(function(){
  $(this).closest(projectSlider).find('.swiper-slide-active img').click();
});



// Передача заголовков в попап
var projectBtn = $('.project__btn'),
    projectTitle = $('.project__title'),
    modalSubject = $('.modal__subject'),
    modalProjectTitle = $('.modal__project-title');

projectBtn.click(function() {
  $(modalProjectTitle).text($(this).parent().find(projectTitle).text());
  $(modalSubject).val('Получить смету проекта ' + $(this).parent().find(projectTitle).text());
});




videoSlider = new Swiper("#video_slider", {    
  slidesPerView: 1,
  spaceBetween: 30,
  autoHeight: true,
  speed: 500,
  navigation: {
    prevEl: "#video_prev",
    nextEl: "#video_next",
  }
});



// Video
const wrapperVideo = document.querySelector('.video__box'),
      video = document.querySelector('.video__source'),
      videoImg = document.querySelector('.video__img');;

wrapperVideo.addEventListener('click', function() {
  video.play();
  wrapperVideo.classList.remove('play');
  videoImg.remove();
});




// Accordion
$(".accordion__top").length > 0 &&
($(".accordion__top").on("click", function () {
  $(this).parent().toggleClass("active"), $(this).parent().hasClass("active") ? $(this).next().slideDown() : ($(".accordion__hidden").slideUp(), $(this).parent().removeClass("active"));
}),
$(function (o) {
  o(".accordion__top").mouseup(function (e) {
    var s = o(".accordion.active");
    s.is(e.target) || 0 !== s.has(e.target).length || s.removeClass("active");
  });
}),
$(function (o) {
  o(".accordion__top").mouseup(function (e) {
    var s = o(".accordion__hidden");
    s.is(e.target) || 0 !== s.has(e.target).length || s.slideUp();
  });
}))




// Yandex Map
let ok = false;                    
window.addEventListener('scroll', function() {
  if (ok === false) {
      ok = true;    
      setTimeout(function showYaMaps() {
        const script   = document.createElement("script");
        script.src   = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=getYaMap";
        document.body.appendChild(script);
      }, 1000)    
  }
});




// Current year
var date = new Date();
var currentYear = document.getElementsByClassName("current-year");

for(var i = 0; i < currentYear.length; i++) {
  currentYear[i].innerText=date.getFullYear();
}


})