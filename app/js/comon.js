$(document).ready(function() {
	
	// initialize();
	wow = new WOW(
	{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       100,          // default
                      mobile:       true,       // default
                      live:         true        // default
                  }
                  )
	wow.init();

	// плагін MixItup для профіля
	if ($('#Grid').length > 0) {
		var mix = mixitup('#Grid');
	}

	$(".open_fancykbox").fancybox();

	// маска введення телефону
	$('[id$=\'_phone\']').mask("+38 (099) 999-99-99"); 


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

	// слайдер 'ВАС МОЖЕТ ЗАИНТЕРЕСОВАТЬ'
	var special_offer_slider = $('.special-offer-slider');
	special_offer_slider.owlCarousel({
		loop:true, 
		autoplay:true,
		autoplaySpeed: 1000,
		margin: 30,
		smartSpeed:550,
		responsiveClass:true,
		stagePadding: 20,
		responsive:{
			0:{
				items:1,
				margin: 50
			},
			400:{
				items:2,
			},
			650:{
				items:3,
				margin: 30
			},
			992:{
				items:4,
			},
			1200:{
				items:5
			}
		}
	});

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
		$(this).siblings('.mob_dropdown_menu').slideToggle();
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
	if($('.progres').length > 0){
		var flagproc=true;
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

	// бокове мобільне меню, бокова корзина
	$('.mobile_menu_button, .header_busket>a').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('mobile_menu_button')){
			$('.mob_menu').addClass('active');
		}
		else{
			$('.sidebar-cart').addClass('active');
		}
		$('.overlay').addClass('active')
		$('body').addClass('fixed');
	});
	$('.overlay').click(function() {
		$('.mob_menu.active, .sidebar-cart.active, .overlay.active').removeClass('active');
		$('body').removeClass('fixed');
	});

	// якор
	$('.menu_go_to').click(function(event) {
		var block = $(this).data('block');
		if($(block).length >0){
			event.preventDefault();
			$('html, body').animate({scrollTop: $(block).offset().top}, 800);
		}
	});

	$('.category-list > li > a, .paginator li:not(.next) a').click(function(event) {
		event.preventDefault();
		AddActive(this);
	});

	$('.category-list > li.li_dropdown > a').click(function(event) {
		$(this).parent().toggleClass('open');
		$(this).siblings('.category_dropdown').slideToggle();
	});

	// діапазон цін
	if($('#slider-range').length>0){
		$( "#slider-range" ).slider({
			range: true,
			min: 1000,
			max: 30000,
			values: [ 1000, 30000 ],
			slide: function( event, ui ) {
				$( "#price_min" ).val( ui.values[ 0 ] );
				$( "#price_max" ).val( ui.values[ 1 ] );
			}
		});
		$( "#price_min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
		$( "#price_max" ).val($( "#slider-range" ).slider( "values", 1 ) );

		$('input#price_min').change(function() {
			var value1 = $('#price_min').val();
			var value2 = $('#price_max').val();
			if(parseInt(value1)>parseInt(value2)){
				value1=value2;
				$('input#price_min').val(value1);
			}
			if(parseInt(value1) < $("#slider-range").slider("option", "min")){
				value1=$("#slider-range").slider("option", "min");
				$('input#price_min').val(value1);
			}
			$( "#slider-range" ).slider( "values", 0,  value1);
		});

		$('input#price_max').change(function() {
			var value1 = $('#price_min').val();
			var value2 = $('#price_max').val();
			if(parseInt(value1)>parseInt(value2)){
				value2=value1;
				$('input#price_max').val(value2);
			}
			$( "#slider-range" ).slider( "values", 1,  value2);
		});
	}

	// змінна картинок товара в картці товара, додавання data-image
	$('.card-slider-img>a').click(function(event) {
		event.preventDefault();
		$('.card-slider-img.active').removeClass('active');
		$(this).parent().addClass('active');
		var img = $(this).data('image');
		$('.card-image-place img').attr('src', img);
		$('.card-image-place a').attr('data-image', img);
	});

	var model_slider= $('.model_slider');
	

	// fancybox товару
	$(".card-image .card-image-place a").click(function () {
		
		// для великих екранів використоється owl carusel, розташування картинок не важлива
		if( $(window).width()>767 ){
			var active_img = $(this).attr('data-image'); // адреса вибраної картинки
			var slide = model_slider.children('img[src="'+active_img+'"]').index(); // індекс вибраної картинки, необхідний для вказання початкового слайду 
			
			// ініціалізація слайдера товару, початковий слайд - індекс вибраної картинки
			model_slider.owlCarousel({
				loop:true,
				items: 1,
				dots: true,
				dotsData: true,
				margin: 10,
				startPosition: slide
			});
			$.fancybox({
				content: $('#product_fancybox'),
				'afterLoad': function(){
					$('#product_fancybox').css({  // відкриття слайдера в fancybox
						'height': 'auto',
						'overflow': 'auto',
						'visibility': 'visible',
						'padding' : "25px 0"
					});
				},
				'afterClose': function() { 
					model_slider.trigger('destroy.owl.carousel'); // після закриття fancybox слайдер знищується
					$('#product_fancybox').removeAttr('style');
				}
			});
		}
		// для мобільних використоється fancybox галерея
		else{
			//  створюється масив з адресами картинок
			var srcimg = [];
			var  href = {href: $('.card-slider .card-slider-img.active a').attr('data-image')}; // першою додається адреса активної картинки
			srcimg.push(href);
			$('.card-slider .card-slider-img:not(.active) a').each(function(index, el) {
				href = {href: $(this).attr('data-image')}; // додаються адреси картинок, крім активної
				srcimg.push(href);
			});
			$.fancybox.open(
				srcimg,
				{
					type: "image",
					afterShow: function() {
						$('.fancybox-wrap').swipe({ 
							swipe : function(event, direction) {
								if (direction === 'left' || direction === 'up') {
									$.fancybox.prev( direction );
								} else {
									$.fancybox.next( direction );
								}
							}
						});

					},
				});
		}
	});

	// кнопки слайдер товару fancybox
	$('#product_fancybox .btn_next').click(function() {
		model_slider.trigger('next.owl.carousel');
	});
	$('#product_fancybox .btn_prev').click(function() {
		model_slider.trigger('prev.owl.carousel');
	});

	// додати "отзив"
	$('card .block_stars>a.card_coment').click(function(event) {
		var element = $(this).attr('href');
		var pos = $(element).parents('.card_tab').offset().top;
		$('.card_tab_list li.active').removeClass('active');
		$(".card_tab_list a[href='"+ element +"']").parent().addClass('active');
		$("html, body").animate({'scrollTop': pos-50}, 500);

	});

	// блок з кнопками "Вхід / Реєстрація"
	$('.header_login>a').click(function(event) {
		event.preventDefault();
		$('.authorization-box').slideToggle();
	});

	// форми "Реєстрація", "Авторизація", "Відновлення пароля", "Зворотній звязок", "Змінити пароль"
	$('.registration, .login, .password-recovery, .callback-button, .change-password').click(function(event) {
		event.preventDefault();
		$('.authorization-box').css('display', 'none'); // приховування блоку з кнопками "Вхід / Реєстрація"
		var object = $(this).attr('href'); // id форми, яка має відкриватися в fancybox
		$.fancybox({
			content: $(object),
			afterShow: function(){
				// після відкриття fancybox приховувати бокове меню, козрину та оверлей, заборонти скролл для body 
				$('.show-password').siblings('input').attr('type', 'password');
				$('.sidebar-cart, .mob_menu, .overlay, .show-password').removeClass('active');
				$('body, html').css('overflow', 'hidden');
			},
			afterClose: function(){
				// після закриття fancybox дозволити скролл для body та очистити поля відповідної форми 
				$(object).find('input').val("");
				$('body, html').removeAttr('style');
			}
		});
	});

	// кількість замовленого товару
	$('.checkout-product-quantity button').click(function(event) {
		var val = $(this).siblings('.product-quantity').val();
		console.log(val);
		if($(this).hasClass('product-more')){
			val++;
			$(this).siblings('.product-quantity').val(val);
		}
		else{
			if(val <=1){
				$(this).siblings('.product-quantity').val('1');
			}
			else{
				val--;
				$(this).siblings('.product-quantity').val(val);
			}
		}
	});

	// перевірка вибору "Нової пошти"
	if( ! $('.checkout_delivery_info input[type="checkbox"]').prop("checked")){
		$('.checkout_delivery_info #checkoutform').attr('disabled', 'disabled');
	}
	else{
		$('.checkout_delivery_info #checkoutform').removeAttr("disabled");
	}
	$('.checkout_delivery_info input[type="checkbox"]').change(function(event) {
		if( ! $(this).prop("checked")){
			$('.checkout_delivery_info #checkoutform').attr('disabled', 'disabled');
		}
		else{
			$('.checkout_delivery_info #checkoutform').removeAttr("disabled");
		}
	});



	// однакова висота комірок таблиці "Сравнить"
	if($('.compare_wrap .table').length>0){
		HeightCell();

		$('.compare_product .delete_compare_product').click(function(event) {
			event.preventDefault();
			var colum = $(this).parent().index()+1;
			$(this).closest('table').find('tr').each(function() {
				$(this).find('td:nth-child('+colum+')').remove();
				$(this).find('th:nth-child('+colum+')').remove();
			});
		});
	}

	//  валідація форми
	// $(document).on('submit', '#registration-form, #recovery-form, #login-form', function(event) {
	// 	// if( !validation(this) ){
	// 		// return false;	
	// 	// }
	// 	validation(this);
	// 	return false;

	// });

	// вибір мови
	$('.language a').click(function(event) {
		event.preventDefault();
		AddActive(this);
	});

	$('.products_tab_item .add-compare').click(function(event) {
		event.preventDefault();
		$(this).addClass('active');
	});

	// кнопка відображення введеного пароля в формі "Реєстрації/Авторизації"
	$('.show-password').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var pass = $(this).siblings('input');
		pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
	});

	// анімація маркера меню на сотрінці "Профіль користовача"
	$('.profile-menu a').click(function(event) {
		event.preventDefault();
		$('.profile-menu a.active').removeClass('active');
		$(this).addClass('active');
		if( $(window).width() > 767){
			horizontal_marker(this, '1');
		}
		else{
			vertical_marker(this, '1');
		}
	});

	$('#datetimepicker').datepicker({
		language: 'ru',
		clearBtn: true
	});
});

