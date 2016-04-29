define(['jquery', 'libTyped'], function($, t){

 $( document ).ready(function() {

	if($(window).width()>540 && $('.wrapper__about h2').attr('data-lang') == 'en' )
	{
 	  $(".wrapper__about h2 span").typed({strings: ["web design", "front-end development"],loop: true,typeSpeed: 40,backSpeed: 10,backDelay: 2000,contentType: 'text',loopCount: true,showCursor: true,});
	}

 }

})









