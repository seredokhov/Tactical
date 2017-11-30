$(function() {


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


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

	link.click(function(){

		if( $(this).siblings('.drop_ul').length ) {

			link.removeClass('active');
			$(this).addClass('active');
			ulDrop.not($(this).siblings()).slideUp();
			$(this).siblings('.drop_ul').slideToggle();
			return false
		}


	})
})