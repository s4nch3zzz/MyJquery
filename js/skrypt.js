$(function(){
	$('#czerwony').mouseover(function(){
		$('p').css('background','red');
	});
	$('#czerwony').mouseout(function(){
		$('p').css('background','white');
	});

	$('#zielony').mouseover(function(){
		$('p').css('background','green');
	});
	$('#zielony').mouseout(function(){
		$('p').css('background','white');
	});

	$('#niebieski').mouseover(function(){
		$('p').css('background','blue');
	});
	$('#niebieski').mouseout(function(){
		$('p').css('background','white');
	});
});
