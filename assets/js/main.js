/**
* Template Name: Medicio
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/medicio-free-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

var originalText = $("button[type=submit]").text(); 
$("form").on("submit", function(e){

  e.preventDefault();
  var f = e.target;
  var a = f.action.value;
  if(!f.nombre.value || f.nombre.value=='Nombre' || !f.email.value || !f.telefono.value || f.telefono.value=='Telefono') { alertErrorCampos(); return false; }
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(f.email.value)) { alertErrorEmail(); return false; } 
  if(f.especialidad.value=='0') { alertErrorEspecialidad(); return false; } 

  function alertErrorCampos() {
      swal({title:"Faltan datos", text:"Por favor, complete todos los campos del formulario para que podamos brindarle una mejor atenciÃ³n...", type:"warning", confirmButtonColor: "#52BDBE"});
  }

  function alertErrorCV() {
      swal({title:"Faltan datos", text:"Â¡No olvides adjuntar tu CV! \n\nPuede ser un archivo word, un pdf o una imagen...", type:"warning", confirmButtonColor: "#52BDBE"});
  }

  function alertErrorEmail() {
      swal({title:"Email invÃ¡lido", text:"Por favor, revise la direcciÃ³n de email que escribiÃ³, parece no ser vÃ¡lida...", type:"warning", confirmButtonColor: "#52BDBE"});
  }

  function alertErrorEspecialidad() {
      swal({title:"Especialidad", text:"Por favor, seleccione la especialidad para que podamos brindarle un turno acorde...", type:"warning", confirmButtonColor: "#52BDBE"});
  }

  $(f).ajaxSubmit({ url:'php/process.php', type:'post', data:{}, beforeSubmit:function() { lockSubmit(true, '<i class="fas fa-circle-notch fa-spin"></i>'); $("#status").stop(true, true).hide().html("<img src='img/ajax-loader.gif'>").fadeIn(); }, 
  success:function(response, status) { lockSubmit(false, "Solicitar turno"); $("#status").stop(true, true).hide();
      switch(response) {
          case "ok": 
                  f.reset();
                  ejecutarPixels(f.especialidad);
                  swal({title:"Mensaje enviado", text:"Hemos recibido tu solicitud. \nNos pondremos en contacto con vos lo antes posible.\n\nDentus.", type:"success", confirmButtonColor: "#52BDBE"});
              break;
          
          case "error":
          default: 
              swal({title:"Ha ocurrido un error", text:"Por favor, intente enviar nuevamente...", type:"error", confirmButtonColor: "#52BDBE"});
          break;
      }}
  });


  function lockSubmit(bool, txt) {
      var submitButton = $("button[type=submit]");
      
      if (bool) {
          submitButton.attr("disabled", true).html(txt).css("cursor", "default").fadeTo('fast', 0.2);
      } else {
          submitButton.attr("disabled", false).html(originalText).css("cursor", "pointer").fadeTo('fast', 1);
      }
  }
  


});


function ejecutarPixels(_campaign) {

  var google_conversion_id = 878948772;
  var google_conversion_language = "en";
  var google_conversion_format = "3";
  var google_conversion_color = "ffffff";
  var google_conversion_label = "U4UNCO3U33MQpOOOowM";
  var google_remarketing_only = false;

  // Google Conversion
  $.getScript('//www.googleadservices.com/pagead/conversion.js');
  var image = new Image(1, 1); 
    image.src = "//www.googleadservices.com/pagead/conversion/878948772/?label=U4UNCO3U33MQpOOOowM&amp;guid=ON&amp;script=0";


  ga('send', 'event', 'Consulta online', 'Enviar', _campaign);


  //Facebook Pixel Code
  /*fbq('init', '120144581902316'); 
  fbq('track', 'PageView');

  fbq('track', 'CompleteRegistration');

  var image2 = new Image(1, 1); 
  image2.src = "https://www.facebook.com/tr?id=120144581902316&ev=PageView&noscript=1";*/
}



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate gallery lightbox 
   */
  const galleryLightbox = GLightbox({
    selector: '.gallery-lightbox'
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()