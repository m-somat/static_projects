$(document).ready(function(){
	$('li').mouseenter(function(){
		$(this).css({
			'border-bottom': '2px solid #1c94e0'
		})
	});
	$('li').mouseleave(function(){
		$(this).css({
			'border-bottom': '0 solid #1c94e0'
		})
	});
});