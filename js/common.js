
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
	var close = menu.find('.close_menu');
	var overlay = $('.overlay');
	var html = $('html');
	var body = $('body');
	link.click(function(){
		overlay.fadeIn(300);
		menu.addClass('open');
		/*html.css({'overflow-y' : 'hidden'});
		body.css({'padding-right' : '16px'});*/
		return false;
	})
	overlay.click(function(){
		$(this).fadeOut(300);
		menu.removeClass('open');
		/*setTimeout(function(){
			html.css({'overflow-y' : ''});
			body.css({'padding-right' : ''});
		}, 300);*/
	})
	close.on('click', function(){
		menu.removeClass('open');
		overlay.fadeOut(300);
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

// Выпадение каталога на маленьких разешениях 
$(function(){
	var link = $('.aside_section').find('.title');
	var ul = $('.aside_section').children('ul');
	link.on('click', function(){
		ul.not($(this).siblings()).slideUp();
		$(this).siblings('ul').slideToggle();
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


/*   Модальное окно  */

$(function(){
	var linkCall = $('a.callback');
	var byLink = $('a.by_one_click');
	var linkConf = $('a.conf');
	var modalCall = $('.modal.callback');
	var modalConf = $('.modal.conf');
	var overlay = $('.overlay');
	var close = $('.modal_close');

	linkCall.add(byLink).add(linkConf).click(function(){
		overlay.fadeIn();
		modalCall.fadeIn();
		return false;
	})


	overlay.click(function(){
		$(this).fadeOut();
		$('.modal').fadeOut();
	})
	close.click(function(){
		overlay.fadeOut();
		$('.modal').fadeOut();
	})

});

/* Модальное окно с таблицей */

$(function(){
	var link = $('a.size_table'),
		modal = $('.size_table_modal'),
		close = modal.find('.modal_close'),
		close_link = modal.find('.close_link'),
		overlay = $('.overlay');

	link.on('click', function(){
		modal.fadeIn();
		overlay.fadeIn();
		return false;
	});
	overlay.add(close).add(close_link).on('click', function(){
		modal.fadeOut();
		overlay.fadeOut();
		return false;
	});
})

/*  Инициализация маски */
$(function($){
$("#phone").mask("+7(999) 999-9999");
});

/*  Инициализация скролла */
$(function(){
    $('.scrollbar-rail').scrollbar();
});


// Изменение сетки
$(function(){
	var link = $('#grid_control_link'),
		ul = $('#grid_control_ul'),
		innerLink = ul.find('a');

		link.on('click', function(){
			ul.slideToggle(100);
			return false;
		})
		innerLink.on('click', function(){
			var txt = $(this).text();
			link.text(txt);
			ul.slideUp(100);
			return false;
		})

});