$(window).on('load', function(event) {
	event.preventDefault();
	if( $(window).width() > 767){
		horizontal_marker($('.profile-menu a.active'), 'load');
	}
	else{
		vertical_marker($('.profile-menu a.active'), 'load');
	}
});

$(window).on('resize', function(event) {
	event.preventDefault();
	if( $(window).width() > 767){
		horizontal_marker($('.profile-menu a.active'), 'load');
	}
	else{
		vertical_marker($('.profile-menu a.active'), 'load');
	}
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

function proverka(input) {
	input.value = input.value.replace(/[^\d]/g, '');
};

function HeightCell(){
	$('.compare_wrap .table .fixed-colum').each(function() {
		$(this).height($(this).next('td, th').height()); 
	});
}


function validation(form){
	$(form).find('.form_row').each(function(index, el) {
		var value = $(this).children('input').val();
		var label_text = $(this).children('label').text();
		if(value.length == 0){
			$(this).children('.help-block').text('Необходимо заполнить поле "' + label_text + '"');
		}
	});
}


function horizontal_marker(active, flag){
	var marker = $('.profile-menu .menu-marker');
	var position = $(active).position().top; // позиція зверху активного пункта меню
	var heigth = $(active).height(); // висота активного пункта меню
	var marker_position = position + heigth / 2; // позиція маркера
	
	// додавання початкової позиції маркера при завантажені сторінки 
	if(flag === 'load'){
		marker.removeAttr('style');
		marker.css({
			'top': marker_position,
			'opacity': '1'
		});
		$( $(active).attr('href') ).addClass('active'); // відображення блока з відповідним id з пункта меню
	}
	//  анімація маркера при виборі пункта меню
	else{
		marker.animate({'top': marker_position}, 400);
		$('.profile .tab.active').removeClass('active'); // приховування непотрібних блоків
		$($(active).attr('href')).addClass('active'); // відображення блока з відповідним id з пункта меню
	}
}

function vertical_marker(active, flag){
	var marker = $('.profile-menu .menu-marker');
	var position = $(active).position().left; // позиція зверху активного пункта меню
	var width = $(active).width(); // висота активного пункта меню
	var marker_position = position + width / 2; // позиція маркера
	
	// додавання початкової позиції маркера при завантажені сторінки 
	if(flag === 'load'){
		marker.removeAttr('style');
		marker.css({
			'left': marker_position,
			'opacity': '1'
		});
		$( $(active).attr('href') ).addClass('active'); // відображення блока з відповідним id з пункта меню
	}
	//  анімація маркера при виборі пункта меню
	else{
		marker.animate({'left': marker_position}, 400);
		$('.profile .tab.active').removeClass('active'); // приховування непотрібних блоків
		$($(active).attr('href')).addClass('active'); // відображення блока з відповідним id з пункта меню
	}
}