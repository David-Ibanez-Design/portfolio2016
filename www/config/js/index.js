
require('preload');
require('diamond');
require('menu');
require('lang');
require('resumer');
//require('typed');
//require('dotdot');


define(['svgLoader'], function(s) {

  grunticon(["src/img/svg/fallbacks/icons.data.svg.css", "src/img/svg/fallbacks/icons.data.png.css", "src/img/svg/fallbacks/icons.fallback.css"], grunticon.svgLoadedCallback);


});
