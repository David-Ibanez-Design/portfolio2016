define(['jquery', 'scrollBar'], function($){


 $( document ).ready(function() {

     var resumer = (function(){


     	  var currentLang = $('.wrapper__about h2').attr('data-lang');

          // Init global variables
          var $btn_resumer   = $('.btn__shadows');
          var $box_resumer   = $('.wrapper__box-cv');
          var $aplat    	 = $('.wrapper__aplat');
          var $blurPage    	 = $('.webpage');




          // Init function
          customScrollBar();

          //Biding Event
          $btn_resumer.on('click', OpenResumer);
          $aplat.on('click', closeResumer);
          $aplat.on('mouseenter', displayCross);


          function customScrollBar(){
          	$('#js_box-cv').simplebar({autoHide: false});
          }


          function OpenResumer(){

				if($(window).width()>800 && (currentLang == 'en' || currentLang == 'ja') )
					{

				    $blurPage.addClass('webpage-blur');
				    $('body, html').css('overflow-y', 'hidden');

				    $box_resumer.css('display', 'block');
				    $aplat.css('display', 'block');

				    $aplat.delay(100).animate({opacity : 0.8},700);

				    $box_resumer.delay(500).animate({top : '55%', opacity : 1},700);

				}else{

				 	window.location = 'resumer/pdf.php';
				}
          }

          function closeResumer(){

		    	$aplat.removeClass('cross-cursor');

		    	$box_resumer.animate({top : '70%', opacity : 0},700, function(){

			    	$aplat.delay(100).animate({opacity : 0},700);
			    	$aplat.css('display', 'none');
			    	$box_resumer.css('display', 'none');
			        $('body, html').attr( "style", "" );

		    	})

	    		$blurPage.delay(500).removeClass('webpage-blur');
          }

          function displayCross(){

				if($box_resumer.is(':visible'))
				 	 {
					 	$aplat.addClass('cross-cursor');
					 }
          }

    })();

  })

})