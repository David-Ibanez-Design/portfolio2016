
require('form');
require('menu');
require('lang');


define(['svgLoader'], function(s) {

  grunticon(["src/img/svg/fallbacks/icons.data.svg.css", "src/img/svg/fallbacks/icons.data.png.css", "src/img/svg/fallbacks/icons.fallback.css"], grunticon.svgLoadedCallback);


});
