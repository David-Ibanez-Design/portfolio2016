define(['jquery', 'hightLight'], function($,hljs){

$( document ).ready(function() {

    (function(){

      var sideBar = {

          currentPos : 1,
          maxSlide : 6,
          labelMenu : 'uncliked',
          listLinks : [],

          init: function(){
             this.cacheDom();
             this.bindEvent();
             this.creatLinkArray();
             this.docLoad();
             this.loadPlugin();
          },

          cacheDom: function(){


            this.$el = $('.projects-menu__list');

            this.$navPrev = this.$el.find('.projects-menu__prev');
            this.$navNext = this.$el.find('.projects-menu__next');
            this.$blocks = this.$el.children('ul');
            this.$blocksWidth = this.$el.children('ul').children('li').outerWidth();

            this.$el                = $('aside');
            this.$current           = 'sideBar-nav__items--current';
            this.$navWrapper        = $('.wrapper__sideBar-nav');

            this.$wrapperNav        = this.$el.find('.sideBar-nav__title');
            this.$navUl             = this.$wrapperNav.parent().parent("ul");
            this.$navLi             = this.$navUl.find("li");
            this.$navA              = this.$wrapperNav.find('a');
            this.$navLinks          = $('.js-links-projects');
            this.$navIcon           = $('.sideBar-nav__icon');
            this.$navTriangle       = this.$el.find('.triangle-select');

            this.$bouton            = this.$el.find('.icon-arrow');

            this.$SideBarWrapper    = this.$el.find('.wrapper__sideBar-profile');
            this.$SideBarProfile    = this.$el.find('.cercle-profile');
            this.$SideBarTitle      = this.$el.find('.wrapper__sideBar-title');
            this.$SideBarBtn        = this.$el.find('.wrapper__sideBar-btn div');
            this.$SideBarBtnIcon    = this.$el.find('.wrapper__sideBar-btn div span');
            this.$SideBarArrowLeft  = this.$el.find('.arrowLeft');
            this.$SideBarArrowRight = this.$el.find('.arrowRight');

            this.$grildLeft         = $('.grid__project--left');
            this.$grildRight        = $('.grid__project--right');

            this.$backToTop         = $('.wrapper__back-top');
            this.$readMore          = $('.js-read-more');
            this.$readContent       = $('#articleBtn');
          },



          bindEvent: function(){

            this.$navPrev.on('click', this.prevProjects);
            this.$navNext.on('click', this.nextProjects);
            this.$backToTop.on('click', this.backToTop);
            this.$readContent.on('click', this.scrollToContent);
            $(window).on('scroll', this.scrollWindows);

            if(this.$wrapperNav.attr('class') !== undefined){
              this.$wrapperNav.on('click', this.navigationClick);
              $(window).on('scroll', this.scrollToLink.bind(this));
            }

          },


          loadPlugin: function(){

                hljs.initHighlightingOnLoad();

          },


          docLoad: function(){



                $(document).ready(function(){


                    var windowPos = $(window).scrollTop();

                    if(windowPos>600 && $(window).width() > 1040){

                      sideBar.$backToTop.fadeIn()

                    }
                    else{

                      sideBar.$backToTop.fadeOut()

                    }

            })



          },

          scrollWindows: function(){

             var windowPos = $(window).scrollTop();

              if(windowPos>600 && $(window).width() > 1040){

              sideBar.$backToTop.fadeIn()

              }
              else{

                sideBar.$backToTop.fadeOut()

              }


          },

          scrollToContent: function(){

            var divPos = sideBar.$readContent.offset().top;
            $('body,html').animate({scrollTop : divPos }, 500);

          },

          backToTop: function(){

            $('body,html').animate({scrollTop : 0 }, 500);

          },

          nextProjects: function(){


            if(sideBar.currentPos == 1 )
            {


              sideBar.$blocks.animate({marginLeft : (sideBar.currentPos * -(sideBar.$blocksWidth)) }, 1000, 'easeInOutCubic');
              sideBar.currentPos ++;

            }
            else if (sideBar.currentPos == ((sideBar.maxSlide/2)+1)){

            }
            else
            {
              sideBar.$blocks.animate({marginLeft :  (sideBar.currentPos * -(sideBar.$blocksWidth)) }, 1000, 'easeInOutCubic');
              sideBar.currentPos ++;
            }


          },

          prevProjects: function(){


            if(sideBar.currentPos == 1 )
            {

            }
            else if (sideBar.currentPos == (sideBar.maxSlide)){

                sideBar.$blocks.animate({marginLeft :   (sideBar.currentPos-1) * (-sideBar.$blocksWidth) }, 1000, 'easeInOutCubic');
                sideBar.currentPos --;

            }
            else
            {
                sideBar.$blocks.animate({marginLeft :   (sideBar.currentPos-2) * (-sideBar.$blocksWidth) }, 1000, 'easeInOutCubic');
                sideBar.currentPos --;

            }


          },

          creatLinkArray: function(){

             for (var i=0; i < this.$navLinks.length; i++) {
                this.listLinks.push($(this.$navLinks).eq(i).attr('href'));
            }
          },

          navigationClick: function () {

              sideBar.labelMenu = 'cliked';
              sideBar.$navLi.removeClass(sideBar.$current);
              $(this).parent('li').addClass(sideBar.$current);

              var from =  $(this).find('a').attr('href');
              var to = $(from);
              var posTri = ($('.'+ sideBar.$current).offset().top) - $(window).scrollTop();

              sideBar.$navTriangle.removeClass('hidden').css('top',posTri+34);

              $('body, html').stop().animate({scrollTop: (to.offset().top)+50 +'px'}, 1000, 'easeInOutCubic' , function(){sideBar.labelMenu = 'uncliked';});

              return false;

          },

          scrollToLink: function(){

              if(this.labelMenu == 'uncliked'){


                    var windowPos = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    var docHeight = $(document).height();



                    for (var i=0; i < this.listLinks.length; i++) {

                        var theID = this.listLinks[i];
                        var divPos = $(theID).offset().top;
                        var divHeight = $(theID).innerHeight();

                        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {

                            $("a[href='" + theID + "']").parent().parent().addClass(this.$current);
                            var posTri = ($('.'+this.$current).offset().top) - $(window).scrollTop();
                            this.$navTriangle.css('top',posTri+34).removeClass('hidden')

                        }
                         else
                        {
                            $("a[href='" + theID + "']").parent().parent().removeClass(this.$current);
                        }

                    }

                     if(windowPos < $(this.listLinks[0]).offset().top){this.$navTriangle.addClass('hidden')}

                    if(windowPos + windowHeight == docHeight) {

                        if (!$(".sideBar-nav li:last-child a").parent().parent().hasClass(this.$current)) {

                            var navActiveCurrent = $(this.$current).attr("href");
                            $("a[href='" + navActiveCurrent + "']").parent().parent().removeClass(this.$current);
                            $(".sideBar-nav li:last-child a").parent().parent().addClass(this.$current);

                        }
                    }
                }

          }




      };

      sideBar.init();

    })();

 })

})