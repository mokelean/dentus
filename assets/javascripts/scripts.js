;(function($) {
	"use strict";
	
	$(document).ready(function() {

		var $win = $(window);
		var $doc = $(document);

		// Load Foundation
		$(document).foundation();

		// Intro Small 
		$('.intro-small .intro-image').stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});


		$.localScroll.defaults.axis = 'xy';
	
		/**
		 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
		 * also affect the >> and << links. I want every link in the page to scroll.
		 */
		$.localScroll({
			target: 'body', // could be a selector or a jQuery object too.
			queue:true,
			duration:1000,
			hash:true,
			offset: {top: -60},
			onBefore:function( e, anchor, $target ){
				// The 'this' is the settings object, can be modified
			},
			onAfter:function( anchor, settings ){
				// The 'this' contains the scrolled element (#content)
			}
		});




		$(window).scroll(function () {
	        if ($(this).scrollTop() > 1000 ) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	    });

	    

		//FullSize Image
		var attrSrc;
		function fullsizeImageHelper () {
			$('.fullsize-image').each(function () {
				attrSrc = $(this).attr('src');
				$(this)
					.closest('.fullsize-image-container')
			});
		}

		fullsizeImageHelper();

		//Intro Slider
		var introSlider = $('.intro-slider .slides').bxSlider({
			auto: true,
			pager: false,
			autoControls: true,
			autoHover: true
		});

		var sliderFotos = $('.slider-fotos .slides').bxSlider({
			auto: true,
			pager: false,
			autoControls: false,
			autoHover: true
		});

		var sliderTestimonials;
		$win.on('load', function () {
			sliderTestimonials = $('.slider-testimonials .slides').bxSlider({
				auto: true,
				pager: false,
				adaptiveHeight: true,
				maxSlides: 1,
				minSlides: 1,
				moveSlides: 1,
				slideWidth: 1030
			});

			$('.bx-controls-direction a').on('click', function (event) {
				event.preventDefault();

				if($(this).parents().hasClass('slider-testimonials')) {
					sliderTestimonials.stopAuto();
					sliderTestimonials.startAuto();
				}
			});

		});

		$('.field-date').fdatepicker();

		// Waypoint
		var itemIndex;
		$('.waypoint').on('click', function (event) {
			event.preventDefault();

			itemIndex = $(this).attr('href');

			$('body, html').animate({scrollTop: $(itemIndex).offset().top - 40}, 1000)
		});

		// Tabs
		var currentItem;
		$('.tabs .list-services a').on('click', function (event) {
			event.preventDefault();

			currentItem = $(this).attr('href');

			$(this)
				.parent()
				.addClass('current')
				.siblings()
				.removeClass('current');

			$(currentItem)
				.addClass('current')
				.siblings()
				.removeClass('current');

			$('video').each(function () {
				$(this)[0].pause();
				$('.btn-play').show();
			});

			$('body, html').animate({scrollTop: $(currentItem).offset().top -70}, 800)
			
		});

		//Slider Services
		var sliderList = $('.list-services-slider').bxSlider({
			pager: false,
			minSlides: 1,
			maxSlides: 6,
			moveSlides: 1,
			slideWidth: 200,
			infiniteLoop: false,
			hideControlOnEnd: true
		});

		$('.bx-controls-direction a').on('click', function (event) {
			event.preventDefault();

			if($(this).parents().hasClass('intro-slider')) {
				introSlider.stopAuto();
				introSlider.startAuto();
			}

			if($(this).parents().hasClass('list-services-slider')) {
				sliderList.stopAuto();
				sliderList.startAuto();	
			}
		});

		// FitVids
		$('.service-video').fitVids();

		var $video;
		$('video').click(function(event) {
			event.preventDefault();
			$video = $(this);

			$video.addClass('active');

			if($video.get(0).paused) {
				$video.get(0).play()
				$video.next().fadeOut()
			} else {
				$video.get(0).pause();
				$video.next().show()
			}
		});

		// Tablet Nav
		$('.nav li').each(function () {
			if($(this).find('.nav-dropdown').length) {
				$(this).addClass('has-dropdown');
			}
		});

		// Event Slider
		var $slider;
		$('.event-slider ').each(function () {
			$slider = $(this).find('.slides');

			$slider.bxSlider({
				auto: true,
				pager: false
			});
		});

		var $listItem;
		$('.nav li.has-dropdown > a').on('click', function (event) {
			$listItem = $(this).parent();
			if($win.width() < 1025) {
				event.preventDefault();
			}

			$listItem
				.toggleClass('active')	   			
				.siblings()
				.removeClass('active');

			if($win.width() < 768) {
				$listItem
					.children('.nav-dropdown')
					.slideToggle();
			}	
		});

		// Mobile Nav
		$('.btn-menu').on('click', function (event) {
			event.preventDefault();

			$(this)
				.toggleClass('active');

			$('.nav').slideToggle();
			$('.nav-dropdown').slideUp();	
		});

		var isMobileWidth = false;
		function resizeHelper () {
			if($win.width() < 768) {
				if(isMobileWidth) {
					return;
				}

				isMobileWidth = true;

			} else {
				if(!isMobileWidth) {
					return;
				}

				isMobileWidth = false;
				$('.nav').show();
				$('.nav-dropdown').removeAttr('style');
			}
		}

		$win.on('resize', function () {
			resizeHelper();
			$('.intro-slider .bx-start').trigger('click');
		});

		$('audio').mediaelementplayer();

		var tagName;


		$("form").on("submit", function(e){

	        e.preventDefault();
	        var f = e.target;
	        var a = f.action.value;
	        if(!f.nombre.value || f.nombre.value=='Nombre' || !f.email.value || !f.telefono.value || f.telefono.value=='Telefono') { alertErrorCampos(); return false; }
	        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(f.email.value)) { alertErrorEmail(); return false; } 
	        if(f.especialidad.value=='0') { alertErrorEspecialidad(); return false; } 

	        function alertErrorCampos() {
	            swal({title:"Faltan datos", text:"Por favor, complete todos los campos del formulario para que podamos brindarle una mejor atención...", type:"warning", confirmButtonColor: "#52BDBE"});
	        }

	        function alertErrorCV() {
	            swal({title:"Faltan datos", text:"¡No olvides adjuntar tu CV! \n\nPuede ser un archivo word, un pdf o una imagen...", type:"warning", confirmButtonColor: "#52BDBE"});
	        }

	        function alertErrorEmail() {
	            swal({title:"Email inválido", text:"Por favor, revise la dirección de email que escribió, parece no ser válida...", type:"warning", confirmButtonColor: "#52BDBE"});
	        }

	        function alertErrorEspecialidad() {
	            swal({title:"Especialidad", text:"Por favor, seleccione la especialidad para que podamos brindarle un turno acorde...", type:"warning", confirmButtonColor: "#52BDBE"});
	        }


	        $(f).ajaxSubmit({ url:'php/process.php', type:'post', data:{}, beforeSubmit:function() { lockSubmit(true, "Enviando..."); $("#status").stop(true, true).hide().html("<img src='img/ajax-loader.gif'>").fadeIn(); }, 
	        success:function(response, status) { lockSubmit(false, "Enviar"); $("#status").stop(true, true).hide();
	            switch(response) {
	                case "ok": 
	                        f.reset();
	                        swal({title:"Mensaje enviado", text:"Hemos recibido tu solicitud. \nEn menos de 2 hs nos pondremos en contacto con vos.\n\nDentus.", type:"success", confirmButtonColor: "#52BDBE"});
	                    break;
	                
	                case "error":
	                default: 
	                    swal({title:"Ha ocurrido un error", text:"Por favor, intente enviar nuevamente...", type:"error", confirmButtonColor: "#52BDBE"});
	                break;
	            }}
	        });


	        function lockSubmit(bool, txt) { 
		        if(bool) $("input[type=submit]").attr("disabled", true).val(txt).css("cursor", "default").fadeTo('fast', 0.2);
		        else $("input[type=submit]").attr("disabled", false).val(txt).css("cursor", "pointer").fadeTo('fast', 1);
		    }
	        


	    });

		/*$('form').each(function () {
			$(this).validate({
				highlight: function(element, errorClass) {
					tagName = element.tagName.toLowerCase();

					if(tagName === 'select') {
						$(element)
							.closest('.selecter')
							.addClass('error');
					} else {
						$(element).addClass('error');
					}
				},
				focusCleanup: true,
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					}
				},
				errorPlacement: function (error, element) {
					$(element)
						.closest('form')
						.find('.message-error')
						.addClass('active');
				},
				submitHandler: function(form) { 
					$(form).submit(function () {
						$(this).ajaxSubmit();

						return false;
					});
				}
			});
		});*/

		$(function(){
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 300
			});
		});
	});
})(jQuery);