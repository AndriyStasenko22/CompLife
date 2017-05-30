$(document).ready(function() {

	// слайдер клієнтів
	var clients_slider = $('.clients_slider');
	clients_slider.owlCarousel({
		loop:true, 
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed: 1000,
		margin:90,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				margin: 30,
			},
			450:{
				margin: 50,
			},
			630:{
				items:3,
				margin: 70,
			},
			992:{
				items:4,
			},
			1200:{
				items:5,
			}
		}
	});
	
	var comand_slider = $('.comand_slider');
	comand_slider.owlCarousel({
		items:4,
		loop:true,
		// nav:true,
		margin: 35,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed: 1000,
	});

	$('.btn_next').click(function() {
		comand_slider.trigger('next.owl.carousel');
	})
	$('.btn_prev').click(function() {
		comand_slider.trigger('prev.owl.carousel');
	})

	// однакова висота блоків "Послуги"
	var max_height=[];
	$('.service  .service_item').each(function() {
		max_height.push($(this).height());
	});
	var maxh=Math.max.apply(Math,max_height);
	$('.service  .service_item').height(maxh);

	// кнопка 'на верх' 
	$('.button_up').click(function(event) {
		$('html, body').animate({ scrollTop: 0 }, 800)
	});

	// таби 'Портфоліо'
	$('.portfolio .portfolio_filter li a').click(function(event) {
		event.preventDefault();
		AddActive(this);
	});

	$('.tab_item').hover(function() {
		$(this).find('.tab_layout .layout_icon li').first().children('a').addClass('animated fadeInUp');
		$(this).find('.tab_layout .layout_icon li').last().children('a').addClass('animated fadeInDown');
		$(this).find('.tab_layout .layout_info').addClass('animated fadeIn');
	}, function() {
		$(this).find('.tab_layout .layout_icon li').first().children('a').removeClass('animated fadeInUp');
		$(this).find('.tab_layout .layout_icon li').last().children('a').removeClass('animated fadeInDown');
		$(this).find('.tab_layout .layout_info').removeClass('animated fadeIn');
	});

	$('.call_form input').focus(function() {
		$('.call_icon img.active').css({
			"-webkit-transform": "rotate(0deg)",
			"-moz-transform": "rotate(0deg)",
			"transform": "rotate(0deg)" /* For modern browsers(CSS3)  */
		}).removeClass('active');

		$('.call_icon img').eq($(this).index()).css({
			"-webkit-transform": "rotate(360deg)",
			"-moz-transform": "rotate(360deg)",
			"transform": "rotate(360deg)" /* For modern browsers(CSS3)  */
		}).addClass('active');

		console.log($(this).index());
	});


	$(window).resize(function() {
		$('.service  .service_item').height(maxh);
	});
});

function AddActive(elem){
	$(elem).parent().siblings('li').removeClass('active');
	$(elem).parent().addClass('active');
}