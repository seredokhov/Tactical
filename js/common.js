
/* Футер, выпадающие списки */
$(function(){
	var link = $('footer').find('h4');
	var drop = $('footer').find('.drop');
	link.click(function(){
		drop.not($(this).siblings()).slideUp();
		$(this).siblings('.drop').slideToggle();
	})
})

/* Выпадающее меню */
$(function(){
	var link = $('.menu_link');
	var menu = $('.drop_menu');
	var overlay = $('.overlay');
	var html = $('html');
	var body = $('body');
	link.click(function(){
		overlay.fadeIn(300);
		menu.addClass('open');
		html.css({'overflow-y' : 'hidden'});
		body.css({'padding-right' : '16px'});
		return false;
	})
	overlay.click(function(){
		$(this).fadeOut(300);
		menu.removeClass('open');
		setTimeout(function(){
			html.css({'overflow-y' : ''});
			body.css({'padding-right' : ''});
		}, 300);
	})
})


/* Каталог */
$(function(){

	var link = $('.main_ul').find('a');
	var ulDrop = $('.main_ul').find('.drop_ul');

	link.on('click', function(){

		if( $(this).siblings('.drop_ul').length ) {

			link.not($(this)).removeClass('active');
			$(this).toggleClass('active');
			ulDrop.not($(this).siblings()).slideUp();
			$(this).siblings('.drop_ul').slideToggle();
			return false
		}

	})
})
// Фильтр
$(function(){
	var link = $('.filter_ul').find('a');

	link.on('click', function(){
		$(this).toggleClass('active');
		return false;
	})
})
// сортиовка 
$(function(){
	var link = $('.sort_ul').find('a');

	link.on('click', function(){
		link.not($(this)).removeClass('active');
		$(this).addClass('active');
		return false;
	})
})


// Счетчик
$(function(){
	var input = $('.counter').find('input');
	var minus = $('.counter').find('.minus');
	var plus = $('.counter').find('.plus');
	var count = +input.val();

	plus.on('click', function(){
		count++;
		input.val(count);
		minus.removeClass('disable');
	})
	minus.on('click', function(){
		if(count > 1) {
			count--;
			input.val(count);
		}
		if(count == 1) {
			$(this).addClass('disable');
		}
	})

})

// Выбор цветов товара
$(function(){

	var input = $('.radio_block.color').find('input');
	input.each(function(){
		var val = $(this).val();
		$(this).siblings('span').css({
			"background-color" : val
		})
	})

})


// галерея
$(function(){

	var largeImg = $('.poto_block').find('img');
	var prewiew = $('.gallery_block').find('.prewiew');


	prewiew.on('click', function(){
		var src = $(this).find('img').attr('src');
		if( src != largeImg.attr('src') ) {
			largeImg.fadeOut(100, function(){
				largeImg.attr('src', src);
				largeImg.fadeIn(100);
			});
		}
	})
})