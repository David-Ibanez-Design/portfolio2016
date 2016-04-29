
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  context: __dirname,

  entry: {
		index	: __dirname + "/js/index.js",
		works	: __dirname + "/js/works.js",
		contact	: __dirname + "/js/contact.js",
    },
    output: {
    	path: __dirname + "/../src/js/",
        filename: "[name].entry.chunk.js"
    },



 plugins: [

 		new CommonsChunkPlugin("commons.chunk.js"),

        // makes variable avalable to every modules
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery",
            "fn.jQuery": "jquery"
        })
    ],

resolve: {

		// root paath fro all the alias
       root: [
           __dirname + '/../src/js/modules/',
       ],

       extensions: ['', '.js', '.jsx'],
       alias: {
           'jquery'        : __dirname + '/node_modules/jquery/dist/jquery.js',
           'jquery.transit': __dirname + '/node_modules/jquery.transit/jquery.transit.js',
           'jquery.ui'     : __dirname + '/node_modules/jquery-ui/jquery-ui.js',
           'svg'     	   : __dirname +'/../src/js/libs/svg.js',
           'scrollBar'     : __dirname +'/../src/js/libs/simplebar_min.js',
           'libTyped'     : __dirname  +'/node_modules/typed.js/dist/typed.min.js',
           'libdotdot'     : __dirname  +'/node_modules/dotdotdot/src/js/jquery.dotdotdot.min.js',
           'svgLoader'     : __dirname  +'/../src/js/libs/grunticon.loader.js',
           'hightLight'     : __dirname  +'/../src/js/libs/highlight.pack.js',




       }
   },

};