

module.exports = function(grunt)
{

	require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


// -------------- Fusion fichier js  avec Jquery en 1er  --------------------------------
	grunt.initConfig({



// !! This is the name of the task ('requirejs')
    requirejs: {

	      compile: {

	        options: {
 						appDir: "../../www/",
					    mainConfigFile: "../src/js/common.js",
					    dir: '../../www-built/',
					    optimize: "uglify2",
					    optimizeCss: "false",
					    preserveLicenseComments: false,
					    removeCombined: true,
					    optimizeAllPluginResources: false,
					    fileExclusionRegExp: /node_modules/,
					    modules: [
					        {
					            name: 'common',
					            include: [
					                        "jquery",
					                        "jqueryUI",
					                        "transit",
					                        "svgLoader",
					                        "menu",
					                        "lang",

					            ]
					        },


					        {
					            name: "index",
					            include: [
					                    "diamond",
					                    "preload",
					                    "typed",
					                    "scrollBar",
					                    "resumer",

					            ],
					            exclude: ['common']
					        },

					        {
					            name: "contact",
					            include: [
					                    "form",
					            ],
					            exclude: ['common']
					        },

					         {
					            name: "works",
					            include: [
					    				'hightLight',
					                    "sideBar",
					                    "headerScroll",
					            ],
					            exclude: ['common']
					        }

					    ]

	        }
	      }
    },



	 concat: {
		    options: {
		      separator: ';'

	    },
		    dist: {
		      src: [ '../src/css/libs/*','../src/css/style_uncropressed.css'],
		      dest: '../src/css/style.css'
		    }


	  },




// -------------- assemblage svg and un seul fichier avec fallback--------------------------------


	grunticon: {

		  icons: {

		    files: [{
		      expand: true,
		      cwd: "../src/img/svg/",
		      src: ["*.svg"],
		      dest: "../src/img/svg/fallbacks/"
		    }],
		    options: {
		      enhanceSVG: true
		    }

		  }

	},


// -------------- Compression les images  --------------------------------


	imagemin: {

		    dist:
		    {

			      files:
			      [{
			        expand: true,
			        cwd: '../src/img',
			        src: ['*.{png,jpg,gif}'],
			        dest: '../../www-built/src/img/'
			      }]
		    },
		    options:
		    {
		        optimizationLevel: 3,
		        progressive: true
	      	}
  },


// -------------- Rmeplace les Chemains images dans le css  --------------------------------

  replace: {
			  dist: {
			    src: ['../dist/css/min.css'],
			    overwrite: true,
			    replacements: [{
			      from: "../img/",
			      to: "../dist/img/"
			    }]
			  }
	},


// -------------- sass  --------------------------------

	sass: {

        options: {
        	require: 'susy',
            sourceMap: true,
            outputStyle: 'compressed'

        },

        dist: {
            files: {
                '../src/css/style.css': '../src/scss/style.scss',
            }
        }
    },


// -------------- Libsass  --------------------------------

     postcss: {
     	    options: {
			      map: false, // inline sourcemaps

			      // or
			      map: {
			          inline: false, // save all sourcemaps as separate files...
			          annotation: 'dist/css/maps/' // ...to the specified directory
			      },

			      processors: [
			        require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
			      ]
			    },

            dist: {
                src: '../src/css/*.css'
            }
        },


// -------------- Met en place un watch sur les fhichers css et js et sass ------------------------

	watch: {


		options: {

			livereload: true, // need to have this -> <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>

		},
		scss: {
			files: ['../src/scss/**/*.scss'],
			tasks: ['sass', 'postcss'],

		},
		html: {
			files: ['../*.html'],

		},
		php: {
			files: ['../*.php'],

		},


		js: {
			files: ['../src/js/*.js'],
			tasks: ['requirejs'],

		},

		svg: {
			files: ['../src/img/svg/*.svg'],
			tasks: ['grunticon'],
		},

		// img: {
		// 	files: ['../src/img/*.png'],
		// 	tasks: ['sprite','sass'],

		// },


	},


// -------------- Lance les tâche ne parallèles seulement sur les fichiers qui ont été modifier  --------------------------------

concurrent: {

			        concat: ['concat'],
			        compression: ['uglify', 'cssmin'],
			        traitementImages: ['imagemin']
			    }


 });


// -------------- Exécution tâches  --------------------------------

	grunt.registerTask('prod', ['sass','postcss','requirejs']);

}