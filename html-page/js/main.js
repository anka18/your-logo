$('.carousel').carousel({
	interval: 3000
});


$(".toggle-mnu").click(function() {
	$(this).toggleClass("on");
	$(".hidden-menu").slideToggle(300);
	return false;
});