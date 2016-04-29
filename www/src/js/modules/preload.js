define(["jquery", "jquery.ui" ,'svg'], function($, u, s){

    var logoIntro = (function(){

           // Init global variables
           var wrapper =
           {
              height:'100%',
              width:'100%',
              top: 0,
              left:0,

            };

          // Caching dom El
          var $logoCenter  = $(".wrapper__logo--index");
          var $iconLogo    = $('.icon-logo-loading');
          var $wrapperMenu = $(".wrapper__menu");

          // Init function
          logoHangler();

          // load projects images in the background after homepage has loaded
          function preloaderInbrowser() {
            if (document.getElementById) {
              // document.getElementById("preload-08").style.background = "url(src/img/film-in_browser.png)";
              // document.getElementById("preload-09").style.background = "url(src/img/elsa-in_browser.png)";
              // document.getElementById("preload-10").style.background = "url(src/img/portail-in_browser.png)";
              // document.getElementById("preload-11").style.background = "url(src/img/isucare-in_browser.png)";
              // document.getElementById("preload-12").style.background = "url(src/img/lsp-in_browser.png)";
              // document.getElementById("preload-13").style.background = "url(src/img/portfolio-in_browser.png)";
              // document.getElementById("preload-14").style.background = "url(src/img/osis-in_browser.png)";

              if($('.wrapper__about h2').attr('data-lang') == 'en'){
                document.getElementById("preload-15").style.background = "url(src/img/cv-en.jpg)";
              }
              else{
                document.getElementById("preload-16").style.background = "url(src/img/cv-ja.jpg)";
              }
            }
          }

          function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
              window.onload = func;
            } else {
              window.onload = function() {
                if (oldonload) {
                  oldonload();
                }
                func();
              }
            }
          }


        // load projects images during the loading animation
        function preloadimages(arr){
            var newimages=[], loadedimages=0
            var postaction=function(){}
            var arr=(typeof arr!="object")? [arr] : arr
            function imageloadpost(){
                loadedimages++
                if (loadedimages==arr.length){
                    postaction(newimages) //call postaction and pass in newimages array as parameter
                }
            }
            for (var i=0; i<arr.length; i++){

                newimages[i] = new Image();i
                newimages[i].src=arr[i]
                newimages[i].onload=function(){
                    imageloadpost()
                }

            }
            return { //return blank object with done() method
                done:function(f){
                    postaction=f || postaction //remember user defined callback functions to be called when images load
                }
            }
        }




          function logoHangler(){

            if($(window).width()>1040 && ! sessionStorage.firstVisit)
               {

                     var element = SVG.select('rect#st1');

                     element.animate(500).move(0,130).animate(500).move(-350,130);

                    function animeLoop()
                    {

                           element.animate(500).move(0,130).animate(500).move(-350,130);

                    }

                  var myTimer = setInterval( animeLoop, 500 );

                  preloadimages(['src/img/fond-isucare.jpg', 'src/img/fond-test2.jpg', 'src/img/fond-lsa-portail.jpg','src/img/fond-lsp.jpg', 'src/img/fond-portfolio.jpg', 'src/img/fond-osis.jpg', 'src/img/fond-film.jpg']).done(function(images){

                          element.stop(true).x(-350, 130)
                          clearInterval(myTimer);
                          addLoadEvent(preloaderInbrowser);  // preload projects page images
                          sessionStorage.firstVisit = false;
                          stopAnimation();

                  })
                }

                else
                {

                    $logoCenter.css({width: '100px', height : '100px' , top:'50%', left:'50%', marginTop: '-50px', marginLeft:'-50px'});
                    $wrapperMenu.css({ zIndex: '53' });
                }
          };

          function stopAnimation(){

                  if($(window).width()>1040)
                  {

                    wrapper.height = 100;
                    wrapper.width = 100;
                    wrapper.top = '50%';
                    wrapper.left = '50%';

                  }

                   $logoCenter.animate({  width: wrapper.width + 'px',
                                               height: wrapper.height + 'px',
                                               top: wrapper.top,
                                               left: wrapper.left,
                                               marginTop: -(wrapper.height/2) + 'px',
                                               marginLeft: -(wrapper.width/2) + 'px'}, 600, 'easeInOutCubic' , function(){

                                                  $logoCenter.css({ zIndex: '48' });
                                                  $iconLogo.css({ zIndex: '49' });
                                                  $wrapperMenu.css({ zIndex: '53' });

                                                });
          }



    })();

})