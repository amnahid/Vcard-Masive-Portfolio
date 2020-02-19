// ---------------------Preloader--------------------- //
$(window).on('load', function(){
	setTimeout(function(){
		$('.preloader').addClass('loaded');
		$('.preloader-box').addClass('hide')
	},150);
});
// ---------------------Explore More Button--------------------- //
$(document).ready(function(){
	$('#explore-more-button').click(function(){
		$('.vcard').attr('id','done');
	setTimeout(function(){
		window.location.assign('explore.html');
	},600);
	});
});