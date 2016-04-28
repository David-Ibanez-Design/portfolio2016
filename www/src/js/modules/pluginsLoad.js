define(['jquery'], function($,x){



 	// $(".content").mCustomScrollbar({
 	// 	axis:"y",theme:"minimal",scrollButtons:"enable",rollbarPosition: "inside",

		// callbacks:{
		// 	              whileScrolling:function(){
		// 	              if($('.menu-projects-side li').hasClass('current'))
		// 	              {
		// 	                var posTri = ($("li.current").offset().top) - $(window).scrollTop();
		// 	                $('.triangle-select').css('top',posTri+34);
		// 	              }


		// 	              }
		// 	        }

 	// });

     $(function(){
	 	$("img.lazy").lazyload({
		    effect : "fadeIn"
		});
	 })


})
