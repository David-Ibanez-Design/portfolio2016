
define(["jquery", "jquery.transit"], function($,t) {

$( document ).ready(function() {


    var menu =  (function(){

          // Init global variables

          var deployed = false;
          var current_page = $('.lang').attr('data-page');

          // Caching dom El
          var $el = $('.wrapper__menu');
          var $navBar = $el.find('>ul');
          var $navBarItems = $el.find('>ul>li');
          var $menu = $el.find('>ul>li>ul');
          var $nestedItems = $el.find('>ul>li>ul>li:has(>ul)');
          var $sousMenu = $el.find('>ul>li>ul>li>ul');
          var $close = $el.find('.nav__closeIcon');
          var $iconVertical = $el.find('.line-vertical');
          var $iconMenu = $el.find('.icon-menu');

          // Init function
          colorChange();


          //Biding Event
          $navBar.on('click', OpenMenu);
          $nestedItems.on('click', OpenSousMenu);
          $close.on('click', close);
          $menu.on('mouseleave', leaveMenu);
          $(window).on('resize', colorChange);


          function OpenMenu(event){

              event.stopPropagation();
              if(deployed == false);
                {
                  $menu.slideDown(500);
                  deployed = true;
                }
          }

          function OpenSousMenu(){

              if($sousMenu.is(':hidden'))
                  {
                      $iconVertical.transition({ rotate: '90deg' }, 800, 'ease').css({ width : '0px' });
                      $sousMenu.slideDown(500);
                  }

                else
                  {

                      $iconVertical.css({ width : '1px' }).transition({ rotate: '0deg' }, 800, 'ease');
                      $sousMenu.slideUp(500);
                  }
          }

          function close(event){

                event.stopPropagation();
                if(deployed == true);
                  {
                    $menu.slideUp(500);
                    deployed = false;
                  }
          }

          function leaveMenu(event){

            event.stopPropagation();
            $menu.slideUp(500);
            $sousMenu.slideUp(500);
            $iconVertical.css({ width : '1px' }).transition({ rotate: '0deg' }, 800, 'ease');
            deployed = false;
          }

          function colorChange(){


            if($(window).width()< 1040){
              if(current_page == "index")
              {
                $navBarItems.addClass('nav__wrapper--white');
              }

            }
            else{
              if(current_page == "index")
              {
                $navBarItems.removeClass('nav__wrapper--white');
              }
              else
              {
                $navBarItems.removeClass('nav__wrapper--white').addClass('nav__wrapper--white');
                $iconMenu.css('fill', '');
              }
            }
          }

    })();

 })

})