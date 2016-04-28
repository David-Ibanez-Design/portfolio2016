
requirejs.config({
    baseUrl: 'src/js/',

    // AMD compatible librairies
    paths: {
        jquery          : 'libs/jquery-2.1.0.min',
        jqueryUI        : 'libs/jquery-ui.min',
        transit         : 'libs/transit',
        libTyped        : 'libs/typed',
        svgLoader       : 'libs/grunticon.loader',
        hightLight      : 'libs/highlight.pack',
        SVG             : 'libs/svg',
        scrollBar       : 'libs/simplebar_min',

        menu            : 'modules/menu',
        lang            : 'modules/lang',
        diamond         : 'modules/diamond',
        typed           : 'modules/typed',
        preload         : 'modules/preload',
        form            : 'modules/form',
        pluginsLoad     : 'modules/pluginsLoad',
        headerScroll    : 'modules/headerScroll',
        sideBar         : 'modules/sideBar',
        resumer         : 'modules/resumer',


    },


    // AMD non compatible librairies
   // shim: {
   //          'lazyLoadc': {
   //              'libs/jquery.lazyload.min': ['jquery']
   //          },
   //      }


});


define(['jquery', 'jqueryUI', 'transit', 'menu', 'lang', 'svgLoader'], function($, jui, t, m, l, s) {

  grunticon(["src/img/svg/fallbacks/icons.data.svg.css", "src/img/svg/fallbacks/icons.data.png.css", "src/img/svg/fallbacks/icons.fallback.css"], grunticon.svgLoadedCallback);


});

