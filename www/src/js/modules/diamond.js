
define(['jquery', 'jqueryUI'], function($, u){

    var losange = (function(){

          // Init global variables
          var diamondsHover = false;
          var tile_width = 225;
          var artistTrigger = false;
          var flowerSpeed = 500;

          // Caching dom El
          var $el              = $(".wrapper__diamonds");
          var $diamondsWrapper = $el.find('.diamond__itemsWrapper');
          var $diamonds        = $el.find('.diamond__items');
          var $diamondsContour = $el.find('.diamond__contour');
          var $diamondsHolder  = $el.find('.diamond');

          // Init function
          dimondsProjectsLoader();

          //Biding Event
          $diamonds.on('mouseenter', hoverDiamonds);
          $diamonds.on('mouseleave', leaveDiamonds);
          $(window).on('resize', dimondsProjectsLoader);


          function dimondsProjectsLoader(){
                        
              sizeProjects(); 
              if($(window).width() > 1024)
              {
                   positionProjects();
                   artistTrigger = true;
                } 
                else 
                {
                  positionProjects();
                  artistTrigger = true; 
                }
                 sizeProjects();
          }

          function hoverDiamonds(event){

              $(this).find('.diamond__contour').stop().animate({'width':'153px','height':'153px','marginLeft':'-76.5px','marginTop':'-76.5px',},500, 'easeInOutCubic', function(){
                  $(this).find('h6').stop().animate({'opacity':'1'},600, 'easeInOutCubic');
                  $(this).find('span').stop().animate({'opacity':'1', 'top': '50%'},300, 'easeInOutCubic');
              })
              $diamonds.not(this).stop().animate({'opacity':1},100);

          }

           function leaveDiamonds(){

              $(this).find('h6').css({'opacity':'0'})
              $(this).find('span').css({'opacity':'0', 'top': '80%'})       
              $(this).find('.diamond__contour').stop().animate({'width':'255px','height':'255px','marginLeft':'-127.5px','marginTop':'-127.5px',},300, 'easeInOutCubic');
              $diamonds.not(this).stop().animate({'opacity':1},100);

          }

           function sizeProjects(){

              var wWidth = $(window).width();
              var wHeight = $(window).height();
              diamonds_height = 600;
              var zoom_factor = 1;
              
              /////////////////////////////////// ENTRE 1024 et 1600////////////////////////////////////////////////////
              
              if(wWidth > 1024 && wWidth < 1600)
                { // if gallery is still landscape but too narrow to fit the diamonds, elements will scale down.

                   var container_size = Math.round(wWidth / 2) - 200;   
                   var container_size_H = $diamonds.height()*2-100;

                    if(wHeight - 200 < container_size){container_size = wHeight - 200;}
                   zoom_factor = container_size / 600;
                  var left_margin = Math.round((Math.round(wWidth / 2) - container_size) / 2);
                  var top_margin = Math.round(Math.round(wHeight - container_size_H) / 2) - 30;
                
                
                  $el.css({"width" : container_size + "px", "height" : container_size_H + "px", "top" : top_margin + "px", "left" : left_margin + "px"});
                  $diamondsHolder.css({"height" : container_size_H + "px", "transform" : 'scale(' + zoom_factor + ')', "-webkit-transform" : 'scale(' + zoom_factor + ')', '-moz-transform': 'scale(' + zoom_factor + ')', 'top' : 0, 'left' : '0'});
                
              } 

                /////////////////////////////////// INFERIEUR OU EGALE A 1024////////////////////////////////////////////////////

              else if(wWidth <= 1024)
              {
                var container_size = 600;
                var images_holder_top = "";
                
                if(wWidth < 401){
                  container_size  = 360;
                  zoom_factor = 0.6;  
                }

                  $el.css({"width" : "", "height": "", "top" : '', "left": ''});
                  $diamondsHolder.css({"height" : container_size + "px", "transform" : 'scale(' + zoom_factor + ')', "-webkit-transform" : 'scale(' + zoom_factor + ')', '-moz-transform': 'scale(' + zoom_factor + ')', '-ie-transform': 'scale(' + zoom_factor + ')', "top": images_holder_top});

              }

                /////////////////////////////////// SUPERIEUR A 1600 ////////////////////////////////////////////////////

              else
              {    
                  var container_size = 600;
                  var container_size_H = (container_size/2)+100;

                  zoom_factor = 1;
                  var left_margin = Math.round((Math.round(wWidth / 2) - container_size) / 2);
                  var top_margin = Math.round(Math.round(wHeight - 400) / 2);
                  $el.css({"width" : container_size + "px", "height" : container_size_H + "px", "top" : top_margin + "px", "left" : left_margin + "px"});
              }

                  var diamonds_top = 'inherit';


              /////////////////////////////////// INFERIEUR A 1025 ////////////////////////////////////////////////////

              var diamonds_top = 'inherit';
              if(wWidth < 1025){
                var diamonds_top = 'inherit';
              
              } else if(wWidth >= 1025 && wWidth < 1600) {
                diamonds_top = Math.round((wHeight - diamonds_height) ) / 4 ;
              } else {
               diamonds_top = Math.round((wHeight - diamonds_height) / 2) ;
              } 
              
              if(wWidth < 401){
                zoom_factor = 0.6;  
              }
              
              

              /////////////////////////////////// SUPERIERUR A 1024 /////////////////////////////////////////////////
              
              if(wWidth > 1024)
              {
                  var l_projects_width = wWidth / 2 - 10;
                  var l_projects_height = wHeight - 20;
              } 

               /////////////////////////////////// INFERIEUR A 1024 /////////////////////////////////////////////////
               
              else 
              {

                  var l_projects_width = wWidth - 20;
                  var l_projects_height = 800;
                  if(wWidth >= 580 && wWidth < 780)
                    {
                      l_projects_height = 1250; 
                    } 
                    else if(wWidth < 580)
                    {
                      l_projects_height = 1100;
                    }
                    
               }
               if(artistTrigger || $(window).width() > 1024)
               {
                  positionProjects();
               }


          }

          function positionProjects(){



            var wWidth = $(window).width();
            
            if(wWidth > 780){
              max_row = 3; 
            } else if(wWidth <= 780 && wWidth > 580){
              max_row = 2;
              
            } else {
              max_row = 1;
            }
            
            //var max_row = 3;
            var min_row = max_row - 1;
            if(min_row < 1){min_row = 1;}
            
            if(max_row < 3){
              
            } else {
              $diamondsHolder.css({"width" : "600px"}); 
            }
            var counter = 0;
            
            var no_elements = $diamondsWrapper.size();
            var no_steps = Math.ceil(no_elements / (max_row + min_row));


            if(no_elements > 0){
              for(var i = 0; i < no_steps; i++){  /// nom de ligne ici 3

                 //if(counter <= 2 || counter >= 5 ){max_row = 2; }else{max_row=3}
                 //alert(max_row);

                for(var j = 0; j < min_row; j++){ // first pass Nombre de colonnes pour la permière ligne ici 3

                  var x = i * tile_width;
                  var y = j * tile_width + tile_width /2;


                  if(counter < no_elements){
                    var time_delay = 500 + Math.round(Math.random() * 500) ;
                    $diamondsWrapper.eq(counter).stop(false,false).animate({'left' : y + 'px', 'top' : x + 'px', 'opacity' : 1}, time_delay);
                  }
                  
                  counter++;

                }
                
                for(var j = 0; j < max_row; j++){ // second pass Nombre de colonnes pour le seconde ligne ici 2

                  var x = i * tile_width + tile_width /2;
                  var y = j * tile_width ;
                  
                  if(counter < no_elements){
                    var time_delay = 500 + Math.round(Math.random() * 500) ;
                    $diamondsWrapper.eq(counter).stop(false,false).animate({'left' : y + 'px', 'top' : x + 'px', 'opacity' : 1}, time_delay);

                   
                  }
                  
                  counter++;
                }
              } 
            }
          }


    })();

})


