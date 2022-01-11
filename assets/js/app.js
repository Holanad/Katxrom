AOS.init({
  offset: 200,
  duration: 1200,
  delay: 150,
  wait:0,
  once: true,
});


setTimeout(function() {
  AOS.refresh();
}, 1000);


var myLazyLoad = new LazyLoad();
// jQuery function

  
$(document).ready(function() {

  //Бургер меню
  (function headerBurger (){
    $('.header-burger').click(function () {
      $('.header-burger').toggleClass('active');
      $('.header-mobile').toggleClass('active ');
      $('html').toggleClass('hidden');
      
    });
  }());
  //Убрать подсветку пункта меню
  (function deleteActiveItemHeader () {
    $('.header-mobile-item').click( () => {
      if($('.header-mobile-item__link').hasClass('open')){
        $('.header-mobile-item__link_active').removeClass('header-mobile-item__link_active')
        $('.header-mobile-service .open').css('color', '#F2A74F');
        $('.header-mobile-service .open svg path').css('stroke', '#F2A74F');
      } else {
        $('.link-active').addClass('header-mobile-item__link_active');
        $('.header-mobile-service .atr-delete').css('color', '#fff');
        $('.header-mobile-service .atr-delete svg path').css('stroke', '#fff');
      }
    })
  })
 
  // Акорд в бургер меню на услугах
  (function accordionHeader() {
    if ($(window).width() < 480){
      $(".header-mobile-service .header-mobile-item__link").click(function(){
        $(this).toggleClass("open").next().slideToggle();
        $(".header-mobile-service .header-mobile-item__link").not(this).removeClass("open").next().slideUp();
      });
    }
  }());

  // Удаление атрибута href в услугах на экране 
  (function deleteServiceAttribute () {
    $(window).on("scroll load resize", function () {
      if ($(window).width() < 680){
        $('.atr-delete').removeAttr("href");
      } else {
        $('.atr-delete').attr("href", "service.html")
      }
    })
  }())

  // Счётчик цифр
  var show = true;
  var countbox = ".about-experience, .description-advantages";
  $(window).on("scroll load resize", function () {
    if (!show) return false; 
    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top; 
    var w_height = $(window).height(); 
    var d_height = $(document).height(); 
    var e_height = $(countbox).outerHeight();
    if (w_top + 680 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.about-experience, .description-advantages').css('opacity', '1');
        $('.about-experience-item__num, .description-advantages-item__num').spincrement({
            thousandSeparator: "",
            duration: 2000
        });  
        show = false;
      }
  });

  // Project slider
  (function projectSlider() {
    if ($(window).width() < 480){
      let plug = document.querySelectorAll('.plug');
      plug.forEach(e => {
        e.remove()
      });
    }
    if ($('.project-slider-wrapper').length) {
      $('.project-slider-wrapper').slick({
              infinite: false,
              slidesToShow: 3,
              arrows: true,
              initialSlide: 1,
              variableWidth: true,
              dots: true, // показывать точки индикаторы
              dotsClass: 'project-slider-pagination', // название класса для точек
              prevArrow: $('.project-slider-btn-prev'),
              nextArrow: $('.project-slider-btn-next'),
              responsive: [
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    dots: false,
                    initialSlide: 0,
                  },
                },
              ]
        }) 
      }
  }());

  //Стрелка наверх
  (function scrollUp () {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 400) {
        $('.scroll-up').addClass('active');
      } else {
        $('.scroll-up').removeClass('active');
      }
    });

    $('.scroll-up').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1500);
    });
  }());

  //Валидации сайта
  (function formValidate() {
    $('.contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                minlength: 5
            },
            tel: {
                required: true,
                minlength: 5
            },
            service: {
              required: true,
              minlength: 5
            },
            message: {
              required: true,
              minlength: 10
            }
        },
        messages: {
          name: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 2 символов"
          },
          email: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 5 символов"
          },
          tel: {
              required: "Заполните поле",
              minlength: "Должно быть не менее: 5 символов"
          },
          service: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 5 символов"
          },
          message: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 10 символов"
          }
        }
    });
    $('.footer-form').validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          email: {
              required: true,
              minlength: 5
          },
          tel: {
              required: true,
              minlength: 5
          },
          service: {
            required: true,
            minlength: 5
          }
      },
      messages: {
        name: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 2 символов"
        },
        email: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 5 символов"
        },
        tel: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 5 символов"
        },
        service: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 5 символов"
        }
      }
    });
    $('.application-form').validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          email: {
              required: true,
              minlength: 5
          },
          tel: {
              required: true,
              minlength: 5
          },
          field: {
            required: true,
            minlength: 2
          },
          service: {
            required: true,
            minlength: 5
          },
          message: {
            required: true,
            minlength: 10
          }
      },
      messages: {
        name: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 2 символов"
        },
        email: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 5 символов"
        },
        tel: {
            required: "Заполните поле",
            minlength: "Должно быть не менее: 5 символов"
        },
        field: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 2 символов"
        },
        service: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 5 символов"
        },
        message: {
          required: "Заполните поле",
          minlength: "Должно быть не менее: 10 символов"
        }
      }
    });
  }());

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});