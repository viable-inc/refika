window.WebFontConfig = {
	google: { families: ['Cormorant', 'Shippori+Mincho'] },
	active: function() {
		sessionStorage.fonts = true;
	}
};

(function() {
	var wf = document.createElement('script');
	wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();

$(document).on('click', 'a', function(e) {
	e.preventDefault();
	var link = $(this).attr('href');
	var rel = $(this).attr('rel');

	if (rel) {
		window.open(link, '_blank');
	} else {
		$('#fade').addClass('fade');
		setTimeout(function() {
			location.href = link;
			setTimeout(function() {
				$('#fade').removeClass('fade');
				$('.humburger').removeClass('menu_close');
				$('header').removeClass('menu_active');
			}, 200);
		}, 600);
	}
});

$(document).on('click', '.humburger', function() {
	$(this).toggleClass('menu_close');
	$('header').toggleClass('menu_active');
});

$(document).on('click', '.menu_shadow', function() {
	$('.humburger').removeClass('menu_close');
	$('header').removeClass('menu_active');
});

document.querySelectorAll('.kiroku_modal_button').forEach((item) => {
	item.addEventListener('click', (e) => {
		document.querySelector('.kiroku_modal').classList.add('show');
	});
});

document.querySelector('.kiroku_modal .close_button').addEventListener('click', () => {
	document.querySelector('.kiroku_modal').classList.remove('show');
});

document.querySelector('.kiroku_modal .bg').addEventListener('click', () => {
	document.querySelector('.kiroku_modal').classList.remove('show');
});

// window.addEventListener('DOMContentLoaded', function () {
$(document).ready(function() {
	var now = $(window).scrollTop();
	var wHeight = $(window).height();
	$(".parallax_img").each(function() {
		img_with_scroll($(this), now, wHeight);
	});
});

$(window).on('load scroll', function() {
	var now = $(window).scrollTop();
	var wHeight = $(window).height();
	var now_window = now + wHeight;

	// var reservation = $('#reservation').offset().top;
	// if (now_window > reservation) {
	// 	$('.reserve_button').addClass('none');
	// } else {
	// 	$('.reserve_button').removeClass('none');
	// }

	$(".parallax_img").each(function() {
		img_with_scroll($(this), now, wHeight);
	});
	$(".parallax_rapid").each(function(){
		rapid_scroll($(this), now);
	});
});

function img_with_scroll(target, now, wHeight) {
	var top = target.offset().top;
	var height = target.height();
	var now_window = now + wHeight;
	var max = top + height + wHeight;
	// if(top < now_window && now_window < max) {
		// var translate = ((now_window - top) / 10) + 8;
		var translate = ((now_window - top) / 200) - 16;
		target.children('img').css('transform', 'translate3d(0, ' + translate + '%, 0)');
	// }
};

function rapid_scroll(target, now) {
	var top = target.offset().top;
	var translate = (((now - top) / 20)) * -1.5;
	target.css('transform', 'translate3d(0, ' + translate + 'px, 0)');
};

