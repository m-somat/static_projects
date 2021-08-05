$(document).ready(function(){
	$('img').click(function(){
		$('.search').animate({
			height: '100%',
			width: '100%',
			top: '0',
			left: '0',
			borderRadius: '0',
			backgroundColor: '#257be0',
		}, 250);

		$('img').fadeOut('slow');

		$('input').fadeIn(750);
		$('input').css({
			'top': '48%',
			'left': '40%',
			'font-size': '30px',
			'font-weight': 'bold'
		});
	});
});