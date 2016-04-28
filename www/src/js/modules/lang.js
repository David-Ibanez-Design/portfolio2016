
define(['jquery'], function($){

     var lang = (function(){


          // Init global variables
          var deployed_lang = false;
          var current_page  = $('.lang').attr('data-page');
          var dataCol       = $('.lang__label').attr('data-col');
          var currentCol    = '';
          var diamondCol    = $('.lang__dropdown').css('background-color');
          var lang          = $('.lang__selected').attr('data-lang');


          // Caching dom El
           var $el            = $(".wrapper__lang--left, .wrapper__lang--right, .wrapper__lang--projects");
           var $langUl        = $el.find('>ul');
           var $nestedItems   = $el.find('>ul>li:has(>ul)');
           var $currentLang   = $nestedItems.find('a');
           var $selectedLang  = $currentLang.find('.lang__selected');
           var $iconCross     = $currentLang.find('.lang__icon');
           var $menuLang      = $nestedItems.find('>ul');
           var $menuLangItems = $menuLang.find('li');

          // Init function
          colorChange();

          //Biding Event
          $langUl.on('click', OpenMenu);
          $menuLangItems.on('click', closeMenu);
          $langUl.on('mouseleave', closeMenu);
          $(window).on('resize', colorChange);

          function OpenMenu(event){

              event.stopPropagation();
              if(!$langUl.hasClass('cliked'))
              {
                     if( deployed_lang == false)
                    {
                        $selectedLang.text('');
                        $currentLang.transition({ rotate: '0deg' })
                        $currentLang.promise().done(function( ) {

                            $iconCross.addClass("lang__icon--white").css({'fill':colLang(diamondCol), 'opacity' : 1});
                            $currentLang.css({'background':'none', 'border-color':colLang(diamondCol)  });
                            $menuLang.slideDown(500);
                            $langUl.addClass('cliked');
                            deployed_lang = true;

                        });
                      }
              }
              else
              {
                  closeMenu();
              }

          }

          function closeMenu(){

                $currentLang.transition({ rotate: '-45deg' }).css({'background':'none' });
                $iconCross.removeClass( "lang__icon--white").css( 'opacity' , 0);

                $selectedLang.text(lang).attr('data-lang', lang).css('color', currentCol);
                $currentLang.css({'border-color':'none' });
                $langUl.removeClass('cliked');
                $menuLang.slideUp(500);
                deployed_lang = false;

          }

          function colorChange(){

              if($(window).width()< 1040 && current_page != "projects")
                {
                  currentCol = dataCol;
                  $nestedItems.addClass('lang__items--white');
                  $selectedLang.css('color',currentCol);
                }

              else if($(window).width()> 1040 && current_page != "projects")
                {
                  currentCol = colLang(dataCol);
                  $nestedItems.removeClass('lang__items--white');
                  $currentLang.css('border-color',currentCol);
                  $selectedLang.css('color',currentCol);
              }
          }

          function colLang(diamondCol){

              if(diamondCol == 'rgb(11, 11, 11)'){diamondCol = '#fff';}
              else{diamondCol = '#000';}
              return diamondCol;

          }


    })();


})

