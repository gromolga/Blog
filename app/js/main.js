console.log($('document'))

$('document').ready(function(){
	$('.mobile').click(function(){
		$(this).parent('.nav_header').toggleClass('active');
	});
	$('.search').click(function(){
		$(this).parent('.search_header').toggleClass('active');
	});
});
