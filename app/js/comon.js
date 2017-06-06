$(document).ready(function() {
	
	new WOW().init();

	$('#Grid').mixItUp();

	// перлоадер
	$('#load').css('opacity', '1');
	if($('#load').css('opacity') == 1){
		var obt1 = new Vivus('load', {start: 'autostart', duration: 100},function (obj) {
			obj.el.classList.add('finished');
			$('.preloader_img').animate({'opacity': '1'},3000);
			$('#load').animate({'opacity': '0'},2000);
			$('.preloader').delay(2300).fadeOut(2000);

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
		$('.btn_next').click(function() {
			comand_slider.trigger('next.owl.carousel');
		});
		$('.btn_prev').click(function() {
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
		autoplayTimeout:3000,
		autoplaySpeed: 1000,
		margin:90,
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

	// однакова висота блоків "Послуги"
	var max_height=[];
	$('.service  .service_item').each(function() {
		max_height.push($(this).height());
	});
	var maxh=Math.max.apply(Math,max_height);

	if($(window).width()>768){
		$('.service  .service_item').height(maxh);
	}

	// кнопка 'на верх' 
	$('.button_up').click(function(event) {
		$('html, body').animate({ scrollTop: 0 }, 800)
	});

	// таби 'Портфоліо'
	$('.menu li a, .portfolio .portfolio_filter li a').click(function(event) {
		// event.preventDefault();
		AddActive(this);
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
	$('.call_form input').focus(function() {
		$('.call_icon img').removeClass('active');
		$('.call_icon img').eq($(this).index()).addClass('active');
	});

	// малювання процентних ліній
	var flagproc=1;
	var flagcall=1;
	$(document).scroll(function() {
		if($(window).scrollTop() >= $('.progres').offset().top-200 && flagproc){
			$('.progres_bar').each(function() {
				ProgresLine(this);
			});
			flagproc=0;
		}
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

	$('.mobile_menu_button').click(function() {
		$('.mob_menu').animate({'left': '0'}, 300);
		$('.overlay').css({
			'visibility': 'visible'
		});

	});
	$('.overlay').click(function() {
		$('.mob_menu').animate({'left': '-260'}, 300);
		$('.overlay').css({
			'visibility': 'hidden'
		});
	});

	$('.menu_go_to').click(function(event) {
		event.preventDefault();
		var block = $(this).data('block');
		$('html, body').animate({scrollTop: $(block).offset().top}, 800)
	});

	$(window).resize(function() {
		if($(window).width()>768){
			$('.service  .service_item').height(maxh);
		}
	});
});


//  функція додавання класу .active в елементах списку li
function AddActive(elem){
	$(elem).parent().siblings('li').removeClass('active');
	$(elem).parent().addClass('active');
}

// 
function ProgresLine(el){
	var line_width=0;
	var intervar=setInterval(function(){
		line_width++;
		$(el).children('.progres_line').width(line_width+'%');
		$(el).children('.progres_point').css('left', line_width+'%');
		$(el).find('.procent').html(line_width);
		if(line_width == $(el).data('size')){
			clearInterval(intervar);
		}
	},5);
}