$(document).ready(function () {

	//funcion para el menu sticky
	var menu = $('.head_menu');
	var origOffsetY = menu.offset().top;

	function scroll() {
		if ($(window).scrollTop() >= origOffsetY) {
			$('.head_menu').addClass('sticky');
			$('main').addClass('menu-padding');
		} else {
			$('.head_menu').removeClass('sticky');
			$('main').removeClass('menu-padding');
		}


	}
	document.onscroll = scroll;
});