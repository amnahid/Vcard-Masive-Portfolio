/**	
	* Template Name: Massfolio
	* Version: 1.0	
	* Template Scripts
	* Author: Tech Fountain
	* Author URI: http://tech-fountain.com/

	explore JS
	
	1. Preloader
	2. WOW.js
	3. Sidebar
	4. Scroll Back to Up Button
	5. Service Info Button
	6. Tell One Info Box
	7. Tell Two Info Box
	8. Tell Three Info Box
	9. Tell Four Info Box
	10. Testimonial carousel 
	11. Contact Form
	12. Footer
	
**/

// ---------------------Preloader--------------------- //
$(window).on('load', function(){
	setTimeout(function(){
		$('.preloader').addClass('loaded');
	},500);
	$('.preloader-box').addClass('hide')
});
// ---------------------WOW.js--------------------- //
new WOW().init();
// ---------------------Sidebar--------------------- //
$(document).ready(function(){
	$('.openingButton').click(function(){
		$('.sidebar').toggleClass('positioned');
	});
});
// ---------------------Scroll Back to Up Button--------------------- //
window.addEventListener('scroll',function(){
	var scroll = window.scrollY;
	if(scroll>100){
		$('.ScrollUpButton').attr("id","ScrollUpButton");
	}
	else{
		$('.ScrollUpButton').attr("id","");
	}
})
// ---------------------Service Info Button--------------------- //
var infobuttonone = document.querySelector('#info-button-one');
var infobuttontwo = document.querySelector('#info-button-two');
var infobuttonthree = document.querySelector('#info-button-three');
var infobuttonfour = document.querySelector('#info-button-four');
var infoboxone = document.querySelector('.tellOne');
var infoboxtwo = document.querySelector('.tellTwo');
var infoboxthree = document.querySelector('.tellThree');
var infoboxfour = document.querySelector('.tellFour');
// ---------------------Tell One Info Box--------------------- //
infobuttonone.addEventListener('mouseover',function(){
	infobuttonone.addEventListener('mousemove',function(e){
		infoboxone.setAttribute('style','left:'+ (e.pageX+15) + 'px;top:' + (e.pageY+15) + 'px;z-index:9;');
	});
});
infobuttonone.addEventListener('mousemove',function(){
	infobuttonone.addEventListener('mouseout',function(){
		infoboxone.setAttribute('style','');
	});
});
// ---------------------Tell Two Info Box--------------------- //
infobuttontwo.addEventListener('mouseover',function(){
	infobuttontwo.addEventListener('mousemove',function(e){
		infoboxtwo.setAttribute('style','left:'+ (e.pageX+15) + 'px;top:' + (e.pageY+15) + 'px;z-index:9;');
	});
});
infobuttontwo.addEventListener('mousemove',function(){
	infobuttontwo.addEventListener('mouseout',function(){
		infoboxtwo.setAttribute('style','');
	});
});
// ---------------------Tell Three Info Box--------------------- //
infobuttonthree.addEventListener('mouseover',function(){
	infobuttonthree.addEventListener('mousemove',function(e){
		infoboxthree.setAttribute('style','left:'+ (e.pageX+15) + 'px;top:' + (e.pageY+15) + 'px;z-index:9;');
	});
});
infobuttonthree.addEventListener('mousemove',function(){
	infobuttonthree.addEventListener('mouseout',function(){
		infoboxthree.setAttribute('style','');
	});
});
// ---------------------Tell Four Info Box--------------------- //
infobuttonfour.addEventListener('mouseover',function(){
	infobuttonfour.addEventListener('mousemove',function(e){
		infoboxfour.setAttribute('style','left:'+ (e.pageX-215) + 'px;top:' + (e.pageY+15) + 'px;z-index:9;');
	});
});
infobuttonfour.addEventListener('mousemove',function(){
	infobuttonfour.addEventListener('mouseout',function(){
		infoboxfour.setAttribute('style','');
	});
});
// ---------------------Testimonial carousel--------------------- //
$(function(){
	$("#customers-testimonial").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		look:true,
		loop:true,
		autoPlayHoverPause:true
	});
});
// ---------------------Contact Form--------------------- //
$('.fname-input').focus(function(){
	$('.fname-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.fname-input').focusout(function(){
		if($(this).val() == ''){
			$('.fname-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.fname-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.lname-input').focus(function(){
	$('.lname-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.lname-input').focusout(function(){
		if($(this).val() == ''){
			$('.lname-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.lname-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.mobile-number-input').focus(function(){
	$('.mobile-number-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.mobile-number-input').focusout(function(){
		if($(this).val() == ''){
			$('.mobile-number-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.mobile-number-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.email-input').focus(function(){
	$('.email-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.email-input').focusout(function(){
		if($(this).val() == ''){
			$('.email-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.email-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.message-input').focus(function(){
	$('.message-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.message-input').focusout(function(){
		if($(this).val() == ''){
			$('.message-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.message-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
// ---------------------Footer--------------------- //
// Year //
var time = new Date();
var year = time.getFullYear();
document.querySelector('#footer-year').innerHTML = time.getFullYear();