

module.exports = function(grunt)
{

	require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


// -------------- Fusion fichier js  avec Jquery en 1er  --------------------------------
	grunt.initConfig({



// !! This is the name of the task ('requirejs')
    requirejs: {

	      compile: {
	        // !! You can drop your app.build.js config wholesale into 'options'
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
		      src: [ '../src/js/libs/*','../src/js/libs/vendors/*', '../src/js/*.js', '../src/img/svg/fallbacks/grunticon.loader.js'],
		      dest: '../dist/js/concat.js'
		    }

	  },

// -------------- Compression fichier js  --------------------------------
	uglify: {
			dist: {
		        src: ['../dist/js/concat.js'],
		        dest: '../dist/js/min.js'
		    }
	  },

// -------------- Compression fichier css  --------------------------------

	cssmin: {
		  dist: {
		    files: {
		      '../../www-built/src/css/style.css': ['../src/css/style.css', '../src/css/libs/*']
		    }
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


// -------------- compression des svg --------------------------------

svgmin: {
        options: {
            plugins: [
                {
                    removeViewBox: false
                }, {
                    removeUselessStrokeAndFill: false
                }
            ]
        },
        dist: {
		    files: [
		        {
		        	expand:true,
		            src: ['../src/img/svg/*.svg'],
		            dest: '../../www-built/img/svg/'
		        }
		    ]
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
                '../src/css/style_en.css': '../src/scss/style_en.scss',
                '../src/css/style_jp.css': '../src/scss/style_jp.scss'
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

// -------------- sprite  --------------------------------

 // sprite:{
 //      all: {
 //        src: '../src/img/*.png',
 //        dest: '../src/img/sprite/spritesheet.png',
 //        destCss: '../src/css/_sprites.scss',
 //        algorithm :'top-down',
 //        algorithmOpts:{sort: false},
 //        padding: 5

 //      }

 //    },


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

		css: {
			files: ['../css/style.css'],

		},
		js: {
			files: ['../js/effect.js'],

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








	// grunt.loadNpmTasks('grunt-concurrent');
	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-cssmin');
	// grunt.loadNpmTasks('grunt-contrib-imagemin');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-newer');
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-postcss');
	//grunt.loadNpmTasks('grunt-spritesmith');
	//grunt.loadNpmTasks('grunt-text-replace');
	//grunt.loadNpmTasks('grunt-grunticon');
	//grunt.registerTask('prod', ['sass','postcss','requirejs','imagemin']);
	grunt.registerTask('prod', ['sass','postcss','requirejs']);

}