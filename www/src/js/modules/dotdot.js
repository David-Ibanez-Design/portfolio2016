define(['jquery', 'libdotdot'], function($, t){

	 lenghtTextAbout();

	  function lenghtTextAbout(){
	    if($(window).width()<680 && $(window).height()<310){

	       $(".ellipsis").dotdotdot({
	        watch: "window",
	        height    : 70
	      });

	    }
	    else{

	       $(".ellipsis").dotdotdot({
	        watch: "window",
	        height    : 170
	      });

	    }

	  }

	  $(window).on("resize", function(){lenghtTextAbout();});

})