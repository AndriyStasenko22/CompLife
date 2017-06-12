$(document).ready(function() {
	
	// initialize();

	new WOW().init();
	$('#Grid').mixItUp();

	$(".open_fancykbox").fancybox();

	// перлоадер
	// $('#load').css('opacity', '1');
	// if($('#load').css('opacity') == 1){
	// 	var obt1 = new Vivus('load', {start: 'autostart', duration: 100},function (obj) {
	// 		obj.el.classList.add('finished');
	// 		$('.preloader_img').animate({'opacity': '1'},3000);
	// 		$('#load').animate({'opacity': '0'},2000);
	// 		$('.preloader').delay(2300).fadeOut(2000);
	// 	});
	// }

	// мобільне портфоліо
	if($('.portfolio').length>0 && $(window).width()<768){
		$('.portfolio .filter_list > li').append('<div class="grid"></div>');
		$('.portfolio .filter_list > li:not(.active) .grid').css('display', 'none');	
		$('.portfolio .filter_list > li > a').each(function(index, el) {
			var data = $(this).data('filter');
			if(data != 'all'){
				$('#Grid').find(data).clone().appendTo($(this).siblings('.grid'));
			}
			else{
				$('#Grid .mix').clone().appendTo($(this).siblings('.grid'));
			}
		});
	}
	
	var home_slider =$('.home_slider');
	home_slider.owlCarousel({
		items:1,
		loop:true,
		smartSpeed:550,
		animateOut: 'fadeOut',
		dots:true,
		onChanged: function(event){
			setTimeout(function(){
				$('.owl-item').eq(event.item.index).find('.home_slid_item_text').addClass('animated fadeInUp').show();
			},1000);
		},
		onChange: function(event){
			$('.owl-item').find('.home_slid_item_text').hide().removeClass('animated fadeInUp');
		},
		onInitialized: function(event){
			setTimeout(function(){
				$('.owl-item').eq(event.item.index).find('.home_slid_item_text').addClass('animated fadeInUp').show();
			},600);
		}

	});
	
	// анімація текста
	home_slider.on('initialize.owl.carousel', function(event) {
		setTimeout(function(){
			$('.owl-item').find('.home_slid_item_text').addClass('animated fadeInUp').show();
		},1000);
	});

	// слайдер "Наша команда"
	var comand_slider = $('.comand_slider');
	comand_slider.owlCarousel({
		items:4,
		loop:true,
		margin: 45,
		responsiveClass:true,
		smartSpeed:550,
		responsive:{
			0:{
				items:2,
			},
			768:{
				items:3,
			},
			992:{
				items:4,
			}
		}
	});
		// кнопки слайдер "Наша команда"
		$('.comand .btn_next').click(function() {
			comand_slider.trigger('next.owl.carousel');
		});
		$('.comand .btn_prev').click(function() {
			comand_slider.trigger('prev.owl.carousel');
		});

	// слайдер "Отзывы"
	var say_slider = $('.say_slider');
	say_slider.owlCarousel({
		loop:true,
		// items: 2,
		margin: 115,
		smartSpeed:550,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			768:{
				items:2,
			}
		}
	});

	// слайдер "Наши клиенты"
	var clients_slider = $('.clients_slider');
	clients_slider.owlCarousel({
		loop:true, 
		autoplay:true,
		autoplaySpeed: 1000,
		margin:65,
		smartSpeed:550,
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
	// призупинка слайдера "Наши клиенты"
	$('.clients_slider .client_block').mouseover(function(){
		clients_slider.trigger('stop.owl.autoplay');
	});

	$('.clients_slider .client_block').mouseleave(function(){
		clients_slider.trigger('play.owl.autoplay');
	});

	var project_slider=$('.project_slider');
	project_slider.owlCarousel({
		loop:true, 
		autoplay:true,
		autoplaySpeed: 1000,
		margin:30,
		smartSpeed:550,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
			},
			992:{
				items:3,
			}
		}
	});
	// кнопки слайдер "Проект"
	$('.project .btn_next').click(function() {
		project_slider.trigger('next.owl.carousel');
	});
	$('.project .btn_prev').click(function() {
		project_slider.trigger('prev.owl.carousel');
	});

	// однакова висота блоків
	// if($('.service  .service_item').length > 1 && $(window).width()>768){
	// 	$('.service  .service_item').height(MaxHeight('.service  .service_item'));
	// }

	// if($('.services-block .services-caption').length > 1 && $(window).width()>768){
	// 	$('.services-block .services-caption').height(MaxHeight('.services-block .services-caption'));
	// }

	// кнопка 'на верх' 
	$('.button_up').click(function(event) {
		$('html, body').animate({ scrollTop: 0 }, 800)
	});

	// головне меню
	$('.menu li a').click(function(event) {
		AddActive(this);
	});

	$('.mob_menu li.li_dropdown > a').click(function(event) {
		event.preventDefault();
		$('.mob_dropdown_menu').slideToggle();
	});

	$('.menu .catalog > a').click(function(event) {
		event.preventDefault();
		$('.dropdown_menu').slideToggle();
	});


	// таби 'Портфоліо'
	$('.portfolio .filter_list > li > a').click(function(event) {
		event.preventDefault();
		AddActive(this);
		if($(window).width()<767){
			$(this).siblings('.grid').slideToggle('slow');
		}
	});


	// анімація tab_layout "Портфоліо"
	$('.tab_item').hover(function() {
		$(this).find('.tab_layout .layout_icon li').first().children('a').addClass('animated fadeInUp');
		$(this).find('.tab_layout .layout_icon li').last().children('a').addClass('animated fadeInDown');
		$(this).find('.tab_layout .layout_info').addClass('animated fadeIn');
	}, function() {
		$(this).find('.tab_layout .layout_icon li').first().children('a').removeClass('animated fadeInUp');
		$(this).find('.tab_layout .layout_icon li').last().children('a').removeClass('animated fadeInDown');
		$(this).find('.tab_layout .layout_info').removeClass('animated fadeIn');
	});

	// анімація картинок "Оставить заявку"
	$('.call_form input , .call_form textarea').focus(function() {
		$('.call_icon img').removeClass('active');
		$('.call_icon img').eq($(this).index()).addClass('active');
	});

	// процентні лінії
	if($('.progres').length >0){
		var flagproc=1;
		$(document).scroll(function() {
			if($(window).scrollTop() >= $('.progres').offset().top-200 && flagproc){
				$('.progres_bar').each(function() {
					ProgresLine(this);
				});
				flagproc=0;
			}
		});
	}

	// монітор svg
	if($('#mac').length >0){
		var flagcall=1;
		$(document).scroll(function() {
			if($(window).scrollTop() >= $('.call').offset().top-200 && flagcall){
				$('#mac, #mac_complife').css('opacity', '1');
				if($('#mac').css('opacity') == 1){
					var obt2 = new Vivus('mac', {start: 'autostart', duration: 100});
					var obt3 = new Vivus('mac_complife', {start: 'autostart', duration: 100}, function (obj) {
						obj.el.classList.add('finished');
					});
				}
				flagcall=0;
			}
		});
	}

	//мобільне бокове меню
	$('.mobile_menu_button').click(function() {
		$('.mob_menu').animate({'left': '0'}, 300);
		$('.overlay').css({
			'visibility': 'visible'
		});
		$('body').css('overflow', 'hidden');

	});
	$('.overlay').click(function() {
		$('.mob_menu').animate({'left': '-260'}, 300);
		$('.overlay').css({
			'visibility': 'hidden'
		});
		$('body').css('overflow', 'visible');
	});

	// якорь
	$('.menu_go_to').click(function(event) {
		var block = $(this).data('block');
		event.preventDefault();
		$('html, body').animate({scrollTop: $(block).offset().top}, 800);
	});

	$('.category-list > li > a').click(function(event) {
		event.preventDefault();
		AddActive(this);
	});
	$('.category-list > li.li_dropdown > a').click(function(event) {
		$(this).parent().toggleClass('open');
		$(this).siblings('.category_dropdown').slideToggle();
	});
});

//  функція додавання класу .active в елементах списку li
function AddActive(elem){
	$(elem).parent().siblings('li').removeClass('active');
	$(elem).parent().addClass('active');
}

// процентні лінії
function ProgresLine(el){
	var line_width = 0;
	var line_size = $(el).data('size');
	var line = $(el).children('.progres_line');
	var point = $(el).children('.progres_point');
	var procent = $(el).find('.procent');
	var intervar=setInterval(function(){
		line_width++;
		line.width(line_width+'%');
		point.css('left', line_width+'%');
		$(el).find('.procent').html(line_width);
		if(line_width == line_size){
			clearInterval(intervar);
		}
	},5);
}

// максимальна висота блоків
function MaxHeight(elem){
	var max_height=[];
	$(elem).each(function() {
		max_height.push($(this).height());
	});
	var maxh=Math.max.apply(Math,max_height);
	return maxh;
}