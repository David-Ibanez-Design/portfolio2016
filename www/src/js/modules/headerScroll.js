define(['jquery'], function($){

$( document ).ready(function() {

    (function(){

      var headerScroll = {

          titleZoom : 3,
          Hgap      : 10,
          img_h     : $('.projectCover-overlay').height(),

          init: function(){
             this.cacheDom();
             this.bindEvent();

          },

          cacheDom: function(){
            this.$main_navbar  = $('.inner-projectCover');
            this.$cover_img    = this.$main_navbar.find('.projectCover-overlay');
            this.$title        = this.$main_navbar.find(".projet-pre-text");
            this.$label_metier = this.$main_navbar.find('.wrapper-scroll');
            this.$wrapper_header = $('.wrapper__project-big-img');

          },

          bindEvent: function(){
            $(window).on('scroll', this.headerLayout.bind(this));
          },

          rat: function (r) {

              if(r<0) return 0;
              if(r>1) return 1;
              return Number(r.toString().match(/^\d+(?:\.\d{0,2})?/));
          },



          headerLayout: function(){

              $('.border-top').css('display','none')

              if($(window).width()>1040)
              {
                    var wTop  = $(window).scrollTop();
                    var r = ( wTop)/(this.img_h - 50);
                    var ratio = this.rat(r);

                    this.$title.css({ "opacity": 1-(ratio*2) , 'transform':'scale('+(1-(this.titleZoom-1)*ratio)+')'});
                    this.$label_metier.css({ "opacity": 1-(ratio*4)});

                    if(  wTop > 0 )
                    {
                        this.$main_navbar[0].style.cssText += "; height: " + (this.img_h -  wTop)+ "px;";
                        this.$cover_img[0].style.cssText += "; opacity: " + (0.3+ratio) + ";";

                    }
                    else
                    {
                         this.$cover_img.css("opacity","0.3");
                         this.$main_navbar.css("height", "")
                         this.$title.css({
                          "position": "",
                          "height" : "",
                          "transform":"",
                          "font-size": "",
                          "opacity": 1
                        });
                    }
                }
           }

      };

      headerScroll.init();

    })();

  })

})