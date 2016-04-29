webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	__webpack_require__(7);
	__webpack_require__(10);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(11);
	//require('typed');
	//require('dotdot');


	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(s) {

	  grunticon(["src/img/svg/fallbacks/icons.data.svg.css", "src/img/svg/fallbacks/icons.data.png.css", "src/img/svg/fallbacks/icons.fallback.css"], grunticon.svgLoadedCallback);


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(8) ,__webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function($, u, s){

	    var logoIntro = (function(){

	           // Init global variables
	           var wrapper =
	           {
	              height:'100%',
	              width:'100%',
	              top: 0,
	              left:0,

	            };

	          // Caching dom El
	          var $logoCenter  = $(".wrapper__logo--index");
	          var $iconLogo    = $('.icon-logo-loading');
	          var $wrapperMenu = $(".wrapper__menu");

	          // Init function
	          logoHangler();

	          // load projects images in the background after homepage has loaded
	          function preloaderInbrowser() {
	            if (document.getElementById) {
	              // document.getElementById("preload-08").style.background = "url(src/img/film-in_browser.png)";
	              // document.getElementById("preload-09").style.background = "url(src/img/elsa-in_browser.png)";
	              // document.getElementById("preload-10").style.background = "url(src/img/portail-in_browser.png)";
	              // document.getElementById("preload-11").style.background = "url(src/img/isucare-in_browser.png)";
	              // document.getElementById("preload-12").style.background = "url(src/img/lsp-in_browser.png)";
	              // document.getElementById("preload-13").style.background = "url(src/img/portfolio-in_browser.png)";
	              // document.getElementById("preload-14").style.background = "url(src/img/osis-in_browser.png)";

	              if($('.wrapper__about h2').attr('data-lang') == 'en'){
	                document.getElementById("preload-15").style.background = "url(src/img/cv-en.jpg)";
	              }
	              else{
	                document.getElementById("preload-16").style.background = "url(src/img/cv-ja.jpg)";
	              }
	            }
	          }

	          function addLoadEvent(func) {
	            var oldonload = window.onload;
	            if (typeof window.onload != 'function') {
	              window.onload = func;
	            } else {
	              window.onload = function() {
	                if (oldonload) {
	                  oldonload();
	                }
	                func();
	              }
	            }
	          }


	        // load projects images during the loading animation
	        function preloadimages(arr){
	            var newimages=[], loadedimages=0
	            var postaction=function(){}
	            var arr=(typeof arr!="object")? [arr] : arr
	            function imageloadpost(){
	                loadedimages++
	                if (loadedimages==arr.length){
	                    postaction(newimages) //call postaction and pass in newimages array as parameter
	                }
	            }
	            for (var i=0; i<arr.length; i++){

	                newimages[i] = new Image();i
	                newimages[i].src=arr[i]
	                newimages[i].onload=function(){
	                    imageloadpost()
	                }

	            }
	            return { //return blank object with done() method
	                done:function(f){
	                    postaction=f || postaction //remember user defined callback functions to be called when images load
	                }
	            }
	        }




	          function logoHangler(){

	            if($(window).width()>1040 && ! sessionStorage.firstVisit)
	               {

	                     var element = SVG.select('rect#st1');

	                     element.animate(500).move(0,130).animate(500).move(-350,130);

	                    function animeLoop()
	                    {

	                           element.animate(500).move(0,130).animate(500).move(-350,130);

	                    }

	                  var myTimer = setInterval( animeLoop, 500 );

	                  preloadimages(['src/img/fond-isucare.jpg', 'src/img/fond-test2.jpg', 'src/img/fond-lsa-portail.jpg','src/img/fond-lsp.jpg', 'src/img/fond-portfolio.jpg', 'src/img/fond-osis.jpg', 'src/img/fond-film.jpg']).done(function(images){

	                          element.stop(true).x(-350, 130)
	                          clearInterval(myTimer);
	                          addLoadEvent(preloaderInbrowser);  // preload projects page images
	                          sessionStorage.firstVisit = false;
	                          stopAnimation();

	                  })
	                }

	                else
	                {

	                    $logoCenter.css({width: '100px', height : '100px' , top:'50%', left:'50%', marginTop: '-50px', marginLeft:'-50px'});
	                    $wrapperMenu.css({ zIndex: '53' });
	                }
	          };

	          function stopAnimation(){

	                  if($(window).width()>1040)
	                  {

	                    wrapper.height = 100;
	                    wrapper.width = 100;
	                    wrapper.top = '50%';
	                    wrapper.left = '50%';

	                  }

	                   $logoCenter.animate({  width: wrapper.width + 'px',
	                                               height: wrapper.height + 'px',
	                                               top: wrapper.top,
	                                               left: wrapper.left,
	                                               marginTop: -(wrapper.height/2) + 'px',
	                                               marginLeft: -(wrapper.width/2) + 'px'}, 600, 'easeInOutCubic' , function(){

	                                                  $logoCenter.css({ zIndex: '48' });
	                                                  $iconLogo.css({ zIndex: '49' });
	                                                  $wrapperMenu.css({ zIndex: '53' });

	                                                });
	          }



	    })();

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var jQuery = __webpack_require__(2);

	/*! jQuery UI - v1.10.3 - 2013-05-03
	* http://jqueryui.com
	* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
	* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
	(function( $, undefined ) {

	var uuid = 0,
		runiqueId = /^ui-id-\d+$/;

	// $.ui might exist from components with no dependencies, e.g., $.ui.position
	$.ui = $.ui || {};

	$.extend( $.ui, {
		version: "1.10.3",

		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	});

	// plugins
	$.fn.extend({
		focus: (function( orig ) {
			return function( delay, fn ) {
				return typeof delay === "number" ?
					this.each(function() {
						var elem = this;
						setTimeout(function() {
							$( elem ).focus();
							if ( fn ) {
								fn.call( elem );
							}
						}, delay );
					}) :
					orig.apply( this, arguments );
			};
		})( $.fn.focus ),

		scrollParent: function() {
			var scrollParent;
			if (($.ui.ie && (/(static|relative)/).test(this.css("position"))) || (/absolute/).test(this.css("position"))) {
				scrollParent = this.parents().filter(function() {
					return (/(relative|absolute|fixed)/).test($.css(this,"position")) && (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
				}).eq(0);
			} else {
				scrollParent = this.parents().filter(function() {
					return (/(auto|scroll)/).test($.css(this,"overflow")+$.css(this,"overflow-y")+$.css(this,"overflow-x"));
				}).eq(0);
			}

			return (/fixed/).test(this.css("position")) || !scrollParent.length ? $(document) : scrollParent;
		},

		zIndex: function( zIndex ) {
			if ( zIndex !== undefined ) {
				return this.css( "zIndex", zIndex );
			}

			if ( this.length ) {
				var elem = $( this[ 0 ] ), position, value;
				while ( elem.length && elem[ 0 ] !== document ) {
					// Ignore z-index if position is set to a value where z-index is ignored by the browser
					// This makes behavior of this function consistent across browsers
					// WebKit always returns auto if the element is positioned
					position = elem.css( "position" );
					if ( position === "absolute" || position === "relative" || position === "fixed" ) {
						// IE returns 0 when zIndex is not specified
						// other browsers return a string
						// we ignore the case of nested elements with an explicit value of 0
						// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
						value = parseInt( elem.css( "zIndex" ), 10 );
						if ( !isNaN( value ) && value !== 0 ) {
							return value;
						}
					}
					elem = elem.parent();
				}
			}

			return 0;
		},

		uniqueId: function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + (++uuid);
				}
			});
		},

		removeUniqueId: function() {
			return this.each(function() {
				if ( runiqueId.test( this.id ) ) {
					$( this ).removeAttr( "id" );
				}
			});
		}
	});

	// selectors
	function focusable( element, isTabIndexNotNaN ) {
		var map, mapName, img,
			nodeName = element.nodeName.toLowerCase();
		if ( "area" === nodeName ) {
			map = element.parentNode;
			mapName = map.name;
			if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
				return false;
			}
			img = $( "img[usemap=#" + mapName + "]" )[0];
			return !!img && visible( img );
		}
		return ( /input|select|textarea|button|object/.test( nodeName ) ?
			!element.disabled :
			"a" === nodeName ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN) &&
			// the element and all of its ancestors must be visible
			visible( element );
	}

	function visible( element ) {
		return $.expr.filters.visible( element ) &&
			!$( element ).parents().addBack().filter(function() {
				return $.css( this, "visibility" ) === "hidden";
			}).length;
	}

	$.extend( $.expr[ ":" ], {
		data: $.expr.createPseudo ?
			$.expr.createPseudo(function( dataName ) {
				return function( elem ) {
					return !!$.data( elem, dataName );
				};
			}) :
			// support: jQuery <1.8
			function( elem, i, match ) {
				return !!$.data( elem, match[ 3 ] );
			},

		focusable: function( element ) {
			return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
		},

		tabbable: function( element ) {
			var tabIndex = $.attr( element, "tabindex" ),
				isTabIndexNaN = isNaN( tabIndex );
			return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
		}
	});

	// support: jQuery <1.8
	if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
		$.each( [ "Width", "Height" ], function( i, name ) {
			var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
				type = name.toLowerCase(),
				orig = {
					innerWidth: $.fn.innerWidth,
					innerHeight: $.fn.innerHeight,
					outerWidth: $.fn.outerWidth,
					outerHeight: $.fn.outerHeight
				};

			function reduce( elem, size, border, margin ) {
				$.each( side, function() {
					size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
					if ( border ) {
						size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
					}
					if ( margin ) {
						size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
					}
				});
				return size;
			}

			$.fn[ "inner" + name ] = function( size ) {
				if ( size === undefined ) {
					return orig[ "inner" + name ].call( this );
				}

				return this.each(function() {
					$( this ).css( type, reduce( this, size ) + "px" );
				});
			};

			$.fn[ "outer" + name] = function( size, margin ) {
				if ( typeof size !== "number" ) {
					return orig[ "outer" + name ].call( this, size );
				}

				return this.each(function() {
					$( this).css( type, reduce( this, size, true, margin ) + "px" );
				});
			};
		});
	}

	// support: jQuery <1.8
	if ( !$.fn.addBack ) {
		$.fn.addBack = function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		};
	}

	// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
	if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
		$.fn.removeData = (function( removeData ) {
			return function( key ) {
				if ( arguments.length ) {
					return removeData.call( this, $.camelCase( key ) );
				} else {
					return removeData.call( this );
				}
			};
		})( $.fn.removeData );
	}





	// deprecated
	$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

	$.support.selectstart = "onselectstart" in document.createElement( "div" );
	$.fn.extend({
		disableSelection: function() {
			return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
				".ui-disableSelection", function( event ) {
					event.preventDefault();
				});
		},

		enableSelection: function() {
			return this.unbind( ".ui-disableSelection" );
		}
	});

	$.extend( $.ui, {
		// $.ui.plugin is deprecated. Use $.widget() extensions instead.
		plugin: {
			add: function( module, option, set ) {
				var i,
					proto = $.ui[ module ].prototype;
				for ( i in set ) {
					proto.plugins[ i ] = proto.plugins[ i ] || [];
					proto.plugins[ i ].push( [ option, set[ i ] ] );
				}
			},
			call: function( instance, name, args ) {
				var i,
					set = instance.plugins[ name ];
				if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
					return;
				}

				for ( i = 0; i < set.length; i++ ) {
					if ( instance.options[ set[ i ][ 0 ] ] ) {
						set[ i ][ 1 ].apply( instance.element, args );
					}
				}
			}
		},

		// only used by resizable
		hasScroll: function( el, a ) {

			//If overflow is hidden, the element might have extra content, but the user wants to hide it
			if ( $( el ).css( "overflow" ) === "hidden") {
				return false;
			}

			var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
				has = false;

			if ( el[ scroll ] > 0 ) {
				return true;
			}

			// TODO: determine which cases actually cause this to happen
			// if the element doesn't have the scroll set, see if it's possible to
			// set the scroll
			el[ scroll ] = 1;
			has = ( el[ scroll ] > 0 );
			el[ scroll ] = 0;
			return has;
		}
	});

	})( jQuery );

	(function( $, undefined ) {

	var uuid = 0,
		slice = Array.prototype.slice,
		_cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};

	$.widget = function( name, base, prototype ) {
		var fullName, existingConstructor, constructor, basePrototype,
			// proxiedPrototype allows the provided prototype to remain unmodified
			// so that it can be used as a mixin for multiple widgets (#8876)
			proxiedPrototype = {},
			namespace = name.split( "." )[ 0 ];

		name = name.split( "." )[ 1 ];
		fullName = namespace + "-" + name;

		if ( !prototype ) {
			prototype = base;
			base = $.Widget;
		}

		// create selector for plugin
		$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
			return !!$.data( elem, fullName );
		};

		$[ namespace ] = $[ namespace ] || {};
		existingConstructor = $[ namespace ][ name ];
		constructor = $[ namespace ][ name ] = function( options, element ) {
			// allow instantiation without "new" keyword
			if ( !this._createWidget ) {
				return new constructor( options, element );
			}

			// allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if ( arguments.length ) {
				this._createWidget( options, element );
			}
		};
		// extend with the existing constructor to carry over any static properties
		$.extend( constructor, existingConstructor, {
			version: prototype.version,
			// copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend( {}, prototype ),
			// track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: []
		});

		basePrototype = new base();
		// we need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend( {}, basePrototype.options );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = (function() {
				var _super = function() {
						return base.prototype[ prop ].apply( this, arguments );
					},
					_superApply = function( args ) {
						return base.prototype[ prop ].apply( this, args );
					};
				return function() {
					var __super = this._super,
						__superApply = this._superApply,
						returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			})();
		});
		constructor.prototype = $.widget.extend( basePrototype, {
			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		});

		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if ( existingConstructor ) {
			$.each( existingConstructor._childConstructors, function( i, child ) {
				var childPrototype = child.prototype;

				// redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
			});
			// remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push( constructor );
		}

		$.widget.bridge( name, constructor );
	};

	$.widget.extend = function( target ) {
		var input = slice.call( arguments, 1 ),
			inputIndex = 0,
			inputLength = input.length,
			key,
			value;
		for ( ; inputIndex < inputLength; inputIndex++ ) {
			for ( key in input[ inputIndex ] ) {
				value = input[ inputIndex ][ key ];
				if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
					// Clone objects
					if ( $.isPlainObject( value ) ) {
						target[ key ] = $.isPlainObject( target[ key ] ) ?
							$.widget.extend( {}, target[ key ], value ) :
							// Don't extend strings, arrays, etc. with objects
							$.widget.extend( {}, value );
					// Copy everything else by reference
					} else {
						target[ key ] = value;
					}
				}
			}
		}
		return target;
	};

	$.widget.bridge = function( name, object ) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[ name ] = function( options ) {
			var isMethodCall = typeof options === "string",
				args = slice.call( arguments, 1 ),
				returnValue = this;

			// allow multiple hashes to be passed on init
			options = !isMethodCall && args.length ?
				$.widget.extend.apply( null, [ options ].concat(args) ) :
				options;

			if ( isMethodCall ) {
				this.each(function() {
					var methodValue,
						instance = $.data( this, fullName );
					if ( !instance ) {
						return $.error( "cannot call methods on " + name + " prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}
					if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name + " widget instance" );
					}
					methodValue = instance[ options ].apply( instance, args );
					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				});
			} else {
				this.each(function() {
					var instance = $.data( this, fullName );
					if ( instance ) {
						instance.option( options || {} )._init();
					} else {
						$.data( this, fullName, new object( options, this ) );
					}
				});
			}

			return returnValue;
		};
	};

	$.Widget = function( /* options, element */ ) {};
	$.Widget._childConstructors = [];

	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: false,

			// callbacks
			create: null
		},
		_createWidget: function( options, element ) {
			element = $( element || this.defaultElement || this )[ 0 ];
			this.element = $( element );
			this.uuid = uuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
			this.options = $.widget.extend( {},
				this.options,
				this._getCreateOptions(),
				options );

			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();

			if ( element !== this ) {
				$.data( element, this.widgetFullName, this );
				this._on( true, this.element, {
					remove: function( event ) {
						if ( event.target === element ) {
							this.destroy();
						}
					}
				});
				this.document = $( element.style ?
					// element within the document
					element.ownerDocument :
					// element is window or document
					element.document || element );
				this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
			}

			this._create();
			this._trigger( "create", null, this._getCreateEventData() );
			this._init();
		},
		_getCreateOptions: $.noop,
		_getCreateEventData: $.noop,
		_create: $.noop,
		_init: $.noop,

		destroy: function() {
			this._destroy();
			// we can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element
				.unbind( this.eventNamespace )
				// 1.9 BC for #7810
				// TODO remove dual storage
				.removeData( this.widgetName )
				.removeData( this.widgetFullName )
				// support: jquery <1.6.3
				// http://bugs.jquery.com/ticket/9413
				.removeData( $.camelCase( this.widgetFullName ) );
			this.widget()
				.unbind( this.eventNamespace )
				.removeAttr( "aria-disabled" )
				.removeClass(
					this.widgetFullName + "-disabled " +
					"ui-state-disabled" );

			// clean up events and states
			this.bindings.unbind( this.eventNamespace );
			this.hoverable.removeClass( "ui-state-hover" );
			this.focusable.removeClass( "ui-state-focus" );
		},
		_destroy: $.noop,

		widget: function() {
			return this.element;
		},

		option: function( key, value ) {
			var options = key,
				parts,
				curOption,
				i;

			if ( arguments.length === 0 ) {
				// don't return a reference to the internal hash
				return $.widget.extend( {}, this.options );
			}

			if ( typeof key === "string" ) {
				// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split( "." );
				key = parts.shift();
				if ( parts.length ) {
					curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
					for ( i = 0; i < parts.length - 1; i++ ) {
						curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
						curOption = curOption[ parts[ i ] ];
					}
					key = parts.pop();
					if ( value === undefined ) {
						return curOption[ key ] === undefined ? null : curOption[ key ];
					}
					curOption[ key ] = value;
				} else {
					if ( value === undefined ) {
						return this.options[ key ] === undefined ? null : this.options[ key ];
					}
					options[ key ] = value;
				}
			}

			this._setOptions( options );

			return this;
		},
		_setOptions: function( options ) {
			var key;

			for ( key in options ) {
				this._setOption( key, options[ key ] );
			}

			return this;
		},
		_setOption: function( key, value ) {
			this.options[ key ] = value;

			if ( key === "disabled" ) {
				this.widget()
					.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
					.attr( "aria-disabled", value );
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}

			return this;
		},

		enable: function() {
			return this._setOption( "disabled", false );
		},
		disable: function() {
			return this._setOption( "disabled", true );
		},

		_on: function( suppressDisabledCheck, element, handlers ) {
			var delegateElement,
				instance = this;

			// no suppressDisabledCheck flag, shuffle arguments
			if ( typeof suppressDisabledCheck !== "boolean" ) {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}

			// no element argument, shuffle and use this.element
			if ( !handlers ) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				// accept selectors, DOM elements
				element = delegateElement = $( element );
				this.bindings = this.bindings.add( element );
			}

			$.each( handlers, function( event, handler ) {
				function handlerProxy() {
					// allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if ( !suppressDisabledCheck &&
							( instance.options.disabled === true ||
								$( this ).hasClass( "ui-state-disabled" ) ) ) {
						return;
					}
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}

				// copy the guid so direct unbinding works
				if ( typeof handler !== "string" ) {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}

				var match = event.match( /^(\w+)\s*(.*)$/ ),
					eventName = match[1] + instance.eventNamespace,
					selector = match[2];
				if ( selector ) {
					delegateElement.delegate( selector, eventName, handlerProxy );
				} else {
					element.bind( eventName, handlerProxy );
				}
			});
		},

		_off: function( element, eventName ) {
			eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
			element.unbind( eventName ).undelegate( eventName );
		},

		_delay: function( handler, delay ) {
			function handlerProxy() {
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}
			var instance = this;
			return setTimeout( handlerProxy, delay || 0 );
		},

		_hoverable: function( element ) {
			this.hoverable = this.hoverable.add( element );
			this._on( element, {
				mouseenter: function( event ) {
					$( event.currentTarget ).addClass( "ui-state-hover" );
				},
				mouseleave: function( event ) {
					$( event.currentTarget ).removeClass( "ui-state-hover" );
				}
			});
		},

		_focusable: function( element ) {
			this.focusable = this.focusable.add( element );
			this._on( element, {
				focusin: function( event ) {
					$( event.currentTarget ).addClass( "ui-state-focus" );
				},
				focusout: function( event ) {
					$( event.currentTarget ).removeClass( "ui-state-focus" );
				}
			});
		},

		_trigger: function( type, event, data ) {
			var prop, orig,
				callback = this.options[ type ];

			data = data || {};
			event = $.Event( event );
			event.type = ( type === this.widgetEventPrefix ?
				type :
				this.widgetEventPrefix + type ).toLowerCase();
			// the original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[ 0 ];

			// copy original event properties over to the new event
			orig = event.originalEvent;
			if ( orig ) {
				for ( prop in orig ) {
					if ( !( prop in event ) ) {
						event[ prop ] = orig[ prop ];
					}
				}
			}

			this.element.trigger( event, data );
			return !( $.isFunction( callback ) &&
				callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
				event.isDefaultPrevented() );
		}
	};

	$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
		$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
			if ( typeof options === "string" ) {
				options = { effect: options };
			}
			var hasOptions,
				effectName = !options ?
					method :
					options === true || typeof options === "number" ?
						defaultEffect :
						options.effect || defaultEffect;
			options = options || {};
			if ( typeof options === "number" ) {
				options = { duration: options };
			}
			hasOptions = !$.isEmptyObject( options );
			options.complete = callback;
			if ( options.delay ) {
				element.delay( options.delay );
			}
			if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
				element[ method ]( options );
			} else if ( effectName !== method && element[ effectName ] ) {
				element[ effectName ]( options.duration, options.easing, callback );
			} else {
				element.queue(function( next ) {
					$( this )[ method ]();
					if ( callback ) {
						callback.call( element[ 0 ] );
					}
					next();
				});
			}
		};
	});

	})( jQuery );

	(function( $, undefined ) {

	var mouseHandled = false;
	$( document ).mouseup( function() {
		mouseHandled = false;
	});

	$.widget("ui.mouse", {
		version: "1.10.3",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var that = this;

			this.element
				.bind("mousedown."+this.widgetName, function(event) {
					return that._mouseDown(event);
				})
				.bind("click."+this.widgetName, function(event) {
					if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
						$.removeData(event.target, that.widgetName + ".preventClickEvent");
						event.stopImmediatePropagation();
						return false;
					}
				});

			this.started = false;
		},

		// TODO: make sure destroying one instance of mouse doesn't mess with
		// other instances of mouse
		_mouseDestroy: function() {
			this.element.unbind("."+this.widgetName);
			if ( this._mouseMoveDelegate ) {
				$(document)
					.unbind("mousemove."+this.widgetName, this._mouseMoveDelegate)
					.unbind("mouseup."+this.widgetName, this._mouseUpDelegate);
			}
		},

		_mouseDown: function(event) {
			// don't let more than one widget handle mouseStart
			if( mouseHandled ) { return; }

			// we may have missed mouseup (out of window)
			(this._mouseStarted && this._mouseUp(event));

			this._mouseDownEvent = event;

			var that = this,
				btnIsLeft = (event.which === 1),
				// event.target.nodeName works around a bug in IE 8 with
				// disabled inputs (#7620)
				elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
			if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
				return true;
			}

			this.mouseDelayMet = !this.options.delay;
			if (!this.mouseDelayMet) {
				this._mouseDelayTimer = setTimeout(function() {
					that.mouseDelayMet = true;
				}, this.options.delay);
			}

			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted = (this._mouseStart(event) !== false);
				if (!this._mouseStarted) {
					event.preventDefault();
					return true;
				}
			}

			// Click event may never have fired (Gecko & Opera)
			if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
				$.removeData(event.target, this.widgetName + ".preventClickEvent");
			}

			// these delegates are required to keep context
			this._mouseMoveDelegate = function(event) {
				return that._mouseMove(event);
			};
			this._mouseUpDelegate = function(event) {
				return that._mouseUp(event);
			};
			$(document)
				.bind("mousemove."+this.widgetName, this._mouseMoveDelegate)
				.bind("mouseup."+this.widgetName, this._mouseUpDelegate);

			event.preventDefault();

			mouseHandled = true;
			return true;
		},

		_mouseMove: function(event) {
			// IE mouseup check - mouseup happened when mouse was out of window
			if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
				return this._mouseUp(event);
			}

			if (this._mouseStarted) {
				this._mouseDrag(event);
				return event.preventDefault();
			}

			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
				this._mouseStarted =
					(this._mouseStart(this._mouseDownEvent, event) !== false);
				(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
			}

			return !this._mouseStarted;
		},

		_mouseUp: function(event) {
			$(document)
				.unbind("mousemove."+this.widgetName, this._mouseMoveDelegate)
				.unbind("mouseup."+this.widgetName, this._mouseUpDelegate);

			if (this._mouseStarted) {
				this._mouseStarted = false;

				if (event.target === this._mouseDownEvent.target) {
					$.data(event.target, this.widgetName + ".preventClickEvent", true);
				}

				this._mouseStop(event);
			}

			return false;
		},

		_mouseDistanceMet: function(event) {
			return (Math.max(
					Math.abs(this._mouseDownEvent.pageX - event.pageX),
					Math.abs(this._mouseDownEvent.pageY - event.pageY)
				) >= this.options.distance
			);
		},

		_mouseDelayMet: function(/* event */) {
			return this.mouseDelayMet;
		},

		// These are placeholder methods, to be overriden by extending plugin
		_mouseStart: function(/* event */) {},
		_mouseDrag: function(/* event */) {},
		_mouseStop: function(/* event */) {},
		_mouseCapture: function(/* event */) { return true; }
	});

	})(jQuery);

	(function( $, undefined ) {

	$.widget("ui.draggable", $.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "drag",
		options: {
			addClasses: true,
			appendTo: "parent",
			axis: false,
			connectToSortable: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			grid: false,
			handle: false,
			helper: "original",
			iframeFix: false,
			opacity: false,
			refreshPositions: false,
			revert: false,
			revertDuration: 500,
			scope: "default",
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: false,
			snapMode: "both",
			snapTolerance: 20,
			stack: false,
			zIndex: false,

			// callbacks
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {

			if (this.options.helper === "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
				this.element[0].style.position = "relative";
			}
			if (this.options.addClasses){
				this.element.addClass("ui-draggable");
			}
			if (this.options.disabled){
				this.element.addClass("ui-draggable-disabled");
			}

			this._mouseInit();

		},

		_destroy: function() {
			this.element.removeClass( "ui-draggable ui-draggable-dragging ui-draggable-disabled" );
			this._mouseDestroy();
		},

		_mouseCapture: function(event) {

			var o = this.options;

			// among others, prevent a drag on a resizable-handle
			if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
				return false;
			}

			//Quit if we're not on a valid handle
			this.handle = this._getHandle(event);
			if (!this.handle) {
				return false;
			}

			$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
				$("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>")
				.css({
					width: this.offsetWidth+"px", height: this.offsetHeight+"px",
					position: "absolute", opacity: "0.001", zIndex: 1000
				})
				.css($(this).offset())
				.appendTo("body");
			});

			return true;

		},

		_mouseStart: function(event) {

			var o = this.options;

			//Create and append the visible helper
			this.helper = this._createHelper(event);

			this.helper.addClass("ui-draggable-dragging");

			//Cache the helper size
			this._cacheHelperProportions();

			//If ddmanager is used for droppables, set the global draggable
			if($.ui.ddmanager) {
				$.ui.ddmanager.current = this;
			}

			/*
			 * - Position generation -
			 * This block generates everything position related - it's the core of draggables.
			 */

			//Cache the margins of the original element
			this._cacheMargins();

			//Store the helper's css position
			this.cssPosition = this.helper.css( "position" );
			this.scrollParent = this.helper.scrollParent();
			this.offsetParent = this.helper.offsetParent();
			this.offsetParentCssPosition = this.offsetParent.css( "position" );

			//The element's absolute position on the page minus margins
			this.offset = this.positionAbs = this.element.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};

			//Reset scroll cache
			this.offset.scroll = false;

			$.extend(this.offset, {
				click: { //Where the click happened, relative to the element
					left: event.pageX - this.offset.left,
					top: event.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
			});

			//Generate the original position
			this.originalPosition = this.position = this._generatePosition(event);
			this.originalPageX = event.pageX;
			this.originalPageY = event.pageY;

			//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
			(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

			//Set a containment if given in the options
			this._setContainment();

			//Trigger event + callbacks
			if(this._trigger("start", event) === false) {
				this._clear();
				return false;
			}

			//Recache the helper size
			this._cacheHelperProportions();

			//Prepare the droppable offsets
			if ($.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}


			this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position

			//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
			if ( $.ui.ddmanager ) {
				$.ui.ddmanager.dragStart(this, event);
			}

			return true;
		},

		_mouseDrag: function(event, noPropagation) {
			// reset any necessary cached properties (see #5009)
			if ( this.offsetParentCssPosition === "fixed" ) {
				this.offset.parent = this._getParentOffset();
			}

			//Compute the helpers position
			this.position = this._generatePosition(event);
			this.positionAbs = this._convertPositionTo("absolute");

			//Call plugins and callbacks and use the resulting position if something is returned
			if (!noPropagation) {
				var ui = this._uiHash();
				if(this._trigger("drag", event, ui) === false) {
					this._mouseUp({});
					return false;
				}
				this.position = ui.position;
			}

			if(!this.options.axis || this.options.axis !== "y") {
				this.helper[0].style.left = this.position.left+"px";
			}
			if(!this.options.axis || this.options.axis !== "x") {
				this.helper[0].style.top = this.position.top+"px";
			}
			if($.ui.ddmanager) {
				$.ui.ddmanager.drag(this, event);
			}

			return false;
		},

		_mouseStop: function(event) {

			//If we are using droppables, inform the manager about the drop
			var that = this,
				dropped = false;
			if ($.ui.ddmanager && !this.options.dropBehaviour) {
				dropped = $.ui.ddmanager.drop(this, event);
			}

			//if a drop comes from outside (a sortable)
			if(this.dropped) {
				dropped = this.dropped;
				this.dropped = false;
			}

			//if the original element is no longer in the DOM don't bother to continue (see #8269)
			if ( this.options.helper === "original" && !$.contains( this.element[ 0 ].ownerDocument, this.element[ 0 ] ) ) {
				return false;
			}

			if((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
				$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
					if(that._trigger("stop", event) !== false) {
						that._clear();
					}
				});
			} else {
				if(this._trigger("stop", event) !== false) {
					this._clear();
				}
			}

			return false;
		},

		_mouseUp: function(event) {
			//Remove frame helpers
			$("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this);
			});

			//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
			if( $.ui.ddmanager ) {
				$.ui.ddmanager.dragStop(this, event);
			}

			return $.ui.mouse.prototype._mouseUp.call(this, event);
		},

		cancel: function() {

			if(this.helper.is(".ui-draggable-dragging")) {
				this._mouseUp({});
			} else {
				this._clear();
			}

			return this;

		},

		_getHandle: function(event) {
			return this.options.handle ?
				!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
				true;
		},

		_createHelper: function(event) {

			var o = this.options,
				helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);

			if(!helper.parents("body").length) {
				helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo));
			}

			if(helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) {
				helper.css("position", "absolute");
			}

			return helper;

		},

		_adjustOffsetFromHelper: function(obj) {
			if (typeof obj === "string") {
				obj = obj.split(" ");
			}
			if ($.isArray(obj)) {
				obj = {left: +obj[0], top: +obj[1] || 0};
			}
			if ("left" in obj) {
				this.offset.click.left = obj.left + this.margins.left;
			}
			if ("right" in obj) {
				this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
			}
			if ("top" in obj) {
				this.offset.click.top = obj.top + this.margins.top;
			}
			if ("bottom" in obj) {
				this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
			}
		},

		_getParentOffset: function() {

			//Get the offsetParent and cache its position
			var po = this.offsetParent.offset();

			// This is a special case where we need to modify a offset calculated on start, since the following happened:
			// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
			// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
			//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
			if(this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
				po.left += this.scrollParent.scrollLeft();
				po.top += this.scrollParent.scrollTop();
			}

			//This needs to be actually done for all browsers, since pageX/pageY includes this information
			//Ugly IE fix
			if((this.offsetParent[0] === document.body) ||
				(this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
				po = { top: 0, left: 0 };
			}

			return {
				top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
				left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
			};

		},

		_getRelativeOffset: function() {

			if(this.cssPosition === "relative") {
				var p = this.element.position();
				return {
					top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
					left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
				};
			} else {
				return { top: 0, left: 0 };
			}

		},

		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.element.css("marginLeft"),10) || 0),
				top: (parseInt(this.element.css("marginTop"),10) || 0),
				right: (parseInt(this.element.css("marginRight"),10) || 0),
				bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
			};
		},

		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			};
		},

		_setContainment: function() {

			var over, c, ce,
				o = this.options;

			if ( !o.containment ) {
				this.containment = null;
				return;
			}

			if ( o.containment === "window" ) {
				this.containment = [
					$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
					$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
					$( window ).scrollLeft() + $( window ).width() - this.helperProportions.width - this.margins.left,
					$( window ).scrollTop() + ( $( window ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
				];
				return;
			}

			if ( o.containment === "document") {
				this.containment = [
					0,
					0,
					$( document ).width() - this.helperProportions.width - this.margins.left,
					( $( document ).height() || document.body.parentNode.scrollHeight ) - this.helperProportions.height - this.margins.top
				];
				return;
			}

			if ( o.containment.constructor === Array ) {
				this.containment = o.containment;
				return;
			}

			if ( o.containment === "parent" ) {
				o.containment = this.helper[ 0 ].parentNode;
			}

			c = $( o.containment );
			ce = c[ 0 ];

			if( !ce ) {
				return;
			}

			over = c.css( "overflow" ) !== "hidden";

			this.containment = [
				( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
				( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) + ( parseInt( c.css( "paddingTop" ), 10 ) || 0 ) ,
				( over ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) - ( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) - this.helperProportions.width - this.margins.left - this.margins.right,
				( over ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) - ( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) - ( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) - this.helperProportions.height - this.margins.top  - this.margins.bottom
			];
			this.relative_container = c;
		},

		_convertPositionTo: function(d, pos) {

			if(!pos) {
				pos = this.position;
			}

			var mod = d === "absolute" ? 1 : -1,
				scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent;

			//Cache the scroll
			if (!this.offset.scroll) {
				this.offset.scroll = {top : scroll.scrollTop(), left : scroll.scrollLeft()};
			}

			return {
				top: (
					pos.top	+																// The absolute mouse position
					this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.top * mod -										// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top ) * mod )
				),
				left: (
					pos.left +																// The absolute mouse position
					this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left ) * mod )
				)
			};

		},

		_generatePosition: function(event) {

			var containment, co, top, left,
				o = this.options,
				scroll = this.cssPosition === "absolute" && !( this.scrollParent[ 0 ] !== document && $.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) ? this.offsetParent : this.scrollParent,
				pageX = event.pageX,
				pageY = event.pageY;

			//Cache the scroll
			if (!this.offset.scroll) {
				this.offset.scroll = {top : scroll.scrollTop(), left : scroll.scrollLeft()};
			}

			/*
			 * - Position constraining -
			 * Constrain the position to a mix of grid, containment.
			 */

			// If we are not dragging yet, we won't check for options
			if ( this.originalPosition ) {
				if ( this.containment ) {
					if ( this.relative_container ){
						co = this.relative_container.offset();
						containment = [
							this.containment[ 0 ] + co.left,
							this.containment[ 1 ] + co.top,
							this.containment[ 2 ] + co.left,
							this.containment[ 3 ] + co.top
						];
					}
					else {
						containment = this.containment;
					}

					if(event.pageX - this.offset.click.left < containment[0]) {
						pageX = containment[0] + this.offset.click.left;
					}
					if(event.pageY - this.offset.click.top < containment[1]) {
						pageY = containment[1] + this.offset.click.top;
					}
					if(event.pageX - this.offset.click.left > containment[2]) {
						pageX = containment[2] + this.offset.click.left;
					}
					if(event.pageY - this.offset.click.top > containment[3]) {
						pageY = containment[3] + this.offset.click.top;
					}
				}

				if(o.grid) {
					//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
					top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
					pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

					left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
					pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
				}

			}

			return {
				top: (
					pageY -																	// The absolute mouse position
					this.offset.click.top	-												// Click offset (relative to the element)
					this.offset.relative.top -												// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
					( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top )
				),
				left: (
					pageX -																	// The absolute mouse position
					this.offset.click.left -												// Click offset (relative to the element)
					this.offset.relative.left -												// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
					( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left )
				)
			};

		},

		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging");
			if(this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
				this.helper.remove();
			}
			this.helper = null;
			this.cancelHelperRemoval = false;
		},

		// From now on bulk stuff - mainly helpers

		_trigger: function(type, event, ui) {
			ui = ui || this._uiHash();
			$.ui.plugin.call(this, type, [event, ui]);
			//The absolute position has to be recalculated after plugins
			if(type === "drag") {
				this.positionAbs = this._convertPositionTo("absolute");
			}
			return $.Widget.prototype._trigger.call(this, type, event, ui);
		},

		plugins: {},

		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			};
		}

	});

	$.ui.plugin.add("draggable", "connectToSortable", {
		start: function(event, ui) {

			var inst = $(this).data("ui-draggable"), o = inst.options,
				uiSortable = $.extend({}, ui, { item: inst.element });
			inst.sortables = [];
			$(o.connectToSortable).each(function() {
				var sortable = $.data(this, "ui-sortable");
				if (sortable && !sortable.options.disabled) {
					inst.sortables.push({
						instance: sortable,
						shouldRevert: sortable.options.revert
					});
					sortable.refreshPositions();	// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
					sortable._trigger("activate", event, uiSortable);
				}
			});

		},
		stop: function(event, ui) {

			//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
			var inst = $(this).data("ui-draggable"),
				uiSortable = $.extend({}, ui, { item: inst.element });

			$.each(inst.sortables, function() {
				if(this.instance.isOver) {

					this.instance.isOver = 0;

					inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
					this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

					//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: "valid/invalid"
					if(this.shouldRevert) {
						this.instance.options.revert = this.shouldRevert;
					}

					//Trigger the stop of the sortable
					this.instance._mouseStop(event);

					this.instance.options.helper = this.instance.options._helper;

					//If the helper has been the original item, restore properties in the sortable
					if(inst.options.helper === "original") {
						this.instance.currentItem.css({ top: "auto", left: "auto" });
					}

				} else {
					this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
					this.instance._trigger("deactivate", event, uiSortable);
				}

			});

		},
		drag: function(event, ui) {

			var inst = $(this).data("ui-draggable"), that = this;

			$.each(inst.sortables, function() {

				var innermostIntersecting = false,
					thisSortable = this;

				//Copy over some variables to allow calling the sortable's native _intersectsWith
				this.instance.positionAbs = inst.positionAbs;
				this.instance.helperProportions = inst.helperProportions;
				this.instance.offset.click = inst.offset.click;

				if(this.instance._intersectsWith(this.instance.containerCache)) {
					innermostIntersecting = true;
					$.each(inst.sortables, function () {
						this.instance.positionAbs = inst.positionAbs;
						this.instance.helperProportions = inst.helperProportions;
						this.instance.offset.click = inst.offset.click;
						if (this !== thisSortable &&
							this.instance._intersectsWith(this.instance.containerCache) &&
							$.contains(thisSortable.instance.element[0], this.instance.element[0])
						) {
							innermostIntersecting = false;
						}
						return innermostIntersecting;
					});
				}


				if(innermostIntersecting) {
					//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
					if(!this.instance.isOver) {

						this.instance.isOver = 1;
						//Now we fake the start of dragging for the sortable instance,
						//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
						//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
						this.instance.currentItem = $(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", true);
						this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
						this.instance.options.helper = function() { return ui.helper[0]; };

						event.target = this.instance.currentItem[0];
						this.instance._mouseCapture(event, true);
						this.instance._mouseStart(event, true, true);

						//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
						this.instance.offset.click.top = inst.offset.click.top;
						this.instance.offset.click.left = inst.offset.click.left;
						this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
						this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

						inst._trigger("toSortable", event);
						inst.dropped = this.instance.element; //draggable revert needs that
						//hack so receive/update callbacks work (mostly)
						inst.currentItem = inst.element;
						this.instance.fromOutside = inst;

					}

					//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
					if(this.instance.currentItem) {
						this.instance._mouseDrag(event);
					}

				} else {

					//If it doesn't intersect with the sortable, and it intersected before,
					//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
					if(this.instance.isOver) {

						this.instance.isOver = 0;
						this.instance.cancelHelperRemoval = true;

						//Prevent reverting on this forced stop
						this.instance.options.revert = false;

						// The out event needs to be triggered independently
						this.instance._trigger("out", event, this.instance._uiHash(this.instance));

						this.instance._mouseStop(event, true);
						this.instance.options.helper = this.instance.options._helper;

						//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
						this.instance.currentItem.remove();
						if(this.instance.placeholder) {
							this.instance.placeholder.remove();
						}

						inst._trigger("fromSortable", event);
						inst.dropped = false; //draggable revert needs that
					}

				}

			});

		}
	});

	$.ui.plugin.add("draggable", "cursor", {
		start: function() {
			var t = $("body"), o = $(this).data("ui-draggable").options;
			if (t.css("cursor")) {
				o._cursor = t.css("cursor");
			}
			t.css("cursor", o.cursor);
		},
		stop: function() {
			var o = $(this).data("ui-draggable").options;
			if (o._cursor) {
				$("body").css("cursor", o._cursor);
			}
		}
	});

	$.ui.plugin.add("draggable", "opacity", {
		start: function(event, ui) {
			var t = $(ui.helper), o = $(this).data("ui-draggable").options;
			if(t.css("opacity")) {
				o._opacity = t.css("opacity");
			}
			t.css("opacity", o.opacity);
		},
		stop: function(event, ui) {
			var o = $(this).data("ui-draggable").options;
			if(o._opacity) {
				$(ui.helper).css("opacity", o._opacity);
			}
		}
	});

	$.ui.plugin.add("draggable", "scroll", {
		start: function() {
			var i = $(this).data("ui-draggable");
			if(i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {
				i.overflowOffset = i.scrollParent.offset();
			}
		},
		drag: function( event ) {

			var i = $(this).data("ui-draggable"), o = i.options, scrolled = false;

			if(i.scrollParent[0] !== document && i.scrollParent[0].tagName !== "HTML") {

				if(!o.axis || o.axis !== "x") {
					if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
						i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
					} else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
						i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
					}
				}

				if(!o.axis || o.axis !== "y") {
					if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
						i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
					} else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
						i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
					}
				}

			} else {

				if(!o.axis || o.axis !== "x") {
					if(event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
					} else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
					}
				}

				if(!o.axis || o.axis !== "y") {
					if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
					} else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
					}
				}

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(i, event);
			}

		}
	});

	$.ui.plugin.add("draggable", "snap", {
		start: function() {

			var i = $(this).data("ui-draggable"),
				o = i.options;

			i.snapElements = [];

			$(o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap).each(function() {
				var $t = $(this),
					$o = $t.offset();
				if(this !== i.element[0]) {
					i.snapElements.push({
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					});
				}
			});

		},
		drag: function(event, ui) {

			var ts, bs, ls, rs, l, r, t, b, i, first,
				inst = $(this).data("ui-draggable"),
				o = inst.options,
				d = o.snapTolerance,
				x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
				y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

			for (i = inst.snapElements.length - 1; i >= 0; i--){

				l = inst.snapElements[i].left;
				r = l + inst.snapElements[i].width;
				t = inst.snapElements[i].top;
				b = t + inst.snapElements[i].height;

				if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains( inst.snapElements[ i ].item.ownerDocument, inst.snapElements[ i ].item ) ) {
					if(inst.snapElements[i].snapping) {
						(inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
					}
					inst.snapElements[i].snapping = false;
					continue;
				}

				if(o.snapMode !== "inner") {
					ts = Math.abs(t - y2) <= d;
					bs = Math.abs(b - y1) <= d;
					ls = Math.abs(l - x2) <= d;
					rs = Math.abs(r - x1) <= d;
					if(ts) {
						ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
					}
					if(bs) {
						ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
					}
					if(ls) {
						ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
					}
					if(rs) {
						ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
					}
				}

				first = (ts || bs || ls || rs);

				if(o.snapMode !== "outer") {
					ts = Math.abs(t - y1) <= d;
					bs = Math.abs(b - y2) <= d;
					ls = Math.abs(l - x1) <= d;
					rs = Math.abs(r - x2) <= d;
					if(ts) {
						ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
					}
					if(bs) {
						ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
					}
					if(ls) {
						ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
					}
					if(rs) {
						ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
					}
				}

				if(!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
					(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
				}
				inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

			}

		}
	});

	$.ui.plugin.add("draggable", "stack", {
		start: function() {
			var min,
				o = this.data("ui-draggable").options,
				group = $.makeArray($(o.stack)).sort(function(a,b) {
					return (parseInt($(a).css("zIndex"),10) || 0) - (parseInt($(b).css("zIndex"),10) || 0);
				});

			if (!group.length) { return; }

			min = parseInt($(group[0]).css("zIndex"), 10) || 0;
			$(group).each(function(i) {
				$(this).css("zIndex", min + i);
			});
			this.css("zIndex", (min + group.length));
		}
	});

	$.ui.plugin.add("draggable", "zIndex", {
		start: function(event, ui) {
			var t = $(ui.helper), o = $(this).data("ui-draggable").options;
			if(t.css("zIndex")) {
				o._zIndex = t.css("zIndex");
			}
			t.css("zIndex", o.zIndex);
		},
		stop: function(event, ui) {
			var o = $(this).data("ui-draggable").options;
			if(o._zIndex) {
				$(ui.helper).css("zIndex", o._zIndex);
			}
		}
	});

	})(jQuery);

	(function( $, undefined ) {

	function isOverAxis( x, reference, size ) {
		return ( x > reference ) && ( x < ( reference + size ) );
	}

	$.widget("ui.droppable", {
		version: "1.10.3",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: false,
			addClasses: true,
			greedy: false,
			hoverClass: false,
			scope: "default",
			tolerance: "intersect",

			// callbacks
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {

			var o = this.options,
				accept = o.accept;

			this.isover = false;
			this.isout = true;

			this.accept = $.isFunction(accept) ? accept : function(d) {
				return d.is(accept);
			};

			//Store the droppable's proportions
			this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };

			// Add the reference and positions to the manager
			$.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
			$.ui.ddmanager.droppables[o.scope].push(this);

			(o.addClasses && this.element.addClass("ui-droppable"));

		},

		_destroy: function() {
			var i = 0,
				drop = $.ui.ddmanager.droppables[this.options.scope];

			for ( ; i < drop.length; i++ ) {
				if ( drop[i] === this ) {
					drop.splice(i, 1);
				}
			}

			this.element.removeClass("ui-droppable ui-droppable-disabled");
		},

		_setOption: function(key, value) {

			if(key === "accept") {
				this.accept = $.isFunction(value) ? value : function(d) {
					return d.is(value);
				};
			}
			$.Widget.prototype._setOption.apply(this, arguments);
		},

		_activate: function(event) {
			var draggable = $.ui.ddmanager.current;
			if(this.options.activeClass) {
				this.element.addClass(this.options.activeClass);
			}
			if(draggable){
				this._trigger("activate", event, this.ui(draggable));
			}
		},

		_deactivate: function(event) {
			var draggable = $.ui.ddmanager.current;
			if(this.options.activeClass) {
				this.element.removeClass(this.options.activeClass);
			}
			if(draggable){
				this._trigger("deactivate", event, this.ui(draggable));
			}
		},

		_over: function(event) {

			var draggable = $.ui.ddmanager.current;

			// Bail if draggable and droppable are same element
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return;
			}

			if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
				if(this.options.hoverClass) {
					this.element.addClass(this.options.hoverClass);
				}
				this._trigger("over", event, this.ui(draggable));
			}

		},

		_out: function(event) {

			var draggable = $.ui.ddmanager.current;

			// Bail if draggable and droppable are same element
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return;
			}

			if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
				if(this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass);
				}
				this._trigger("out", event, this.ui(draggable));
			}

		},

		_drop: function(event,custom) {

			var draggable = custom || $.ui.ddmanager.current,
				childrenIntersection = false;

			// Bail if draggable and droppable are same element
			if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
				return false;
			}

			this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var inst = $.data(this, "ui-droppable");
				if(
					inst.options.greedy &&
					!inst.options.disabled &&
					inst.options.scope === draggable.options.scope &&
					inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element)) &&
					$.ui.intersect(draggable, $.extend(inst, { offset: inst.element.offset() }), inst.options.tolerance)
				) { childrenIntersection = true; return false; }
			});
			if(childrenIntersection) {
				return false;
			}

			if(this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
				if(this.options.activeClass) {
					this.element.removeClass(this.options.activeClass);
				}
				if(this.options.hoverClass) {
					this.element.removeClass(this.options.hoverClass);
				}
				this._trigger("drop", event, this.ui(draggable));
				return this.element;
			}

			return false;

		},

		ui: function(c) {
			return {
				draggable: (c.currentItem || c.element),
				helper: c.helper,
				position: c.position,
				offset: c.positionAbs
			};
		}

	});

	$.ui.intersect = function(draggable, droppable, toleranceMode) {

		if (!droppable.offset) {
			return false;
		}

		var draggableLeft, draggableTop,
			x1 = (draggable.positionAbs || draggable.position.absolute).left, x2 = x1 + draggable.helperProportions.width,
			y1 = (draggable.positionAbs || draggable.position.absolute).top, y2 = y1 + draggable.helperProportions.height,
			l = droppable.offset.left, r = l + droppable.proportions.width,
			t = droppable.offset.top, b = t + droppable.proportions.height;

		switch (toleranceMode) {
			case "fit":
				return (l <= x1 && x2 <= r && t <= y1 && y2 <= b);
			case "intersect":
				return (l < x1 + (draggable.helperProportions.width / 2) && // Right Half
					x2 - (draggable.helperProportions.width / 2) < r && // Left Half
					t < y1 + (draggable.helperProportions.height / 2) && // Bottom Half
					y2 - (draggable.helperProportions.height / 2) < b ); // Top Half
			case "pointer":
				draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left);
				draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top);
				return isOverAxis( draggableTop, t, droppable.proportions.height ) && isOverAxis( draggableLeft, l, droppable.proportions.width );
			case "touch":
				return (
					(y1 >= t && y1 <= b) ||	// Top edge touching
					(y2 >= t && y2 <= b) ||	// Bottom edge touching
					(y1 < t && y2 > b)		// Surrounded vertically
				) && (
					(x1 >= l && x1 <= r) ||	// Left edge touching
					(x2 >= l && x2 <= r) ||	// Right edge touching
					(x1 < l && x2 > r)		// Surrounded horizontally
				);
			default:
				return false;
			}

	};

	/*
		This manager tracks offsets of draggables and droppables
	*/
	$.ui.ddmanager = {
		current: null,
		droppables: { "default": [] },
		prepareOffsets: function(t, event) {

			var i, j,
				m = $.ui.ddmanager.droppables[t.options.scope] || [],
				type = event ? event.type : null, // workaround for #2317
				list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

			droppablesLoop: for (i = 0; i < m.length; i++) {

				//No disabled and non-accepted
				if(m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0],(t.currentItem || t.element)))) {
					continue;
				}

				// Filter out elements in the current dragged item
				for (j=0; j < list.length; j++) {
					if(list[j] === m[i].element[0]) {
						m[i].proportions.height = 0;
						continue droppablesLoop;
					}
				}

				m[i].visible = m[i].element.css("display") !== "none";
				if(!m[i].visible) {
					continue;
				}

				//Activate the droppable if used directly from draggables
				if(type === "mousedown") {
					m[i]._activate.call(m[i], event);
				}

				m[i].offset = m[i].element.offset();
				m[i].proportions = { width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight };

			}

		},
		drop: function(draggable, event) {

			var dropped = false;
			// Create a copy of the droppables in case the list changes during the drop (#9116)
			$.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {

				if(!this.options) {
					return;
				}
				if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance)) {
					dropped = this._drop.call(this, event) || dropped;
				}

				if (!this.options.disabled && this.visible && this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
					this.isout = true;
					this.isover = false;
					this._deactivate.call(this, event);
				}

			});
			return dropped;

		},
		dragStart: function( draggable, event ) {
			//Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
			draggable.element.parentsUntil( "body" ).bind( "scroll.droppable", function() {
				if( !draggable.options.refreshPositions ) {
					$.ui.ddmanager.prepareOffsets( draggable, event );
				}
			});
		},
		drag: function(draggable, event) {

			//If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
			if(draggable.options.refreshPositions) {
				$.ui.ddmanager.prepareOffsets(draggable, event);
			}

			//Run through all droppables and check their positions based on specific tolerance options
			$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

				if(this.options.disabled || this.greedyChild || !this.visible) {
					return;
				}

				var parentInstance, scope, parent,
					intersects = $.ui.intersect(draggable, this, this.options.tolerance),
					c = !intersects && this.isover ? "isout" : (intersects && !this.isover ? "isover" : null);
				if(!c) {
					return;
				}

				if (this.options.greedy) {
					// find droppable parents with same scope
					scope = this.options.scope;
					parent = this.element.parents(":data(ui-droppable)").filter(function () {
						return $.data(this, "ui-droppable").options.scope === scope;
					});

					if (parent.length) {
						parentInstance = $.data(parent[0], "ui-droppable");
						parentInstance.greedyChild = (c === "isover");
					}
				}

				// we just moved into a greedy child
				if (parentInstance && c === "isover") {
					parentInstance.isover = false;
					parentInstance.isout = true;
					parentInstance._out.call(parentInstance, event);
				}

				this[c] = true;
				this[c === "isout" ? "isover" : "isout"] = false;
				this[c === "isover" ? "_over" : "_out"].call(this, event);

				// we just moved out of a greedy child
				if (parentInstance && c === "isout") {
					parentInstance.isout = false;
					parentInstance.isover = true;
					parentInstance._over.call(parentInstance, event);
				}
			});

		},
		dragStop: function( draggable, event ) {
			draggable.element.parentsUntil( "body" ).unbind( "scroll.droppable" );
			//Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
			if( !draggable.options.refreshPositions ) {
				$.ui.ddmanager.prepareOffsets( draggable, event );
			}
		}
	};

	})(jQuery);

	(function( $, undefined ) {

	function num(v) {
		return parseInt(v, 10) || 0;
	}

	function isNumber(value) {
		return !isNaN(parseInt(value, 10));
	}

	$.widget("ui.resizable", $.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: false,
			animate: false,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: false,
			autoHide: false,
			containment: false,
			ghost: false,
			grid: false,
			handles: "e,s,se",
			helper: false,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			// See #7960
			zIndex: 90,

			// callbacks
			resize: null,
			start: null,
			stop: null
		},
		_create: function() {

			var n, i, handle, axis, hname,
				that = this,
				o = this.options;
			this.element.addClass("ui-resizable");

			$.extend(this, {
				_aspectRatio: !!(o.aspectRatio),
				aspectRatio: o.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
			});

			//Wrap the element if it cannot hold child nodes
			if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

				//Create a wrapper element and set the wrapper to the new current internal element
				this.element.wrap(
					$("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
						position: this.element.css("position"),
						width: this.element.outerWidth(),
						height: this.element.outerHeight(),
						top: this.element.css("top"),
						left: this.element.css("left")
					})
				);

				//Overwrite the original this.element
				this.element = this.element.parent().data(
					"ui-resizable", this.element.data("ui-resizable")
				);

				this.elementIsWrapper = true;

				//Move margins to the wrapper
				this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
				this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});

				//Prevent Safari textarea resize
				this.originalResizeStyle = this.originalElement.css("resize");
				this.originalElement.css("resize", "none");

				//Push the actual element to our proportionallyResize internal array
				this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" }));

				// avoid IE jump (hard set the margin)
				this.originalElement.css({ margin: this.originalElement.css("margin") });

				// fix handlers offset
				this._proportionallyResize();

			}

			this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" });
			if(this.handles.constructor === String) {

				if ( this.handles === "all") {
					this.handles = "n,e,s,w,se,sw,ne,nw";
				}

				n = this.handles.split(",");
				this.handles = {};

				for(i = 0; i < n.length; i++) {

					handle = $.trim(n[i]);
					hname = "ui-resizable-"+handle;
					axis = $("<div class='ui-resizable-handle " + hname + "'></div>");

					// Apply zIndex to all handles - see #7960
					axis.css({ zIndex: o.zIndex });

					//TODO : What's going on here?
					if ("se" === handle) {
						axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
					}

					//Insert into internal handles object and append to element
					this.handles[handle] = ".ui-resizable-"+handle;
					this.element.append(axis);
				}

			}

			this._renderAxis = function(target) {

				var i, axis, padPos, padWrapper;

				target = target || this.element;

				for(i in this.handles) {

					if(this.handles[i].constructor === String) {
						this.handles[i] = $(this.handles[i], this.element).show();
					}

					//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

						axis = $(this.handles[i], this.element);

						//Checking the correct pad and border
						padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

						//The padding type i have to apply...
						padPos = [ "padding",
							/ne|nw|n/.test(i) ? "Top" :
							/se|sw|s/.test(i) ? "Bottom" :
							/^e$/.test(i) ? "Right" : "Left" ].join("");

						target.css(padPos, padWrapper);

						this._proportionallyResize();

					}

					//TODO: What's that good for? There's not anything to be executed left
					if(!$(this.handles[i]).length) {
						continue;
					}
				}
			};

			//TODO: make renderAxis a prototype function
			this._renderAxis(this.element);

			this._handles = $(".ui-resizable-handle", this.element)
				.disableSelection();

			//Matching axis name
			this._handles.mouseover(function() {
				if (!that.resizing) {
					if (this.className) {
						axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
					}
					//Axis, default = se
					that.axis = axis && axis[1] ? axis[1] : "se";
				}
			});

			//If we want to auto hide the elements
			if (o.autoHide) {
				this._handles.hide();
				$(this.element)
					.addClass("ui-resizable-autohide")
					.mouseenter(function() {
						if (o.disabled) {
							return;
						}
						$(this).removeClass("ui-resizable-autohide");
						that._handles.show();
					})
					.mouseleave(function(){
						if (o.disabled) {
							return;
						}
						if (!that.resizing) {
							$(this).addClass("ui-resizable-autohide");
							that._handles.hide();
						}
					});
			}

			//Initialize the mouse interaction
			this._mouseInit();

		},

		_destroy: function() {

			this._mouseDestroy();

			var wrapper,
				_destroy = function(exp) {
					$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
						.removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
				};

			//TODO: Unwrap at same DOM position
			if (this.elementIsWrapper) {
				_destroy(this.element);
				wrapper = this.element;
				this.originalElement.css({
					position: wrapper.css("position"),
					width: wrapper.outerWidth(),
					height: wrapper.outerHeight(),
					top: wrapper.css("top"),
					left: wrapper.css("left")
				}).insertAfter( wrapper );
				wrapper.remove();
			}

			this.originalElement.css("resize", this.originalResizeStyle);
			_destroy(this.originalElement);

			return this;
		},

		_mouseCapture: function(event) {
			var i, handle,
				capture = false;

			for (i in this.handles) {
				handle = $(this.handles[i])[0];
				if (handle === event.target || $.contains(handle, event.target)) {
					capture = true;
				}
			}

			return !this.options.disabled && capture;
		},

		_mouseStart: function(event) {

			var curleft, curtop, cursor,
				o = this.options,
				iniPos = this.element.position(),
				el = this.element;

			this.resizing = true;

			// bugfix for http://dev.jquery.com/ticket/1749
			if ( (/absolute/).test( el.css("position") ) ) {
				el.css({ position: "absolute", top: el.css("top"), left: el.css("left") });
			} else if (el.is(".ui-draggable")) {
				el.css({ position: "absolute", top: iniPos.top, left: iniPos.left });
			}

			this._renderProxy();

			curleft = num(this.helper.css("left"));
			curtop = num(this.helper.css("top"));

			if (o.containment) {
				curleft += $(o.containment).scrollLeft() || 0;
				curtop += $(o.containment).scrollTop() || 0;
			}

			//Store needed variables
			this.offset = this.helper.offset();
			this.position = { left: curleft, top: curtop };
			this.size = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
			this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
			this.originalPosition = { left: curleft, top: curtop };
			this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
			this.originalMousePosition = { left: event.pageX, top: event.pageY };

			//Aspect Ratio
			this.aspectRatio = (typeof o.aspectRatio === "number") ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

			cursor = $(".ui-resizable-" + this.axis).css("cursor");
			$("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);

			el.addClass("ui-resizable-resizing");
			this._propagate("start", event);
			return true;
		},

		_mouseDrag: function(event) {

			//Increase performance, avoid regex
			var data,
				el = this.helper, props = {},
				smp = this.originalMousePosition,
				a = this.axis,
				prevTop = this.position.top,
				prevLeft = this.position.left,
				prevWidth = this.size.width,
				prevHeight = this.size.height,
				dx = (event.pageX-smp.left)||0,
				dy = (event.pageY-smp.top)||0,
				trigger = this._change[a];

			if (!trigger) {
				return false;
			}

			// Calculate the attrs that will be change
			data = trigger.apply(this, [event, dx, dy]);

			// Put this in the mouseDrag handler since the user can start pressing shift while resizing
			this._updateVirtualBoundaries(event.shiftKey);
			if (this._aspectRatio || event.shiftKey) {
				data = this._updateRatio(data, event);
			}

			data = this._respectSize(data, event);

			this._updateCache(data);

			// plugins callbacks need to be called first
			this._propagate("resize", event);

			if (this.position.top !== prevTop) {
				props.top = this.position.top + "px";
			}
			if (this.position.left !== prevLeft) {
				props.left = this.position.left + "px";
			}
			if (this.size.width !== prevWidth) {
				props.width = this.size.width + "px";
			}
			if (this.size.height !== prevHeight) {
				props.height = this.size.height + "px";
			}
			el.css(props);

			if (!this._helper && this._proportionallyResizeElements.length) {
				this._proportionallyResize();
			}

			// Call the user callback if the element was resized
			if ( ! $.isEmptyObject(props) ) {
				this._trigger("resize", event, this.ui());
			}

			return false;
		},

		_mouseStop: function(event) {

			this.resizing = false;
			var pr, ista, soffseth, soffsetw, s, left, top,
				o = this.options, that = this;

			if(this._helper) {

				pr = this._proportionallyResizeElements;
				ista = pr.length && (/textarea/i).test(pr[0].nodeName);
				soffseth = ista && $.ui.hasScroll(pr[0], "left") /* TODO - jump height */ ? 0 : that.sizeDiff.height;
				soffsetw = ista ? 0 : that.sizeDiff.width;

				s = { width: (that.helper.width()  - soffsetw), height: (that.helper.height() - soffseth) };
				left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null;
				top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;

				if (!o.animate) {
					this.element.css($.extend(s, { top: top, left: left }));
				}

				that.helper.height(that.size.height);
				that.helper.width(that.size.width);

				if (this._helper && !o.animate) {
					this._proportionallyResize();
				}
			}

			$("body").css("cursor", "auto");

			this.element.removeClass("ui-resizable-resizing");

			this._propagate("stop", event);

			if (this._helper) {
				this.helper.remove();
			}

			return false;

		},

		_updateVirtualBoundaries: function(forceAspectRatio) {
			var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
				o = this.options;

			b = {
				minWidth: isNumber(o.minWidth) ? o.minWidth : 0,
				maxWidth: isNumber(o.maxWidth) ? o.maxWidth : Infinity,
				minHeight: isNumber(o.minHeight) ? o.minHeight : 0,
				maxHeight: isNumber(o.maxHeight) ? o.maxHeight : Infinity
			};

			if(this._aspectRatio || forceAspectRatio) {
				// We want to create an enclosing box whose aspect ration is the requested one
				// First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
				pMinWidth = b.minHeight * this.aspectRatio;
				pMinHeight = b.minWidth / this.aspectRatio;
				pMaxWidth = b.maxHeight * this.aspectRatio;
				pMaxHeight = b.maxWidth / this.aspectRatio;

				if(pMinWidth > b.minWidth) {
					b.minWidth = pMinWidth;
				}
				if(pMinHeight > b.minHeight) {
					b.minHeight = pMinHeight;
				}
				if(pMaxWidth < b.maxWidth) {
					b.maxWidth = pMaxWidth;
				}
				if(pMaxHeight < b.maxHeight) {
					b.maxHeight = pMaxHeight;
				}
			}
			this._vBoundaries = b;
		},

		_updateCache: function(data) {
			this.offset = this.helper.offset();
			if (isNumber(data.left)) {
				this.position.left = data.left;
			}
			if (isNumber(data.top)) {
				this.position.top = data.top;
			}
			if (isNumber(data.height)) {
				this.size.height = data.height;
			}
			if (isNumber(data.width)) {
				this.size.width = data.width;
			}
		},

		_updateRatio: function( data ) {

			var cpos = this.position,
				csize = this.size,
				a = this.axis;

			if (isNumber(data.height)) {
				data.width = (data.height * this.aspectRatio);
			} else if (isNumber(data.width)) {
				data.height = (data.width / this.aspectRatio);
			}

			if (a === "sw") {
				data.left = cpos.left + (csize.width - data.width);
				data.top = null;
			}
			if (a === "nw") {
				data.top = cpos.top + (csize.height - data.height);
				data.left = cpos.left + (csize.width - data.width);
			}

			return data;
		},

		_respectSize: function( data ) {

			var o = this._vBoundaries,
				a = this.axis,
				ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
				isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
				dw = this.originalPosition.left + this.originalSize.width,
				dh = this.position.top + this.size.height,
				cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
			if (isminw) {
				data.width = o.minWidth;
			}
			if (isminh) {
				data.height = o.minHeight;
			}
			if (ismaxw) {
				data.width = o.maxWidth;
			}
			if (ismaxh) {
				data.height = o.maxHeight;
			}

			if (isminw && cw) {
				data.left = dw - o.minWidth;
			}
			if (ismaxw && cw) {
				data.left = dw - o.maxWidth;
			}
			if (isminh && ch) {
				data.top = dh - o.minHeight;
			}
			if (ismaxh && ch) {
				data.top = dh - o.maxHeight;
			}

			// fixing jump error on top/left - bug #2330
			if (!data.width && !data.height && !data.left && data.top) {
				data.top = null;
			} else if (!data.width && !data.height && !data.top && data.left) {
				data.left = null;
			}

			return data;
		},

		_proportionallyResize: function() {

			if (!this._proportionallyResizeElements.length) {
				return;
			}

			var i, j, borders, paddings, prel,
				element = this.helper || this.element;

			for ( i=0; i < this._proportionallyResizeElements.length; i++) {

				prel = this._proportionallyResizeElements[i];

				if (!this.borderDif) {
					this.borderDif = [];
					borders = [prel.css("borderTopWidth"), prel.css("borderRightWidth"), prel.css("borderBottomWidth"), prel.css("borderLeftWidth")];
					paddings = [prel.css("paddingTop"), prel.css("paddingRight"), prel.css("paddingBottom"), prel.css("paddingLeft")];

					for ( j = 0; j < borders.length; j++ ) {
						this.borderDif[ j ] = ( parseInt( borders[ j ], 10 ) || 0 ) + ( parseInt( paddings[ j ], 10 ) || 0 );
					}
				}

				prel.css({
					height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
					width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
				});

			}

		},

		_renderProxy: function() {

			var el = this.element, o = this.options;
			this.elementOffset = el.offset();

			if(this._helper) {

				this.helper = this.helper || $("<div style='overflow:hidden;'></div>");

				this.helper.addClass(this._helper).css({
					width: this.element.outerWidth() - 1,
					height: this.element.outerHeight() - 1,
					position: "absolute",
					left: this.elementOffset.left +"px",
					top: this.elementOffset.top +"px",
					zIndex: ++o.zIndex //TODO: Don't modify option
				});

				this.helper
					.appendTo("body")
					.disableSelection();

			} else {
				this.helper = this.element;
			}

		},

		_change: {
			e: function(event, dx) {
				return { width: this.originalSize.width + dx };
			},
			w: function(event, dx) {
				var cs = this.originalSize, sp = this.originalPosition;
				return { left: sp.left + dx, width: cs.width - dx };
			},
			n: function(event, dx, dy) {
				var cs = this.originalSize, sp = this.originalPosition;
				return { top: sp.top + dy, height: cs.height - dy };
			},
			s: function(event, dx, dy) {
				return { height: this.originalSize.height + dy };
			},
			se: function(event, dx, dy) {
				return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
			},
			sw: function(event, dx, dy) {
				return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
			},
			ne: function(event, dx, dy) {
				return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
			},
			nw: function(event, dx, dy) {
				return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
			}
		},

		_propagate: function(n, event) {
			$.ui.plugin.call(this, n, [event, this.ui()]);
			(n !== "resize" && this._trigger(n, event, this.ui()));
		},

		plugins: {},

		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			};
		}

	});

	/*
	 * Resizable Extensions
	 */

	$.ui.plugin.add("resizable", "animate", {

		stop: function( event ) {
			var that = $(this).data("ui-resizable"),
				o = that.options,
				pr = that._proportionallyResizeElements,
				ista = pr.length && (/textarea/i).test(pr[0].nodeName),
				soffseth = ista && $.ui.hasScroll(pr[0], "left") /* TODO - jump height */ ? 0 : that.sizeDiff.height,
				soffsetw = ista ? 0 : that.sizeDiff.width,
				style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
				left = (parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left)) || null,
				top = (parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top)) || null;

			that.element.animate(
				$.extend(style, top && left ? { top: top, left: left } : {}), {
					duration: o.animateDuration,
					easing: o.animateEasing,
					step: function() {

						var data = {
							width: parseInt(that.element.css("width"), 10),
							height: parseInt(that.element.css("height"), 10),
							top: parseInt(that.element.css("top"), 10),
							left: parseInt(that.element.css("left"), 10)
						};

						if (pr && pr.length) {
							$(pr[0]).css({ width: data.width, height: data.height });
						}

						// propagating resize, and updating values for each animation step
						that._updateCache(data);
						that._propagate("resize", event);

					}
				}
			);
		}

	});

	$.ui.plugin.add("resizable", "containment", {

		start: function() {
			var element, p, co, ch, cw, width, height,
				that = $(this).data("ui-resizable"),
				o = that.options,
				el = that.element,
				oc = o.containment,
				ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;

			if (!ce) {
				return;
			}

			that.containerElement = $(ce);

			if (/document/.test(oc) || oc === document) {
				that.containerOffset = { left: 0, top: 0 };
				that.containerPosition = { left: 0, top: 0 };

				that.parentData = {
					element: $(document), left: 0, top: 0,
					width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight
				};
			}

			// i'm a node, so compute top, left, right, bottom
			else {
				element = $(ce);
				p = [];
				$([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) { p[i] = num(element.css("padding" + name)); });

				that.containerOffset = element.offset();
				that.containerPosition = element.position();
				that.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) };

				co = that.containerOffset;
				ch = that.containerSize.height;
				cw = that.containerSize.width;
				width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw );
				height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

				that.parentData = {
					element: ce, left: co.left, top: co.top, width: width, height: height
				};
			}
		},

		resize: function( event ) {
			var woset, hoset, isParent, isOffsetRelative,
				that = $(this).data("ui-resizable"),
				o = that.options,
				co = that.containerOffset, cp = that.position,
				pRatio = that._aspectRatio || event.shiftKey,
				cop = { top:0, left:0 }, ce = that.containerElement;

			if (ce[0] !== document && (/static/).test(ce.css("position"))) {
				cop = co;
			}

			if (cp.left < (that._helper ? co.left : 0)) {
				that.size.width = that.size.width + (that._helper ? (that.position.left - co.left) : (that.position.left - cop.left));
				if (pRatio) {
					that.size.height = that.size.width / that.aspectRatio;
				}
				that.position.left = o.helper ? co.left : 0;
			}

			if (cp.top < (that._helper ? co.top : 0)) {
				that.size.height = that.size.height + (that._helper ? (that.position.top - co.top) : that.position.top);
				if (pRatio) {
					that.size.width = that.size.height * that.aspectRatio;
				}
				that.position.top = that._helper ? co.top : 0;
			}

			that.offset.left = that.parentData.left+that.position.left;
			that.offset.top = that.parentData.top+that.position.top;

			woset = Math.abs( (that._helper ? that.offset.left - cop.left : (that.offset.left - cop.left)) + that.sizeDiff.width );
			hoset = Math.abs( (that._helper ? that.offset.top - cop.top : (that.offset.top - co.top)) + that.sizeDiff.height );

			isParent = that.containerElement.get(0) === that.element.parent().get(0);
			isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));

			if(isParent && isOffsetRelative) {
				woset -= that.parentData.left;
			}

			if (woset + that.size.width >= that.parentData.width) {
				that.size.width = that.parentData.width - woset;
				if (pRatio) {
					that.size.height = that.size.width / that.aspectRatio;
				}
			}

			if (hoset + that.size.height >= that.parentData.height) {
				that.size.height = that.parentData.height - hoset;
				if (pRatio) {
					that.size.width = that.size.height * that.aspectRatio;
				}
			}
		},

		stop: function(){
			var that = $(this).data("ui-resizable"),
				o = that.options,
				co = that.containerOffset,
				cop = that.containerPosition,
				ce = that.containerElement,
				helper = $(that.helper),
				ho = helper.offset(),
				w = helper.outerWidth() - that.sizeDiff.width,
				h = helper.outerHeight() - that.sizeDiff.height;

			if (that._helper && !o.animate && (/relative/).test(ce.css("position"))) {
				$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });
			}

			if (that._helper && !o.animate && (/static/).test(ce.css("position"))) {
				$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });
			}

		}
	});

	$.ui.plugin.add("resizable", "alsoResize", {

		start: function () {
			var that = $(this).data("ui-resizable"),
				o = that.options,
				_store = function (exp) {
					$(exp).each(function() {
						var el = $(this);
						el.data("ui-resizable-alsoresize", {
							width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
							left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
						});
					});
				};

			if (typeof(o.alsoResize) === "object" && !o.alsoResize.parentNode) {
				if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0]; _store(o.alsoResize); }
				else { $.each(o.alsoResize, function (exp) { _store(exp); }); }
			}else{
				_store(o.alsoResize);
			}
		},

		resize: function (event, ui) {
			var that = $(this).data("ui-resizable"),
				o = that.options,
				os = that.originalSize,
				op = that.originalPosition,
				delta = {
					height: (that.size.height - os.height) || 0, width: (that.size.width - os.width) || 0,
					top: (that.position.top - op.top) || 0, left: (that.position.left - op.left) || 0
				},

				_alsoResize = function (exp, c) {
					$(exp).each(function() {
						var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
							css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];

						$.each(css, function (i, prop) {
							var sum = (start[prop]||0) + (delta[prop]||0);
							if (sum && sum >= 0) {
								style[prop] = sum || null;
							}
						});

						el.css(style);
					});
				};

			if (typeof(o.alsoResize) === "object" && !o.alsoResize.nodeType) {
				$.each(o.alsoResize, function (exp, c) { _alsoResize(exp, c); });
			}else{
				_alsoResize(o.alsoResize);
			}
		},

		stop: function () {
			$(this).removeData("resizable-alsoresize");
		}
	});

	$.ui.plugin.add("resizable", "ghost", {

		start: function() {

			var that = $(this).data("ui-resizable"), o = that.options, cs = that.size;

			that.ghost = that.originalElement.clone();
			that.ghost
				.css({ opacity: 0.25, display: "block", position: "relative", height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 })
				.addClass("ui-resizable-ghost")
				.addClass(typeof o.ghost === "string" ? o.ghost : "");

			that.ghost.appendTo(that.helper);

		},

		resize: function(){
			var that = $(this).data("ui-resizable");
			if (that.ghost) {
				that.ghost.css({ position: "relative", height: that.size.height, width: that.size.width });
			}
		},

		stop: function() {
			var that = $(this).data("ui-resizable");
			if (that.ghost && that.helper) {
				that.helper.get(0).removeChild(that.ghost.get(0));
			}
		}

	});

	$.ui.plugin.add("resizable", "grid", {

		resize: function() {
			var that = $(this).data("ui-resizable"),
				o = that.options,
				cs = that.size,
				os = that.originalSize,
				op = that.originalPosition,
				a = that.axis,
				grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid,
				gridX = (grid[0]||1),
				gridY = (grid[1]||1),
				ox = Math.round((cs.width - os.width) / gridX) * gridX,
				oy = Math.round((cs.height - os.height) / gridY) * gridY,
				newWidth = os.width + ox,
				newHeight = os.height + oy,
				isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
				isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
				isMinWidth = o.minWidth && (o.minWidth > newWidth),
				isMinHeight = o.minHeight && (o.minHeight > newHeight);

			o.grid = grid;

			if (isMinWidth) {
				newWidth = newWidth + gridX;
			}
			if (isMinHeight) {
				newHeight = newHeight + gridY;
			}
			if (isMaxWidth) {
				newWidth = newWidth - gridX;
			}
			if (isMaxHeight) {
				newHeight = newHeight - gridY;
			}

			if (/^(se|s|e)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
			} else if (/^(ne)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else if (/^(sw)$/.test(a)) {
				that.size.width = newWidth;
				that.size.height = newHeight;
				that.position.left = op.left - ox;
			} else {
				that.size.width = newWidth;
				that.size.height = newHeight;
				that.position.top = op.top - oy;
				that.position.left = op.left - ox;
			}
		}

	});

	})(jQuery);

	(function( $, undefined ) {

	$.widget("ui.selectable", $.ui.mouse, {
		version: "1.10.3",
		options: {
			appendTo: "body",
			autoRefresh: true,
			distance: 0,
			filter: "*",
			tolerance: "touch",

			// callbacks
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var selectees,
				that = this;

			this.element.addClass("ui-selectable");

			this.dragged = false;

			// cache selectee children based on filter
			this.refresh = function() {
				selectees = $(that.options.filter, that.element[0]);
				selectees.addClass("ui-selectee");
				selectees.each(function() {
					var $this = $(this),
						pos = $this.offset();
					$.data(this, "selectable-item", {
						element: this,
						$element: $this,
						left: pos.left,
						top: pos.top,
						right: pos.left + $this.outerWidth(),
						bottom: pos.top + $this.outerHeight(),
						startselected: false,
						selected: $this.hasClass("ui-selected"),
						selecting: $this.hasClass("ui-selecting"),
						unselecting: $this.hasClass("ui-unselecting")
					});
				});
			};
			this.refresh();

			this.selectees = selectees.addClass("ui-selectee");

			this._mouseInit();

			this.helper = $("<div class='ui-selectable-helper'></div>");
		},

		_destroy: function() {
			this.selectees
				.removeClass("ui-selectee")
				.removeData("selectable-item");
			this.element
				.removeClass("ui-selectable ui-selectable-disabled");
			this._mouseDestroy();
		},

		_mouseStart: function(event) {
			var that = this,
				options = this.options;

			this.opos = [event.pageX, event.pageY];

			if (this.options.disabled) {
				return;
			}

			this.selectees = $(options.filter, this.element[0]);

			this._trigger("start", event);

			$(options.appendTo).append(this.helper);
			// position helper (lasso)
			this.helper.css({
				"left": event.pageX,
				"top": event.pageY,
				"width": 0,
				"height": 0
			});

			if (options.autoRefresh) {
				this.refresh();
			}

			this.selectees.filter(".ui-selected").each(function() {
				var selectee = $.data(this, "selectable-item");
				selectee.startselected = true;
				if (!event.metaKey && !event.ctrlKey) {
					selectee.$element.removeClass("ui-selected");
					selectee.selected = false;
					selectee.$element.addClass("ui-unselecting");
					selectee.unselecting = true;
					// selectable UNSELECTING callback
					that._trigger("unselecting", event, {
						unselecting: selectee.element
					});
				}
			});

			$(event.target).parents().addBack().each(function() {
				var doSelect,
					selectee = $.data(this, "selectable-item");
				if (selectee) {
					doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected");
					selectee.$element
						.removeClass(doSelect ? "ui-unselecting" : "ui-selected")
						.addClass(doSelect ? "ui-selecting" : "ui-unselecting");
					selectee.unselecting = !doSelect;
					selectee.selecting = doSelect;
					selectee.selected = doSelect;
					// selectable (UN)SELECTING callback
					if (doSelect) {
						that._trigger("selecting", event, {
							selecting: selectee.element
						});
					} else {
						that._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
					return false;
				}
			});

		},

		_mouseDrag: function(event) {

			this.dragged = true;

			if (this.options.disabled) {
				return;
			}

			var tmp,
				that = this,
				options = this.options,
				x1 = this.opos[0],
				y1 = this.opos[1],
				x2 = event.pageX,
				y2 = event.pageY;

			if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
			if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
			this.helper.css({left: x1, top: y1, width: x2-x1, height: y2-y1});

			this.selectees.each(function() {
				var selectee = $.data(this, "selectable-item"),
					hit = false;

				//prevent helper from being selected if appendTo: selectable
				if (!selectee || selectee.element === that.element[0]) {
					return;
				}

				if (options.tolerance === "touch") {
					hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
				} else if (options.tolerance === "fit") {
					hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
				}

				if (hit) {
					// SELECT
					if (selectee.selected) {
						selectee.$element.removeClass("ui-selected");
						selectee.selected = false;
					}
					if (selectee.unselecting) {
						selectee.$element.removeClass("ui-unselecting");
						selectee.unselecting = false;
					}
					if (!selectee.selecting) {
						selectee.$element.addClass("ui-selecting");
						selectee.selecting = true;
						// selectable SELECTING callback
						that._trigger("selecting", event, {
							selecting: selectee.element
						});
					}
				} else {
					// UNSELECT
					if (selectee.selecting) {
						if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
							selectee.$element.removeClass("ui-selecting");
							selectee.selecting = false;
							selectee.$element.addClass("ui-selected");
							selectee.selected = true;
						} else {
							selectee.$element.removeClass("ui-selecting");
							selectee.selecting = false;
							if (selectee.startselected) {
								selectee.$element.addClass("ui-unselecting");
								selectee.unselecting = true;
							}
							// selectable UNSELECTING callback
							that._trigger("unselecting", event, {
								unselecting: selectee.element
							});
						}
					}
					if (selectee.selected) {
						if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
							selectee.$element.removeClass("ui-selected");
							selectee.selected = false;

							selectee.$element.addClass("ui-unselecting");
							selectee.unselecting = true;
							// selectable UNSELECTING callback
							that._trigger("unselecting", event, {
								unselecting: selectee.element
							});
						}
					}
				}
			});

			return false;
		},

		_mouseStop: function(event) {
			var that = this;

			this.dragged = false;

			$(".ui-unselecting", this.element[0]).each(function() {
				var selectee = $.data(this, "selectable-item");
				selectee.$element.removeClass("ui-unselecting");
				selectee.unselecting = false;
				selectee.startselected = false;
				that._trigger("unselected", event, {
					unselected: selectee.element
				});
			});
			$(".ui-selecting", this.element[0]).each(function() {
				var selectee = $.data(this, "selectable-item");
				selectee.$element.removeClass("ui-selecting").addClass("ui-selected");
				selectee.selecting = false;
				selectee.selected = true;
				selectee.startselected = true;
				that._trigger("selected", event, {
					selected: selectee.element
				});
			});
			this._trigger("stop", event);

			this.helper.remove();

			return false;
		}

	});

	})(jQuery);

	(function( $, undefined ) {

	/*jshint loopfunc: true */

	function isOverAxis( x, reference, size ) {
		return ( x > reference ) && ( x < ( reference + size ) );
	}

	function isFloating(item) {
		return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display"));
	}

	$.widget("ui.sortable", $.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "sort",
		ready: false,
		options: {
			appendTo: "parent",
			axis: false,
			connectWith: false,
			containment: false,
			cursor: "auto",
			cursorAt: false,
			dropOnEmpty: true,
			forcePlaceholderSize: false,
			forceHelperSize: false,
			grid: false,
			handle: false,
			helper: "original",
			items: "> *",
			opacity: false,
			placeholder: false,
			revert: false,
			scroll: true,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1000,

			// callbacks
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function() {

			var o = this.options;
			this.containerCache = {};
			this.element.addClass("ui-sortable");

			//Get the items
			this.refresh();

			//Let's determine if the items are being displayed horizontally
			this.floating = this.items.length ? o.axis === "x" || isFloating(this.items[0].item) : false;

			//Let's determine the parent's offset
			this.offset = this.element.offset();

			//Initialize mouse events for interaction
			this._mouseInit();

			//We're ready to go
			this.ready = true;

		},

		_destroy: function() {
			this.element
				.removeClass("ui-sortable ui-sortable-disabled");
			this._mouseDestroy();

			for ( var i = this.items.length - 1; i >= 0; i-- ) {
				this.items[i].item.removeData(this.widgetName + "-item");
			}

			return this;
		},

		_setOption: function(key, value){
			if ( key === "disabled" ) {
				this.options[ key ] = value;

				this.widget().toggleClass( "ui-sortable-disabled", !!value );
			} else {
				// Don't call widget base _setOption for disable as it adds ui-state-disabled class
				$.Widget.prototype._setOption.apply(this, arguments);
			}
		},

		_mouseCapture: function(event, overrideHandle) {
			var currentItem = null,
				validHandle = false,
				that = this;

			if (this.reverting) {
				return false;
			}

			if(this.options.disabled || this.options.type === "static") {
				return false;
			}

			//We have to refresh the items data once first
			this._refreshItems(event);

			//Find out if the clicked node (or one of its parents) is a actual item in this.items
			$(event.target).parents().each(function() {
				if($.data(this, that.widgetName + "-item") === that) {
					currentItem = $(this);
					return false;
				}
			});
			if($.data(event.target, that.widgetName + "-item") === that) {
				currentItem = $(event.target);
			}

			if(!currentItem) {
				return false;
			}
			if(this.options.handle && !overrideHandle) {
				$(this.options.handle, currentItem).find("*").addBack().each(function() {
					if(this === event.target) {
						validHandle = true;
					}
				});
				if(!validHandle) {
					return false;
				}
			}

			this.currentItem = currentItem;
			this._removeCurrentsFromItems();
			return true;

		},

		_mouseStart: function(event, overrideHandle, noActivation) {

			var i, body,
				o = this.options;

			this.currentContainer = this;

			//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
			this.refreshPositions();

			//Create and append the visible helper
			this.helper = this._createHelper(event);

			//Cache the helper size
			this._cacheHelperProportions();

			/*
			 * - Position generation -
			 * This block generates everything position related - it's the core of draggables.
			 */

			//Cache the margins of the original element
			this._cacheMargins();

			//Get the next scrolling parent
			this.scrollParent = this.helper.scrollParent();

			//The element's absolute position on the page minus margins
			this.offset = this.currentItem.offset();
			this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			};

			$.extend(this.offset, {
				click: { //Where the click happened, relative to the element
					left: event.pageX - this.offset.left,
					top: event.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
			});

			// Only after we got the offset, we can change the helper's position to absolute
			// TODO: Still need to figure out a way to make relative sorting possible
			this.helper.css("position", "absolute");
			this.cssPosition = this.helper.css("position");

			//Generate the original position
			this.originalPosition = this._generatePosition(event);
			this.originalPageX = event.pageX;
			this.originalPageY = event.pageY;

			//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
			(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

			//Cache the former DOM position
			this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

			//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
			if(this.helper[0] !== this.currentItem[0]) {
				this.currentItem.hide();
			}

			//Create the placeholder
			this._createPlaceholder();

			//Set a containment if given in the options
			if(o.containment) {
				this._setContainment();
			}

			if( o.cursor && o.cursor !== "auto" ) { // cursor option
				body = this.document.find( "body" );

				// support: IE
				this.storedCursor = body.css( "cursor" );
				body.css( "cursor", o.cursor );

				this.storedStylesheet = $( "<style>*{ cursor: "+o.cursor+" !important; }</style>" ).appendTo( body );
			}

			if(o.opacity) { // opacity option
				if (this.helper.css("opacity")) {
					this._storedOpacity = this.helper.css("opacity");
				}
				this.helper.css("opacity", o.opacity);
			}

			if(o.zIndex) { // zIndex option
				if (this.helper.css("zIndex")) {
					this._storedZIndex = this.helper.css("zIndex");
				}
				this.helper.css("zIndex", o.zIndex);
			}

			//Prepare scrolling
			if(this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
				this.overflowOffset = this.scrollParent.offset();
			}

			//Call callbacks
			this._trigger("start", event, this._uiHash());

			//Recache the helper size
			if(!this._preserveHelperProportions) {
				this._cacheHelperProportions();
			}


			//Post "activate" events to possible containers
			if( !noActivation ) {
				for ( i = this.containers.length - 1; i >= 0; i-- ) {
					this.containers[ i ]._trigger( "activate", event, this._uiHash( this ) );
				}
			}

			//Prepare possible droppables
			if($.ui.ddmanager) {
				$.ui.ddmanager.current = this;
			}

			if ($.ui.ddmanager && !o.dropBehaviour) {
				$.ui.ddmanager.prepareOffsets(this, event);
			}

			this.dragging = true;

			this.helper.addClass("ui-sortable-helper");
			this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
			return true;

		},

		_mouseDrag: function(event) {
			var i, item, itemElement, intersection,
				o = this.options,
				scrolled = false;

			//Compute the helpers position
			this.position = this._generatePosition(event);
			this.positionAbs = this._convertPositionTo("absolute");

			if (!this.lastPositionAbs) {
				this.lastPositionAbs = this.positionAbs;
			}

			//Do scrolling
			if(this.options.scroll) {
				if(this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {

					if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) {
						this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
					} else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
						this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
					}

					if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
					} else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
						this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
					}

				} else {

					if(event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
					} else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
						scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
					}

					if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
					} else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
						scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
					}

				}

				if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
					$.ui.ddmanager.prepareOffsets(this, event);
				}
			}

			//Regenerate the absolute position used for position checks
			this.positionAbs = this._convertPositionTo("absolute");

			//Set the helper position
			if(!this.options.axis || this.options.axis !== "y") {
				this.helper[0].style.left = this.position.left+"px";
			}
			if(!this.options.axis || this.options.axis !== "x") {
				this.helper[0].style.top = this.position.top+"px";
			}

			//Rearrange
			for (i = this.items.length - 1; i >= 0; i--) {

				//Cache variables and intersection, continue if no intersection
				item = this.items[i];
				itemElement = item.item[0];
				intersection = this._intersectsWithPointer(item);
				if (!intersection) {
					continue;
				}

				// Only put the placeholder inside the current Container, skip all
				// items form other containers. This works because when moving
				// an item from one container to another the
				// currentContainer is switched before the placeholder is moved.
				//
				// Without this moving items in "sub-sortables" can cause the placeholder to jitter
				// beetween the outer and inner container.
				if (item.instance !== this.currentContainer) {
					continue;
				}

				// cannot intersect with itself
				// no useless actions that have been done before
				// no action if the item moved is the parent of the item checked
				if (itemElement !== this.currentItem[0] &&
					this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement &&
					!$.contains(this.placeholder[0], itemElement) &&
					(this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)
				) {

					this.direction = intersection === 1 ? "down" : "up";

					if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
						this._rearrange(event, item);
					} else {
						break;
					}

					this._trigger("change", event, this._uiHash());
					break;
				}
			}

			//Post events to containers
			this._contactContainers(event);

			//Interconnect with droppables
			if($.ui.ddmanager) {
				$.ui.ddmanager.drag(this, event);
			}

			//Call callbacks
			this._trigger("sort", event, this._uiHash());

			this.lastPositionAbs = this.positionAbs;
			return false;

		},

		_mouseStop: function(event, noPropagation) {

			if(!event) {
				return;
			}

			//If we are using droppables, inform the manager about the drop
			if ($.ui.ddmanager && !this.options.dropBehaviour) {
				$.ui.ddmanager.drop(this, event);
			}

			if(this.options.revert) {
				var that = this,
					cur = this.placeholder.offset(),
					axis = this.options.axis,
					animation = {};

				if ( !axis || axis === "x" ) {
					animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft);
				}
				if ( !axis || axis === "y" ) {
					animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop);
				}
				this.reverting = true;
				$(this.helper).animate( animation, parseInt(this.options.revert, 10) || 500, function() {
					that._clear(event);
				});
			} else {
				this._clear(event, noPropagation);
			}

			return false;

		},

		cancel: function() {

			if(this.dragging) {

				this._mouseUp({ target: null });

				if(this.options.helper === "original") {
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
				} else {
					this.currentItem.show();
				}

				//Post deactivating events to containers
				for (var i = this.containers.length - 1; i >= 0; i--){
					this.containers[i]._trigger("deactivate", null, this._uiHash(this));
					if(this.containers[i].containerCache.over) {
						this.containers[i]._trigger("out", null, this._uiHash(this));
						this.containers[i].containerCache.over = 0;
					}
				}

			}

			if (this.placeholder) {
				//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
				if(this.placeholder[0].parentNode) {
					this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
				}
				if(this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
					this.helper.remove();
				}

				$.extend(this, {
					helper: null,
					dragging: false,
					reverting: false,
					_noFinalSort: null
				});

				if(this.domPosition.prev) {
					$(this.domPosition.prev).after(this.currentItem);
				} else {
					$(this.domPosition.parent).prepend(this.currentItem);
				}
			}

			return this;

		},

		serialize: function(o) {

			var items = this._getItemsAsjQuery(o && o.connected),
				str = [];
			o = o || {};

			$(items).each(function() {
				var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/));
				if (res) {
					str.push((o.key || res[1]+"[]")+"="+(o.key && o.expression ? res[1] : res[2]));
				}
			});

			if(!str.length && o.key) {
				str.push(o.key + "=");
			}

			return str.join("&");

		},

		toArray: function(o) {

			var items = this._getItemsAsjQuery(o && o.connected),
				ret = [];

			o = o || {};

			items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); });
			return ret;

		},

		/* Be careful with the following core functions */
		_intersectsWith: function(item) {

			var x1 = this.positionAbs.left,
				x2 = x1 + this.helperProportions.width,
				y1 = this.positionAbs.top,
				y2 = y1 + this.helperProportions.height,
				l = item.left,
				r = l + item.width,
				t = item.top,
				b = t + item.height,
				dyClick = this.offset.click.top,
				dxClick = this.offset.click.left,
				isOverElementHeight = ( this.options.axis === "x" ) || ( ( y1 + dyClick ) > t && ( y1 + dyClick ) < b ),
				isOverElementWidth = ( this.options.axis === "y" ) || ( ( x1 + dxClick ) > l && ( x1 + dxClick ) < r ),
				isOverElement = isOverElementHeight && isOverElementWidth;

			if ( this.options.tolerance === "pointer" ||
				this.options.forcePointerForContainers ||
				(this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])
			) {
				return isOverElement;
			} else {

				return (l < x1 + (this.helperProportions.width / 2) && // Right Half
					x2 - (this.helperProportions.width / 2) < r && // Left Half
					t < y1 + (this.helperProportions.height / 2) && // Bottom Half
					y2 - (this.helperProportions.height / 2) < b ); // Top Half

			}
		},

		_intersectsWithPointer: function(item) {

			var isOverElementHeight = (this.options.axis === "x") || isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
				isOverElementWidth = (this.options.axis === "y") || isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
				isOverElement = isOverElementHeight && isOverElementWidth,
				verticalDirection = this._getDragVerticalDirection(),
				horizontalDirection = this._getDragHorizontalDirection();

			if (!isOverElement) {
				return false;
			}

			return this.floating ?
				( ((horizontalDirection && horizontalDirection === "right") || verticalDirection === "down") ? 2 : 1 )
				: ( verticalDirection && (verticalDirection === "down" ? 2 : 1) );

		},

		_intersectsWithSides: function(item) {

			var isOverBottomHalf = isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
				isOverRightHalf = isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
				verticalDirection = this._getDragVerticalDirection(),
				horizontalDirection = this._getDragHorizontalDirection();

			if (this.floating && horizontalDirection) {
				return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf));
			} else {
				return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf));
			}

		},

		_getDragVerticalDirection: function() {
			var delta = this.positionAbs.top - this.lastPositionAbs.top;
			return delta !== 0 && (delta > 0 ? "down" : "up");
		},

		_getDragHorizontalDirection: function() {
			var delta = this.positionAbs.left - this.lastPositionAbs.left;
			return delta !== 0 && (delta > 0 ? "right" : "left");
		},

		refresh: function(event) {
			this._refreshItems(event);
			this.refreshPositions();
			return this;
		},

		_connectWith: function() {
			var options = this.options;
			return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith;
		},

		_getItemsAsjQuery: function(connected) {

			var i, j, cur, inst,
				items = [],
				queries = [],
				connectWith = this._connectWith();

			if(connectWith && connected) {
				for (i = connectWith.length - 1; i >= 0; i--){
					cur = $(connectWith[i]);
					for ( j = cur.length - 1; j >= 0; j--){
						inst = $.data(cur[j], this.widgetFullName);
						if(inst && inst !== this && !inst.options.disabled) {
							queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);
						}
					}
				}
			}

			queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

			for (i = queries.length - 1; i >= 0; i--){
				queries[i][0].each(function() {
					items.push(this);
				});
			}

			return $(items);

		},

		_removeCurrentsFromItems: function() {

			var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

			this.items = $.grep(this.items, function (item) {
				for (var j=0; j < list.length; j++) {
					if(list[j] === item.item[0]) {
						return false;
					}
				}
				return true;
			});

		},

		_refreshItems: function(event) {

			this.items = [];
			this.containers = [this];

			var i, j, cur, inst, targetData, _queries, item, queriesLength,
				items = this.items,
				queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]],
				connectWith = this._connectWith();

			if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
				for (i = connectWith.length - 1; i >= 0; i--){
					cur = $(connectWith[i]);
					for (j = cur.length - 1; j >= 0; j--){
						inst = $.data(cur[j], this.widgetFullName);
						if(inst && inst !== this && !inst.options.disabled) {
							queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
							this.containers.push(inst);
						}
					}
				}
			}

			for (i = queries.length - 1; i >= 0; i--) {
				targetData = queries[i][1];
				_queries = queries[i][0];

				for (j=0, queriesLength = _queries.length; j < queriesLength; j++) {
					item = $(_queries[j]);

					item.data(this.widgetName + "-item", targetData); // Data for target checking (mouse manager)

					items.push({
						item: item,
						instance: targetData,
						width: 0, height: 0,
						left: 0, top: 0
					});
				}
			}

		},

		refreshPositions: function(fast) {

			//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
			if(this.offsetParent && this.helper) {
				this.offset.parent = this._getParentOffset();
			}

			var i, item, t, p;

			for (i = this.items.length - 1; i >= 0; i--){
				item = this.items[i];

				//We ignore calculating positions of all connected containers when we're not over them
				if(item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
					continue;
				}

				t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

				if (!fast) {
					item.width = t.outerWidth();
					item.height = t.outerHeight();
				}

				p = t.offset();
				item.left = p.left;
				item.top = p.top;
			}

			if(this.options.custom && this.options.custom.refreshContainers) {
				this.options.custom.refreshContainers.call(this);
			} else {
				for (i = this.containers.length - 1; i >= 0; i--){
					p = this.containers[i].element.offset();
					this.containers[i].containerCache.left = p.left;
					this.containers[i].containerCache.top = p.top;
					this.containers[i].containerCache.width	= this.containers[i].element.outerWidth();
					this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
				}
			}

			return this;
		},

		_createPlaceholder: function(that) {
			that = that || this;
			var className,
				o = that.options;

			if(!o.placeholder || o.placeholder.constructor === String) {
				className = o.placeholder;
				o.placeholder = {
					element: function() {

						var nodeName = that.currentItem[0].nodeName.toLowerCase(),
							element = $( "<" + nodeName + ">", that.document[0] )
								.addClass(className || that.currentItem[0].className+" ui-sortable-placeholder")
								.removeClass("ui-sortable-helper");

						if ( nodeName === "tr" ) {
							that.currentItem.children().each(function() {
								$( "<td>&#160;</td>", that.document[0] )
									.attr( "colspan", $( this ).attr( "colspan" ) || 1 )
									.appendTo( element );
							});
						} else if ( nodeName === "img" ) {
							element.attr( "src", that.currentItem.attr( "src" ) );
						}

						if ( !className ) {
							element.css( "visibility", "hidden" );
						}

						return element;
					},
					update: function(container, p) {

						// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
						// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
						if(className && !o.forcePlaceholderSize) {
							return;
						}

						//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
						if(!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop")||0, 10) - parseInt(that.currentItem.css("paddingBottom")||0, 10)); }
						if(!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft")||0, 10) - parseInt(that.currentItem.css("paddingRight")||0, 10)); }
					}
				};
			}

			//Create the placeholder
			that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));

			//Append it after the actual current item
			that.currentItem.after(that.placeholder);

			//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
			o.placeholder.update(that, that.placeholder);

		},

		_contactContainers: function(event) {
			var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, base, cur, nearBottom, floating,
				innermostContainer = null,
				innermostIndex = null;

			// get innermost container that intersects with item
			for (i = this.containers.length - 1; i >= 0; i--) {

				// never consider a container that's located within the item itself
				if($.contains(this.currentItem[0], this.containers[i].element[0])) {
					continue;
				}

				if(this._intersectsWith(this.containers[i].containerCache)) {

					// if we've already found a container and it's more "inner" than this, then continue
					if(innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
						continue;
					}

					innermostContainer = this.containers[i];
					innermostIndex = i;

				} else {
					// container doesn't intersect. trigger "out" event if necessary
					if(this.containers[i].containerCache.over) {
						this.containers[i]._trigger("out", event, this._uiHash(this));
						this.containers[i].containerCache.over = 0;
					}
				}

			}

			// if no intersecting containers found, return
			if(!innermostContainer) {
				return;
			}

			// move the item into the container if it's not there already
			if(this.containers.length === 1) {
				if (!this.containers[innermostIndex].containerCache.over) {
					this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
					this.containers[innermostIndex].containerCache.over = 1;
				}
			} else {

				//When entering a new container, we will find the item with the least distance and append our item near it
				dist = 10000;
				itemWithLeastDistance = null;
				floating = innermostContainer.floating || isFloating(this.currentItem);
				posProperty = floating ? "left" : "top";
				sizeProperty = floating ? "width" : "height";
				base = this.positionAbs[posProperty] + this.offset.click[posProperty];
				for (j = this.items.length - 1; j >= 0; j--) {
					if(!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
						continue;
					}
					if(this.items[j].item[0] === this.currentItem[0]) {
						continue;
					}
					if (floating && !isOverAxis(this.positionAbs.top + this.offset.click.top, this.items[j].top, this.items[j].height)) {
						continue;
					}
					cur = this.items[j].item.offset()[posProperty];
					nearBottom = false;
					if(Math.abs(cur - base) > Math.abs(cur + this.items[j][sizeProperty] - base)){
						nearBottom = true;
						cur += this.items[j][sizeProperty];
					}

					if(Math.abs(cur - base) < dist) {
						dist = Math.abs(cur - base); itemWithLeastDistance = this.items[j];
						this.direction = nearBottom ? "up": "down";
					}
				}

				//Check if dropOnEmpty is enabled
				if(!itemWithLeastDistance && !this.options.dropOnEmpty) {
					return;
				}

				if(this.currentContainer === this.containers[innermostIndex]) {
					return;
				}

				itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
				this._trigger("change", event, this._uiHash());
				this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
				this.currentContainer = this.containers[innermostIndex];

				//Update the placeholder
				this.options.placeholder.update(this.currentContainer, this.placeholder);

				this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
				this.containers[innermostIndex].containerCache.over = 1;
			}


		},

		_createHelper: function(event) {

			var o = this.options,
				helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem);

			//Add the helper to the DOM if that didn't happen already
			if(!helper.parents("body").length) {
				$(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
			}

			if(helper[0] === this.currentItem[0]) {
				this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };
			}

			if(!helper[0].style.width || o.forceHelperSize) {
				helper.width(this.currentItem.width());
			}
			if(!helper[0].style.height || o.forceHelperSize) {
				helper.height(this.currentItem.height());
			}

			return helper;

		},

		_adjustOffsetFromHelper: function(obj) {
			if (typeof obj === "string") {
				obj = obj.split(" ");
			}
			if ($.isArray(obj)) {
				obj = {left: +obj[0], top: +obj[1] || 0};
			}
			if ("left" in obj) {
				this.offset.click.left = obj.left + this.margins.left;
			}
			if ("right" in obj) {
				this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
			}
			if ("top" in obj) {
				this.offset.click.top = obj.top + this.margins.top;
			}
			if ("bottom" in obj) {
				this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
			}
		},

		_getParentOffset: function() {


			//Get the offsetParent and cache its position
			this.offsetParent = this.helper.offsetParent();
			var po = this.offsetParent.offset();

			// This is a special case where we need to modify a offset calculated on start, since the following happened:
			// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
			// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
			//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
			if(this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
				po.left += this.scrollParent.scrollLeft();
				po.top += this.scrollParent.scrollTop();
			}

			// This needs to be actually done for all browsers, since pageX/pageY includes this information
			// with an ugly IE fix
			if( this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) {
				po = { top: 0, left: 0 };
			}

			return {
				top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
				left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
			};

		},

		_getRelativeOffset: function() {

			if(this.cssPosition === "relative") {
				var p = this.currentItem.position();
				return {
					top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
					left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
				};
			} else {
				return { top: 0, left: 0 };
			}

		},

		_cacheMargins: function() {
			this.margins = {
				left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
				top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
			};
		},

		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			};
		},

		_setContainment: function() {

			var ce, co, over,
				o = this.options;
			if(o.containment === "parent") {
				o.containment = this.helper[0].parentNode;
			}
			if(o.containment === "document" || o.containment === "window") {
				this.containment = [
					0 - this.offset.relative.left - this.offset.parent.left,
					0 - this.offset.relative.top - this.offset.parent.top,
					$(o.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left,
					($(o.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
				];
			}

			if(!(/^(document|window|parent)$/).test(o.containment)) {
				ce = $(o.containment)[0];
				co = $(o.containment).offset();
				over = ($(ce).css("overflow") !== "hidden");

				this.containment = [
					co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
					co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
					co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
					co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
				];
			}

		},

		_convertPositionTo: function(d, pos) {

			if(!pos) {
				pos = this.position;
			}
			var mod = d === "absolute" ? 1 : -1,
				scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
				scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

			return {
				top: (
					pos.top	+																// The absolute mouse position
					this.offset.relative.top * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.top * mod -											// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
				),
				left: (
					pos.left +																// The absolute mouse position
					this.offset.relative.left * mod +										// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.left * mod	-										// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
				)
			};

		},

		_generatePosition: function(event) {

			var top, left,
				o = this.options,
				pageX = event.pageX,
				pageY = event.pageY,
				scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

			// This is another very weird special case that only happens for relative elements:
			// 1. If the css position is relative
			// 2. and the scroll parent is the document or similar to the offset parent
			// we have to refresh the relative offset during the scroll so there are no jumps
			if(this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
				this.offset.relative = this._getRelativeOffset();
			}

			/*
			 * - Position constraining -
			 * Constrain the position to a mix of grid, containment.
			 */

			if(this.originalPosition) { //If we are not dragging yet, we won't check for options

				if(this.containment) {
					if(event.pageX - this.offset.click.left < this.containment[0]) {
						pageX = this.containment[0] + this.offset.click.left;
					}
					if(event.pageY - this.offset.click.top < this.containment[1]) {
						pageY = this.containment[1] + this.offset.click.top;
					}
					if(event.pageX - this.offset.click.left > this.containment[2]) {
						pageX = this.containment[2] + this.offset.click.left;
					}
					if(event.pageY - this.offset.click.top > this.containment[3]) {
						pageY = this.containment[3] + this.offset.click.top;
					}
				}

				if(o.grid) {
					top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
					pageY = this.containment ? ( (top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

					left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
					pageX = this.containment ? ( (left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
				}

			}

			return {
				top: (
					pageY -																// The absolute mouse position
					this.offset.click.top -													// Click offset (relative to the element)
					this.offset.relative.top	-											// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.top +												// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
				),
				left: (
					pageX -																// The absolute mouse position
					this.offset.click.left -												// Click offset (relative to the element)
					this.offset.relative.left	-											// Only for relative positioned nodes: Relative offset from element to offset parent
					this.offset.parent.left +												// The offsetParent's offset without borders (offset + border)
					( ( this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
				)
			};

		},

		_rearrange: function(event, i, a, hardRefresh) {

			a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling));

			//Various things done here to improve the performance:
			// 1. we create a setTimeout, that calls refreshPositions
			// 2. on the instance, we have a counter variable, that get's higher after every append
			// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
			// 4. this lets only the last addition to the timeout stack through
			this.counter = this.counter ? ++this.counter : 1;
			var counter = this.counter;

			this._delay(function() {
				if(counter === this.counter) {
					this.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
				}
			});

		},

		_clear: function(event, noPropagation) {

			this.reverting = false;
			// We delay all events that have to be triggered to after the point where the placeholder has been removed and
			// everything else normalized again
			var i,
				delayedTriggers = [];

			// We first have to update the dom position of the actual currentItem
			// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
			if(!this._noFinalSort && this.currentItem.parent().length) {
				this.placeholder.before(this.currentItem);
			}
			this._noFinalSort = null;

			if(this.helper[0] === this.currentItem[0]) {
				for(i in this._storedCSS) {
					if(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
						this._storedCSS[i] = "";
					}
				}
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			} else {
				this.currentItem.show();
			}

			if(this.fromOutside && !noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
			}
			if((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
				delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
			}

			// Check if the items Container has Changed and trigger appropriate
			// events.
			if (this !== this.currentContainer) {
				if(!noPropagation) {
					delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
					delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.currentContainer));
					delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.currentContainer));
				}
			}


			//Post events to containers
			for (i = this.containers.length - 1; i >= 0; i--){
				if(!noPropagation) {
					delayedTriggers.push((function(c) { return function(event) { c._trigger("deactivate", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
				}
				if(this.containers[i].containerCache.over) {
					delayedTriggers.push((function(c) { return function(event) { c._trigger("out", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
					this.containers[i].containerCache.over = 0;
				}
			}

			//Do what was originally in plugins
			if ( this.storedCursor ) {
				this.document.find( "body" ).css( "cursor", this.storedCursor );
				this.storedStylesheet.remove();
			}
			if(this._storedOpacity) {
				this.helper.css("opacity", this._storedOpacity);
			}
			if(this._storedZIndex) {
				this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
			}

			this.dragging = false;
			if(this.cancelHelperRemoval) {
				if(!noPropagation) {
					this._trigger("beforeStop", event, this._uiHash());
					for (i=0; i < delayedTriggers.length; i++) {
						delayedTriggers[i].call(this, event);
					} //Trigger all delayed events
					this._trigger("stop", event, this._uiHash());
				}

				this.fromOutside = false;
				return false;
			}

			if(!noPropagation) {
				this._trigger("beforeStop", event, this._uiHash());
			}

			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

			if(this.helper[0] !== this.currentItem[0]) {
				this.helper.remove();
			}
			this.helper = null;

			if(!noPropagation) {
				for (i=0; i < delayedTriggers.length; i++) {
					delayedTriggers[i].call(this, event);
				} //Trigger all delayed events
				this._trigger("stop", event, this._uiHash());
			}

			this.fromOutside = false;
			return true;

		},

		_trigger: function() {
			if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
				this.cancel();
			}
		},

		_uiHash: function(_inst) {
			var inst = _inst || this;
			return {
				helper: inst.helper,
				placeholder: inst.placeholder || $([]),
				position: inst.position,
				originalPosition: inst.originalPosition,
				offset: inst.positionAbs,
				item: inst.currentItem,
				sender: _inst ? _inst.element : null
			};
		}

	});

	})(jQuery);

	(function($, undefined) {

	var dataSpace = "ui-effects-";

	$.effects = {
		effect: {}
	};

	/*!
	 * jQuery Color Animations v2.1.2
	 * https://github.com/jquery/jquery-color
	 *
	 * Copyright 2013 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Wed Jan 16 08:47:09 2013 -0600
	 */
	(function( jQuery, undefined ) {

		var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

		// plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
		// a set of RE's that can match strings and generate color tuples.
		stringParsers = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ] * 2.55,
						execResult[ 2 ] * 2.55,
						execResult[ 3 ] * 2.55,
						execResult[ 4 ]
					];
				}
			}, {
				// this regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {
				// this regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ] / 100,
						execResult[ 3 ] / 100,
						execResult[ 4 ]
					];
				}
			}],

		// jQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},

			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				max: 255
			},
			"percent": {
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		support = color.support = {},

		// element for support tests
		supportElem = jQuery( "<p>" )[ 0 ],

		// colors = jQuery.Color.names
		colors,

		// local aliases of functions called often
		each = jQuery.each;

	// determine rgba support immediately
	supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
	support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

	// define cache name and alpha properties
	// for rgba and hsla spaces
	each( spaces, function( spaceName, space ) {
		space.cache = "_" + spaceName;
		space.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		};
	});

	function clamp( value, prop, allowEmpty ) {
		var type = propTypes[ prop.type ] || {};

		if ( value == null ) {
			return (allowEmpty || !prop.def) ? null : prop.def;
		}

		// ~~ is an short way of doing floor for positive numbers
		value = type.floor ? ~~value : parseFloat( value );

		// IE will pass in empty strings as value for alpha,
		// which will hit this case
		if ( isNaN( value ) ) {
			return prop.def;
		}

		if ( type.mod ) {
			// we add mod before modding to make sure that negatives values
			// get converted properly: -10 -> 350
			return (value + type.mod) % type.mod;
		}

		// for now all property types without mod have min and max
		return 0 > value ? 0 : type.max < value ? type.max : value;
	}

	function stringParse( string ) {
		var inst = color(),
			rgba = inst._rgba = [];

		string = string.toLowerCase();

		each( stringParsers, function( i, parser ) {
			var parsed,
				match = parser.re.exec( string ),
				values = match && parser.parse( match ),
				spaceName = parser.space || "rgba";

			if ( values ) {
				parsed = inst[ spaceName ]( values );

				// if this was an rgba parse the assignment might happen twice
				// oh well....
				inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
				rgba = inst._rgba = parsed._rgba;

				// exit each( stringParsers ) here because we matched
				return false;
			}
		});

		// Found a stringParser that handled it
		if ( rgba.length ) {

			// if this came from a parsed string, force "transparent" when alpha is 0
			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
			if ( rgba.join() === "0,0,0,0" ) {
				jQuery.extend( rgba, colors.transparent );
			}
			return inst;
		}

		// named colors
		return colors[ string ];
	}

	color.fn = jQuery.extend( color.prototype, {
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red.jquery || red.nodeType ) {
				red = jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [];

			// more than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				return this.parse( stringParse( red ) || colors._default );
			}

			if ( type === "array" ) {
				each( spaces.rgba.props, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				});
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					});
				} else {
					each( spaces, function( spaceName, space ) {
						var cache = space.cache;
						each( space.props, function( key, prop ) {

							// if the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// if the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( key === "alpha" || red[ key ] == null ) {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// this is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						});

						// everything defined but alpha?
						if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
							// use the default of 1
							inst[ cache ][ 3 ] = 1;
							if ( space.from ) {
								inst._rgba = space.from( inst[ cache ] );
							}
						}
					});
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				inst = this;

			each( spaces, function( _, space ) {
				var localCache,
					isCache = is[ space.cache ];
				if (isCache) {
					localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
							return same;
						}
					});
				}
				return same;
			});
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			});
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				startColor = this.alpha() === 0 ? color( "transparent" ) : this,
				start = startColor[ space.cache ] || space.to( startColor._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// if null, don't override start value
				if ( endValue === null ) {
					return;
				}
				// if null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			});
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {
			// if we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			}));
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				});

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join() + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				});

			if ( hsla[ 3 ] === 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join() + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v ) {

				// default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length === 1 ? "0" + v : v;
			}).join("");
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	});
	color.fn.parse.prototype = color.fn;

	// hsla conversions adapted from:
	// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + (q - p) * h * 6;
		}
		if ( h * 2 < 1) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + (q - p) * ((2/3) - h) * 6;
		}
		return p;
	}

	spaces.hsla.to = function ( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
		// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
		if ( diff === 0 ) {
			s = 0;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function ( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};


	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var ret,
				type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice();

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			});

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {
			// alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		});
	});

	// add cssHook and .fx.step function for each named hook.
	// accept a space separated string of properties
	color.hook = function( hook ) {
		var hooks = hook.split( " " );
		each( hooks, function( i, hook ) {
			jQuery.cssHooks[ hook ] = {
				set: function( elem, value ) {
					var parsed, curElem,
						backgroundColor = "";

					if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
						value = color( parsed || value );
						if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
							while (
								(backgroundColor === "" || backgroundColor === "transparent") &&
								curElem && curElem.style
							) {
								try {
									backgroundColor = jQuery.css( curElem, "backgroundColor" );
									curElem = curElem.parentNode;
								} catch ( e ) {
								}
							}

							value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
								backgroundColor :
								"_default" );
						}

						value = value.toRgbaString();
					}
					try {
						elem.style[ hook ] = value;
					} catch( e ) {
						// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
					}
				}
			};
			jQuery.fx.step[ hook ] = function( fx ) {
				if ( !fx.colorInit ) {
					fx.start = color( fx.elem, hook );
					fx.end = color( fx.end );
					fx.colorInit = true;
				}
				jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
			};
		});

	};

	color.hook( stepHooks );

	jQuery.cssHooks.borderColor = {
		expand: function( value ) {
			var expanded = {};

			each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
				expanded[ "border" + part + "Color" ] = value;
			});
			return expanded;
		}
	};

	// Basic color names only.
	// Usage of any of the other color names requires adding yourself or including
	// jquery.color.svg-names.js.
	colors = jQuery.Color.names = {
		// 4.1. Basic color keywords
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",

		// 4.2.3. "transparent" color keyword
		transparent: [ null, null, null, 0 ],

		_default: "#ffffff"
	};

	})( jQuery );


	/******************************************************************************/
	/****************************** CLASS ANIMATIONS ******************************/
	/******************************************************************************/
	(function() {

	var classAnimationActions = [ "add", "remove", "toggle" ],
		shorthandStyles = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};

	$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
		$.fx.step[ prop ] = function( fx ) {
			if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
				jQuery.style( fx.elem, prop, fx.end );
				fx.setAttr = true;
			}
		};
	});

	function getElementStyles( elem ) {
		var key, len,
			style = elem.ownerDocument.defaultView ?
				elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
				elem.currentStyle,
			styles = {};

		if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
			len = style.length;
			while ( len-- ) {
				key = style[ len ];
				if ( typeof style[ key ] === "string" ) {
					styles[ $.camelCase( key ) ] = style[ key ];
				}
			}
		// support: Opera, IE <9
		} else {
			for ( key in style ) {
				if ( typeof style[ key ] === "string" ) {
					styles[ key ] = style[ key ];
				}
			}
		}

		return styles;
	}


	function styleDifference( oldStyle, newStyle ) {
		var diff = {},
			name, value;

		for ( name in newStyle ) {
			value = newStyle[ name ];
			if ( oldStyle[ name ] !== value ) {
				if ( !shorthandStyles[ name ] ) {
					if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
						diff[ name ] = value;
					}
				}
			}
		}

		return diff;
	}

	// support: jQuery <1.8
	if ( !$.fn.addBack ) {
		$.fn.addBack = function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		};
	}

	$.effects.animateClass = function( value, duration, easing, callback ) {
		var o = $.speed( duration, easing, callback );

		return this.queue( function() {
			var animated = $( this ),
				baseClass = animated.attr( "class" ) || "",
				applyClassChange,
				allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

			// map the animated objects to store the original styles.
			allAnimations = allAnimations.map(function() {
				var el = $( this );
				return {
					el: el,
					start: getElementStyles( this )
				};
			});

			// apply class change
			applyClassChange = function() {
				$.each( classAnimationActions, function(i, action) {
					if ( value[ action ] ) {
						animated[ action + "Class" ]( value[ action ] );
					}
				});
			};
			applyClassChange();

			// map all animated objects again - calculate new styles and diff
			allAnimations = allAnimations.map(function() {
				this.end = getElementStyles( this.el[ 0 ] );
				this.diff = styleDifference( this.start, this.end );
				return this;
			});

			// apply original class
			animated.attr( "class", baseClass );

			// map all animated objects again - this time collecting a promise
			allAnimations = allAnimations.map(function() {
				var styleInfo = this,
					dfd = $.Deferred(),
					opts = $.extend({}, o, {
						queue: false,
						complete: function() {
							dfd.resolve( styleInfo );
						}
					});

				this.el.animate( this.diff, opts );
				return dfd.promise();
			});

			// once all animations have completed:
			$.when.apply( $, allAnimations.get() ).done(function() {

				// set the final class
				applyClassChange();

				// for each animated element,
				// clear all css properties that were animated
				$.each( arguments, function() {
					var el = this.el;
					$.each( this.diff, function(key) {
						el.css( key, "" );
					});
				});

				// this is guarnteed to be there if you use jQuery.speed()
				// it also handles dequeuing the next anim...
				o.complete.call( animated[ 0 ] );
			});
		});
	};

	$.fn.extend({
		addClass: (function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return speed ?
					$.effects.animateClass.call( this,
						{ add: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		})( $.fn.addClass ),

		removeClass: (function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return arguments.length > 1 ?
					$.effects.animateClass.call( this,
						{ remove: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		})( $.fn.removeClass ),

		toggleClass: (function( orig ) {
			return function( classNames, force, speed, easing, callback ) {
				if ( typeof force === "boolean" || force === undefined ) {
					if ( !speed ) {
						// without speed parameter
						return orig.apply( this, arguments );
					} else {
						return $.effects.animateClass.call( this,
							(force ? { add: classNames } : { remove: classNames }),
							speed, easing, callback );
					}
				} else {
					// without force parameter
					return $.effects.animateClass.call( this,
						{ toggle: classNames }, force, speed, easing );
				}
			};
		})( $.fn.toggleClass ),

		switchClass: function( remove, add, speed, easing, callback) {
			return $.effects.animateClass.call( this, {
				add: add,
				remove: remove
			}, speed, easing, callback );
		}
	});

	})();

	/******************************************************************************/
	/*********************************** EFFECTS **********************************/
	/******************************************************************************/

	(function() {

	$.extend( $.effects, {
		version: "1.10.3",

		// Saves a set of properties in a data storage
		save: function( element, set ) {
			for( var i=0; i < set.length; i++ ) {
				if ( set[ i ] !== null ) {
					element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
				}
			}
		},

		// Restores a set of previously saved properties from a data storage
		restore: function( element, set ) {
			var val, i;
			for( i=0; i < set.length; i++ ) {
				if ( set[ i ] !== null ) {
					val = element.data( dataSpace + set[ i ] );
					// support: jQuery 1.6.2
					// http://bugs.jquery.com/ticket/9917
					// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
					// We can't differentiate between "" and 0 here, so we just assume
					// empty string since it's likely to be a more common value...
					if ( val === undefined ) {
						val = "";
					}
					element.css( set[ i ], val );
				}
			}
		},

		setMode: function( el, mode ) {
			if (mode === "toggle") {
				mode = el.is( ":hidden" ) ? "show" : "hide";
			}
			return mode;
		},

		// Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		getBaseline: function( origin, original ) {
			var y, x;
			switch ( origin[ 0 ] ) {
				case "top": y = 0; break;
				case "middle": y = 0.5; break;
				case "bottom": y = 1; break;
				default: y = origin[ 0 ] / original.height;
			}
			switch ( origin[ 1 ] ) {
				case "left": x = 0; break;
				case "center": x = 0.5; break;
				case "right": x = 1; break;
				default: x = origin[ 1 ] / original.width;
			}
			return {
				x: x,
				y: y
			};
		},

		// Wraps the element around a wrapper that copies position properties
		createWrapper: function( element ) {

			// if the element is already wrapped, return it
			if ( element.parent().is( ".ui-effects-wrapper" )) {
				return element.parent();
			}

			// wrap the element
			var props = {
					width: element.outerWidth(true),
					height: element.outerHeight(true),
					"float": element.css( "float" )
				},
				wrapper = $( "<div></div>" )
					.addClass( "ui-effects-wrapper" )
					.css({
						fontSize: "100%",
						background: "transparent",
						border: "none",
						margin: 0,
						padding: 0
					}),
				// Store the size in case width/height are defined in % - Fixes #5245
				size = {
					width: element.width(),
					height: element.height()
				},
				active = document.activeElement;

			// support: Firefox
			// Firefox incorrectly exposes anonymous content
			// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
			try {
				active.id;
			} catch( e ) {
				active = document.body;
			}

			element.wrap( wrapper );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}

			wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

			// transfer positioning properties to the wrapper
			if ( element.css( "position" ) === "static" ) {
				wrapper.css({ position: "relative" });
				element.css({ position: "relative" });
			} else {
				$.extend( props, {
					position: element.css( "position" ),
					zIndex: element.css( "z-index" )
				});
				$.each([ "top", "left", "bottom", "right" ], function(i, pos) {
					props[ pos ] = element.css( pos );
					if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
						props[ pos ] = "auto";
					}
				});
				element.css({
					position: "relative",
					top: 0,
					left: 0,
					right: "auto",
					bottom: "auto"
				});
			}
			element.css(size);

			return wrapper.css( props ).show();
		},

		removeWrapper: function( element ) {
			var active = document.activeElement;

			if ( element.parent().is( ".ui-effects-wrapper" ) ) {
				element.parent().replaceWith( element );

				// Fixes #7595 - Elements lose focus when wrapped.
				if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
					$( active ).focus();
				}
			}


			return element;
		},

		setTransition: function( element, list, factor, value ) {
			value = value || {};
			$.each( list, function( i, x ) {
				var unit = element.cssUnit( x );
				if ( unit[ 0 ] > 0 ) {
					value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
				}
			});
			return value;
		}
	});

	// return an effect options object for the given parameters:
	function _normalizeArguments( effect, options, speed, callback ) {

		// allow passing all options as the first parameter
		if ( $.isPlainObject( effect ) ) {
			options = effect;
			effect = effect.effect;
		}

		// convert to an object
		effect = { effect: effect };

		// catch (effect, null, ...)
		if ( options == null ) {
			options = {};
		}

		// catch (effect, callback)
		if ( $.isFunction( options ) ) {
			callback = options;
			speed = null;
			options = {};
		}

		// catch (effect, speed, ?)
		if ( typeof options === "number" || $.fx.speeds[ options ] ) {
			callback = speed;
			speed = options;
			options = {};
		}

		// catch (effect, options, callback)
		if ( $.isFunction( speed ) ) {
			callback = speed;
			speed = null;
		}

		// add options to effect
		if ( options ) {
			$.extend( effect, options );
		}

		speed = speed || options.duration;
		effect.duration = $.fx.off ? 0 :
			typeof speed === "number" ? speed :
			speed in $.fx.speeds ? $.fx.speeds[ speed ] :
			$.fx.speeds._default;

		effect.complete = callback || options.complete;

		return effect;
	}

	function standardAnimationOption( option ) {
		// Valid standard speeds (nothing, number, named speed)
		if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
			return true;
		}

		// Invalid strings - treat as "normal" speed
		if ( typeof option === "string" && !$.effects.effect[ option ] ) {
			return true;
		}

		// Complete callback
		if ( $.isFunction( option ) ) {
			return true;
		}

		// Options hash (but not naming an effect)
		if ( typeof option === "object" && !option.effect ) {
			return true;
		}

		// Didn't match any standard API
		return false;
	}

	$.fn.extend({
		effect: function( /* effect, options, speed, callback */ ) {
			var args = _normalizeArguments.apply( this, arguments ),
				mode = args.mode,
				queue = args.queue,
				effectMethod = $.effects.effect[ args.effect ];

			if ( $.fx.off || !effectMethod ) {
				// delegate to the original method (e.g., .show()) if possible
				if ( mode ) {
					return this[ mode ]( args.duration, args.complete );
				} else {
					return this.each( function() {
						if ( args.complete ) {
							args.complete.call( this );
						}
					});
				}
			}

			function run( next ) {
				var elem = $( this ),
					complete = args.complete,
					mode = args.mode;

				function done() {
					if ( $.isFunction( complete ) ) {
						complete.call( elem[0] );
					}
					if ( $.isFunction( next ) ) {
						next();
					}
				}

				// If the element already has the correct final state, delegate to
				// the core methods so the internal tracking of "olddisplay" works.
				if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
					elem[ mode ]();
					done();
				} else {
					effectMethod.call( elem[0], args, done );
				}
			}

			return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
		},

		show: (function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "show";
					return this.effect.call( this, args );
				}
			};
		})( $.fn.show ),

		hide: (function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "hide";
					return this.effect.call( this, args );
				}
			};
		})( $.fn.hide ),

		toggle: (function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "toggle";
					return this.effect.call( this, args );
				}
			};
		})( $.fn.toggle ),

		// helper functions
		cssUnit: function(key) {
			var style = this.css( key ),
				val = [];

			$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
				if ( style.indexOf( unit ) > 0 ) {
					val = [ parseFloat( style ), unit ];
				}
			});
			return val;
		}
	});

	})();

	/******************************************************************************/
	/*********************************** EASING ***********************************/
	/******************************************************************************/

	(function() {

	// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

	var baseEasings = {};

	$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
		baseEasings[ name ] = function( p ) {
			return Math.pow( p, i + 2 );
		};
	});

	$.extend( baseEasings, {
		Sine: function ( p ) {
			return 1 - Math.cos( p * Math.PI / 2 );
		},
		Circ: function ( p ) {
			return 1 - Math.sqrt( 1 - p * p );
		},
		Elastic: function( p ) {
			return p === 0 || p === 1 ? p :
				-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
		},
		Back: function( p ) {
			return p * p * ( 3 * p - 2 );
		},
		Bounce: function ( p ) {
			var pow2,
				bounce = 4;

			while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
			return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
		}
	});

	$.each( baseEasings, function( name, easeIn ) {
		$.easing[ "easeIn" + name ] = easeIn;
		$.easing[ "easeOut" + name ] = function( p ) {
			return 1 - easeIn( 1 - p );
		};
		$.easing[ "easeInOut" + name ] = function( p ) {
			return p < 0.5 ?
				easeIn( p * 2 ) / 2 :
				1 - easeIn( p * -2 + 2 ) / 2;
		};
	});

	})();

	})(jQuery);

	(function( $, undefined ) {

	var uid = 0,
		hideProps = {},
		showProps = {};

	hideProps.height = hideProps.paddingTop = hideProps.paddingBottom =
		hideProps.borderTopWidth = hideProps.borderBottomWidth = "hide";
	showProps.height = showProps.paddingTop = showProps.paddingBottom =
		showProps.borderTopWidth = showProps.borderBottomWidth = "show";

	$.widget( "ui.accordion", {
		version: "1.10.3",
		options: {
			active: 0,
			animate: {},
			collapsible: false,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},

			// callbacks
			activate: null,
			beforeActivate: null
		},

		_create: function() {
			var options = this.options;
			this.prevShow = this.prevHide = $();
			this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
				// ARIA
				.attr( "role", "tablist" );

			// don't allow collapsible: false and active: false / null
			if ( !options.collapsible && (options.active === false || options.active == null) ) {
				options.active = 0;
			}

			this._processPanels();
			// handle negative values
			if ( options.active < 0 ) {
				options.active += this.headers.length;
			}
			this._refresh();
		},

		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: !this.active.length ? $() : this.active.next(),
				content: !this.active.length ? $() : this.active.next()
			};
		},

		_createIcons: function() {
			var icons = this.options.icons;
			if ( icons ) {
				$( "<span>" )
					.addClass( "ui-accordion-header-icon ui-icon " + icons.header )
					.prependTo( this.headers );
				this.active.children( ".ui-accordion-header-icon" )
					.removeClass( icons.header )
					.addClass( icons.activeHeader );
				this.headers.addClass( "ui-accordion-icons" );
			}
		},

		_destroyIcons: function() {
			this.headers
				.removeClass( "ui-accordion-icons" )
				.children( ".ui-accordion-header-icon" )
					.remove();
		},

		_destroy: function() {
			var contents;

			// clean up main element
			this.element
				.removeClass( "ui-accordion ui-widget ui-helper-reset" )
				.removeAttr( "role" );

			// clean up headers
			this.headers
				.removeClass( "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
				.removeAttr( "role" )
				.removeAttr( "aria-selected" )
				.removeAttr( "aria-controls" )
				.removeAttr( "tabIndex" )
				.each(function() {
					if ( /^ui-accordion/.test( this.id ) ) {
						this.removeAttribute( "id" );
					}
				});
			this._destroyIcons();

			// clean up content panels
			contents = this.headers.next()
				.css( "display", "" )
				.removeAttr( "role" )
				.removeAttr( "aria-expanded" )
				.removeAttr( "aria-hidden" )
				.removeAttr( "aria-labelledby" )
				.removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled" )
				.each(function() {
					if ( /^ui-accordion/.test( this.id ) ) {
						this.removeAttribute( "id" );
					}
				});
			if ( this.options.heightStyle !== "content" ) {
				contents.css( "height", "" );
			}
		},

		_setOption: function( key, value ) {
			if ( key === "active" ) {
				// _activate() will handle invalid values and update this.options
				this._activate( value );
				return;
			}

			if ( key === "event" ) {
				if ( this.options.event ) {
					this._off( this.headers, this.options.event );
				}
				this._setupEvents( value );
			}

			this._super( key, value );

			// setting collapsible: false while collapsed; open first panel
			if ( key === "collapsible" && !value && this.options.active === false ) {
				this._activate( 0 );
			}

			if ( key === "icons" ) {
				this._destroyIcons();
				if ( value ) {
					this._createIcons();
				}
			}

			// #5332 - opacity doesn't cascade to positioned elements in IE
			// so we need to add the disabled class to the headers and panels
			if ( key === "disabled" ) {
				this.headers.add( this.headers.next() )
					.toggleClass( "ui-state-disabled", !!value );
			}
		},

		_keydown: function( event ) {
			/*jshint maxcomplexity:15*/
			if ( event.altKey || event.ctrlKey ) {
				return;
			}

			var keyCode = $.ui.keyCode,
				length = this.headers.length,
				currentIndex = this.headers.index( event.target ),
				toFocus = false;

			switch ( event.keyCode ) {
				case keyCode.RIGHT:
				case keyCode.DOWN:
					toFocus = this.headers[ ( currentIndex + 1 ) % length ];
					break;
				case keyCode.LEFT:
				case keyCode.UP:
					toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
					break;
				case keyCode.SPACE:
				case keyCode.ENTER:
					this._eventHandler( event );
					break;
				case keyCode.HOME:
					toFocus = this.headers[ 0 ];
					break;
				case keyCode.END:
					toFocus = this.headers[ length - 1 ];
					break;
			}

			if ( toFocus ) {
				$( event.target ).attr( "tabIndex", -1 );
				$( toFocus ).attr( "tabIndex", 0 );
				toFocus.focus();
				event.preventDefault();
			}
		},

		_panelKeyDown : function( event ) {
			if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
				$( event.currentTarget ).prev().focus();
			}
		},

		refresh: function() {
			var options = this.options;
			this._processPanels();

			// was collapsed or no panel
			if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
				options.active = false;
				this.active = $();
			// active false only when collapsible is true
			} else if ( options.active === false ) {
				this._activate( 0 );
			// was active, but active panel is gone
			} else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
				// all remaining panel are disabled
				if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
					options.active = false;
					this.active = $();
				// activate previous panel
				} else {
					this._activate( Math.max( 0, options.active - 1 ) );
				}
			// was active, active panel still exists
			} else {
				// make sure active index is correct
				options.active = this.headers.index( this.active );
			}

			this._destroyIcons();

			this._refresh();
		},

		_processPanels: function() {
			this.headers = this.element.find( this.options.header )
				.addClass( "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" );

			this.headers.next()
				.addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
				.filter(":not(.ui-accordion-content-active)")
				.hide();
		},

		_refresh: function() {
			var maxHeight,
				options = this.options,
				heightStyle = options.heightStyle,
				parent = this.element.parent(),
				accordionId = this.accordionId = "ui-accordion-" +
					(this.element.attr( "id" ) || ++uid);

			this.active = this._findActive( options.active )
				.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
				.removeClass( "ui-corner-all" );
			this.active.next()
				.addClass( "ui-accordion-content-active" )
				.show();

			this.headers
				.attr( "role", "tab" )
				.each(function( i ) {
					var header = $( this ),
						headerId = header.attr( "id" ),
						panel = header.next(),
						panelId = panel.attr( "id" );
					if ( !headerId ) {
						headerId = accordionId + "-header-" + i;
						header.attr( "id", headerId );
					}
					if ( !panelId ) {
						panelId = accordionId + "-panel-" + i;
						panel.attr( "id", panelId );
					}
					header.attr( "aria-controls", panelId );
					panel.attr( "aria-labelledby", headerId );
				})
				.next()
					.attr( "role", "tabpanel" );

			this.headers
				.not( this.active )
				.attr({
					"aria-selected": "false",
					tabIndex: -1
				})
				.next()
					.attr({
						"aria-expanded": "false",
						"aria-hidden": "true"
					})
					.hide();

			// make sure at least one header is in the tab order
			if ( !this.active.length ) {
				this.headers.eq( 0 ).attr( "tabIndex", 0 );
			} else {
				this.active.attr({
					"aria-selected": "true",
					tabIndex: 0
				})
				.next()
					.attr({
						"aria-expanded": "true",
						"aria-hidden": "false"
					});
			}

			this._createIcons();

			this._setupEvents( options.event );

			if ( heightStyle === "fill" ) {
				maxHeight = parent.height();
				this.element.siblings( ":visible" ).each(function() {
					var elem = $( this ),
						position = elem.css( "position" );

					if ( position === "absolute" || position === "fixed" ) {
						return;
					}
					maxHeight -= elem.outerHeight( true );
				});

				this.headers.each(function() {
					maxHeight -= $( this ).outerHeight( true );
				});

				this.headers.next()
					.each(function() {
						$( this ).height( Math.max( 0, maxHeight -
							$( this ).innerHeight() + $( this ).height() ) );
					})
					.css( "overflow", "auto" );
			} else if ( heightStyle === "auto" ) {
				maxHeight = 0;
				this.headers.next()
					.each(function() {
						maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
					})
					.height( maxHeight );
			}
		},

		_activate: function( index ) {
			var active = this._findActive( index )[ 0 ];

			// trying to activate the already active panel
			if ( active === this.active[ 0 ] ) {
				return;
			}

			// trying to collapse, simulate a click on the currently active header
			active = active || this.active[ 0 ];

			this._eventHandler({
				target: active,
				currentTarget: active,
				preventDefault: $.noop
			});
		},

		_findActive: function( selector ) {
			return typeof selector === "number" ? this.headers.eq( selector ) : $();
		},

		_setupEvents: function( event ) {
			var events = {
				keydown: "_keydown"
			};
			if ( event ) {
				$.each( event.split(" "), function( index, eventName ) {
					events[ eventName ] = "_eventHandler";
				});
			}

			this._off( this.headers.add( this.headers.next() ) );
			this._on( this.headers, events );
			this._on( this.headers.next(), { keydown: "_panelKeyDown" });
			this._hoverable( this.headers );
			this._focusable( this.headers );
		},

		_eventHandler: function( event ) {
			var options = this.options,
				active = this.active,
				clicked = $( event.currentTarget ),
				clickedIsActive = clicked[ 0 ] === active[ 0 ],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : clicked.next(),
				toHide = active.next(),
				eventData = {
					oldHeader: active,
					oldPanel: toHide,
					newHeader: collapsing ? $() : clicked,
					newPanel: toShow
				};

			event.preventDefault();

			if (
					// click on active header, but not collapsible
					( clickedIsActive && !options.collapsible ) ||
					// allow canceling activation
					( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
				return;
			}

			options.active = collapsing ? false : this.headers.index( clicked );

			// when the call to ._toggle() comes after the class changes
			// it causes a very odd bug in IE 8 (see #6720)
			this.active = clickedIsActive ? $() : clicked;
			this._toggle( eventData );

			// switch classes
			// corner classes on the previously active header stay after the animation
			active.removeClass( "ui-accordion-header-active ui-state-active" );
			if ( options.icons ) {
				active.children( ".ui-accordion-header-icon" )
					.removeClass( options.icons.activeHeader )
					.addClass( options.icons.header );
			}

			if ( !clickedIsActive ) {
				clicked
					.removeClass( "ui-corner-all" )
					.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
				if ( options.icons ) {
					clicked.children( ".ui-accordion-header-icon" )
						.removeClass( options.icons.header )
						.addClass( options.icons.activeHeader );
				}

				clicked
					.next()
					.addClass( "ui-accordion-content-active" );
			}
		},

		_toggle: function( data ) {
			var toShow = data.newPanel,
				toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

			// handle activating a panel during the animation for another activation
			this.prevShow.add( this.prevHide ).stop( true, true );
			this.prevShow = toShow;
			this.prevHide = toHide;

			if ( this.options.animate ) {
				this._animate( toShow, toHide, data );
			} else {
				toHide.hide();
				toShow.show();
				this._toggleComplete( data );
			}

			toHide.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			toHide.prev().attr( "aria-selected", "false" );
			// if we're switching panels, remove the old header from the tab order
			// if we're opening from collapsed state, remove the previous header from the tab order
			// if we're collapsing, then keep the collapsing header in the tab order
			if ( toShow.length && toHide.length ) {
				toHide.prev().attr( "tabIndex", -1 );
			} else if ( toShow.length ) {
				this.headers.filter(function() {
					return $( this ).attr( "tabIndex" ) === 0;
				})
				.attr( "tabIndex", -1 );
			}

			toShow
				.attr({
					"aria-expanded": "true",
					"aria-hidden": "false"
				})
				.prev()
					.attr({
						"aria-selected": "true",
						tabIndex: 0
					});
		},

		_animate: function( toShow, toHide, data ) {
			var total, easing, duration,
				that = this,
				adjust = 0,
				down = toShow.length &&
					( !toHide.length || ( toShow.index() < toHide.index() ) ),
				animate = this.options.animate || {},
				options = down && animate.down || animate,
				complete = function() {
					that._toggleComplete( data );
				};

			if ( typeof options === "number" ) {
				duration = options;
			}
			if ( typeof options === "string" ) {
				easing = options;
			}
			// fall back from options to animation in case of partial down settings
			easing = easing || options.easing || animate.easing;
			duration = duration || options.duration || animate.duration;

			if ( !toHide.length ) {
				return toShow.animate( showProps, duration, easing, complete );
			}
			if ( !toShow.length ) {
				return toHide.animate( hideProps, duration, easing, complete );
			}

			total = toShow.show().outerHeight();
			toHide.animate( hideProps, {
				duration: duration,
				easing: easing,
				step: function( now, fx ) {
					fx.now = Math.round( now );
				}
			});
			toShow
				.hide()
				.animate( showProps, {
					duration: duration,
					easing: easing,
					complete: complete,
					step: function( now, fx ) {
						fx.now = Math.round( now );
						if ( fx.prop !== "height" ) {
							adjust += fx.now;
						} else if ( that.options.heightStyle !== "content" ) {
							fx.now = Math.round( total - toHide.outerHeight() - adjust );
							adjust = 0;
						}
					}
				});
		},

		_toggleComplete: function( data ) {
			var toHide = data.oldPanel;

			toHide
				.removeClass( "ui-accordion-content-active" )
				.prev()
					.removeClass( "ui-corner-top" )
					.addClass( "ui-corner-all" );

			// Work around for rendering bug in IE (#5421)
			if ( toHide.length ) {
				toHide.parent()[0].className = toHide.parent()[0].className;
			}

			this._trigger( "activate", null, data );
		}
	});

	})( jQuery );

	(function( $, undefined ) {

	// used to prevent race conditions with remote data sources
	var requestIndex = 0;

	$.widget( "ui.autocomplete", {
		version: "1.10.3",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: false,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,

			// callbacks
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},

		pending: 0,

		_create: function() {
			// Some browsers only repeat keydown events, not keypress events,
			// so we use the suppressKeyPress flag to determine if we've already
			// handled the keydown event. #7269
			// Unfortunately the code for & in keypress is the same as the up arrow,
			// so we use the suppressKeyPressRepeat flag to avoid handling keypress
			// events when we know the keydown event was used to modify the
			// search term. #7799
			var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
				nodeName = this.element[0].nodeName.toLowerCase(),
				isTextarea = nodeName === "textarea",
				isInput = nodeName === "input";

			this.isMultiLine =
				// Textareas are always multi-line
				isTextarea ? true :
				// Inputs are always single-line, even if inside a contentEditable element
				// IE also treats inputs as contentEditable
				isInput ? false :
				// All other element types are determined by whether or not they're contentEditable
				this.element.prop( "isContentEditable" );

			this.valueMethod = this.element[ isTextarea || isInput ? "val" : "text" ];
			this.isNewMenu = true;

			this.element
				.addClass( "ui-autocomplete-input" )
				.attr( "autocomplete", "off" );

			this._on( this.element, {
				keydown: function( event ) {
					/*jshint maxcomplexity:15*/
					if ( this.element.prop( "readOnly" ) ) {
						suppressKeyPress = true;
						suppressInput = true;
						suppressKeyPressRepeat = true;
						return;
					}

					suppressKeyPress = false;
					suppressInput = false;
					suppressKeyPressRepeat = false;
					var keyCode = $.ui.keyCode;
					switch( event.keyCode ) {
					case keyCode.PAGE_UP:
						suppressKeyPress = true;
						this._move( "previousPage", event );
						break;
					case keyCode.PAGE_DOWN:
						suppressKeyPress = true;
						this._move( "nextPage", event );
						break;
					case keyCode.UP:
						suppressKeyPress = true;
						this._keyEvent( "previous", event );
						break;
					case keyCode.DOWN:
						suppressKeyPress = true;
						this._keyEvent( "next", event );
						break;
					case keyCode.ENTER:
					case keyCode.NUMPAD_ENTER:
						// when menu is open and has focus
						if ( this.menu.active ) {
							// #6055 - Opera still allows the keypress to occur
							// which causes forms to submit
							suppressKeyPress = true;
							event.preventDefault();
							this.menu.select( event );
						}
						break;
					case keyCode.TAB:
						if ( this.menu.active ) {
							this.menu.select( event );
						}
						break;
					case keyCode.ESCAPE:
						if ( this.menu.element.is( ":visible" ) ) {
							this._value( this.term );
							this.close( event );
							// Different browsers have different default behavior for escape
							// Single press can mean undo or clear
							// Double press in IE means clear the whole form
							event.preventDefault();
						}
						break;
					default:
						suppressKeyPressRepeat = true;
						// search timeout should be triggered before the input value is changed
						this._searchTimeout( event );
						break;
					}
				},
				keypress: function( event ) {
					if ( suppressKeyPress ) {
						suppressKeyPress = false;
						if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
							event.preventDefault();
						}
						return;
					}
					if ( suppressKeyPressRepeat ) {
						return;
					}

					// replicate some key handlers to allow them to repeat in Firefox and Opera
					var keyCode = $.ui.keyCode;
					switch( event.keyCode ) {
					case keyCode.PAGE_UP:
						this._move( "previousPage", event );
						break;
					case keyCode.PAGE_DOWN:
						this._move( "nextPage", event );
						break;
					case keyCode.UP:
						this._keyEvent( "previous", event );
						break;
					case keyCode.DOWN:
						this._keyEvent( "next", event );
						break;
					}
				},
				input: function( event ) {
					if ( suppressInput ) {
						suppressInput = false;
						event.preventDefault();
						return;
					}
					this._searchTimeout( event );
				},
				focus: function() {
					this.selectedItem = null;
					this.previous = this._value();
				},
				blur: function( event ) {
					if ( this.cancelBlur ) {
						delete this.cancelBlur;
						return;
					}

					clearTimeout( this.searching );
					this.close( event );
					this._change( event );
				}
			});

			this._initSource();
			this.menu = $( "<ul>" )
				.addClass( "ui-autocomplete ui-front" )
				.appendTo( this._appendTo() )
				.menu({
					// disable ARIA support, the live region takes care of that
					role: null
				})
				.hide()
				.data( "ui-menu" );

			this._on( this.menu.element, {
				mousedown: function( event ) {
					// prevent moving focus out of the text field
					event.preventDefault();

					// IE doesn't prevent moving focus even with event.preventDefault()
					// so we set a flag to know when we should ignore the blur event
					this.cancelBlur = true;
					this._delay(function() {
						delete this.cancelBlur;
					});

					// clicking on the scrollbar causes focus to shift to the body
					// but we can't detect a mouseup or a click immediately afterward
					// so we have to track the next mousedown and close the menu if
					// the user clicks somewhere outside of the autocomplete
					var menuElement = this.menu.element[ 0 ];
					if ( !$( event.target ).closest( ".ui-menu-item" ).length ) {
						this._delay(function() {
							var that = this;
							this.document.one( "mousedown", function( event ) {
								if ( event.target !== that.element[ 0 ] &&
										event.target !== menuElement &&
										!$.contains( menuElement, event.target ) ) {
									that.close();
								}
							});
						});
					}
				},
				menufocus: function( event, ui ) {
					// support: Firefox
					// Prevent accidental activation of menu items in Firefox (#7024 #9118)
					if ( this.isNewMenu ) {
						this.isNewMenu = false;
						if ( event.originalEvent && /^mouse/.test( event.originalEvent.type ) ) {
							this.menu.blur();

							this.document.one( "mousemove", function() {
								$( event.target ).trigger( event.originalEvent );
							});

							return;
						}
					}

					var item = ui.item.data( "ui-autocomplete-item" );
					if ( false !== this._trigger( "focus", event, { item: item } ) ) {
						// use value to match what will end up in the input, if it was a key event
						if ( event.originalEvent && /^key/.test( event.originalEvent.type ) ) {
							this._value( item.value );
						}
					} else {
						// Normally the input is populated with the item's value as the
						// menu is navigated, causing screen readers to notice a change and
						// announce the item. Since the focus event was canceled, this doesn't
						// happen, so we update the live region so that screen readers can
						// still notice the change and announce it.
						this.liveRegion.text( item.value );
					}
				},
				menuselect: function( event, ui ) {
					var item = ui.item.data( "ui-autocomplete-item" ),
						previous = this.previous;

					// only trigger when focus was lost (click on menu)
					if ( this.element[0] !== this.document[0].activeElement ) {
						this.element.focus();
						this.previous = previous;
						// #6109 - IE triggers two focus events and the second
						// is asynchronous, so we need to reset the previous
						// term synchronously and asynchronously :-(
						this._delay(function() {
							this.previous = previous;
							this.selectedItem = item;
						});
					}

					if ( false !== this._trigger( "select", event, { item: item } ) ) {
						this._value( item.value );
					}
					// reset the term after the select event
					// this allows custom select handling to work properly
					this.term = this._value();

					this.close( event );
					this.selectedItem = item;
				}
			});

			this.liveRegion = $( "<span>", {
					role: "status",
					"aria-live": "polite"
				})
				.addClass( "ui-helper-hidden-accessible" )
				.insertBefore( this.element );

			// turning off autocomplete prevents the browser from remembering the
			// value when navigating through history, so we re-enable autocomplete
			// if the page is unloaded before the widget is destroyed. #7790
			this._on( this.window, {
				beforeunload: function() {
					this.element.removeAttr( "autocomplete" );
				}
			});
		},

		_destroy: function() {
			clearTimeout( this.searching );
			this.element
				.removeClass( "ui-autocomplete-input" )
				.removeAttr( "autocomplete" );
			this.menu.element.remove();
			this.liveRegion.remove();
		},

		_setOption: function( key, value ) {
			this._super( key, value );
			if ( key === "source" ) {
				this._initSource();
			}
			if ( key === "appendTo" ) {
				this.menu.element.appendTo( this._appendTo() );
			}
			if ( key === "disabled" && value && this.xhr ) {
				this.xhr.abort();
			}
		},

		_appendTo: function() {
			var element = this.options.appendTo;

			if ( element ) {
				element = element.jquery || element.nodeType ?
					$( element ) :
					this.document.find( element ).eq( 0 );
			}

			if ( !element ) {
				element = this.element.closest( ".ui-front" );
			}

			if ( !element.length ) {
				element = this.document[0].body;
			}

			return element;
		},

		_initSource: function() {
			var array, url,
				that = this;
			if ( $.isArray(this.options.source) ) {
				array = this.options.source;
				this.source = function( request, response ) {
					response( $.ui.autocomplete.filter( array, request.term ) );
				};
			} else if ( typeof this.options.source === "string" ) {
				url = this.options.source;
				this.source = function( request, response ) {
					if ( that.xhr ) {
						that.xhr.abort();
					}
					that.xhr = $.ajax({
						url: url,
						data: request,
						dataType: "json",
						success: function( data ) {
							response( data );
						},
						error: function() {
							response( [] );
						}
					});
				};
			} else {
				this.source = this.options.source;
			}
		},

		_searchTimeout: function( event ) {
			clearTimeout( this.searching );
			this.searching = this._delay(function() {
				// only search if the value has changed
				if ( this.term !== this._value() ) {
					this.selectedItem = null;
					this.search( null, event );
				}
			}, this.options.delay );
		},

		search: function( value, event ) {
			value = value != null ? value : this._value();

			// always save the actual value, not the one passed as an argument
			this.term = this._value();

			if ( value.length < this.options.minLength ) {
				return this.close( event );
			}

			if ( this._trigger( "search", event ) === false ) {
				return;
			}

			return this._search( value );
		},

		_search: function( value ) {
			this.pending++;
			this.element.addClass( "ui-autocomplete-loading" );
			this.cancelSearch = false;

			this.source( { term: value }, this._response() );
		},

		_response: function() {
			var that = this,
				index = ++requestIndex;

			return function( content ) {
				if ( index === requestIndex ) {
					that.__response( content );
				}

				that.pending--;
				if ( !that.pending ) {
					that.element.removeClass( "ui-autocomplete-loading" );
				}
			};
		},

		__response: function( content ) {
			if ( content ) {
				content = this._normalize( content );
			}
			this._trigger( "response", null, { content: content } );
			if ( !this.options.disabled && content && content.length && !this.cancelSearch ) {
				this._suggest( content );
				this._trigger( "open" );
			} else {
				// use ._close() instead of .close() so we don't cancel future searches
				this._close();
			}
		},

		close: function( event ) {
			this.cancelSearch = true;
			this._close( event );
		},

		_close: function( event ) {
			if ( this.menu.element.is( ":visible" ) ) {
				this.menu.element.hide();
				this.menu.blur();
				this.isNewMenu = true;
				this._trigger( "close", event );
			}
		},

		_change: function( event ) {
			if ( this.previous !== this._value() ) {
				this._trigger( "change", event, { item: this.selectedItem } );
			}
		},

		_normalize: function( items ) {
			// assume all items have the right format when the first item is complete
			if ( items.length && items[0].label && items[0].value ) {
				return items;
			}
			return $.map( items, function( item ) {
				if ( typeof item === "string" ) {
					return {
						label: item,
						value: item
					};
				}
				return $.extend({
					label: item.label || item.value,
					value: item.value || item.label
				}, item );
			});
		},

		_suggest: function( items ) {
			var ul = this.menu.element.empty();
			this._renderMenu( ul, items );
			this.isNewMenu = true;
			this.menu.refresh();

			// size and position menu
			ul.show();
			this._resizeMenu();
			ul.position( $.extend({
				of: this.element
			}, this.options.position ));

			if ( this.options.autoFocus ) {
				this.menu.next();
			}
		},

		_resizeMenu: function() {
			var ul = this.menu.element;
			ul.outerWidth( Math.max(
				// Firefox wraps long text (possibly a rounding bug)
				// so we add 1px to avoid the wrapping (#7513)
				ul.width( "" ).outerWidth() + 1,
				this.element.outerWidth()
			) );
		},

		_renderMenu: function( ul, items ) {
			var that = this;
			$.each( items, function( index, item ) {
				that._renderItemData( ul, item );
			});
		},

		_renderItemData: function( ul, item ) {
			return this._renderItem( ul, item ).data( "ui-autocomplete-item", item );
		},

		_renderItem: function( ul, item ) {
			return $( "<li>" )
				.append( $( "<a>" ).text( item.label ) )
				.appendTo( ul );
		},

		_move: function( direction, event ) {
			if ( !this.menu.element.is( ":visible" ) ) {
				this.search( null, event );
				return;
			}
			if ( this.menu.isFirstItem() && /^previous/.test( direction ) ||
					this.menu.isLastItem() && /^next/.test( direction ) ) {
				this._value( this.term );
				this.menu.blur();
				return;
			}
			this.menu[ direction ]( event );
		},

		widget: function() {
			return this.menu.element;
		},

		_value: function() {
			return this.valueMethod.apply( this.element, arguments );
		},

		_keyEvent: function( keyEvent, event ) {
			if ( !this.isMultiLine || this.menu.element.is( ":visible" ) ) {
				this._move( keyEvent, event );

				// prevents moving cursor to beginning/end of the text field in some browsers
				event.preventDefault();
			}
		}
	});

	$.extend( $.ui.autocomplete, {
		escapeRegex: function( value ) {
			return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
		},
		filter: function(array, term) {
			var matcher = new RegExp( $.ui.autocomplete.escapeRegex(term), "i" );
			return $.grep( array, function(value) {
				return matcher.test( value.label || value.value || value );
			});
		}
	});


	// live region extension, adding a `messages` option
	// NOTE: This is an experimental API. We are still investigating
	// a full solution for string manipulation and internationalization.
	$.widget( "ui.autocomplete", $.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function( amount ) {
					return amount + ( amount > 1 ? " results are" : " result is" ) +
						" available, use up and down arrow keys to navigate.";
				}
			}
		},

		__response: function( content ) {
			var message;
			this._superApply( arguments );
			if ( this.options.disabled || this.cancelSearch ) {
				return;
			}
			if ( content && content.length ) {
				message = this.options.messages.results( content.length );
			} else {
				message = this.options.messages.noResults;
			}
			this.liveRegion.text( message );
		}
	});

	}( jQuery ));

	(function( $, undefined ) {

	var lastActive, startXPos, startYPos, clickDragged,
		baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
		stateClasses = "ui-state-hover ui-state-active ",
		typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		formResetHandler = function() {
			var form = $( this );
			setTimeout(function() {
				form.find( ":ui-button" ).button( "refresh" );
			}, 1 );
		},
		radioGroup = function( radio ) {
			var name = radio.name,
				form = radio.form,
				radios = $( [] );
			if ( name ) {
				name = name.replace( /'/g, "\\'" );
				if ( form ) {
					radios = $( form ).find( "[name='" + name + "']" );
				} else {
					radios = $( "[name='" + name + "']", radio.ownerDocument )
						.filter(function() {
							return !this.form;
						});
				}
			}
			return radios;
		};

	$.widget( "ui.button", {
		version: "1.10.3",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: true,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest( "form" )
				.unbind( "reset" + this.eventNamespace )
				.bind( "reset" + this.eventNamespace, formResetHandler );

			if ( typeof this.options.disabled !== "boolean" ) {
				this.options.disabled = !!this.element.prop( "disabled" );
			} else {
				this.element.prop( "disabled", this.options.disabled );
			}

			this._determineButtonType();
			this.hasTitle = !!this.buttonElement.attr( "title" );

			var that = this,
				options = this.options,
				toggleButton = this.type === "checkbox" || this.type === "radio",
				activeClass = !toggleButton ? "ui-state-active" : "",
				focusClass = "ui-state-focus";

			if ( options.label === null ) {
				options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
			}

			this._hoverable( this.buttonElement );

			this.buttonElement
				.addClass( baseClasses )
				.attr( "role", "button" )
				.bind( "mouseenter" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return;
					}
					if ( this === lastActive ) {
						$( this ).addClass( "ui-state-active" );
					}
				})
				.bind( "mouseleave" + this.eventNamespace, function() {
					if ( options.disabled ) {
						return;
					}
					$( this ).removeClass( activeClass );
				})
				.bind( "click" + this.eventNamespace, function( event ) {
					if ( options.disabled ) {
						event.preventDefault();
						event.stopImmediatePropagation();
					}
				});

			this.element
				.bind( "focus" + this.eventNamespace, function() {
					// no need to check disabled, focus won't be triggered anyway
					that.buttonElement.addClass( focusClass );
				})
				.bind( "blur" + this.eventNamespace, function() {
					that.buttonElement.removeClass( focusClass );
				});

			if ( toggleButton ) {
				this.element.bind( "change" + this.eventNamespace, function() {
					if ( clickDragged ) {
						return;
					}
					that.refresh();
				});
				// if mouse moves between mousedown and mouseup (drag) set clickDragged flag
				// prevents issue where button state changes but checkbox/radio checked state
				// does not in Firefox (see ticket #6970)
				this.buttonElement
					.bind( "mousedown" + this.eventNamespace, function( event ) {
						if ( options.disabled ) {
							return;
						}
						clickDragged = false;
						startXPos = event.pageX;
						startYPos = event.pageY;
					})
					.bind( "mouseup" + this.eventNamespace, function( event ) {
						if ( options.disabled ) {
							return;
						}
						if ( startXPos !== event.pageX || startYPos !== event.pageY ) {
							clickDragged = true;
						}
				});
			}

			if ( this.type === "checkbox" ) {
				this.buttonElement.bind( "click" + this.eventNamespace, function() {
					if ( options.disabled || clickDragged ) {
						return false;
					}
				});
			} else if ( this.type === "radio" ) {
				this.buttonElement.bind( "click" + this.eventNamespace, function() {
					if ( options.disabled || clickDragged ) {
						return false;
					}
					$( this ).addClass( "ui-state-active" );
					that.buttonElement.attr( "aria-pressed", "true" );

					var radio = that.element[ 0 ];
					radioGroup( radio )
						.not( radio )
						.map(function() {
							return $( this ).button( "widget" )[ 0 ];
						})
						.removeClass( "ui-state-active" )
						.attr( "aria-pressed", "false" );
				});
			} else {
				this.buttonElement
					.bind( "mousedown" + this.eventNamespace, function() {
						if ( options.disabled ) {
							return false;
						}
						$( this ).addClass( "ui-state-active" );
						lastActive = this;
						that.document.one( "mouseup", function() {
							lastActive = null;
						});
					})
					.bind( "mouseup" + this.eventNamespace, function() {
						if ( options.disabled ) {
							return false;
						}
						$( this ).removeClass( "ui-state-active" );
					})
					.bind( "keydown" + this.eventNamespace, function(event) {
						if ( options.disabled ) {
							return false;
						}
						if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
							$( this ).addClass( "ui-state-active" );
						}
					})
					// see #8559, we bind to blur here in case the button element loses
					// focus between keydown and keyup, it would be left in an "active" state
					.bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
						$( this ).removeClass( "ui-state-active" );
					});

				if ( this.buttonElement.is("a") ) {
					this.buttonElement.keyup(function(event) {
						if ( event.keyCode === $.ui.keyCode.SPACE ) {
							// TODO pass through original event correctly (just as 2nd argument doesn't work)
							$( this ).click();
						}
					});
				}
			}

			// TODO: pull out $.Widget's handling for the disabled option into
			// $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
			// be overridden by individual plugins
			this._setOption( "disabled", options.disabled );
			this._resetButton();
		},

		_determineButtonType: function() {
			var ancestor, labelSelector, checked;

			if ( this.element.is("[type=checkbox]") ) {
				this.type = "checkbox";
			} else if ( this.element.is("[type=radio]") ) {
				this.type = "radio";
			} else if ( this.element.is("input") ) {
				this.type = "input";
			} else {
				this.type = "button";
			}

			if ( this.type === "checkbox" || this.type === "radio" ) {
				// we don't search against the document in case the element
				// is disconnected from the DOM
				ancestor = this.element.parents().last();
				labelSelector = "label[for='" + this.element.attr("id") + "']";
				this.buttonElement = ancestor.find( labelSelector );
				if ( !this.buttonElement.length ) {
					ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings();
					this.buttonElement = ancestor.filter( labelSelector );
					if ( !this.buttonElement.length ) {
						this.buttonElement = ancestor.find( labelSelector );
					}
				}
				this.element.addClass( "ui-helper-hidden-accessible" );

				checked = this.element.is( ":checked" );
				if ( checked ) {
					this.buttonElement.addClass( "ui-state-active" );
				}
				this.buttonElement.prop( "aria-pressed", checked );
			} else {
				this.buttonElement = this.element;
			}
		},

		widget: function() {
			return this.buttonElement;
		},

		_destroy: function() {
			this.element
				.removeClass( "ui-helper-hidden-accessible" );
			this.buttonElement
				.removeClass( baseClasses + " " + stateClasses + " " + typeClasses )
				.removeAttr( "role" )
				.removeAttr( "aria-pressed" )
				.html( this.buttonElement.find(".ui-button-text").html() );

			if ( !this.hasTitle ) {
				this.buttonElement.removeAttr( "title" );
			}
		},

		_setOption: function( key, value ) {
			this._super( key, value );
			if ( key === "disabled" ) {
				if ( value ) {
					this.element.prop( "disabled", true );
				} else {
					this.element.prop( "disabled", false );
				}
				return;
			}
			this._resetButton();
		},

		refresh: function() {
			//See #8237 & #8828
			var isDisabled = this.element.is( "input, button" ) ? this.element.is( ":disabled" ) : this.element.hasClass( "ui-button-disabled" );

			if ( isDisabled !== this.options.disabled ) {
				this._setOption( "disabled", isDisabled );
			}
			if ( this.type === "radio" ) {
				radioGroup( this.element[0] ).each(function() {
					if ( $( this ).is( ":checked" ) ) {
						$( this ).button( "widget" )
							.addClass( "ui-state-active" )
							.attr( "aria-pressed", "true" );
					} else {
						$( this ).button( "widget" )
							.removeClass( "ui-state-active" )
							.attr( "aria-pressed", "false" );
					}
				});
			} else if ( this.type === "checkbox" ) {
				if ( this.element.is( ":checked" ) ) {
					this.buttonElement
						.addClass( "ui-state-active" )
						.attr( "aria-pressed", "true" );
				} else {
					this.buttonElement
						.removeClass( "ui-state-active" )
						.attr( "aria-pressed", "false" );
				}
			}
		},

		_resetButton: function() {
			if ( this.type === "input" ) {
				if ( this.options.label ) {
					this.element.val( this.options.label );
				}
				return;
			}
			var buttonElement = this.buttonElement.removeClass( typeClasses ),
				buttonText = $( "<span></span>", this.document[0] )
					.addClass( "ui-button-text" )
					.html( this.options.label )
					.appendTo( buttonElement.empty() )
					.text(),
				icons = this.options.icons,
				multipleIcons = icons.primary && icons.secondary,
				buttonClasses = [];

			if ( icons.primary || icons.secondary ) {
				if ( this.options.text ) {
					buttonClasses.push( "ui-button-text-icon" + ( multipleIcons ? "s" : ( icons.primary ? "-primary" : "-secondary" ) ) );
				}

				if ( icons.primary ) {
					buttonElement.prepend( "<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>" );
				}

				if ( icons.secondary ) {
					buttonElement.append( "<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>" );
				}

				if ( !this.options.text ) {
					buttonClasses.push( multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only" );

					if ( !this.hasTitle ) {
						buttonElement.attr( "title", $.trim( buttonText ) );
					}
				}
			} else {
				buttonClasses.push( "ui-button-text-only" );
			}
			buttonElement.addClass( buttonClasses.join( " " ) );
		}
	});

	$.widget( "ui.buttonset", {
		version: "1.10.3",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},

		_create: function() {
			this.element.addClass( "ui-buttonset" );
		},

		_init: function() {
			this.refresh();
		},

		_setOption: function( key, value ) {
			if ( key === "disabled" ) {
				this.buttons.button( "option", key, value );
			}

			this._super( key, value );
		},

		refresh: function() {
			var rtl = this.element.css( "direction" ) === "rtl";

			this.buttons = this.element.find( this.options.items )
				.filter( ":ui-button" )
					.button( "refresh" )
				.end()
				.not( ":ui-button" )
					.button()
				.end()
				.map(function() {
					return $( this ).button( "widget" )[ 0 ];
				})
					.removeClass( "ui-corner-all ui-corner-left ui-corner-right" )
					.filter( ":first" )
						.addClass( rtl ? "ui-corner-right" : "ui-corner-left" )
					.end()
					.filter( ":last" )
						.addClass( rtl ? "ui-corner-left" : "ui-corner-right" )
					.end()
				.end();
		},

		_destroy: function() {
			this.element.removeClass( "ui-buttonset" );
			this.buttons
				.map(function() {
					return $( this ).button( "widget" )[ 0 ];
				})
					.removeClass( "ui-corner-left ui-corner-right" )
				.end()
				.button( "destroy" );
		}
	});

	}( jQuery ) );

	(function( $, undefined ) {

	$.extend($.ui, { datepicker: { version: "1.10.3" } });

	var PROP_NAME = "datepicker",
		instActive;

	/* Date picker manager.
	   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
	   Settings for (groups of) date pickers are maintained in an instance object,
	   allowing multiple different settings on the same page. */

	function Datepicker() {
		this._curInst = null; // The current instance in use
		this._keyEvent = false; // If the last event was a key event
		this._disabledInputs = []; // List of date picker inputs that have been disabled
		this._datepickerShowing = false; // True if the popup picker is showing , false if not
		this._inDialog = false; // True if showing within a "dialog", false if not
		this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
		this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
		this._appendClass = "ui-datepicker-append"; // The name of the append marker class
		this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
		this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
		this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
		this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
		this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
		this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[""] = { // Default regional settings
			closeText: "Done", // Display text for close link
			prevText: "Prev", // Display text for previous month link
			nextText: "Next", // Display text for next month link
			currentText: "Today", // Display text for current month link
			monthNames: ["January","February","March","April","May","June",
				"July","August","September","October","November","December"], // Names of months for drop-down and formatting
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
			dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
			weekHeader: "Wk", // Column header for week of the year
			dateFormat: "mm/dd/yy", // See format options on parseDate
			firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
			isRTL: false, // True if right-to-left language, false if left-to-right
			showMonthAfterYear: false, // True if the year select precedes month, false for month then year
			yearSuffix: "" // Additional text to append to the year in the month headers
		};
		this._defaults = { // Global defaults for all the date picker instances
			showOn: "focus", // "focus" for popup on focus,
				// "button" for trigger button, or "both" for either
			showAnim: "fadeIn", // Name of jQuery animation for popup
			showOptions: {}, // Options for enhanced animations
			defaultDate: null, // Used when field is blank: actual date,
				// +/-number for offset from today, null for today
			appendText: "", // Display text following the input box, e.g. showing the format
			buttonText: "...", // Text for trigger button
			buttonImage: "", // URL for trigger button image
			buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
			hideIfNoPrevNext: false, // True to hide next/previous month links
				// if not applicable, false to just disable them
			navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
			gotoCurrent: false, // True if today link goes back to current selection instead
			changeMonth: false, // True if month can be selected directly, false if only prev/next
			changeYear: false, // True if year can be selected directly, false if only prev/next
			yearRange: "c-10:c+10", // Range of years to display in drop-down,
				// either relative to today's year (-nn:+nn), relative to currently displayed year
				// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
			showOtherMonths: false, // True to show dates in other months, false to leave blank
			selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
			showWeek: false, // True to show week of the year, false to not show it
			calculateWeek: this.iso8601Week, // How to calculate the week of the year,
				// takes a Date and returns the number of the week for it
			shortYearCutoff: "+10", // Short year values < this are in the current century,
				// > this are in the previous century,
				// string value starting with "+" for current year + value
			minDate: null, // The earliest selectable date, or null for no limit
			maxDate: null, // The latest selectable date, or null for no limit
			duration: "fast", // Duration of display/closure
			beforeShowDay: null, // Function that takes a date and returns an array with
				// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
				// [2] = cell title (optional), e.g. $.datepicker.noWeekends
			beforeShow: null, // Function that takes an input field and
				// returns a set of custom settings for the date picker
			onSelect: null, // Define a callback function when a date is selected
			onChangeMonthYear: null, // Define a callback function when the month or year is changed
			onClose: null, // Define a callback function when the datepicker is closed
			numberOfMonths: 1, // Number of months to show at a time
			showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
			stepMonths: 1, // Number of months to step back/forward
			stepBigMonths: 12, // Number of months to step back/forward for the big links
			altField: "", // Selector for an alternate field to store selected dates into
			altFormat: "", // The date format to use for the alternate field
			constrainInput: true, // The input is constrained by the current date format
			showButtonPanel: false, // True to show button panel, false to not show it
			autoSize: false, // True to size the input for the date format, false to leave as is
			disabled: false // The initial disabled state
		};
		$.extend(this._defaults, this.regional[""]);
		this.dpDiv = bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
	}

	$.extend(Datepicker.prototype, {
		/* Class name added to elements to indicate already configured with a date picker. */
		markerClassName: "hasDatepicker",

		//Keep track of the maximum number of rows displayed (see #7043)
		maxRows: 4,

		// TODO rename to "widget" when switching to widget factory
		_widgetDatepicker: function() {
			return this.dpDiv;
		},

		/* Override the default settings for all instances of the date picker.
		 * @param  settings  object - the new settings to use as defaults (anonymous object)
		 * @return the manager object
		 */
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/* Attach the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
		 */
		_attachDatepicker: function(target, settings) {
			var nodeName, inline, inst;
			nodeName = target.nodeName.toLowerCase();
			inline = (nodeName === "div" || nodeName === "span");
			if (!target.id) {
				this.uuid += 1;
				target.id = "dp" + this.uuid;
			}
			inst = this._newInst($(target), inline);
			inst.settings = $.extend({}, settings || {});
			if (nodeName === "input") {
				this._connectDatepicker(target, inst);
			} else if (inline) {
				this._inlineDatepicker(target, inst);
			}
		},

		/* Create a new instance object. */
		_newInst: function(target, inline) {
			var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
			return {id: id, input: target, // associated target
				selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
				drawMonth: 0, drawYear: 0, // month being drawn
				inline: inline, // is datepicker inline or not
				dpDiv: (!inline ? this.dpDiv : // presentation div
				bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
		},

		/* Attach the date picker to an input field. */
		_connectDatepicker: function(target, inst) {
			var input = $(target);
			inst.append = $([]);
			inst.trigger = $([]);
			if (input.hasClass(this.markerClassName)) {
				return;
			}
			this._attachments(input, inst);
			input.addClass(this.markerClassName).keydown(this._doKeyDown).
				keypress(this._doKeyPress).keyup(this._doKeyUp);
			this._autoSize(inst);
			$.data(target, PROP_NAME, inst);
			//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
			if( inst.settings.disabled ) {
				this._disableDatepicker( target );
			}
		},

		/* Make attachments based on settings. */
		_attachments: function(input, inst) {
			var showOn, buttonText, buttonImage,
				appendText = this._get(inst, "appendText"),
				isRTL = this._get(inst, "isRTL");

			if (inst.append) {
				inst.append.remove();
			}
			if (appendText) {
				inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
				input[isRTL ? "before" : "after"](inst.append);
			}

			input.unbind("focus", this._showDatepicker);

			if (inst.trigger) {
				inst.trigger.remove();
			}

			showOn = this._get(inst, "showOn");
			if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
				input.focus(this._showDatepicker);
			}
			if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
				buttonText = this._get(inst, "buttonText");
				buttonImage = this._get(inst, "buttonImage");
				inst.trigger = $(this._get(inst, "buttonImageOnly") ?
					$("<img/>").addClass(this._triggerClass).
						attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
					$("<button type='button'></button>").addClass(this._triggerClass).
						html(!buttonImage ? buttonText : $("<img/>").attr(
						{ src:buttonImage, alt:buttonText, title:buttonText })));
				input[isRTL ? "before" : "after"](inst.trigger);
				inst.trigger.click(function() {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
						$.datepicker._hideDatepicker();
					} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
						$.datepicker._hideDatepicker();
						$.datepicker._showDatepicker(input[0]);
					} else {
						$.datepicker._showDatepicker(input[0]);
					}
					return false;
				});
			}
		},

		/* Apply the maximum length for the date format. */
		_autoSize: function(inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var findMax, max, maxI, i,
					date = new Date(2009, 12 - 1, 20), // Ensure double digits
					dateFormat = this._get(inst, "dateFormat");

				if (dateFormat.match(/[DM]/)) {
					findMax = function(names) {
						max = 0;
						maxI = 0;
						for (i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
						"monthNames" : "monthNamesShort"))));
					date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
						"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
				}
				inst.input.attr("size", this._formatDate(inst, date).length);
			}
		},

		/* Attach an inline date picker to a div. */
		_inlineDatepicker: function(target, inst) {
			var divSpan = $(target);
			if (divSpan.hasClass(this.markerClassName)) {
				return;
			}
			divSpan.addClass(this.markerClassName).append(inst.dpDiv);
			$.data(target, PROP_NAME, inst);
			this._setDate(inst, this._getDefaultDate(inst), true);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
			//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
			if( inst.settings.disabled ) {
				this._disableDatepicker( target );
			}
			// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
			// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
			inst.dpDiv.css( "display", "block" );
		},

		/* Pop-up the date picker in a "dialog" box.
		 * @param  input element - ignored
		 * @param  date	string or Date - the initial date to display
		 * @param  onSelect  function - the function to call when a date is selected
		 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
		 * @param  pos int[2] - coordinates for the dialog's position within the screen or
		 *					event - with x/y coordinates or
		 *					leave empty for default (screen centre)
		 * @return the manager object
		 */
		_dialogDatepicker: function(input, date, onSelect, settings, pos) {
			var id, browserWidth, browserHeight, scrollX, scrollY,
				inst = this._dialogInst; // internal instance

			if (!inst) {
				this.uuid += 1;
				id = "dp" + this.uuid;
				this._dialogInput = $("<input type='text' id='" + id +
					"' style='position: absolute; top: -100px; width: 0px;'/>");
				this._dialogInput.keydown(this._doKeyDown);
				$("body").append(this._dialogInput);
				inst = this._dialogInst = this._newInst(this._dialogInput, false);
				inst.settings = {};
				$.data(this._dialogInput[0], PROP_NAME, inst);
			}
			extendRemove(inst.settings, settings || {});
			date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
			this._dialogInput.val(date);

			this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
			if (!this._pos) {
				browserWidth = document.documentElement.clientWidth;
				browserHeight = document.documentElement.clientHeight;
				scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
				scrollY = document.documentElement.scrollTop || document.body.scrollTop;
				this._pos = // should use actual width/height below
					[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
			}

			// move input on screen for focus, but hidden behind dialog
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
			inst.settings.onSelect = onSelect;
			this._inDialog = true;
			this.dpDiv.addClass(this._dialogClass);
			this._showDatepicker(this._dialogInput[0]);
			if ($.blockUI) {
				$.blockUI(this.dpDiv);
			}
			$.data(this._dialogInput[0], PROP_NAME, inst);
			return this;
		},

		/* Detach a datepicker from its control.
		 * @param  target	element - the target input field or division or span
		 */
		_destroyDatepicker: function(target) {
			var nodeName,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			$.removeData(target, PROP_NAME);
			if (nodeName === "input") {
				inst.append.remove();
				inst.trigger.remove();
				$target.removeClass(this.markerClassName).
					unbind("focus", this._showDatepicker).
					unbind("keydown", this._doKeyDown).
					unbind("keypress", this._doKeyPress).
					unbind("keyup", this._doKeyUp);
			} else if (nodeName === "div" || nodeName === "span") {
				$target.removeClass(this.markerClassName).empty();
			}
		},

		/* Enable the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 */
		_enableDatepicker: function(target) {
			var nodeName, inline,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = false;
				inst.trigger.filter("button").
					each(function() { this.disabled = false; }).end().
					filter("img").css({opacity: "1.0", cursor: ""});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().removeClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
					prop("disabled", false);
			}
			this._disabledInputs = $.map(this._disabledInputs,
				function(value) { return (value === target ? null : value); }); // delete entry
		},

		/* Disable the date picker to a jQuery selection.
		 * @param  target	element - the target input field or division or span
		 */
		_disableDatepicker: function(target) {
			var nodeName, inline,
				$target = $(target),
				inst = $.data(target, PROP_NAME);

			if (!$target.hasClass(this.markerClassName)) {
				return;
			}

			nodeName = target.nodeName.toLowerCase();
			if (nodeName === "input") {
				target.disabled = true;
				inst.trigger.filter("button").
					each(function() { this.disabled = true; }).end().
					filter("img").css({opacity: "0.5", cursor: "default"});
			} else if (nodeName === "div" || nodeName === "span") {
				inline = $target.children("." + this._inlineClass);
				inline.children().addClass("ui-state-disabled");
				inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
					prop("disabled", true);
			}
			this._disabledInputs = $.map(this._disabledInputs,
				function(value) { return (value === target ? null : value); }); // delete entry
			this._disabledInputs[this._disabledInputs.length] = target;
		},

		/* Is the first field in a jQuery collection disabled as a datepicker?
		 * @param  target	element - the target input field or division or span
		 * @return boolean - true if disabled, false if enabled
		 */
		_isDisabledDatepicker: function(target) {
			if (!target) {
				return false;
			}
			for (var i = 0; i < this._disabledInputs.length; i++) {
				if (this._disabledInputs[i] === target) {
					return true;
				}
			}
			return false;
		},

		/* Retrieve the instance data for the target control.
		 * @param  target  element - the target input field or division or span
		 * @return  object - the associated instance data
		 * @throws  error if a jQuery problem getting data
		 */
		_getInst: function(target) {
			try {
				return $.data(target, PROP_NAME);
			}
			catch (err) {
				throw "Missing instance data for this datepicker";
			}
		},

		/* Update or retrieve the settings for a date picker attached to an input field or division.
		 * @param  target  element - the target input field or division or span
		 * @param  name	object - the new settings to update or
		 *				string - the name of the setting to change or retrieve,
		 *				when retrieving also "all" for all instance settings or
		 *				"defaults" for all global defaults
		 * @param  value   any - the new value for the setting
		 *				(omit if above is an object or to retrieve a value)
		 */
		_optionDatepicker: function(target, name, value) {
			var settings, date, minDate, maxDate,
				inst = this._getInst(target);

			if (arguments.length === 2 && typeof name === "string") {
				return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
					(inst ? (name === "all" ? $.extend({}, inst.settings) :
					this._get(inst, name)) : null));
			}

			settings = name || {};
			if (typeof name === "string") {
				settings = {};
				settings[name] = value;
			}

			if (inst) {
				if (this._curInst === inst) {
					this._hideDatepicker();
				}

				date = this._getDateDatepicker(target, true);
				minDate = this._getMinMaxDate(inst, "min");
				maxDate = this._getMinMaxDate(inst, "max");
				extendRemove(inst.settings, settings);
				// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
				if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
					inst.settings.minDate = this._formatDate(inst, minDate);
				}
				if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
					inst.settings.maxDate = this._formatDate(inst, maxDate);
				}
				if ( "disabled" in settings ) {
					if ( settings.disabled ) {
						this._disableDatepicker(target);
					} else {
						this._enableDatepicker(target);
					}
				}
				this._attachments($(target), inst);
				this._autoSize(inst);
				this._setDate(inst, date);
				this._updateAlternate(inst);
				this._updateDatepicker(inst);
			}
		},

		// change method deprecated
		_changeDatepicker: function(target, name, value) {
			this._optionDatepicker(target, name, value);
		},

		/* Redraw the date picker attached to an input field or division.
		 * @param  target  element - the target input field or division or span
		 */
		_refreshDatepicker: function(target) {
			var inst = this._getInst(target);
			if (inst) {
				this._updateDatepicker(inst);
			}
		},

		/* Set the dates for a jQuery selection.
		 * @param  target element - the target input field or division or span
		 * @param  date	Date - the new date
		 */
		_setDateDatepicker: function(target, date) {
			var inst = this._getInst(target);
			if (inst) {
				this._setDate(inst, date);
				this._updateDatepicker(inst);
				this._updateAlternate(inst);
			}
		},

		/* Get the date(s) for the first entry in a jQuery selection.
		 * @param  target element - the target input field or division or span
		 * @param  noDefault boolean - true if no default date is to be used
		 * @return Date - the current date
		 */
		_getDateDatepicker: function(target, noDefault) {
			var inst = this._getInst(target);
			if (inst && !inst.inline) {
				this._setDateFromField(inst, noDefault);
			}
			return (inst ? this._getDate(inst) : null);
		},

		/* Handle keystrokes. */
		_doKeyDown: function(event) {
			var onSelect, dateStr, sel,
				inst = $.datepicker._getInst(event.target),
				handled = true,
				isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

			inst._keyEvent = true;
			if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
					case 9: $.datepicker._hideDatepicker();
							handled = false;
							break; // hide on tab out
					case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
										$.datepicker._currentClass + ")", inst.dpDiv);
							if (sel[0]) {
								$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
							}

							onSelect = $.datepicker._get(inst, "onSelect");
							if (onSelect) {
								dateStr = $.datepicker._formatDate(inst);

								// trigger custom callback
								onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
							} else {
								$.datepicker._hideDatepicker();
							}

							return false; // don't submit the form
					case 27: $.datepicker._hideDatepicker();
							break; // hide on escape
					case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
							break; // previous month/year on page up/+ ctrl
					case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
							break; // next month/year on page down/+ ctrl
					case 35: if (event.ctrlKey || event.metaKey) {
								$.datepicker._clearDate(event.target);
							}
							handled = event.ctrlKey || event.metaKey;
							break; // clear on ctrl or command +end
					case 36: if (event.ctrlKey || event.metaKey) {
								$.datepicker._gotoToday(event.target);
							}
							handled = event.ctrlKey || event.metaKey;
							break; // current on ctrl or command +home
					case 37: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
							}
							handled = event.ctrlKey || event.metaKey;
							// -1 day on ctrl or command +left
							if (event.originalEvent.altKey) {
								$.datepicker._adjustDate(event.target, (event.ctrlKey ?
									-$.datepicker._get(inst, "stepBigMonths") :
									-$.datepicker._get(inst, "stepMonths")), "M");
							}
							// next month/year on alt +left on Mac
							break;
					case 38: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, -7, "D");
							}
							handled = event.ctrlKey || event.metaKey;
							break; // -1 week on ctrl or command +up
					case 39: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
							}
							handled = event.ctrlKey || event.metaKey;
							// +1 day on ctrl or command +right
							if (event.originalEvent.altKey) {
								$.datepicker._adjustDate(event.target, (event.ctrlKey ?
									+$.datepicker._get(inst, "stepBigMonths") :
									+$.datepicker._get(inst, "stepMonths")), "M");
							}
							// next month/year on alt +right
							break;
					case 40: if (event.ctrlKey || event.metaKey) {
								$.datepicker._adjustDate(event.target, +7, "D");
							}
							handled = event.ctrlKey || event.metaKey;
							break; // +1 week on ctrl or command +down
					default: handled = false;
				}
			} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
				$.datepicker._showDatepicker(this);
			} else {
				handled = false;
			}

			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
		},

		/* Filter entered characters - based on date format. */
		_doKeyPress: function(event) {
			var chars, chr,
				inst = $.datepicker._getInst(event.target);

			if ($.datepicker._get(inst, "constrainInput")) {
				chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
				chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
				return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
			}
		},

		/* Synchronise manual entry and field/alternate field. */
		_doKeyUp: function(event) {
			var date,
				inst = $.datepicker._getInst(event.target);

			if (inst.input.val() !== inst.lastVal) {
				try {
					date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						(inst.input ? inst.input.val() : null),
						$.datepicker._getFormatConfig(inst));

					if (date) { // only if valid
						$.datepicker._setDateFromField(inst);
						$.datepicker._updateAlternate(inst);
						$.datepicker._updateDatepicker(inst);
					}
				}
				catch (err) {
				}
			}
			return true;
		},

		/* Pop-up the date picker for a given input field.
		 * If false returned from beforeShow event handler do not show.
		 * @param  input  element - the input field attached to the date picker or
		 *					event - if triggered by focus
		 */
		_showDatepicker: function(input) {
			input = input.target || input;
			if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
				input = $("input", input.parentNode)[0];
			}

			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
				return;
			}

			var inst, beforeShow, beforeShowSettings, isFixed,
				offset, showAnim, duration;

			inst = $.datepicker._getInst(input);
			if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
				$.datepicker._curInst.dpDiv.stop(true, true);
				if ( inst && $.datepicker._datepickerShowing ) {
					$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
				}
			}

			beforeShow = $.datepicker._get(inst, "beforeShow");
			beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
			if(beforeShowSettings === false){
				return;
			}
			extendRemove(inst.settings, beforeShowSettings);

			inst.lastVal = null;
			$.datepicker._lastInput = input;
			$.datepicker._setDateFromField(inst);

			if ($.datepicker._inDialog) { // hide cursor
				input.value = "";
			}
			if (!$.datepicker._pos) { // position below input
				$.datepicker._pos = $.datepicker._findPos(input);
				$.datepicker._pos[1] += input.offsetHeight; // add the height
			}

			isFixed = false;
			$(input).parents().each(function() {
				isFixed |= $(this).css("position") === "fixed";
				return !isFixed;
			});

			offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
			$.datepicker._pos = null;
			//to avoid flashes on Firefox
			inst.dpDiv.empty();
			// determine sizing offscreen
			inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
			$.datepicker._updateDatepicker(inst);
			// fix width for dynamic number of date pickers
			// and adjust position before showing
			offset = $.datepicker._checkOffset(inst, offset, isFixed);
			inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
				"static" : (isFixed ? "fixed" : "absolute")), display: "none",
				left: offset.left + "px", top: offset.top + "px"});

			if (!inst.inline) {
				showAnim = $.datepicker._get(inst, "showAnim");
				duration = $.datepicker._get(inst, "duration");
				inst.dpDiv.zIndex($(input).zIndex()+1);
				$.datepicker._datepickerShowing = true;

				if ( $.effects && $.effects.effect[ showAnim ] ) {
					inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
				} else {
					inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
				}

				if ( $.datepicker._shouldFocusInput( inst ) ) {
					inst.input.focus();
				}

				$.datepicker._curInst = inst;
			}
		},

		/* Generate the date picker content. */
		_updateDatepicker: function(inst) {
			this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
			instActive = inst; // for delegate hover events
			inst.dpDiv.empty().append(this._generateHTML(inst));
			this._attachHandlers(inst);
			inst.dpDiv.find("." + this._dayOverClass + " a").mouseover();

			var origyearshtml,
				numMonths = this._getNumberOfMonths(inst),
				cols = numMonths[1],
				width = 17;

			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
			if (cols > 1) {
				inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
			}
			inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
				"Class"]("ui-datepicker-multi");
			inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
				"Class"]("ui-datepicker-rtl");

			if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			// deffered render of the years select (to avoid flashes on Firefox)
			if( inst.yearshtml ){
				origyearshtml = inst.yearshtml;
				setTimeout(function(){
					//assure that inst.yearshtml didn't change.
					if( origyearshtml === inst.yearshtml && inst.yearshtml ){
						inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
					}
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}
		},

		// #6694 - don't focus the input if it's already focused
		// this breaks the change event in IE
		// Support: IE and jQuery <1.9
		_shouldFocusInput: function( inst ) {
			return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
		},

		/* Check positioning to remain on screen. */
		_checkOffset: function(inst, offset, isFixed) {
			var dpWidth = inst.dpDiv.outerWidth(),
				dpHeight = inst.dpDiv.outerHeight(),
				inputWidth = inst.input ? inst.input.outerWidth() : 0,
				inputHeight = inst.input ? inst.input.outerHeight() : 0,
				viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
				viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

			offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
			offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
			offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

			// now check if datepicker is showing outside window viewport - move to a better place if so.
			offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
				Math.abs(offset.left + dpWidth - viewWidth) : 0);
			offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
				Math.abs(dpHeight + inputHeight) : 0);

			return offset;
		},

		/* Find an object's position on the screen. */
		_findPos: function(obj) {
			var position,
				inst = this._getInst(obj),
				isRTL = this._get(inst, "isRTL");

			while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
				obj = obj[isRTL ? "previousSibling" : "nextSibling"];
			}

			position = $(obj).offset();
			return [position.left, position.top];
		},

		/* Hide the date picker from view.
		 * @param  input  element - the input field attached to the date picker
		 */
		_hideDatepicker: function(input) {
			var showAnim, duration, postProcess, onClose,
				inst = this._curInst;

			if (!inst || (input && inst !== $.data(input, PROP_NAME))) {
				return;
			}

			if (this._datepickerShowing) {
				showAnim = this._get(inst, "showAnim");
				duration = this._get(inst, "duration");
				postProcess = function() {
					$.datepicker._tidyDialog(inst);
				};

				// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
				if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
					inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
				} else {
					inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
						(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
				}

				if (!showAnim) {
					postProcess();
				}
				this._datepickerShowing = false;

				onClose = this._get(inst, "onClose");
				if (onClose) {
					onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
				}

				this._lastInput = null;
				if (this._inDialog) {
					this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
					if ($.blockUI) {
						$.unblockUI();
						$("body").append(this.dpDiv);
					}
				}
				this._inDialog = false;
			}
		},

		/* Tidy up after a dialog display. */
		_tidyDialog: function(inst) {
			inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
		},

		/* Close date picker if clicked elsewhere. */
		_checkExternalClick: function(event) {
			if (!$.datepicker._curInst) {
				return;
			}

			var $target = $(event.target),
				inst = $.datepicker._getInst($target[0]);

			if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
					$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
					!$target.hasClass($.datepicker.markerClassName) &&
					!$target.closest("." + $.datepicker._triggerClass).length &&
					$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
				( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
					$.datepicker._hideDatepicker();
			}
		},

		/* Adjust one of the date sub-fields. */
		_adjustDate: function(id, offset, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			if (this._isDisabledDatepicker(target[0])) {
				return;
			}
			this._adjustInstDate(inst, offset +
				(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
				period);
			this._updateDatepicker(inst);
		},

		/* Action for current link. */
		_gotoToday: function(id) {
			var date,
				target = $(id),
				inst = this._getInst(target[0]);

			if (this._get(inst, "gotoCurrent") && inst.currentDay) {
				inst.selectedDay = inst.currentDay;
				inst.drawMonth = inst.selectedMonth = inst.currentMonth;
				inst.drawYear = inst.selectedYear = inst.currentYear;
			} else {
				date = new Date();
				inst.selectedDay = date.getDate();
				inst.drawMonth = inst.selectedMonth = date.getMonth();
				inst.drawYear = inst.selectedYear = date.getFullYear();
			}
			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a new month/year. */
		_selectMonthYear: function(id, select, period) {
			var target = $(id),
				inst = this._getInst(target[0]);

			inst["selected" + (period === "M" ? "Month" : "Year")] =
			inst["draw" + (period === "M" ? "Month" : "Year")] =
				parseInt(select.options[select.selectedIndex].value,10);

			this._notifyChange(inst);
			this._adjustDate(target);
		},

		/* Action for selecting a day. */
		_selectDay: function(id, month, year, td) {
			var inst,
				target = $(id);

			if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
				return;
			}

			inst = this._getInst(target[0]);
			inst.selectedDay = inst.currentDay = $("a", td).html();
			inst.selectedMonth = inst.currentMonth = month;
			inst.selectedYear = inst.currentYear = year;
			this._selectDate(id, this._formatDate(inst,
				inst.currentDay, inst.currentMonth, inst.currentYear));
		},

		/* Erase the input field and hide the date picker. */
		_clearDate: function(id) {
			var target = $(id);
			this._selectDate(target, "");
		},

		/* Update the input field with the selected date. */
		_selectDate: function(id, dateStr) {
			var onSelect,
				target = $(id),
				inst = this._getInst(target[0]);

			dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
			if (inst.input) {
				inst.input.val(dateStr);
			}
			this._updateAlternate(inst);

			onSelect = this._get(inst, "onSelect");
			if (onSelect) {
				onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
			} else if (inst.input) {
				inst.input.trigger("change"); // fire the change event
			}

			if (inst.inline){
				this._updateDatepicker(inst);
			} else {
				this._hideDatepicker();
				this._lastInput = inst.input[0];
				if (typeof(inst.input[0]) !== "object") {
					inst.input.focus(); // restore focus
				}
				this._lastInput = null;
			}
		},

		/* Update any alternate field to synchronise with the main field. */
		_updateAlternate: function(inst) {
			var altFormat, date, dateStr,
				altField = this._get(inst, "altField");

			if (altField) { // update alternate field too
				altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
				date = this._getDate(inst);
				dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
				$(altField).each(function() { $(this).val(dateStr); });
			}
		},

		/* Set as beforeShowDay function to prevent selection of weekends.
		 * @param  date  Date - the date to customise
		 * @return [boolean, string] - is this date selectable?, what is its CSS class?
		 */
		noWeekends: function(date) {
			var day = date.getDay();
			return [(day > 0 && day < 6), ""];
		},

		/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
		 * @param  date  Date - the date to get the week for
		 * @return  number - the number of the week within the year that contains this date
		 */
		iso8601Week: function(date) {
			var time,
				checkDate = new Date(date.getTime());

			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

			time = checkDate.getTime();
			checkDate.setMonth(0); // Compare with Jan 1
			checkDate.setDate(1);
			return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
		},

		/* Parse a string value into a date object.
		 * See formatDate below for the possible formats.
		 *
		 * @param  format string - the expected format of the date
		 * @param  value string - the date in the above format
		 * @param  settings Object - attributes include:
		 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
		 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
		 *					dayNames		string[7] - names of the days from Sunday (optional)
		 *					monthNamesShort string[12] - abbreviated names of the months (optional)
		 *					monthNames		string[12] - names of the months (optional)
		 * @return  Date - the extracted date value or null if value is blank
		 */
		parseDate: function (format, value, settings) {
			if (format == null || value == null) {
				throw "Invalid arguments";
			}

			value = (typeof value === "object" ? value.toString() : value + "");
			if (value === "") {
				return null;
			}

			var iFormat, dim, extra,
				iValue = 0,
				shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
					new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				year = -1,
				month = -1,
				day = -1,
				doy = -1,
				literal = false,
				date,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Extract a number from the string value
				getNumber = function(match) {
					var isDoubled = lookAhead(match),
						size = (match === "@" ? 14 : (match === "!" ? 20 :
						(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
						digits = new RegExp("^\\d{1," + size + "}"),
						num = value.substring(iValue).match(digits);
					if (!num) {
						throw "Missing number at position " + iValue;
					}
					iValue += num[0].length;
					return parseInt(num[0], 10);
				},
				// Extract a name from the string value and convert to an index
				getName = function(match, shortNames, longNames) {
					var index = -1,
						names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
							return [ [k, v] ];
						}).sort(function (a, b) {
							return -(a[1].length - b[1].length);
						});

					$.each(names, function (i, pair) {
						var name = pair[1];
						if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
							index = pair[0];
							iValue += name.length;
							return false;
						}
					});
					if (index !== -1) {
						return index + 1;
					} else {
						throw "Unknown name at position " + iValue;
					}
				},
				// Confirm that a literal character matches the string value
				checkLiteral = function() {
					if (value.charAt(iValue) !== format.charAt(iFormat)) {
						throw "Unexpected literal at position " + iValue;
					}
					iValue++;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							day = getNumber("d");
							break;
						case "D":
							getName("D", dayNamesShort, dayNames);
							break;
						case "o":
							doy = getNumber("o");
							break;
						case "m":
							month = getNumber("m");
							break;
						case "M":
							month = getName("M", monthNamesShort, monthNames);
							break;
						case "y":
							year = getNumber("y");
							break;
						case "@":
							date = new Date(getNumber("@"));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "!":
							date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case "'":
							if (lookAhead("'")){
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}

			if (iValue < value.length){
				extra = value.substr(iValue);
				if (!/^\s+/.test(extra)) {
					throw "Extra/unparsed characters found in date: " + extra;
				}
			}

			if (year === -1) {
				year = new Date().getFullYear();
			} else if (year < 100) {
				year += new Date().getFullYear() - new Date().getFullYear() % 100 +
					(year <= shortYearCutoff ? 0 : -100);
			}

			if (doy > -1) {
				month = 1;
				day = doy;
				do {
					dim = this._getDaysInMonth(year, month - 1);
					if (day <= dim) {
						break;
					}
					month++;
					day -= dim;
				} while (true);
			}

			date = this._daylightSavingAdjust(new Date(year, month - 1, day));
			if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
				throw "Invalid date"; // E.g. 31/02/00
			}
			return date;
		},

		/* Standard date formats. */
		ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y", // RFC 822
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd", // ISO 8601

		_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
			Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

		/* Format a date object into a string value.
		 * The format can be combinations of the following:
		 * d  - day of month (no leading zero)
		 * dd - day of month (two digit)
		 * o  - day of year (no leading zeros)
		 * oo - day of year (three digit)
		 * D  - day name short
		 * DD - day name long
		 * m  - month of year (no leading zero)
		 * mm - month of year (two digit)
		 * M  - month name short
		 * MM - month name long
		 * y  - year (two digit)
		 * yy - year (four digit)
		 * @ - Unix timestamp (ms since 01/01/1970)
		 * ! - Windows ticks (100ns since 01/01/0001)
		 * "..." - literal text
		 * '' - single quote
		 *
		 * @param  format string - the desired format of the date
		 * @param  date Date - the date value to format
		 * @param  settings Object - attributes include:
		 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
		 *					dayNames		string[7] - names of the days from Sunday (optional)
		 *					monthNamesShort string[12] - abbreviated names of the months (optional)
		 *					monthNames		string[12] - names of the months (optional)
		 * @return  string - the date in the above format
		 */
		formatDate: function (format, date, settings) {
			if (!date) {
				return "";
			}

			var iFormat,
				dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
				dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
				monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
				monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				},
				// Format a number, with leading zero if necessary
				formatNumber = function(match, value, len) {
					var num = "" + value;
					if (lookAhead(match)) {
						while (num.length < len) {
							num = "0" + num;
						}
					}
					return num;
				},
				// Format a name, short or long as requested
				formatName = function(match, value, shortNames, longNames) {
					return (lookAhead(match) ? longNames[value] : shortNames[value]);
				},
				output = "",
				literal = false;

			if (date) {
				for (iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) {
						if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
							literal = false;
						} else {
							output += format.charAt(iFormat);
						}
					} else {
						switch (format.charAt(iFormat)) {
							case "d":
								output += formatNumber("d", date.getDate(), 2);
								break;
							case "D":
								output += formatName("D", date.getDay(), dayNamesShort, dayNames);
								break;
							case "o":
								output += formatNumber("o",
									Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
								break;
							case "m":
								output += formatNumber("m", date.getMonth() + 1, 2);
								break;
							case "M":
								output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
								break;
							case "y":
								output += (lookAhead("y") ? date.getFullYear() :
									(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
								break;
							case "@":
								output += date.getTime();
								break;
							case "!":
								output += date.getTime() * 10000 + this._ticksTo1970;
								break;
							case "'":
								if (lookAhead("'")) {
									output += "'";
								} else {
									literal = true;
								}
								break;
							default:
								output += format.charAt(iFormat);
						}
					}
				}
			}
			return output;
		},

		/* Extract all possible characters from the date format. */
		_possibleChars: function (format) {
			var iFormat,
				chars = "",
				literal = false,
				// Check whether a format character is doubled
				lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
					if (matches) {
						iFormat++;
					}
					return matches;
				};

			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						chars += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d": case "m": case "y": case "@":
							chars += "0123456789";
							break;
						case "D": case "M":
							return null; // Accept anything
						case "'":
							if (lookAhead("'")) {
								chars += "'";
							} else {
								literal = true;
							}
							break;
						default:
							chars += format.charAt(iFormat);
					}
				}
			}
			return chars;
		},

		/* Get a setting value, defaulting if necessary. */
		_get: function(inst, name) {
			return inst.settings[name] !== undefined ?
				inst.settings[name] : this._defaults[name];
		},

		/* Parse existing date and initialise date picker. */
		_setDateFromField: function(inst, noDefault) {
			if (inst.input.val() === inst.lastVal) {
				return;
			}

			var dateFormat = this._get(inst, "dateFormat"),
				dates = inst.lastVal = inst.input ? inst.input.val() : null,
				defaultDate = this._getDefaultDate(inst),
				date = defaultDate,
				settings = this._getFormatConfig(inst);

			try {
				date = this.parseDate(dateFormat, dates, settings) || defaultDate;
			} catch (event) {
				dates = (noDefault ? "" : dates);
			}
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			inst.currentDay = (dates ? date.getDate() : 0);
			inst.currentMonth = (dates ? date.getMonth() : 0);
			inst.currentYear = (dates ? date.getFullYear() : 0);
			this._adjustInstDate(inst);
		},

		/* Retrieve the default date shown on opening. */
		_getDefaultDate: function(inst) {
			return this._restrictMinMax(inst,
				this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
		},

		/* A date may be specified as an exact value or a relative one. */
		_determineDate: function(inst, date, defaultDate) {
			var offsetNumeric = function(offset) {
					var date = new Date();
					date.setDate(date.getDate() + offset);
					return date;
				},
				offsetString = function(offset) {
					try {
						return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
							offset, $.datepicker._getFormatConfig(inst));
					}
					catch (e) {
						// Ignore
					}

					var date = (offset.toLowerCase().match(/^c/) ?
						$.datepicker._getDate(inst) : null) || new Date(),
						year = date.getFullYear(),
						month = date.getMonth(),
						day = date.getDate(),
						pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
						matches = pattern.exec(offset);

					while (matches) {
						switch (matches[2] || "d") {
							case "d" : case "D" :
								day += parseInt(matches[1],10); break;
							case "w" : case "W" :
								day += parseInt(matches[1],10) * 7; break;
							case "m" : case "M" :
								month += parseInt(matches[1],10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
							case "y": case "Y" :
								year += parseInt(matches[1],10);
								day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
								break;
						}
						matches = pattern.exec(offset);
					}
					return new Date(year, month, day);
				},
				newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
					(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

			newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
			if (newDate) {
				newDate.setHours(0);
				newDate.setMinutes(0);
				newDate.setSeconds(0);
				newDate.setMilliseconds(0);
			}
			return this._daylightSavingAdjust(newDate);
		},

		/* Handle switch to/from daylight saving.
		 * Hours may be non-zero on daylight saving cut-over:
		 * > 12 when midnight changeover, but then cannot generate
		 * midnight datetime, so jump to 1AM, otherwise reset.
		 * @param  date  (Date) the date to check
		 * @return  (Date) the corrected date
		 */
		_daylightSavingAdjust: function(date) {
			if (!date) {
				return null;
			}
			date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
			return date;
		},

		/* Set the date(s) directly. */
		_setDate: function(inst, date, noChange) {
			var clear = !date,
				origMonth = inst.selectedMonth,
				origYear = inst.selectedYear,
				newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

			inst.selectedDay = inst.currentDay = newDate.getDate();
			inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
			inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
			if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
				this._notifyChange(inst);
			}
			this._adjustInstDate(inst);
			if (inst.input) {
				inst.input.val(clear ? "" : this._formatDate(inst));
			}
		},

		/* Retrieve the date(s) directly. */
		_getDate: function(inst) {
			var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
				this._daylightSavingAdjust(new Date(
				inst.currentYear, inst.currentMonth, inst.currentDay)));
				return startDate;
		},

		/* Attach the onxxx handlers.  These are declared statically so
		 * they work with static code transformers like Caja.
		 */
		_attachHandlers: function(inst) {
			var stepMonths = this._get(inst, "stepMonths"),
				id = "#" + inst.id.replace( /\\\\/g, "\\" );
			inst.dpDiv.find("[data-handler]").map(function () {
				var handler = {
					prev: function () {
						$.datepicker._adjustDate(id, -stepMonths, "M");
					},
					next: function () {
						$.datepicker._adjustDate(id, +stepMonths, "M");
					},
					hide: function () {
						$.datepicker._hideDatepicker();
					},
					today: function () {
						$.datepicker._gotoToday(id);
					},
					selectDay: function () {
						$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
						return false;
					},
					selectMonth: function () {
						$.datepicker._selectMonthYear(id, this, "M");
						return false;
					},
					selectYear: function () {
						$.datepicker._selectMonthYear(id, this, "Y");
						return false;
					}
				};
				$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
			});
		},

		/* Generate the HTML for the current state of the date picker. */
		_generateHTML: function(inst) {
			var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
				controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
				monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
				selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
				cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
				printDate, dRow, tbody, daySettings, otherMonth, unselectable,
				tempDate = new Date(),
				today = this._daylightSavingAdjust(
					new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
				isRTL = this._get(inst, "isRTL"),
				showButtonPanel = this._get(inst, "showButtonPanel"),
				hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
				navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
				numMonths = this._getNumberOfMonths(inst),
				showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
				stepMonths = this._get(inst, "stepMonths"),
				isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
				currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
					new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				drawMonth = inst.drawMonth - showCurrentAtPos,
				drawYear = inst.drawYear;

			if (drawMonth < 0) {
				drawMonth += 12;
				drawYear--;
			}
			if (maxDate) {
				maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
					maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
				maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
				while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
					drawMonth--;
					if (drawMonth < 0) {
						drawMonth = 11;
						drawYear--;
					}
				}
			}
			inst.drawMonth = drawMonth;
			inst.drawYear = drawYear;

			prevText = this._get(inst, "prevText");
			prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
				this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
				this._getFormatConfig(inst)));

			prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
				"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
				" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
				(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

			nextText = this._get(inst, "nextText");
			nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
				this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
				this._getFormatConfig(inst)));

			next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
				"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
				" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
				(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

			currentText = this._get(inst, "currentText");
			gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
			currentText = (!navigationAsDateFormat ? currentText :
				this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

			controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
				this._get(inst, "closeText") + "</button>" : "");

			buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
				(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
				">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

			firstDay = parseInt(this._get(inst, "firstDay"),10);
			firstDay = (isNaN(firstDay) ? 0 : firstDay);

			showWeek = this._get(inst, "showWeek");
			dayNames = this._get(inst, "dayNames");
			dayNamesMin = this._get(inst, "dayNamesMin");
			monthNames = this._get(inst, "monthNames");
			monthNamesShort = this._get(inst, "monthNamesShort");
			beforeShowDay = this._get(inst, "beforeShowDay");
			showOtherMonths = this._get(inst, "showOtherMonths");
			selectOtherMonths = this._get(inst, "selectOtherMonths");
			defaultDate = this._getDefaultDate(inst);
			html = "";
			dow;
			for (row = 0; row < numMonths[0]; row++) {
				group = "";
				this.maxRows = 4;
				for (col = 0; col < numMonths[1]; col++) {
					selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
					cornerClass = " ui-corner-all";
					calender = "";
					if (isMultiMonth) {
						calender += "<div class='ui-datepicker-group";
						if (numMonths[1] > 1) {
							switch (col) {
								case 0: calender += " ui-datepicker-group-first";
									cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
								case numMonths[1]-1: calender += " ui-datepicker-group-last";
									cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
								default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
							}
						}
						calender += "'>";
					}
					calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
						(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
						(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
						this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
						row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
						"</div><table class='ui-datepicker-calendar'><thead>" +
						"<tr>";
					thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
					for (dow = 0; dow < 7; dow++) { // days of the week
						day = (dow + firstDay) % 7;
						thead += "<th" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
							"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
					}
					calender += thead + "</tr></thead><tbody>";
					daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
					if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
						inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
					}
					leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
					curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
					numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
					this.maxRows = numRows;
					printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
					for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
						calender += "<tr>";
						tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
							this._get(inst, "calculateWeek")(printDate) + "</td>");
						for (dow = 0; dow < 7; dow++) { // create date picker days
							daySettings = (beforeShowDay ?
								beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
							otherMonth = (printDate.getMonth() !== drawMonth);
							unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
								(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
							tbody += "<td class='" +
								((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
								(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
								((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
								(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
								// or defaultDate is current printedDate and defaultDate is selectedDate
								" " + this._dayOverClass : "") + // highlight selected day
								(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
								(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
								(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
								(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
								((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
								(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
								(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
								(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
								(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
								(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
								(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
								"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
							printDate.setDate(printDate.getDate() + 1);
							printDate = this._daylightSavingAdjust(printDate);
						}
						calender += tbody + "</tr>";
					}
					drawMonth++;
					if (drawMonth > 11) {
						drawMonth = 0;
						drawYear++;
					}
					calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
								((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
					group += calender;
				}
				html += group;
			}
			html += buttonPanel;
			inst._keyEvent = false;
			return html;
		},

		/* Generate the month and year header. */
		_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
				secondary, monthNames, monthNamesShort) {

			var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
				changeMonth = this._get(inst, "changeMonth"),
				changeYear = this._get(inst, "changeYear"),
				showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
				html = "<div class='ui-datepicker-title'>",
				monthHtml = "";

			// month selection
			if (secondary || !changeMonth) {
				monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
			} else {
				inMinYear = (minDate && minDate.getFullYear() === drawYear);
				inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
				monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
				for ( month = 0; month < 12; month++) {
					if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
						monthHtml += "<option value='" + month + "'" +
							(month === drawMonth ? " selected='selected'" : "") +
							">" + monthNamesShort[month] + "</option>";
					}
				}
				monthHtml += "</select>";
			}

			if (!showMonthAfterYear) {
				html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
			}

			// year selection
			if ( !inst.yearshtml ) {
				inst.yearshtml = "";
				if (secondary || !changeYear) {
					html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
				} else {
					// determine range of years to display
					years = this._get(inst, "yearRange").split(":");
					thisYear = new Date().getFullYear();
					determineYear = function(value) {
						var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
							(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
							parseInt(value, 10)));
						return (isNaN(year) ? thisYear : year);
					};
					year = determineYear(years[0]);
					endYear = Math.max(year, determineYear(years[1] || ""));
					year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
					endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
					inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
					for (; year <= endYear; year++) {
						inst.yearshtml += "<option value='" + year + "'" +
							(year === drawYear ? " selected='selected'" : "") +
							">" + year + "</option>";
					}
					inst.yearshtml += "</select>";

					html += inst.yearshtml;
					inst.yearshtml = null;
				}
			}

			html += this._get(inst, "yearSuffix");
			if (showMonthAfterYear) {
				html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
			}
			html += "</div>"; // Close datepicker_header
			return html;
		},

		/* Adjust one of the date sub-fields. */
		_adjustInstDate: function(inst, offset, period) {
			var year = inst.drawYear + (period === "Y" ? offset : 0),
				month = inst.drawMonth + (period === "M" ? offset : 0),
				day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
				date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
			if (period === "M" || period === "Y") {
				this._notifyChange(inst);
			}
		},

		/* Ensure a date is within any min/max bounds. */
		_restrictMinMax: function(inst, date) {
			var minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				newDate = (minDate && date < minDate ? minDate : date);
			return (maxDate && newDate > maxDate ? maxDate : newDate);
		},

		/* Notify change of month/year. */
		_notifyChange: function(inst) {
			var onChange = this._get(inst, "onChangeMonthYear");
			if (onChange) {
				onChange.apply((inst.input ? inst.input[0] : null),
					[inst.selectedYear, inst.selectedMonth + 1, inst]);
			}
		},

		/* Determine the number of months to show. */
		_getNumberOfMonths: function(inst) {
			var numMonths = this._get(inst, "numberOfMonths");
			return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
		},

		/* Determine the current maximum date - ensure no time components are set. */
		_getMinMaxDate: function(inst, minMax) {
			return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
		},

		/* Find the number of days in a given month. */
		_getDaysInMonth: function(year, month) {
			return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
		},

		/* Find the day of the week of the first of a month. */
		_getFirstDayOfMonth: function(year, month) {
			return new Date(year, month, 1).getDay();
		},

		/* Determines if we should allow a "next/prev" month display change. */
		_canAdjustMonth: function(inst, offset, curYear, curMonth) {
			var numMonths = this._getNumberOfMonths(inst),
				date = this._daylightSavingAdjust(new Date(curYear,
				curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

			if (offset < 0) {
				date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
			}
			return this._isInRange(inst, date);
		},

		/* Is the given date in the accepted range? */
		_isInRange: function(inst, date) {
			var yearSplit, currentYear,
				minDate = this._getMinMaxDate(inst, "min"),
				maxDate = this._getMinMaxDate(inst, "max"),
				minYear = null,
				maxYear = null,
				years = this._get(inst, "yearRange");
				if (years){
					yearSplit = years.split(":");
					currentYear = new Date().getFullYear();
					minYear = parseInt(yearSplit[0], 10);
					maxYear = parseInt(yearSplit[1], 10);
					if ( yearSplit[0].match(/[+\-].*/) ) {
						minYear += currentYear;
					}
					if ( yearSplit[1].match(/[+\-].*/) ) {
						maxYear += currentYear;
					}
				}

			return ((!minDate || date.getTime() >= minDate.getTime()) &&
				(!maxDate || date.getTime() <= maxDate.getTime()) &&
				(!minYear || date.getFullYear() >= minYear) &&
				(!maxYear || date.getFullYear() <= maxYear));
		},

		/* Provide the configuration settings for formatting/parsing. */
		_getFormatConfig: function(inst) {
			var shortYearCutoff = this._get(inst, "shortYearCutoff");
			shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
			return {shortYearCutoff: shortYearCutoff,
				dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
				monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
		},

		/* Format the given date for display. */
		_formatDate: function(inst, day, month, year) {
			if (!day) {
				inst.currentDay = inst.selectedDay;
				inst.currentMonth = inst.selectedMonth;
				inst.currentYear = inst.selectedYear;
			}
			var date = (day ? (typeof day === "object" ? day :
				this._daylightSavingAdjust(new Date(year, month, day))) :
				this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
			return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
		}
	});

	/*
	 * Bind hover events for datepicker elements.
	 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
	 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
	 */
	function bindHover(dpDiv) {
		var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return dpDiv.delegate(selector, "mouseout", function() {
				$(this).removeClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).removeClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).removeClass("ui-datepicker-next-hover");
				}
			})
			.delegate(selector, "mouseover", function(){
				if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
					$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
					$(this).addClass("ui-state-hover");
					if (this.className.indexOf("ui-datepicker-prev") !== -1) {
						$(this).addClass("ui-datepicker-prev-hover");
					}
					if (this.className.indexOf("ui-datepicker-next") !== -1) {
						$(this).addClass("ui-datepicker-next-hover");
					}
				}
			});
	}

	/* jQuery extend now ignores nulls! */
	function extendRemove(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] == null) {
				target[name] = props[name];
			}
		}
		return target;
	}

	/* Invoke the datepicker functionality.
	   @param  options  string - a command, optionally followed by additional parameters or
						Object - settings for attaching new datepicker functionality
	   @return  jQuery object */
	$.fn.datepicker = function(options){

		/* Verify an empty collection wasn't passed - Fixes #6976 */
		if ( !this.length ) {
			return this;
		}

		/* Initialise the date picker. */
		if (!$.datepicker.initialized) {
			$(document).mousedown($.datepicker._checkExternalClick);
			$.datepicker.initialized = true;
		}

		/* Append datepicker main container to body if not exist. */
		if ($("#"+$.datepicker._mainDivId).length === 0) {
			$("body").append($.datepicker.dpDiv);
		}

		var otherArgs = Array.prototype.slice.call(arguments, 1);
		if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
			return $.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this[0]].concat(otherArgs));
		}
		if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
			return $.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this[0]].concat(otherArgs));
		}
		return this.each(function() {
			typeof options === "string" ?
				$.datepicker["_" + options + "Datepicker"].
					apply($.datepicker, [this].concat(otherArgs)) :
				$.datepicker._attachDatepicker(this, options);
		});
	};

	$.datepicker = new Datepicker(); // singleton instance
	$.datepicker.initialized = false;
	$.datepicker.uuid = new Date().getTime();
	$.datepicker.version = "1.10.3";

	})(jQuery);

	(function( $, undefined ) {

	var sizeRelatedOptions = {
			buttons: true,
			height: true,
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true,
			width: true
		},
		resizableRelatedOptions = {
			maxHeight: true,
			maxWidth: true,
			minHeight: true,
			minWidth: true
		};

	$.widget( "ui.dialog", {
		version: "1.10.3",
		options: {
			appendTo: "body",
			autoOpen: true,
			buttons: [],
			closeOnEscape: true,
			closeText: "close",
			dialogClass: "",
			draggable: true,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: false,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				// Ensure the titlebar is always visible
				using: function( pos ) {
					var topOffset = $( this ).css( pos ).offset().top;
					if ( topOffset < 0 ) {
						$( this ).css( "top", pos.top - topOffset );
					}
				}
			},
			resizable: true,
			show: null,
			title: null,
			width: 300,

			// callbacks
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},

		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			};
			this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index( this.element )
			};
			this.originalTitle = this.element.attr("title");
			this.options.title = this.options.title || this.originalTitle;

			this._createWrapper();

			this.element
				.show()
				.removeAttr("title")
				.addClass("ui-dialog-content ui-widget-content")
				.appendTo( this.uiDialog );

			this._createTitlebar();
			this._createButtonPane();

			if ( this.options.draggable && $.fn.draggable ) {
				this._makeDraggable();
			}
			if ( this.options.resizable && $.fn.resizable ) {
				this._makeResizable();
			}

			this._isOpen = false;
		},

		_init: function() {
			if ( this.options.autoOpen ) {
				this.open();
			}
		},

		_appendTo: function() {
			var element = this.options.appendTo;
			if ( element && (element.jquery || element.nodeType) ) {
				return $( element );
			}
			return this.document.find( element || "body" ).eq( 0 );
		},

		_destroy: function() {
			var next,
				originalPosition = this.originalPosition;

			this._destroyOverlay();

			this.element
				.removeUniqueId()
				.removeClass("ui-dialog-content ui-widget-content")
				.css( this.originalCss )
				// Without detaching first, the following becomes really slow
				.detach();

			this.uiDialog.stop( true, true ).remove();

			if ( this.originalTitle ) {
				this.element.attr( "title", this.originalTitle );
			}

			next = originalPosition.parent.children().eq( originalPosition.index );
			// Don't try to place the dialog next to itself (#8613)
			if ( next.length && next[0] !== this.element[0] ) {
				next.before( this.element );
			} else {
				originalPosition.parent.append( this.element );
			}
		},

		widget: function() {
			return this.uiDialog;
		},

		disable: $.noop,
		enable: $.noop,

		close: function( event ) {
			var that = this;

			if ( !this._isOpen || this._trigger( "beforeClose", event ) === false ) {
				return;
			}

			this._isOpen = false;
			this._destroyOverlay();

			if ( !this.opener.filter(":focusable").focus().length ) {
				// Hiding a focused element doesn't trigger blur in WebKit
				// so in case we have nothing to focus on, explicitly blur the active element
				// https://bugs.webkit.org/show_bug.cgi?id=47182
				$( this.document[0].activeElement ).blur();
			}

			this._hide( this.uiDialog, this.options.hide, function() {
				that._trigger( "close", event );
			});
		},

		isOpen: function() {
			return this._isOpen;
		},

		moveToTop: function() {
			this._moveToTop();
		},

		_moveToTop: function( event, silent ) {
			var moved = !!this.uiDialog.nextAll(":visible").insertBefore( this.uiDialog ).length;
			if ( moved && !silent ) {
				this._trigger( "focus", event );
			}
			return moved;
		},

		open: function() {
			var that = this;
			if ( this._isOpen ) {
				if ( this._moveToTop() ) {
					this._focusTabbable();
				}
				return;
			}

			this._isOpen = true;
			this.opener = $( this.document[0].activeElement );

			this._size();
			this._position();
			this._createOverlay();
			this._moveToTop( null, true );
			this._show( this.uiDialog, this.options.show, function() {
				that._focusTabbable();
				that._trigger("focus");
			});

			this._trigger("open");
		},

		_focusTabbable: function() {
			// Set focus to the first match:
			// 1. First element inside the dialog matching [autofocus]
			// 2. Tabbable element inside the content element
			// 3. Tabbable element inside the buttonpane
			// 4. The close button
			// 5. The dialog itself
			var hasFocus = this.element.find("[autofocus]");
			if ( !hasFocus.length ) {
				hasFocus = this.element.find(":tabbable");
			}
			if ( !hasFocus.length ) {
				hasFocus = this.uiDialogButtonPane.find(":tabbable");
			}
			if ( !hasFocus.length ) {
				hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
			}
			if ( !hasFocus.length ) {
				hasFocus = this.uiDialog;
			}
			hasFocus.eq( 0 ).focus();
		},

		_keepFocus: function( event ) {
			function checkFocus() {
				var activeElement = this.document[0].activeElement,
					isActive = this.uiDialog[0] === activeElement ||
						$.contains( this.uiDialog[0], activeElement );
				if ( !isActive ) {
					this._focusTabbable();
				}
			}
			event.preventDefault();
			checkFocus.call( this );
			// support: IE
			// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
			// so we check again later
			this._delay( checkFocus );
		},

		_createWrapper: function() {
			this.uiDialog = $("<div>")
				.addClass( "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
					this.options.dialogClass )
				.hide()
				.attr({
					// Setting tabIndex makes the div focusable
					tabIndex: -1,
					role: "dialog"
				})
				.appendTo( this._appendTo() );

			this._on( this.uiDialog, {
				keydown: function( event ) {
					if ( this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode &&
							event.keyCode === $.ui.keyCode.ESCAPE ) {
						event.preventDefault();
						this.close( event );
						return;
					}

					// prevent tabbing out of dialogs
					if ( event.keyCode !== $.ui.keyCode.TAB ) {
						return;
					}
					var tabbables = this.uiDialog.find(":tabbable"),
						first = tabbables.filter(":first"),
						last  = tabbables.filter(":last");

					if ( ( event.target === last[0] || event.target === this.uiDialog[0] ) && !event.shiftKey ) {
						first.focus( 1 );
						event.preventDefault();
					} else if ( ( event.target === first[0] || event.target === this.uiDialog[0] ) && event.shiftKey ) {
						last.focus( 1 );
						event.preventDefault();
					}
				},
				mousedown: function( event ) {
					if ( this._moveToTop( event ) ) {
						this._focusTabbable();
					}
				}
			});

			// We assume that any existing aria-describedby attribute means
			// that the dialog content is marked up properly
			// otherwise we brute force the content as the description
			if ( !this.element.find("[aria-describedby]").length ) {
				this.uiDialog.attr({
					"aria-describedby": this.element.uniqueId().attr("id")
				});
			}
		},

		_createTitlebar: function() {
			var uiDialogTitle;

			this.uiDialogTitlebar = $("<div>")
				.addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix")
				.prependTo( this.uiDialog );
			this._on( this.uiDialogTitlebar, {
				mousedown: function( event ) {
					// Don't prevent click on close button (#8838)
					// Focusing a dialog that is partially scrolled out of view
					// causes the browser to scroll it into view, preventing the click event
					if ( !$( event.target ).closest(".ui-dialog-titlebar-close") ) {
						// Dialog isn't getting focus when dragging (#8063)
						this.uiDialog.focus();
					}
				}
			});

			this.uiDialogTitlebarClose = $("<button></button>")
				.button({
					label: this.options.closeText,
					icons: {
						primary: "ui-icon-closethick"
					},
					text: false
				})
				.addClass("ui-dialog-titlebar-close")
				.appendTo( this.uiDialogTitlebar );
			this._on( this.uiDialogTitlebarClose, {
				click: function( event ) {
					event.preventDefault();
					this.close( event );
				}
			});

			uiDialogTitle = $("<span>")
				.uniqueId()
				.addClass("ui-dialog-title")
				.prependTo( this.uiDialogTitlebar );
			this._title( uiDialogTitle );

			this.uiDialog.attr({
				"aria-labelledby": uiDialogTitle.attr("id")
			});
		},

		_title: function( title ) {
			if ( !this.options.title ) {
				title.html("&#160;");
			}
			title.text( this.options.title );
		},

		_createButtonPane: function() {
			this.uiDialogButtonPane = $("<div>")
				.addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");

			this.uiButtonSet = $("<div>")
				.addClass("ui-dialog-buttonset")
				.appendTo( this.uiDialogButtonPane );

			this._createButtons();
		},

		_createButtons: function() {
			var that = this,
				buttons = this.options.buttons;

			// if we already have a button pane, remove it
			this.uiDialogButtonPane.remove();
			this.uiButtonSet.empty();

			if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
				this.uiDialog.removeClass("ui-dialog-buttons");
				return;
			}

			$.each( buttons, function( name, props ) {
				var click, buttonOptions;
				props = $.isFunction( props ) ?
					{ click: props, text: name } :
					props;
				// Default to a non-submitting button
				props = $.extend( { type: "button" }, props );
				// Change the context for the click callback to be the main element
				click = props.click;
				props.click = function() {
					click.apply( that.element[0], arguments );
				};
				buttonOptions = {
					icons: props.icons,
					text: props.showText
				};
				delete props.icons;
				delete props.showText;
				$( "<button></button>", props )
					.button( buttonOptions )
					.appendTo( that.uiButtonSet );
			});
			this.uiDialog.addClass("ui-dialog-buttons");
			this.uiDialogButtonPane.appendTo( this.uiDialog );
		},

		_makeDraggable: function() {
			var that = this,
				options = this.options;

			function filteredUi( ui ) {
				return {
					position: ui.position,
					offset: ui.offset
				};
			}

			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function( event, ui ) {
					$( this ).addClass("ui-dialog-dragging");
					that._blockFrames();
					that._trigger( "dragStart", event, filteredUi( ui ) );
				},
				drag: function( event, ui ) {
					that._trigger( "drag", event, filteredUi( ui ) );
				},
				stop: function( event, ui ) {
					options.position = [
						ui.position.left - that.document.scrollLeft(),
						ui.position.top - that.document.scrollTop()
					];
					$( this ).removeClass("ui-dialog-dragging");
					that._unblockFrames();
					that._trigger( "dragStop", event, filteredUi( ui ) );
				}
			});
		},

		_makeResizable: function() {
			var that = this,
				options = this.options,
				handles = options.resizable,
				// .ui-resizable has position: relative defined in the stylesheet
				// but dialogs have to use absolute or fixed positioning
				position = this.uiDialog.css("position"),
				resizeHandles = typeof handles === "string" ?
					handles	:
					"n,e,s,w,se,sw,ne,nw";

			function filteredUi( ui ) {
				return {
					originalPosition: ui.originalPosition,
					originalSize: ui.originalSize,
					position: ui.position,
					size: ui.size
				};
			}

			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: options.maxWidth,
				maxHeight: options.maxHeight,
				minWidth: options.minWidth,
				minHeight: this._minHeight(),
				handles: resizeHandles,
				start: function( event, ui ) {
					$( this ).addClass("ui-dialog-resizing");
					that._blockFrames();
					that._trigger( "resizeStart", event, filteredUi( ui ) );
				},
				resize: function( event, ui ) {
					that._trigger( "resize", event, filteredUi( ui ) );
				},
				stop: function( event, ui ) {
					options.height = $( this ).height();
					options.width = $( this ).width();
					$( this ).removeClass("ui-dialog-resizing");
					that._unblockFrames();
					that._trigger( "resizeStop", event, filteredUi( ui ) );
				}
			})
			.css( "position", position );
		},

		_minHeight: function() {
			var options = this.options;

			return options.height === "auto" ?
				options.minHeight :
				Math.min( options.minHeight, options.height );
		},

		_position: function() {
			// Need to show the dialog to get the actual offset in the position plugin
			var isVisible = this.uiDialog.is(":visible");
			if ( !isVisible ) {
				this.uiDialog.show();
			}
			this.uiDialog.position( this.options.position );
			if ( !isVisible ) {
				this.uiDialog.hide();
			}
		},

		_setOptions: function( options ) {
			var that = this,
				resize = false,
				resizableOptions = {};

			$.each( options, function( key, value ) {
				that._setOption( key, value );

				if ( key in sizeRelatedOptions ) {
					resize = true;
				}
				if ( key in resizableRelatedOptions ) {
					resizableOptions[ key ] = value;
				}
			});

			if ( resize ) {
				this._size();
				this._position();
			}
			if ( this.uiDialog.is(":data(ui-resizable)") ) {
				this.uiDialog.resizable( "option", resizableOptions );
			}
		},

		_setOption: function( key, value ) {
			/*jshint maxcomplexity:15*/
			var isDraggable, isResizable,
				uiDialog = this.uiDialog;

			if ( key === "dialogClass" ) {
				uiDialog
					.removeClass( this.options.dialogClass )
					.addClass( value );
			}

			if ( key === "disabled" ) {
				return;
			}

			this._super( key, value );

			if ( key === "appendTo" ) {
				this.uiDialog.appendTo( this._appendTo() );
			}

			if ( key === "buttons" ) {
				this._createButtons();
			}

			if ( key === "closeText" ) {
				this.uiDialogTitlebarClose.button({
					// Ensure that we always pass a string
					label: "" + value
				});
			}

			if ( key === "draggable" ) {
				isDraggable = uiDialog.is(":data(ui-draggable)");
				if ( isDraggable && !value ) {
					uiDialog.draggable("destroy");
				}

				if ( !isDraggable && value ) {
					this._makeDraggable();
				}
			}

			if ( key === "position" ) {
				this._position();
			}

			if ( key === "resizable" ) {
				// currently resizable, becoming non-resizable
				isResizable = uiDialog.is(":data(ui-resizable)");
				if ( isResizable && !value ) {
					uiDialog.resizable("destroy");
				}

				// currently resizable, changing handles
				if ( isResizable && typeof value === "string" ) {
					uiDialog.resizable( "option", "handles", value );
				}

				// currently non-resizable, becoming resizable
				if ( !isResizable && value !== false ) {
					this._makeResizable();
				}
			}

			if ( key === "title" ) {
				this._title( this.uiDialogTitlebar.find(".ui-dialog-title") );
			}
		},

		_size: function() {
			// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
			// divs will both have width and height set, so we need to reset them
			var nonContentHeight, minContentHeight, maxContentHeight,
				options = this.options;

			// Reset content sizing
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			});

			if ( options.minWidth > options.width ) {
				options.width = options.minWidth;
			}

			// reset wrapper sizing
			// determine the height of all the non-content elements
			nonContentHeight = this.uiDialog.css({
					height: "auto",
					width: options.width
				})
				.outerHeight();
			minContentHeight = Math.max( 0, options.minHeight - nonContentHeight );
			maxContentHeight = typeof options.maxHeight === "number" ?
				Math.max( 0, options.maxHeight - nonContentHeight ) :
				"none";

			if ( options.height === "auto" ) {
				this.element.css({
					minHeight: minContentHeight,
					maxHeight: maxContentHeight,
					height: "auto"
				});
			} else {
				this.element.height( Math.max( 0, options.height - nonContentHeight ) );
			}

			if (this.uiDialog.is(":data(ui-resizable)") ) {
				this.uiDialog.resizable( "option", "minHeight", this._minHeight() );
			}
		},

		_blockFrames: function() {
			this.iframeBlocks = this.document.find( "iframe" ).map(function() {
				var iframe = $( this );

				return $( "<div>" )
					.css({
						position: "absolute",
						width: iframe.outerWidth(),
						height: iframe.outerHeight()
					})
					.appendTo( iframe.parent() )
					.offset( iframe.offset() )[0];
			});
		},

		_unblockFrames: function() {
			if ( this.iframeBlocks ) {
				this.iframeBlocks.remove();
				delete this.iframeBlocks;
			}
		},

		_allowInteraction: function( event ) {
			if ( $( event.target ).closest(".ui-dialog").length ) {
				return true;
			}

			// TODO: Remove hack when datepicker implements
			// the .ui-front logic (#8989)
			return !!$( event.target ).closest(".ui-datepicker").length;
		},

		_createOverlay: function() {
			if ( !this.options.modal ) {
				return;
			}

			var that = this,
				widgetFullName = this.widgetFullName;
			if ( !$.ui.dialog.overlayInstances ) {
				// Prevent use of anchors and inputs.
				// We use a delay in case the overlay is created from an
				// event that we're going to be cancelling. (#2804)
				this._delay(function() {
					// Handle .dialog().dialog("close") (#4065)
					if ( $.ui.dialog.overlayInstances ) {
						this.document.bind( "focusin.dialog", function( event ) {
							if ( !that._allowInteraction( event ) ) {
								event.preventDefault();
								$(".ui-dialog:visible:last .ui-dialog-content")
									.data( widgetFullName )._focusTabbable();
							}
						});
					}
				});
			}

			this.overlay = $("<div>")
				.addClass("ui-widget-overlay ui-front")
				.appendTo( this._appendTo() );
			this._on( this.overlay, {
				mousedown: "_keepFocus"
			});
			$.ui.dialog.overlayInstances++;
		},

		_destroyOverlay: function() {
			if ( !this.options.modal ) {
				return;
			}

			if ( this.overlay ) {
				$.ui.dialog.overlayInstances--;

				if ( !$.ui.dialog.overlayInstances ) {
					this.document.unbind( "focusin.dialog" );
				}
				this.overlay.remove();
				this.overlay = null;
			}
		}
	});

	$.ui.dialog.overlayInstances = 0;

	// DEPRECATED
	if ( $.uiBackCompat !== false ) {
		// position option with array notation
		// just override with old implementation
		$.widget( "ui.dialog", $.ui.dialog, {
			_position: function() {
				var position = this.options.position,
					myAt = [],
					offset = [ 0, 0 ],
					isVisible;

				if ( position ) {
					if ( typeof position === "string" || (typeof position === "object" && "0" in position ) ) {
						myAt = position.split ? position.split(" ") : [ position[0], position[1] ];
						if ( myAt.length === 1 ) {
							myAt[1] = myAt[0];
						}

						$.each( [ "left", "top" ], function( i, offsetPosition ) {
							if ( +myAt[ i ] === myAt[ i ] ) {
								offset[ i ] = myAt[ i ];
								myAt[ i ] = offsetPosition;
							}
						});

						position = {
							my: myAt[0] + (offset[0] < 0 ? offset[0] : "+" + offset[0]) + " " +
								myAt[1] + (offset[1] < 0 ? offset[1] : "+" + offset[1]),
							at: myAt.join(" ")
						};
					}

					position = $.extend( {}, $.ui.dialog.prototype.options.position, position );
				} else {
					position = $.ui.dialog.prototype.options.position;
				}

				// need to show the dialog to get the actual offset in the position plugin
				isVisible = this.uiDialog.is(":visible");
				if ( !isVisible ) {
					this.uiDialog.show();
				}
				this.uiDialog.position( position );
				if ( !isVisible ) {
					this.uiDialog.hide();
				}
			}
		});
	}

	}( jQuery ) );

	(function( $, undefined ) {

	var rvertical = /up|down|vertical/,
		rpositivemotion = /up|left|vertical|horizontal/;

	$.effects.effect.blind = function( o, done ) {
		// Create element
		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
			mode = $.effects.setMode( el, o.mode || "hide" ),
			direction = o.direction || "up",
			vertical = rvertical.test( direction ),
			ref = vertical ? "height" : "width",
			ref2 = vertical ? "top" : "left",
			motion = rpositivemotion.test( direction ),
			animation = {},
			show = mode === "show",
			wrapper, distance, margin;

		// if already wrapped, the wrapper's properties are my property. #6245
		if ( el.parent().is( ".ui-effects-wrapper" ) ) {
			$.effects.save( el.parent(), props );
		} else {
			$.effects.save( el, props );
		}
		el.show();
		wrapper = $.effects.createWrapper( el ).css({
			overflow: "hidden"
		});

		distance = wrapper[ ref ]();
		margin = parseFloat( wrapper.css( ref2 ) ) || 0;

		animation[ ref ] = show ? distance : 0;
		if ( !motion ) {
			el
				.css( vertical ? "bottom" : "right", 0 )
				.css( vertical ? "top" : "left", "auto" )
				.css({ position: "absolute" });

			animation[ ref2 ] = show ? margin : distance + margin;
		}

		// start at 0 if we are showing
		if ( show ) {
			wrapper.css( ref, 0 );
			if ( ! motion ) {
				wrapper.css( ref2, margin + distance );
			}
		}

		// Animate
		wrapper.animate( animation, {
			duration: o.duration,
			easing: o.easing,
			queue: false,
			complete: function() {
				if ( mode === "hide" ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			}
		});

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.bounce = function( o, done ) {
		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "height", "width" ],

			// defaults:
			mode = $.effects.setMode( el, o.mode || "effect" ),
			hide = mode === "hide",
			show = mode === "show",
			direction = o.direction || "up",
			distance = o.distance,
			times = o.times || 5,

			// number of internal animations
			anims = times * 2 + ( show || hide ? 1 : 0 ),
			speed = o.duration / anims,
			easing = o.easing,

			// utility:
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			motion = ( direction === "up" || direction === "left" ),
			i,
			upAnim,
			downAnim,

			// we will need to re-assemble the queue to stack our animations in place
			queue = el.queue(),
			queuelen = queue.length;

		// Avoid touching opacity to prevent clearType and PNG issues in IE
		if ( show || hide ) {
			props.push( "opacity" );
		}

		$.effects.save( el, props );
		el.show();
		$.effects.createWrapper( el ); // Create Wrapper

		// default distance for the BIGGEST bounce is the outer Distance / 3
		if ( !distance ) {
			distance = el[ ref === "top" ? "outerHeight" : "outerWidth" ]() / 3;
		}

		if ( show ) {
			downAnim = { opacity: 1 };
			downAnim[ ref ] = 0;

			// if we are showing, force opacity 0 and set the initial position
			// then do the "first" animation
			el.css( "opacity", 0 )
				.css( ref, motion ? -distance * 2 : distance * 2 )
				.animate( downAnim, speed, easing );
		}

		// start at the smallest distance if we are hiding
		if ( hide ) {
			distance = distance / Math.pow( 2, times - 1 );
		}

		downAnim = {};
		downAnim[ ref ] = 0;
		// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
		for ( i = 0; i < times; i++ ) {
			upAnim = {};
			upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

			el.animate( upAnim, speed, easing )
				.animate( downAnim, speed, easing );

			distance = hide ? distance * 2 : distance / 2;
		}

		// Last Bounce when Hiding
		if ( hide ) {
			upAnim = { opacity: 0 };
			upAnim[ ref ] = ( motion ? "-=" : "+=" ) + distance;

			el.animate( upAnim, speed, easing );
		}

		el.queue(function() {
			if ( hide ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		});

		// inject all the animations we just queued to be first in line (after "inprogress")
		if ( queuelen > 1) {
			queue.splice.apply( queue,
				[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
		}
		el.dequeue();

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.clip = function( o, done ) {
		// Create element
		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
			mode = $.effects.setMode( el, o.mode || "hide" ),
			show = mode === "show",
			direction = o.direction || "vertical",
			vert = direction === "vertical",
			size = vert ? "height" : "width",
			position = vert ? "top" : "left",
			animation = {},
			wrapper, animate, distance;

		// Save & Show
		$.effects.save( el, props );
		el.show();

		// Create Wrapper
		wrapper = $.effects.createWrapper( el ).css({
			overflow: "hidden"
		});
		animate = ( el[0].tagName === "IMG" ) ? wrapper : el;
		distance = animate[ size ]();

		// Shift
		if ( show ) {
			animate.css( size, 0 );
			animate.css( position, distance / 2 );
		}

		// Create Animation Object:
		animation[ size ] = show ? distance : 0;
		animation[ position ] = show ? 0 : distance / 2;

		// Animate
		animate.animate( animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( !show ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			}
		});

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.drop = function( o, done ) {

		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ],
			mode = $.effects.setMode( el, o.mode || "hide" ),
			show = mode === "show",
			direction = o.direction || "left",
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			motion = ( direction === "up" || direction === "left" ) ? "pos" : "neg",
			animation = {
				opacity: show ? 1 : 0
			},
			distance;

		// Adjust
		$.effects.save( el, props );
		el.show();
		$.effects.createWrapper( el );

		distance = o.distance || el[ ref === "top" ? "outerHeight": "outerWidth" ]( true ) / 2;

		if ( show ) {
			el
				.css( "opacity", 0 )
				.css( ref, motion === "pos" ? -distance : distance );
		}

		// Animation
		animation[ ref ] = ( show ?
			( motion === "pos" ? "+=" : "-=" ) :
			( motion === "pos" ? "-=" : "+=" ) ) +
			distance;

		// Animate
		el.animate( animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( mode === "hide" ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			}
		});
	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.explode = function( o, done ) {

		var rows = o.pieces ? Math.round( Math.sqrt( o.pieces ) ) : 3,
			cells = rows,
			el = $( this ),
			mode = $.effects.setMode( el, o.mode || "hide" ),
			show = mode === "show",

			// show and then visibility:hidden the element before calculating offset
			offset = el.show().css( "visibility", "hidden" ).offset(),

			// width and height of a piece
			width = Math.ceil( el.outerWidth() / cells ),
			height = Math.ceil( el.outerHeight() / rows ),
			pieces = [],

			// loop
			i, j, left, top, mx, my;

		// children animate complete:
		function childComplete() {
			pieces.push( this );
			if ( pieces.length === rows * cells ) {
				animComplete();
			}
		}

		// clone the element for each row and cell.
		for( i = 0; i < rows ; i++ ) { // ===>
			top = offset.top + i * height;
			my = i - ( rows - 1 ) / 2 ;

			for( j = 0; j < cells ; j++ ) { // |||
				left = offset.left + j * width;
				mx = j - ( cells - 1 ) / 2 ;

				// Create a clone of the now hidden main element that will be absolute positioned
				// within a wrapper div off the -left and -top equal to size of our pieces
				el
					.clone()
					.appendTo( "body" )
					.wrap( "<div></div>" )
					.css({
						position: "absolute",
						visibility: "visible",
						left: -j * width,
						top: -i * height
					})

				// select the wrapper - make it overflow: hidden and absolute positioned based on
				// where the original was located +left and +top equal to the size of pieces
					.parent()
					.addClass( "ui-effects-explode" )
					.css({
						position: "absolute",
						overflow: "hidden",
						width: width,
						height: height,
						left: left + ( show ? mx * width : 0 ),
						top: top + ( show ? my * height : 0 ),
						opacity: show ? 0 : 1
					}).animate({
						left: left + ( show ? 0 : mx * width ),
						top: top + ( show ? 0 : my * height ),
						opacity: show ? 1 : 0
					}, o.duration || 500, o.easing, childComplete );
			}
		}

		function animComplete() {
			el.css({
				visibility: "visible"
			});
			$( pieces ).remove();
			if ( !show ) {
				el.hide();
			}
			done();
		}
	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.fade = function( o, done ) {
		var el = $( this ),
			mode = $.effects.setMode( el, o.mode || "toggle" );

		el.animate({
			opacity: mode
		}, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: done
		});
	};

	})( jQuery );

	(function( $, undefined ) {

	$.effects.effect.fold = function( o, done ) {

		// Create element
		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
			mode = $.effects.setMode( el, o.mode || "hide" ),
			show = mode === "show",
			hide = mode === "hide",
			size = o.size || 15,
			percent = /([0-9]+)%/.exec( size ),
			horizFirst = !!o.horizFirst,
			widthFirst = show !== horizFirst,
			ref = widthFirst ? [ "width", "height" ] : [ "height", "width" ],
			duration = o.duration / 2,
			wrapper, distance,
			animation1 = {},
			animation2 = {};

		$.effects.save( el, props );
		el.show();

		// Create Wrapper
		wrapper = $.effects.createWrapper( el ).css({
			overflow: "hidden"
		});
		distance = widthFirst ?
			[ wrapper.width(), wrapper.height() ] :
			[ wrapper.height(), wrapper.width() ];

		if ( percent ) {
			size = parseInt( percent[ 1 ], 10 ) / 100 * distance[ hide ? 0 : 1 ];
		}
		if ( show ) {
			wrapper.css( horizFirst ? {
				height: 0,
				width: size
			} : {
				height: size,
				width: 0
			});
		}

		// Animation
		animation1[ ref[ 0 ] ] = show ? distance[ 0 ] : size;
		animation2[ ref[ 1 ] ] = show ? distance[ 1 ] : 0;

		// Animate
		wrapper
			.animate( animation1, duration, o.easing )
			.animate( animation2, duration, o.easing, function() {
				if ( hide ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			});

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.highlight = function( o, done ) {
		var elem = $( this ),
			props = [ "backgroundImage", "backgroundColor", "opacity" ],
			mode = $.effects.setMode( elem, o.mode || "show" ),
			animation = {
				backgroundColor: elem.css( "backgroundColor" )
			};

		if (mode === "hide") {
			animation.opacity = 0;
		}

		$.effects.save( elem, props );

		elem
			.show()
			.css({
				backgroundImage: "none",
				backgroundColor: o.color || "#ffff99"
			})
			.animate( animation, {
				queue: false,
				duration: o.duration,
				easing: o.easing,
				complete: function() {
					if ( mode === "hide" ) {
						elem.hide();
					}
					$.effects.restore( elem, props );
					done();
				}
			});
	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.pulsate = function( o, done ) {
		var elem = $( this ),
			mode = $.effects.setMode( elem, o.mode || "show" ),
			show = mode === "show",
			hide = mode === "hide",
			showhide = ( show || mode === "hide" ),

			// showing or hiding leaves of the "last" animation
			anims = ( ( o.times || 5 ) * 2 ) + ( showhide ? 1 : 0 ),
			duration = o.duration / anims,
			animateTo = 0,
			queue = elem.queue(),
			queuelen = queue.length,
			i;

		if ( show || !elem.is(":visible")) {
			elem.css( "opacity", 0 ).show();
			animateTo = 1;
		}

		// anims - 1 opacity "toggles"
		for ( i = 1; i < anims; i++ ) {
			elem.animate({
				opacity: animateTo
			}, duration, o.easing );
			animateTo = 1 - animateTo;
		}

		elem.animate({
			opacity: animateTo
		}, duration, o.easing);

		elem.queue(function() {
			if ( hide ) {
				elem.hide();
			}
			done();
		});

		// We just queued up "anims" animations, we need to put them next in the queue
		if ( queuelen > 1 ) {
			queue.splice.apply( queue,
				[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
		}
		elem.dequeue();
	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.puff = function( o, done ) {
		var elem = $( this ),
			mode = $.effects.setMode( elem, o.mode || "hide" ),
			hide = mode === "hide",
			percent = parseInt( o.percent, 10 ) || 150,
			factor = percent / 100,
			original = {
				height: elem.height(),
				width: elem.width(),
				outerHeight: elem.outerHeight(),
				outerWidth: elem.outerWidth()
			};

		$.extend( o, {
			effect: "scale",
			queue: false,
			fade: true,
			mode: mode,
			complete: done,
			percent: hide ? percent : 100,
			from: hide ?
				original :
				{
					height: original.height * factor,
					width: original.width * factor,
					outerHeight: original.outerHeight * factor,
					outerWidth: original.outerWidth * factor
				}
		});

		elem.effect( o );
	};

	$.effects.effect.scale = function( o, done ) {

		// Create element
		var el = $( this ),
			options = $.extend( true, {}, o ),
			mode = $.effects.setMode( el, o.mode || "effect" ),
			percent = parseInt( o.percent, 10 ) ||
				( parseInt( o.percent, 10 ) === 0 ? 0 : ( mode === "hide" ? 0 : 100 ) ),
			direction = o.direction || "both",
			origin = o.origin,
			original = {
				height: el.height(),
				width: el.width(),
				outerHeight: el.outerHeight(),
				outerWidth: el.outerWidth()
			},
			factor = {
				y: direction !== "horizontal" ? (percent / 100) : 1,
				x: direction !== "vertical" ? (percent / 100) : 1
			};

		// We are going to pass this effect to the size effect:
		options.effect = "size";
		options.queue = false;
		options.complete = done;

		// Set default origin and restore for show/hide
		if ( mode !== "effect" ) {
			options.origin = origin || ["middle","center"];
			options.restore = true;
		}

		options.from = o.from || ( mode === "show" ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : original );
		options.to = {
			height: original.height * factor.y,
			width: original.width * factor.x,
			outerHeight: original.outerHeight * factor.y,
			outerWidth: original.outerWidth * factor.x
		};

		// Fade option to support puff
		if ( options.fade ) {
			if ( mode === "show" ) {
				options.from.opacity = 0;
				options.to.opacity = 1;
			}
			if ( mode === "hide" ) {
				options.from.opacity = 1;
				options.to.opacity = 0;
			}
		}

		// Animate
		el.effect( options );

	};

	$.effects.effect.size = function( o, done ) {

		// Create element
		var original, baseline, factor,
			el = $( this ),
			props0 = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ],

			// Always restore
			props1 = [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ],

			// Copy for children
			props2 = [ "width", "height", "overflow" ],
			cProps = [ "fontSize" ],
			vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
			hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],

			// Set options
			mode = $.effects.setMode( el, o.mode || "effect" ),
			restore = o.restore || mode !== "effect",
			scale = o.scale || "both",
			origin = o.origin || [ "middle", "center" ],
			position = el.css( "position" ),
			props = restore ? props0 : props1,
			zero = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};

		if ( mode === "show" ) {
			el.show();
		}
		original = {
			height: el.height(),
			width: el.width(),
			outerHeight: el.outerHeight(),
			outerWidth: el.outerWidth()
		};

		if ( o.mode === "toggle" && mode === "show" ) {
			el.from = o.to || zero;
			el.to = o.from || original;
		} else {
			el.from = o.from || ( mode === "show" ? zero : original );
			el.to = o.to || ( mode === "hide" ? zero : original );
		}

		// Set scaling factor
		factor = {
			from: {
				y: el.from.height / original.height,
				x: el.from.width / original.width
			},
			to: {
				y: el.to.height / original.height,
				x: el.to.width / original.width
			}
		};

		// Scale the css box
		if ( scale === "box" || scale === "both" ) {

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				props = props.concat( vProps );
				el.from = $.effects.setTransition( el, vProps, factor.from.y, el.from );
				el.to = $.effects.setTransition( el, vProps, factor.to.y, el.to );
			}

			// Horizontal props scaling
			if ( factor.from.x !== factor.to.x ) {
				props = props.concat( hProps );
				el.from = $.effects.setTransition( el, hProps, factor.from.x, el.from );
				el.to = $.effects.setTransition( el, hProps, factor.to.x, el.to );
			}
		}

		// Scale the content
		if ( scale === "content" || scale === "both" ) {

			// Vertical props scaling
			if ( factor.from.y !== factor.to.y ) {
				props = props.concat( cProps ).concat( props2 );
				el.from = $.effects.setTransition( el, cProps, factor.from.y, el.from );
				el.to = $.effects.setTransition( el, cProps, factor.to.y, el.to );
			}
		}

		$.effects.save( el, props );
		el.show();
		$.effects.createWrapper( el );
		el.css( "overflow", "hidden" ).css( el.from );

		// Adjust
		if (origin) { // Calculate baseline shifts
			baseline = $.effects.getBaseline( origin, original );
			el.from.top = ( original.outerHeight - el.outerHeight() ) * baseline.y;
			el.from.left = ( original.outerWidth - el.outerWidth() ) * baseline.x;
			el.to.top = ( original.outerHeight - el.to.outerHeight ) * baseline.y;
			el.to.left = ( original.outerWidth - el.to.outerWidth ) * baseline.x;
		}
		el.css( el.from ); // set top & left

		// Animate
		if ( scale === "content" || scale === "both" ) { // Scale the children

			// Add margins/font-size
			vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
			hProps = hProps.concat([ "marginLeft", "marginRight" ]);
			props2 = props0.concat(vProps).concat(hProps);

			el.find( "*[width]" ).each( function(){
				var child = $( this ),
					c_original = {
						height: child.height(),
						width: child.width(),
						outerHeight: child.outerHeight(),
						outerWidth: child.outerWidth()
					};
				if (restore) {
					$.effects.save(child, props2);
				}

				child.from = {
					height: c_original.height * factor.from.y,
					width: c_original.width * factor.from.x,
					outerHeight: c_original.outerHeight * factor.from.y,
					outerWidth: c_original.outerWidth * factor.from.x
				};
				child.to = {
					height: c_original.height * factor.to.y,
					width: c_original.width * factor.to.x,
					outerHeight: c_original.height * factor.to.y,
					outerWidth: c_original.width * factor.to.x
				};

				// Vertical props scaling
				if ( factor.from.y !== factor.to.y ) {
					child.from = $.effects.setTransition( child, vProps, factor.from.y, child.from );
					child.to = $.effects.setTransition( child, vProps, factor.to.y, child.to );
				}

				// Horizontal props scaling
				if ( factor.from.x !== factor.to.x ) {
					child.from = $.effects.setTransition( child, hProps, factor.from.x, child.from );
					child.to = $.effects.setTransition( child, hProps, factor.to.x, child.to );
				}

				// Animate children
				child.css( child.from );
				child.animate( child.to, o.duration, o.easing, function() {

					// Restore children
					if ( restore ) {
						$.effects.restore( child, props2 );
					}
				});
			});
		}

		// Animate
		el.animate( el.to, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( el.to.opacity === 0 ) {
					el.css( "opacity", el.from.opacity );
				}
				if( mode === "hide" ) {
					el.hide();
				}
				$.effects.restore( el, props );
				if ( !restore ) {

					// we need to calculate our new positioning based on the scaling
					if ( position === "static" ) {
						el.css({
							position: "relative",
							top: el.to.top,
							left: el.to.left
						});
					} else {
						$.each([ "top", "left" ], function( idx, pos ) {
							el.css( pos, function( _, str ) {
								var val = parseInt( str, 10 ),
									toRef = idx ? el.to.left : el.to.top;

								// if original was "auto", recalculate the new value from wrapper
								if ( str === "auto" ) {
									return toRef + "px";
								}

								return val + toRef + "px";
							});
						});
					}
				}

				$.effects.removeWrapper( el );
				done();
			}
		});

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.shake = function( o, done ) {

		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
			mode = $.effects.setMode( el, o.mode || "effect" ),
			direction = o.direction || "left",
			distance = o.distance || 20,
			times = o.times || 3,
			anims = times * 2 + 1,
			speed = Math.round(o.duration/anims),
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			positiveMotion = (direction === "up" || direction === "left"),
			animation = {},
			animation1 = {},
			animation2 = {},
			i,

			// we will need to re-assemble the queue to stack our animations in place
			queue = el.queue(),
			queuelen = queue.length;

		$.effects.save( el, props );
		el.show();
		$.effects.createWrapper( el );

		// Animation
		animation[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance;
		animation1[ ref ] = ( positiveMotion ? "+=" : "-=" ) + distance * 2;
		animation2[ ref ] = ( positiveMotion ? "-=" : "+=" ) + distance * 2;

		// Animate
		el.animate( animation, speed, o.easing );

		// Shakes
		for ( i = 1; i < times; i++ ) {
			el.animate( animation1, speed, o.easing ).animate( animation2, speed, o.easing );
		}
		el
			.animate( animation1, speed, o.easing )
			.animate( animation, speed / 2, o.easing )
			.queue(function() {
				if ( mode === "hide" ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			});

		// inject all the animations we just queued to be first in line (after "inprogress")
		if ( queuelen > 1) {
			queue.splice.apply( queue,
				[ 1, 0 ].concat( queue.splice( queuelen, anims + 1 ) ) );
		}
		el.dequeue();

	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.slide = function( o, done ) {

		// Create element
		var el = $( this ),
			props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
			mode = $.effects.setMode( el, o.mode || "show" ),
			show = mode === "show",
			direction = o.direction || "left",
			ref = (direction === "up" || direction === "down") ? "top" : "left",
			positiveMotion = (direction === "up" || direction === "left"),
			distance,
			animation = {};

		// Adjust
		$.effects.save( el, props );
		el.show();
		distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

		$.effects.createWrapper( el ).css({
			overflow: "hidden"
		});

		if ( show ) {
			el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
		}

		// Animation
		animation[ ref ] = ( show ?
			( positiveMotion ? "+=" : "-=") :
			( positiveMotion ? "-=" : "+=")) +
			distance;

		// Animate
		el.animate( animation, {
			queue: false,
			duration: o.duration,
			easing: o.easing,
			complete: function() {
				if ( mode === "hide" ) {
					el.hide();
				}
				$.effects.restore( el, props );
				$.effects.removeWrapper( el );
				done();
			}
		});
	};

	})(jQuery);

	(function( $, undefined ) {

	$.effects.effect.transfer = function( o, done ) {
		var elem = $( this ),
			target = $( o.to ),
			targetFixed = target.css( "position" ) === "fixed",
			body = $("body"),
			fixTop = targetFixed ? body.scrollTop() : 0,
			fixLeft = targetFixed ? body.scrollLeft() : 0,
			endPosition = target.offset(),
			animation = {
				top: endPosition.top - fixTop ,
				left: endPosition.left - fixLeft ,
				height: target.innerHeight(),
				width: target.innerWidth()
			},
			startPosition = elem.offset(),
			transfer = $( "<div class='ui-effects-transfer'></div>" )
				.appendTo( document.body )
				.addClass( o.className )
				.css({
					top: startPosition.top - fixTop ,
					left: startPosition.left - fixLeft ,
					height: elem.innerHeight(),
					width: elem.innerWidth(),
					position: targetFixed ? "fixed" : "absolute"
				})
				.animate( animation, o.duration, o.easing, function() {
					transfer.remove();
					done();
				});
	};

	})(jQuery);

	(function( $, undefined ) {

	$.widget( "ui.menu", {
		version: "1.10.3",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",

			// callbacks
			blur: null,
			focus: null,
			select: null
		},

		_create: function() {
			this.activeMenu = this.element;
			// flag used to prevent firing of the click handler
			// as the event bubbles up through nested menus
			this.mouseHandled = false;
			this.element
				.uniqueId()
				.addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
				.toggleClass( "ui-menu-icons", !!this.element.find( ".ui-icon" ).length )
				.attr({
					role: this.options.role,
					tabIndex: 0
				})
				// need to catch all clicks on disabled menu
				// not possible through _on
				.bind( "click" + this.eventNamespace, $.proxy(function( event ) {
					if ( this.options.disabled ) {
						event.preventDefault();
					}
				}, this ));

			if ( this.options.disabled ) {
				this.element
					.addClass( "ui-state-disabled" )
					.attr( "aria-disabled", "true" );
			}

			this._on({
				// Prevent focus from sticking to links inside menu after clicking
				// them (focus should always stay on UL during navigation).
				"mousedown .ui-menu-item > a": function( event ) {
					event.preventDefault();
				},
				"click .ui-state-disabled > a": function( event ) {
					event.preventDefault();
				},
				"click .ui-menu-item:has(a)": function( event ) {
					var target = $( event.target ).closest( ".ui-menu-item" );
					if ( !this.mouseHandled && target.not( ".ui-state-disabled" ).length ) {
						this.mouseHandled = true;

						this.select( event );
						// Open submenu on click
						if ( target.has( ".ui-menu" ).length ) {
							this.expand( event );
						} else if ( !this.element.is( ":focus" ) ) {
							// Redirect focus to the menu
							this.element.trigger( "focus", [ true ] );

							// If the active item is on the top level, let it stay active.
							// Otherwise, blur the active item since it is no longer visible.
							if ( this.active && this.active.parents( ".ui-menu" ).length === 1 ) {
								clearTimeout( this.timer );
							}
						}
					}
				},
				"mouseenter .ui-menu-item": function( event ) {
					var target = $( event.currentTarget );
					// Remove ui-state-active class from siblings of the newly focused menu item
					// to avoid a jump caused by adjacent elements both having a class with a border
					target.siblings().children( ".ui-state-active" ).removeClass( "ui-state-active" );
					this.focus( event, target );
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function( event, keepActiveItem ) {
					// If there's already an active item, keep it active
					// If not, activate the first item
					var item = this.active || this.element.children( ".ui-menu-item" ).eq( 0 );

					if ( !keepActiveItem ) {
						this.focus( event, item );
					}
				},
				blur: function( event ) {
					this._delay(function() {
						if ( !$.contains( this.element[0], this.document[0].activeElement ) ) {
							this.collapseAll( event );
						}
					});
				},
				keydown: "_keydown"
			});

			this.refresh();

			// Clicks outside of a menu collapse any open menus
			this._on( this.document, {
				click: function( event ) {
					if ( !$( event.target ).closest( ".ui-menu" ).length ) {
						this.collapseAll( event );
					}

					// Reset the mouseHandled flag
					this.mouseHandled = false;
				}
			});
		},

		_destroy: function() {
			// Destroy (sub)menus
			this.element
				.removeAttr( "aria-activedescendant" )
				.find( ".ui-menu" ).addBack()
					.removeClass( "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons" )
					.removeAttr( "role" )
					.removeAttr( "tabIndex" )
					.removeAttr( "aria-labelledby" )
					.removeAttr( "aria-expanded" )
					.removeAttr( "aria-hidden" )
					.removeAttr( "aria-disabled" )
					.removeUniqueId()
					.show();

			// Destroy menu items
			this.element.find( ".ui-menu-item" )
				.removeClass( "ui-menu-item" )
				.removeAttr( "role" )
				.removeAttr( "aria-disabled" )
				.children( "a" )
					.removeUniqueId()
					.removeClass( "ui-corner-all ui-state-hover" )
					.removeAttr( "tabIndex" )
					.removeAttr( "role" )
					.removeAttr( "aria-haspopup" )
					.children().each( function() {
						var elem = $( this );
						if ( elem.data( "ui-menu-submenu-carat" ) ) {
							elem.remove();
						}
					});

			// Destroy menu dividers
			this.element.find( ".ui-menu-divider" ).removeClass( "ui-menu-divider ui-widget-content" );
		},

		_keydown: function( event ) {
			/*jshint maxcomplexity:20*/
			var match, prev, character, skip, regex,
				preventDefault = true;

			function escape( value ) {
				return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
			}

			switch ( event.keyCode ) {
			case $.ui.keyCode.PAGE_UP:
				this.previousPage( event );
				break;
			case $.ui.keyCode.PAGE_DOWN:
				this.nextPage( event );
				break;
			case $.ui.keyCode.HOME:
				this._move( "first", "first", event );
				break;
			case $.ui.keyCode.END:
				this._move( "last", "last", event );
				break;
			case $.ui.keyCode.UP:
				this.previous( event );
				break;
			case $.ui.keyCode.DOWN:
				this.next( event );
				break;
			case $.ui.keyCode.LEFT:
				this.collapse( event );
				break;
			case $.ui.keyCode.RIGHT:
				if ( this.active && !this.active.is( ".ui-state-disabled" ) ) {
					this.expand( event );
				}
				break;
			case $.ui.keyCode.ENTER:
			case $.ui.keyCode.SPACE:
				this._activate( event );
				break;
			case $.ui.keyCode.ESCAPE:
				this.collapse( event );
				break;
			default:
				preventDefault = false;
				prev = this.previousFilter || "";
				character = String.fromCharCode( event.keyCode );
				skip = false;

				clearTimeout( this.filterTimer );

				if ( character === prev ) {
					skip = true;
				} else {
					character = prev + character;
				}

				regex = new RegExp( "^" + escape( character ), "i" );
				match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
					return regex.test( $( this ).children( "a" ).text() );
				});
				match = skip && match.index( this.active.next() ) !== -1 ?
					this.active.nextAll( ".ui-menu-item" ) :
					match;

				// If no matches on the current filter, reset to the last character pressed
				// to move down the menu to the first item that starts with that character
				if ( !match.length ) {
					character = String.fromCharCode( event.keyCode );
					regex = new RegExp( "^" + escape( character ), "i" );
					match = this.activeMenu.children( ".ui-menu-item" ).filter(function() {
						return regex.test( $( this ).children( "a" ).text() );
					});
				}

				if ( match.length ) {
					this.focus( event, match );
					if ( match.length > 1 ) {
						this.previousFilter = character;
						this.filterTimer = this._delay(function() {
							delete this.previousFilter;
						}, 1000 );
					} else {
						delete this.previousFilter;
					}
				} else {
					delete this.previousFilter;
				}
			}

			if ( preventDefault ) {
				event.preventDefault();
			}
		},

		_activate: function( event ) {
			if ( !this.active.is( ".ui-state-disabled" ) ) {
				if ( this.active.children( "a[aria-haspopup='true']" ).length ) {
					this.expand( event );
				} else {
					this.select( event );
				}
			}
		},

		refresh: function() {
			var menus,
				icon = this.options.icons.submenu,
				submenus = this.element.find( this.options.menus );

			// Initialize nested menus
			submenus.filter( ":not(.ui-menu)" )
				.addClass( "ui-menu ui-widget ui-widget-content ui-corner-all" )
				.hide()
				.attr({
					role: this.options.role,
					"aria-hidden": "true",
					"aria-expanded": "false"
				})
				.each(function() {
					var menu = $( this ),
						item = menu.prev( "a" ),
						submenuCarat = $( "<span>" )
							.addClass( "ui-menu-icon ui-icon " + icon )
							.data( "ui-menu-submenu-carat", true );

					item
						.attr( "aria-haspopup", "true" )
						.prepend( submenuCarat );
					menu.attr( "aria-labelledby", item.attr( "id" ) );
				});

			menus = submenus.add( this.element );

			// Don't refresh list items that are already adapted
			menus.children( ":not(.ui-menu-item):has(a)" )
				.addClass( "ui-menu-item" )
				.attr( "role", "presentation" )
				.children( "a" )
					.uniqueId()
					.addClass( "ui-corner-all" )
					.attr({
						tabIndex: -1,
						role: this._itemRole()
					});

			// Initialize unlinked menu-items containing spaces and/or dashes only as dividers
			menus.children( ":not(.ui-menu-item)" ).each(function() {
				var item = $( this );
				// hyphen, em dash, en dash
				if ( !/[^\-\u2014\u2013\s]/.test( item.text() ) ) {
					item.addClass( "ui-widget-content ui-menu-divider" );
				}
			});

			// Add aria-disabled attribute to any disabled menu item
			menus.children( ".ui-state-disabled" ).attr( "aria-disabled", "true" );

			// If the active item has been removed, blur the menu
			if ( this.active && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
				this.blur();
			}
		},

		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[ this.options.role ];
		},

		_setOption: function( key, value ) {
			if ( key === "icons" ) {
				this.element.find( ".ui-menu-icon" )
					.removeClass( this.options.icons.submenu )
					.addClass( value.submenu );
			}
			this._super( key, value );
		},

		focus: function( event, item ) {
			var nested, focused;
			this.blur( event, event && event.type === "focus" );

			this._scrollIntoView( item );

			this.active = item.first();
			focused = this.active.children( "a" ).addClass( "ui-state-focus" );
			// Only update aria-activedescendant if there's a role
			// otherwise we assume focus is managed elsewhere
			if ( this.options.role ) {
				this.element.attr( "aria-activedescendant", focused.attr( "id" ) );
			}

			// Highlight active parent menu item, if any
			this.active
				.parent()
				.closest( ".ui-menu-item" )
				.children( "a:first" )
				.addClass( "ui-state-active" );

			if ( event && event.type === "keydown" ) {
				this._close();
			} else {
				this.timer = this._delay(function() {
					this._close();
				}, this.delay );
			}

			nested = item.children( ".ui-menu" );
			if ( nested.length && ( /^mouse/.test( event.type ) ) ) {
				this._startOpening(nested);
			}
			this.activeMenu = item.parent();

			this._trigger( "focus", event, { item: item } );
		},

		_scrollIntoView: function( item ) {
			var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
			if ( this._hasScroll() ) {
				borderTop = parseFloat( $.css( this.activeMenu[0], "borderTopWidth" ) ) || 0;
				paddingTop = parseFloat( $.css( this.activeMenu[0], "paddingTop" ) ) || 0;
				offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
				scroll = this.activeMenu.scrollTop();
				elementHeight = this.activeMenu.height();
				itemHeight = item.height();

				if ( offset < 0 ) {
					this.activeMenu.scrollTop( scroll + offset );
				} else if ( offset + itemHeight > elementHeight ) {
					this.activeMenu.scrollTop( scroll + offset - elementHeight + itemHeight );
				}
			}
		},

		blur: function( event, fromFocus ) {
			if ( !fromFocus ) {
				clearTimeout( this.timer );
			}

			if ( !this.active ) {
				return;
			}

			this.active.children( "a" ).removeClass( "ui-state-focus" );
			this.active = null;

			this._trigger( "blur", event, { item: this.active } );
		},

		_startOpening: function( submenu ) {
			clearTimeout( this.timer );

			// Don't open if already open fixes a Firefox bug that caused a .5 pixel
			// shift in the submenu position when mousing over the carat icon
			if ( submenu.attr( "aria-hidden" ) !== "true" ) {
				return;
			}

			this.timer = this._delay(function() {
				this._close();
				this._open( submenu );
			}, this.delay );
		},

		_open: function( submenu ) {
			var position = $.extend({
				of: this.active
			}, this.options.position );

			clearTimeout( this.timer );
			this.element.find( ".ui-menu" ).not( submenu.parents( ".ui-menu" ) )
				.hide()
				.attr( "aria-hidden", "true" );

			submenu
				.show()
				.removeAttr( "aria-hidden" )
				.attr( "aria-expanded", "true" )
				.position( position );
		},

		collapseAll: function( event, all ) {
			clearTimeout( this.timer );
			this.timer = this._delay(function() {
				// If we were passed an event, look for the submenu that contains the event
				var currentMenu = all ? this.element :
					$( event && event.target ).closest( this.element.find( ".ui-menu" ) );

				// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
				if ( !currentMenu.length ) {
					currentMenu = this.element;
				}

				this._close( currentMenu );

				this.blur( event );
				this.activeMenu = currentMenu;
			}, this.delay );
		},

		// With no arguments, closes the currently active menu - if nothing is active
		// it closes all menus.  If passed an argument, it will search for menus BELOW
		_close: function( startMenu ) {
			if ( !startMenu ) {
				startMenu = this.active ? this.active.parent() : this.element;
			}

			startMenu
				.find( ".ui-menu" )
					.hide()
					.attr( "aria-hidden", "true" )
					.attr( "aria-expanded", "false" )
				.end()
				.find( "a.ui-state-active" )
					.removeClass( "ui-state-active" );
		},

		collapse: function( event ) {
			var newItem = this.active &&
				this.active.parent().closest( ".ui-menu-item", this.element );
			if ( newItem && newItem.length ) {
				this._close();
				this.focus( event, newItem );
			}
		},

		expand: function( event ) {
			var newItem = this.active &&
				this.active
					.children( ".ui-menu " )
					.children( ".ui-menu-item" )
					.first();

			if ( newItem && newItem.length ) {
				this._open( newItem.parent() );

				// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
				this._delay(function() {
					this.focus( event, newItem );
				});
			}
		},

		next: function( event ) {
			this._move( "next", "first", event );
		},

		previous: function( event ) {
			this._move( "prev", "last", event );
		},

		isFirstItem: function() {
			return this.active && !this.active.prevAll( ".ui-menu-item" ).length;
		},

		isLastItem: function() {
			return this.active && !this.active.nextAll( ".ui-menu-item" ).length;
		},

		_move: function( direction, filter, event ) {
			var next;
			if ( this.active ) {
				if ( direction === "first" || direction === "last" ) {
					next = this.active
						[ direction === "first" ? "prevAll" : "nextAll" ]( ".ui-menu-item" )
						.eq( -1 );
				} else {
					next = this.active
						[ direction + "All" ]( ".ui-menu-item" )
						.eq( 0 );
				}
			}
			if ( !next || !next.length || !this.active ) {
				next = this.activeMenu.children( ".ui-menu-item" )[ filter ]();
			}

			this.focus( event, next );
		},

		nextPage: function( event ) {
			var item, base, height;

			if ( !this.active ) {
				this.next( event );
				return;
			}
			if ( this.isLastItem() ) {
				return;
			}
			if ( this._hasScroll() ) {
				base = this.active.offset().top;
				height = this.element.height();
				this.active.nextAll( ".ui-menu-item" ).each(function() {
					item = $( this );
					return item.offset().top - base - height < 0;
				});

				this.focus( event, item );
			} else {
				this.focus( event, this.activeMenu.children( ".ui-menu-item" )
					[ !this.active ? "first" : "last" ]() );
			}
		},

		previousPage: function( event ) {
			var item, base, height;
			if ( !this.active ) {
				this.next( event );
				return;
			}
			if ( this.isFirstItem() ) {
				return;
			}
			if ( this._hasScroll() ) {
				base = this.active.offset().top;
				height = this.element.height();
				this.active.prevAll( ".ui-menu-item" ).each(function() {
					item = $( this );
					return item.offset().top - base + height > 0;
				});

				this.focus( event, item );
			} else {
				this.focus( event, this.activeMenu.children( ".ui-menu-item" ).first() );
			}
		},

		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop( "scrollHeight" );
		},

		select: function( event ) {
			// TODO: It should never be possible to not have an active item at this
			// point, but the tests don't trigger mouseenter before click.
			this.active = this.active || $( event.target ).closest( ".ui-menu-item" );
			var ui = { item: this.active };
			if ( !this.active.has( ".ui-menu" ).length ) {
				this.collapseAll( event, true );
			}
			this._trigger( "select", event, ui );
		}
	});

	}( jQuery ));

	(function( $, undefined ) {

	$.ui = $.ui || {};

	var cachedScrollbarWidth,
		max = Math.max,
		abs = Math.abs,
		round = Math.round,
		rhorizontal = /left|center|right/,
		rvertical = /top|center|bottom/,
		roffset = /[\+\-]\d+(\.[\d]+)?%?/,
		rposition = /^\w+/,
		rpercent = /%$/,
		_position = $.fn.position;

	function getOffsets( offsets, width, height ) {
		return [
			parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
			parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
		];
	}

	function parseCss( element, property ) {
		return parseInt( $.css( element, property ), 10 ) || 0;
	}

	function getDimensions( elem ) {
		var raw = elem[0];
		if ( raw.nodeType === 9 ) {
			return {
				width: elem.width(),
				height: elem.height(),
				offset: { top: 0, left: 0 }
			};
		}
		if ( $.isWindow( raw ) ) {
			return {
				width: elem.width(),
				height: elem.height(),
				offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
			};
		}
		if ( raw.preventDefault ) {
			return {
				width: 0,
				height: 0,
				offset: { top: raw.pageY, left: raw.pageX }
			};
		}
		return {
			width: elem.outerWidth(),
			height: elem.outerHeight(),
			offset: elem.offset()
		};
	}

	$.position = {
		scrollbarWidth: function() {
			if ( cachedScrollbarWidth !== undefined ) {
				return cachedScrollbarWidth;
			}
			var w1, w2,
				div = $( "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
				innerDiv = div.children()[0];

			$( "body" ).append( div );
			w1 = innerDiv.offsetWidth;
			div.css( "overflow", "scroll" );

			w2 = innerDiv.offsetWidth;

			if ( w1 === w2 ) {
				w2 = div[0].clientWidth;
			}

			div.remove();

			return (cachedScrollbarWidth = w1 - w2);
		},
		getScrollInfo: function( within ) {
			var overflowX = within.isWindow ? "" : within.element.css( "overflow-x" ),
				overflowY = within.isWindow ? "" : within.element.css( "overflow-y" ),
				hasOverflowX = overflowX === "scroll" ||
					( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
				hasOverflowY = overflowY === "scroll" ||
					( overflowY === "auto" && within.height < within.element[0].scrollHeight );
			return {
				width: hasOverflowY ? $.position.scrollbarWidth() : 0,
				height: hasOverflowX ? $.position.scrollbarWidth() : 0
			};
		},
		getWithinInfo: function( element ) {
			var withinElement = $( element || window ),
				isWindow = $.isWindow( withinElement[0] );
			return {
				element: withinElement,
				isWindow: isWindow,
				offset: withinElement.offset() || { left: 0, top: 0 },
				scrollLeft: withinElement.scrollLeft(),
				scrollTop: withinElement.scrollTop(),
				width: isWindow ? withinElement.width() : withinElement.outerWidth(),
				height: isWindow ? withinElement.height() : withinElement.outerHeight()
			};
		}
	};

	$.fn.position = function( options ) {
		if ( !options || !options.of ) {
			return _position.apply( this, arguments );
		}

		// make a copy, we don't want to modify arguments
		options = $.extend( {}, options );

		var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
			target = $( options.of ),
			within = $.position.getWithinInfo( options.within ),
			scrollInfo = $.position.getScrollInfo( within ),
			collision = ( options.collision || "flip" ).split( " " ),
			offsets = {};

		dimensions = getDimensions( target );
		if ( target[0].preventDefault ) {
			// force left top to allow flipping
			options.at = "left top";
		}
		targetWidth = dimensions.width;
		targetHeight = dimensions.height;
		targetOffset = dimensions.offset;
		// clone to reuse original targetOffset later
		basePosition = $.extend( {}, targetOffset );

		// force my and at to have valid horizontal and vertical positions
		// if a value is missing or invalid, it will be converted to center
		$.each( [ "my", "at" ], function() {
			var pos = ( options[ this ] || "" ).split( " " ),
				horizontalOffset,
				verticalOffset;

			if ( pos.length === 1) {
				pos = rhorizontal.test( pos[ 0 ] ) ?
					pos.concat( [ "center" ] ) :
					rvertical.test( pos[ 0 ] ) ?
						[ "center" ].concat( pos ) :
						[ "center", "center" ];
			}
			pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
			pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

			// calculate offsets
			horizontalOffset = roffset.exec( pos[ 0 ] );
			verticalOffset = roffset.exec( pos[ 1 ] );
			offsets[ this ] = [
				horizontalOffset ? horizontalOffset[ 0 ] : 0,
				verticalOffset ? verticalOffset[ 0 ] : 0
			];

			// reduce to just the positions without the offsets
			options[ this ] = [
				rposition.exec( pos[ 0 ] )[ 0 ],
				rposition.exec( pos[ 1 ] )[ 0 ]
			];
		});

		// normalize collision option
		if ( collision.length === 1 ) {
			collision[ 1 ] = collision[ 0 ];
		}

		if ( options.at[ 0 ] === "right" ) {
			basePosition.left += targetWidth;
		} else if ( options.at[ 0 ] === "center" ) {
			basePosition.left += targetWidth / 2;
		}

		if ( options.at[ 1 ] === "bottom" ) {
			basePosition.top += targetHeight;
		} else if ( options.at[ 1 ] === "center" ) {
			basePosition.top += targetHeight / 2;
		}

		atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
		basePosition.left += atOffset[ 0 ];
		basePosition.top += atOffset[ 1 ];

		return this.each(function() {
			var collisionPosition, using,
				elem = $( this ),
				elemWidth = elem.outerWidth(),
				elemHeight = elem.outerHeight(),
				marginLeft = parseCss( this, "marginLeft" ),
				marginTop = parseCss( this, "marginTop" ),
				collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
				collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
				position = $.extend( {}, basePosition ),
				myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

			if ( options.my[ 0 ] === "right" ) {
				position.left -= elemWidth;
			} else if ( options.my[ 0 ] === "center" ) {
				position.left -= elemWidth / 2;
			}

			if ( options.my[ 1 ] === "bottom" ) {
				position.top -= elemHeight;
			} else if ( options.my[ 1 ] === "center" ) {
				position.top -= elemHeight / 2;
			}

			position.left += myOffset[ 0 ];
			position.top += myOffset[ 1 ];

			// if the browser doesn't support fractions, then round for consistent results
			if ( !$.support.offsetFractions ) {
				position.left = round( position.left );
				position.top = round( position.top );
			}

			collisionPosition = {
				marginLeft: marginLeft,
				marginTop: marginTop
			};

			$.each( [ "left", "top" ], function( i, dir ) {
				if ( $.ui.position[ collision[ i ] ] ) {
					$.ui.position[ collision[ i ] ][ dir ]( position, {
						targetWidth: targetWidth,
						targetHeight: targetHeight,
						elemWidth: elemWidth,
						elemHeight: elemHeight,
						collisionPosition: collisionPosition,
						collisionWidth: collisionWidth,
						collisionHeight: collisionHeight,
						offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
						my: options.my,
						at: options.at,
						within: within,
						elem : elem
					});
				}
			});

			if ( options.using ) {
				// adds feedback as second argument to using callback, if present
				using = function( props ) {
					var left = targetOffset.left - position.left,
						right = left + targetWidth - elemWidth,
						top = targetOffset.top - position.top,
						bottom = top + targetHeight - elemHeight,
						feedback = {
							target: {
								element: target,
								left: targetOffset.left,
								top: targetOffset.top,
								width: targetWidth,
								height: targetHeight
							},
							element: {
								element: elem,
								left: position.left,
								top: position.top,
								width: elemWidth,
								height: elemHeight
							},
							horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
							vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
						};
					if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
						feedback.horizontal = "center";
					}
					if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
						feedback.vertical = "middle";
					}
					if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
						feedback.important = "horizontal";
					} else {
						feedback.important = "vertical";
					}
					options.using.call( this, props, feedback );
				};
			}

			elem.offset( $.extend( position, { using: using } ) );
		});
	};

	$.ui.position = {
		fit: {
			left: function( position, data ) {
				var within = data.within,
					withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
					outerWidth = within.width,
					collisionPosLeft = position.left - data.collisionPosition.marginLeft,
					overLeft = withinOffset - collisionPosLeft,
					overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
					newOverRight;

				// element is wider than within
				if ( data.collisionWidth > outerWidth ) {
					// element is initially over the left side of within
					if ( overLeft > 0 && overRight <= 0 ) {
						newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
						position.left += overLeft - newOverRight;
					// element is initially over right side of within
					} else if ( overRight > 0 && overLeft <= 0 ) {
						position.left = withinOffset;
					// element is initially over both left and right sides of within
					} else {
						if ( overLeft > overRight ) {
							position.left = withinOffset + outerWidth - data.collisionWidth;
						} else {
							position.left = withinOffset;
						}
					}
				// too far left -> align with left edge
				} else if ( overLeft > 0 ) {
					position.left += overLeft;
				// too far right -> align with right edge
				} else if ( overRight > 0 ) {
					position.left -= overRight;
				// adjust based on position and margin
				} else {
					position.left = max( position.left - collisionPosLeft, position.left );
				}
			},
			top: function( position, data ) {
				var within = data.within,
					withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
					outerHeight = data.within.height,
					collisionPosTop = position.top - data.collisionPosition.marginTop,
					overTop = withinOffset - collisionPosTop,
					overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
					newOverBottom;

				// element is taller than within
				if ( data.collisionHeight > outerHeight ) {
					// element is initially over the top of within
					if ( overTop > 0 && overBottom <= 0 ) {
						newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
						position.top += overTop - newOverBottom;
					// element is initially over bottom of within
					} else if ( overBottom > 0 && overTop <= 0 ) {
						position.top = withinOffset;
					// element is initially over both top and bottom of within
					} else {
						if ( overTop > overBottom ) {
							position.top = withinOffset + outerHeight - data.collisionHeight;
						} else {
							position.top = withinOffset;
						}
					}
				// too far up -> align with top
				} else if ( overTop > 0 ) {
					position.top += overTop;
				// too far down -> align with bottom edge
				} else if ( overBottom > 0 ) {
					position.top -= overBottom;
				// adjust based on position and margin
				} else {
					position.top = max( position.top - collisionPosTop, position.top );
				}
			}
		},
		flip: {
			left: function( position, data ) {
				var within = data.within,
					withinOffset = within.offset.left + within.scrollLeft,
					outerWidth = within.width,
					offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
					collisionPosLeft = position.left - data.collisionPosition.marginLeft,
					overLeft = collisionPosLeft - offsetLeft,
					overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
					myOffset = data.my[ 0 ] === "left" ?
						-data.elemWidth :
						data.my[ 0 ] === "right" ?
							data.elemWidth :
							0,
					atOffset = data.at[ 0 ] === "left" ?
						data.targetWidth :
						data.at[ 0 ] === "right" ?
							-data.targetWidth :
							0,
					offset = -2 * data.offset[ 0 ],
					newOverRight,
					newOverLeft;

				if ( overLeft < 0 ) {
					newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
					if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
						position.left += myOffset + atOffset + offset;
					}
				}
				else if ( overRight > 0 ) {
					newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
					if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
						position.left += myOffset + atOffset + offset;
					}
				}
			},
			top: function( position, data ) {
				var within = data.within,
					withinOffset = within.offset.top + within.scrollTop,
					outerHeight = within.height,
					offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
					collisionPosTop = position.top - data.collisionPosition.marginTop,
					overTop = collisionPosTop - offsetTop,
					overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
					top = data.my[ 1 ] === "top",
					myOffset = top ?
						-data.elemHeight :
						data.my[ 1 ] === "bottom" ?
							data.elemHeight :
							0,
					atOffset = data.at[ 1 ] === "top" ?
						data.targetHeight :
						data.at[ 1 ] === "bottom" ?
							-data.targetHeight :
							0,
					offset = -2 * data.offset[ 1 ],
					newOverTop,
					newOverBottom;
				if ( overTop < 0 ) {
					newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
					if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
						position.top += myOffset + atOffset + offset;
					}
				}
				else if ( overBottom > 0 ) {
					newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
					if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
						position.top += myOffset + atOffset + offset;
					}
				}
			}
		},
		flipfit: {
			left: function() {
				$.ui.position.flip.left.apply( this, arguments );
				$.ui.position.fit.left.apply( this, arguments );
			},
			top: function() {
				$.ui.position.flip.top.apply( this, arguments );
				$.ui.position.fit.top.apply( this, arguments );
			}
		}
	};

	// fraction support test
	(function () {
		var testElement, testElementParent, testElementStyle, offsetLeft, i,
			body = document.getElementsByTagName( "body" )[ 0 ],
			div = document.createElement( "div" );

		//Create a "fake body" for testing based on method used in jQuery.support
		testElement = document.createElement( body ? "div" : "body" );
		testElementStyle = {
			visibility: "hidden",
			width: 0,
			height: 0,
			border: 0,
			margin: 0,
			background: "none"
		};
		if ( body ) {
			$.extend( testElementStyle, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
		}
		for ( i in testElementStyle ) {
			testElement.style[ i ] = testElementStyle[ i ];
		}
		testElement.appendChild( div );
		testElementParent = body || document.documentElement;
		testElementParent.insertBefore( testElement, testElementParent.firstChild );

		div.style.cssText = "position: absolute; left: 10.7432222px;";

		offsetLeft = $( div ).offset().left;
		$.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

		testElement.innerHTML = "";
		testElementParent.removeChild( testElement );
	})();

	}( jQuery ) );

	(function( $, undefined ) {

	$.widget( "ui.progressbar", {
		version: "1.10.3",
		options: {
			max: 100,
			value: 0,

			change: null,
			complete: null
		},

		min: 0,

		_create: function() {
			// Constrain initial value
			this.oldValue = this.options.value = this._constrainedValue();

			this.element
				.addClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
				.attr({
					// Only set static values, aria-valuenow and aria-valuemax are
					// set inside _refreshValue()
					role: "progressbar",
					"aria-valuemin": this.min
				});

			this.valueDiv = $( "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>" )
				.appendTo( this.element );

			this._refreshValue();
		},

		_destroy: function() {
			this.element
				.removeClass( "ui-progressbar ui-widget ui-widget-content ui-corner-all" )
				.removeAttr( "role" )
				.removeAttr( "aria-valuemin" )
				.removeAttr( "aria-valuemax" )
				.removeAttr( "aria-valuenow" );

			this.valueDiv.remove();
		},

		value: function( newValue ) {
			if ( newValue === undefined ) {
				return this.options.value;
			}

			this.options.value = this._constrainedValue( newValue );
			this._refreshValue();
		},

		_constrainedValue: function( newValue ) {
			if ( newValue === undefined ) {
				newValue = this.options.value;
			}

			this.indeterminate = newValue === false;

			// sanitize value
			if ( typeof newValue !== "number" ) {
				newValue = 0;
			}

			return this.indeterminate ? false :
				Math.min( this.options.max, Math.max( this.min, newValue ) );
		},

		_setOptions: function( options ) {
			// Ensure "value" option is set after other values (like max)
			var value = options.value;
			delete options.value;

			this._super( options );

			this.options.value = this._constrainedValue( value );
			this._refreshValue();
		},

		_setOption: function( key, value ) {
			if ( key === "max" ) {
				// Don't allow a max less than min
				value = Math.max( this.min, value );
			}

			this._super( key, value );
		},

		_percentage: function() {
			return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
		},

		_refreshValue: function() {
			var value = this.options.value,
				percentage = this._percentage();

			this.valueDiv
				.toggle( this.indeterminate || value > this.min )
				.toggleClass( "ui-corner-right", value === this.options.max )
				.width( percentage.toFixed(0) + "%" );

			this.element.toggleClass( "ui-progressbar-indeterminate", this.indeterminate );

			if ( this.indeterminate ) {
				this.element.removeAttr( "aria-valuenow" );
				if ( !this.overlayDiv ) {
					this.overlayDiv = $( "<div class='ui-progressbar-overlay'></div>" ).appendTo( this.valueDiv );
				}
			} else {
				this.element.attr({
					"aria-valuemax": this.options.max,
					"aria-valuenow": value
				});
				if ( this.overlayDiv ) {
					this.overlayDiv.remove();
					this.overlayDiv = null;
				}
			}

			if ( this.oldValue !== value ) {
				this.oldValue = value;
				this._trigger( "change" );
			}
			if ( value === this.options.max ) {
				this._trigger( "complete" );
			}
		}
	});

	})( jQuery );

	(function( $, undefined ) {

	// number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	var numPages = 5;

	$.widget( "ui.slider", $.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "slide",

		options: {
			animate: false,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: false,
			step: 1,
			value: 0,
			values: null,

			// callbacks
			change: null,
			slide: null,
			start: null,
			stop: null
		},

		_create: function() {
			this._keySliding = false;
			this._mouseSliding = false;
			this._animateOff = true;
			this._handleIndex = null;
			this._detectOrientation();
			this._mouseInit();

			this.element
				.addClass( "ui-slider" +
					" ui-slider-" + this.orientation +
					" ui-widget" +
					" ui-widget-content" +
					" ui-corner-all");

			this._refresh();
			this._setOption( "disabled", this.options.disabled );

			this._animateOff = false;
		},

		_refresh: function() {
			this._createRange();
			this._createHandles();
			this._setupEvents();
			this._refreshValue();
		},

		_createHandles: function() {
			var i, handleCount,
				options = this.options,
				existingHandles = this.element.find( ".ui-slider-handle" ).addClass( "ui-state-default ui-corner-all" ),
				handle = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				handles = [];

			handleCount = ( options.values && options.values.length ) || 1;

			if ( existingHandles.length > handleCount ) {
				existingHandles.slice( handleCount ).remove();
				existingHandles = existingHandles.slice( 0, handleCount );
			}

			for ( i = existingHandles.length; i < handleCount; i++ ) {
				handles.push( handle );
			}

			this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

			this.handle = this.handles.eq( 0 );

			this.handles.each(function( i ) {
				$( this ).data( "ui-slider-handle-index", i );
			});
		},

		_createRange: function() {
			var options = this.options,
				classes = "";

			if ( options.range ) {
				if ( options.range === true ) {
					if ( !options.values ) {
						options.values = [ this._valueMin(), this._valueMin() ];
					} else if ( options.values.length && options.values.length !== 2 ) {
						options.values = [ options.values[0], options.values[0] ];
					} else if ( $.isArray( options.values ) ) {
						options.values = options.values.slice(0);
					}
				}

				if ( !this.range || !this.range.length ) {
					this.range = $( "<div></div>" )
						.appendTo( this.element );

					classes = "ui-slider-range" +
					// note: this isn't the most fittingly semantic framework class for this element,
					// but worked best visually with a variety of themes
					" ui-widget-header ui-corner-all";
				} else {
					this.range.removeClass( "ui-slider-range-min ui-slider-range-max" )
						// Handle range switching from true to min/max
						.css({
							"left": "",
							"bottom": ""
						});
				}

				this.range.addClass( classes +
					( ( options.range === "min" || options.range === "max" ) ? " ui-slider-range-" + options.range : "" ) );
			} else {
				this.range = $([]);
			}
		},

		_setupEvents: function() {
			var elements = this.handles.add( this.range ).filter( "a" );
			this._off( elements );
			this._on( elements, this._handleEvents );
			this._hoverable( elements );
			this._focusable( elements );
		},

		_destroy: function() {
			this.handles.remove();
			this.range.remove();

			this.element
				.removeClass( "ui-slider" +
					" ui-slider-horizontal" +
					" ui-slider-vertical" +
					" ui-widget" +
					" ui-widget-content" +
					" ui-corner-all" );

			this._mouseDestroy();
		},

		_mouseCapture: function( event ) {
			var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
				that = this,
				o = this.options;

			if ( o.disabled ) {
				return false;
			}

			this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			};
			this.elementOffset = this.element.offset();

			position = { x: event.pageX, y: event.pageY };
			normValue = this._normValueFromMouse( position );
			distance = this._valueMax() - this._valueMin() + 1;
			this.handles.each(function( i ) {
				var thisDistance = Math.abs( normValue - that.values(i) );
				if (( distance > thisDistance ) ||
					( distance === thisDistance &&
						(i === that._lastChangedValue || that.values(i) === o.min ))) {
					distance = thisDistance;
					closestHandle = $( this );
					index = i;
				}
			});

			allowed = this._start( event, index );
			if ( allowed === false ) {
				return false;
			}
			this._mouseSliding = true;

			this._handleIndex = index;

			closestHandle
				.addClass( "ui-state-active" )
				.focus();

			offset = closestHandle.offset();
			mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
			this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
				left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
				top: event.pageY - offset.top -
					( closestHandle.height() / 2 ) -
					( parseInt( closestHandle.css("borderTopWidth"), 10 ) || 0 ) -
					( parseInt( closestHandle.css("borderBottomWidth"), 10 ) || 0) +
					( parseInt( closestHandle.css("marginTop"), 10 ) || 0)
			};

			if ( !this.handles.hasClass( "ui-state-hover" ) ) {
				this._slide( event, index, normValue );
			}
			this._animateOff = true;
			return true;
		},

		_mouseStart: function() {
			return true;
		},

		_mouseDrag: function( event ) {
			var position = { x: event.pageX, y: event.pageY },
				normValue = this._normValueFromMouse( position );

			this._slide( event, this._handleIndex, normValue );

			return false;
		},

		_mouseStop: function( event ) {
			this.handles.removeClass( "ui-state-active" );
			this._mouseSliding = false;

			this._stop( event, this._handleIndex );
			this._change( event, this._handleIndex );

			this._handleIndex = null;
			this._clickOffset = null;
			this._animateOff = false;

			return false;
		},

		_detectOrientation: function() {
			this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
		},

		_normValueFromMouse: function( position ) {
			var pixelTotal,
				pixelMouse,
				percentMouse,
				valueTotal,
				valueMouse;

			if ( this.orientation === "horizontal" ) {
				pixelTotal = this.elementSize.width;
				pixelMouse = position.x - this.elementOffset.left - ( this._clickOffset ? this._clickOffset.left : 0 );
			} else {
				pixelTotal = this.elementSize.height;
				pixelMouse = position.y - this.elementOffset.top - ( this._clickOffset ? this._clickOffset.top : 0 );
			}

			percentMouse = ( pixelMouse / pixelTotal );
			if ( percentMouse > 1 ) {
				percentMouse = 1;
			}
			if ( percentMouse < 0 ) {
				percentMouse = 0;
			}
			if ( this.orientation === "vertical" ) {
				percentMouse = 1 - percentMouse;
			}

			valueTotal = this._valueMax() - this._valueMin();
			valueMouse = this._valueMin() + percentMouse * valueTotal;

			return this._trimAlignValue( valueMouse );
		},

		_start: function( event, index ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}
			return this._trigger( "start", event, uiHash );
		},

		_slide: function( event, index, newVal ) {
			var otherVal,
				newValues,
				allowed;

			if ( this.options.values && this.options.values.length ) {
				otherVal = this.values( index ? 0 : 1 );

				if ( ( this.options.values.length === 2 && this.options.range === true ) &&
						( ( index === 0 && newVal > otherVal) || ( index === 1 && newVal < otherVal ) )
					) {
					newVal = otherVal;
				}

				if ( newVal !== this.values( index ) ) {
					newValues = this.values();
					newValues[ index ] = newVal;
					// A slide can be canceled by returning false from the slide callback
					allowed = this._trigger( "slide", event, {
						handle: this.handles[ index ],
						value: newVal,
						values: newValues
					} );
					otherVal = this.values( index ? 0 : 1 );
					if ( allowed !== false ) {
						this.values( index, newVal, true );
					}
				}
			} else {
				if ( newVal !== this.value() ) {
					// A slide can be canceled by returning false from the slide callback
					allowed = this._trigger( "slide", event, {
						handle: this.handles[ index ],
						value: newVal
					} );
					if ( allowed !== false ) {
						this.value( newVal );
					}
				}
			}
		},

		_stop: function( event, index ) {
			var uiHash = {
				handle: this.handles[ index ],
				value: this.value()
			};
			if ( this.options.values && this.options.values.length ) {
				uiHash.value = this.values( index );
				uiHash.values = this.values();
			}

			this._trigger( "stop", event, uiHash );
		},

		_change: function( event, index ) {
			if ( !this._keySliding && !this._mouseSliding ) {
				var uiHash = {
					handle: this.handles[ index ],
					value: this.value()
				};
				if ( this.options.values && this.options.values.length ) {
					uiHash.value = this.values( index );
					uiHash.values = this.values();
				}

				//store the last changed value index for reference when handles overlap
				this._lastChangedValue = index;

				this._trigger( "change", event, uiHash );
			}
		},

		value: function( newValue ) {
			if ( arguments.length ) {
				this.options.value = this._trimAlignValue( newValue );
				this._refreshValue();
				this._change( null, 0 );
				return;
			}

			return this._value();
		},

		values: function( index, newValue ) {
			var vals,
				newValues,
				i;

			if ( arguments.length > 1 ) {
				this.options.values[ index ] = this._trimAlignValue( newValue );
				this._refreshValue();
				this._change( null, index );
				return;
			}

			if ( arguments.length ) {
				if ( $.isArray( arguments[ 0 ] ) ) {
					vals = this.options.values;
					newValues = arguments[ 0 ];
					for ( i = 0; i < vals.length; i += 1 ) {
						vals[ i ] = this._trimAlignValue( newValues[ i ] );
						this._change( null, i );
					}
					this._refreshValue();
				} else {
					if ( this.options.values && this.options.values.length ) {
						return this._values( index );
					} else {
						return this.value();
					}
				}
			} else {
				return this._values();
			}
		},

		_setOption: function( key, value ) {
			var i,
				valsLength = 0;

			if ( key === "range" && this.options.range === true ) {
				if ( value === "min" ) {
					this.options.value = this._values( 0 );
					this.options.values = null;
				} else if ( value === "max" ) {
					this.options.value = this._values( this.options.values.length-1 );
					this.options.values = null;
				}
			}

			if ( $.isArray( this.options.values ) ) {
				valsLength = this.options.values.length;
			}

			$.Widget.prototype._setOption.apply( this, arguments );

			switch ( key ) {
				case "orientation":
					this._detectOrientation();
					this.element
						.removeClass( "ui-slider-horizontal ui-slider-vertical" )
						.addClass( "ui-slider-" + this.orientation );
					this._refreshValue();
					break;
				case "value":
					this._animateOff = true;
					this._refreshValue();
					this._change( null, 0 );
					this._animateOff = false;
					break;
				case "values":
					this._animateOff = true;
					this._refreshValue();
					for ( i = 0; i < valsLength; i += 1 ) {
						this._change( null, i );
					}
					this._animateOff = false;
					break;
				case "min":
				case "max":
					this._animateOff = true;
					this._refreshValue();
					this._animateOff = false;
					break;
				case "range":
					this._animateOff = true;
					this._refresh();
					this._animateOff = false;
					break;
			}
		},

		//internal value getter
		// _value() returns value trimmed by min and max, aligned by step
		_value: function() {
			var val = this.options.value;
			val = this._trimAlignValue( val );

			return val;
		},

		//internal values getter
		// _values() returns array of values trimmed by min and max, aligned by step
		// _values( index ) returns single value trimmed by min and max, aligned by step
		_values: function( index ) {
			var val,
				vals,
				i;

			if ( arguments.length ) {
				val = this.options.values[ index ];
				val = this._trimAlignValue( val );

				return val;
			} else if ( this.options.values && this.options.values.length ) {
				// .slice() creates a copy of the array
				// this copy gets trimmed by min and max and then returned
				vals = this.options.values.slice();
				for ( i = 0; i < vals.length; i+= 1) {
					vals[ i ] = this._trimAlignValue( vals[ i ] );
				}

				return vals;
			} else {
				return [];
			}
		},

		// returns the step-aligned value that val is closest to, between (inclusive) min and max
		_trimAlignValue: function( val ) {
			if ( val <= this._valueMin() ) {
				return this._valueMin();
			}
			if ( val >= this._valueMax() ) {
				return this._valueMax();
			}
			var step = ( this.options.step > 0 ) ? this.options.step : 1,
				valModStep = (val - this._valueMin()) % step,
				alignValue = val - valModStep;

			if ( Math.abs(valModStep) * 2 >= step ) {
				alignValue += ( valModStep > 0 ) ? step : ( -step );
			}

			// Since JavaScript has problems with large floats, round
			// the final value to 5 digits after the decimal point (see #4124)
			return parseFloat( alignValue.toFixed(5) );
		},

		_valueMin: function() {
			return this.options.min;
		},

		_valueMax: function() {
			return this.options.max;
		},

		_refreshValue: function() {
			var lastValPercent, valPercent, value, valueMin, valueMax,
				oRange = this.options.range,
				o = this.options,
				that = this,
				animate = ( !this._animateOff ) ? o.animate : false,
				_set = {};

			if ( this.options.values && this.options.values.length ) {
				this.handles.each(function( i ) {
					valPercent = ( that.values(i) - that._valueMin() ) / ( that._valueMax() - that._valueMin() ) * 100;
					_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
					$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
					if ( that.options.range === true ) {
						if ( that.orientation === "horizontal" ) {
							if ( i === 0 ) {
								that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { left: valPercent + "%" }, o.animate );
							}
							if ( i === 1 ) {
								that.range[ animate ? "animate" : "css" ]( { width: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
							}
						} else {
							if ( i === 0 ) {
								that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { bottom: ( valPercent ) + "%" }, o.animate );
							}
							if ( i === 1 ) {
								that.range[ animate ? "animate" : "css" ]( { height: ( valPercent - lastValPercent ) + "%" }, { queue: false, duration: o.animate } );
							}
						}
					}
					lastValPercent = valPercent;
				});
			} else {
				value = this.value();
				valueMin = this._valueMin();
				valueMax = this._valueMax();
				valPercent = ( valueMax !== valueMin ) ?
						( value - valueMin ) / ( valueMax - valueMin ) * 100 :
						0;
				_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

				if ( oRange === "min" && this.orientation === "horizontal" ) {
					this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { width: valPercent + "%" }, o.animate );
				}
				if ( oRange === "max" && this.orientation === "horizontal" ) {
					this.range[ animate ? "animate" : "css" ]( { width: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
				}
				if ( oRange === "min" && this.orientation === "vertical" ) {
					this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( { height: valPercent + "%" }, o.animate );
				}
				if ( oRange === "max" && this.orientation === "vertical" ) {
					this.range[ animate ? "animate" : "css" ]( { height: ( 100 - valPercent ) + "%" }, { queue: false, duration: o.animate } );
				}
			}
		},

		_handleEvents: {
			keydown: function( event ) {
				/*jshint maxcomplexity:25*/
				var allowed, curVal, newVal, step,
					index = $( event.target ).data( "ui-slider-handle-index" );

				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
					case $.ui.keyCode.END:
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						event.preventDefault();
						if ( !this._keySliding ) {
							this._keySliding = true;
							$( event.target ).addClass( "ui-state-active" );
							allowed = this._start( event, index );
							if ( allowed === false ) {
								return;
							}
						}
						break;
				}

				step = this.options.step;
				if ( this.options.values && this.options.values.length ) {
					curVal = newVal = this.values( index );
				} else {
					curVal = newVal = this.value();
				}

				switch ( event.keyCode ) {
					case $.ui.keyCode.HOME:
						newVal = this._valueMin();
						break;
					case $.ui.keyCode.END:
						newVal = this._valueMax();
						break;
					case $.ui.keyCode.PAGE_UP:
						newVal = this._trimAlignValue( curVal + ( (this._valueMax() - this._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.PAGE_DOWN:
						newVal = this._trimAlignValue( curVal - ( (this._valueMax() - this._valueMin()) / numPages ) );
						break;
					case $.ui.keyCode.UP:
					case $.ui.keyCode.RIGHT:
						if ( curVal === this._valueMax() ) {
							return;
						}
						newVal = this._trimAlignValue( curVal + step );
						break;
					case $.ui.keyCode.DOWN:
					case $.ui.keyCode.LEFT:
						if ( curVal === this._valueMin() ) {
							return;
						}
						newVal = this._trimAlignValue( curVal - step );
						break;
				}

				this._slide( event, index, newVal );
			},
			click: function( event ) {
				event.preventDefault();
			},
			keyup: function( event ) {
				var index = $( event.target ).data( "ui-slider-handle-index" );

				if ( this._keySliding ) {
					this._keySliding = false;
					this._stop( event, index );
					this._change( event, index );
					$( event.target ).removeClass( "ui-state-active" );
				}
			}
		}

	});

	}(jQuery));

	(function( $ ) {

	function modifier( fn ) {
		return function() {
			var previous = this.element.val();
			fn.apply( this, arguments );
			this._refresh();
			if ( previous !== this.element.val() ) {
				this._trigger( "change" );
			}
		};
	}

	$.widget( "ui.spinner", {
		version: "1.10.3",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: true,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,

			change: null,
			spin: null,
			start: null,
			stop: null
		},

		_create: function() {
			// handle string values that need to be parsed
			this._setOption( "max", this.options.max );
			this._setOption( "min", this.options.min );
			this._setOption( "step", this.options.step );

			// format the value, but don't constrain
			this._value( this.element.val(), true );

			this._draw();
			this._on( this._events );
			this._refresh();

			// turning off autocomplete prevents the browser from remembering the
			// value when navigating through history, so we re-enable autocomplete
			// if the page is unloaded before the widget is destroyed. #7790
			this._on( this.window, {
				beforeunload: function() {
					this.element.removeAttr( "autocomplete" );
				}
			});
		},

		_getCreateOptions: function() {
			var options = {},
				element = this.element;

			$.each( [ "min", "max", "step" ], function( i, option ) {
				var value = element.attr( option );
				if ( value !== undefined && value.length ) {
					options[ option ] = value;
				}
			});

			return options;
		},

		_events: {
			keydown: function( event ) {
				if ( this._start( event ) && this._keydown( event ) ) {
					event.preventDefault();
				}
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val();
			},
			blur: function( event ) {
				if ( this.cancelBlur ) {
					delete this.cancelBlur;
					return;
				}

				this._stop();
				this._refresh();
				if ( this.previous !== this.element.val() ) {
					this._trigger( "change", event );
				}
			},
			mousewheel: function( event, delta ) {
				if ( !delta ) {
					return;
				}
				if ( !this.spinning && !this._start( event ) ) {
					return false;
				}

				this._spin( (delta > 0 ? 1 : -1) * this.options.step, event );
				clearTimeout( this.mousewheelTimer );
				this.mousewheelTimer = this._delay(function() {
					if ( this.spinning ) {
						this._stop( event );
					}
				}, 100 );
				event.preventDefault();
			},
			"mousedown .ui-spinner-button": function( event ) {
				var previous;

				// We never want the buttons to have focus; whenever the user is
				// interacting with the spinner, the focus should be on the input.
				// If the input is focused then this.previous is properly set from
				// when the input first received focus. If the input is not focused
				// then we need to set this.previous based on the value before spinning.
				previous = this.element[0] === this.document[0].activeElement ?
					this.previous : this.element.val();
				function checkFocus() {
					var isActive = this.element[0] === this.document[0].activeElement;
					if ( !isActive ) {
						this.element.focus();
						this.previous = previous;
						// support: IE
						// IE sets focus asynchronously, so we need to check if focus
						// moved off of the input because the user clicked on the button.
						this._delay(function() {
							this.previous = previous;
						});
					}
				}

				// ensure focus is on (or stays on) the text field
				event.preventDefault();
				checkFocus.call( this );

				// support: IE
				// IE doesn't prevent moving focus even with event.preventDefault()
				// so we set a flag to know when we should ignore the blur event
				// and check (again) if focus moved off of the input.
				this.cancelBlur = true;
				this._delay(function() {
					delete this.cancelBlur;
					checkFocus.call( this );
				});

				if ( this._start( event ) === false ) {
					return;
				}

				this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function( event ) {
				// button will add ui-state-active if mouse was down while mouseleave and kept down
				if ( !$( event.currentTarget ).hasClass( "ui-state-active" ) ) {
					return;
				}

				if ( this._start( event ) === false ) {
					return false;
				}
				this._repeat( null, $( event.currentTarget ).hasClass( "ui-spinner-up" ) ? 1 : -1, event );
			},
			// TODO: do we really want to consider this a stop?
			// shouldn't we just stop the repeater and wait until mouseup before
			// we trigger the stop event?
			"mouseleave .ui-spinner-button": "_stop"
		},

		_draw: function() {
			var uiSpinner = this.uiSpinner = this.element
				.addClass( "ui-spinner-input" )
				.attr( "autocomplete", "off" )
				.wrap( this._uiSpinnerHtml() )
				.parent()
					// add buttons
					.append( this._buttonHtml() );

			this.element.attr( "role", "spinbutton" );

			// button bindings
			this.buttons = uiSpinner.find( ".ui-spinner-button" )
				.attr( "tabIndex", -1 )
				.button()
				.removeClass( "ui-corner-all" );

			// IE 6 doesn't understand height: 50% for the buttons
			// unless the wrapper has an explicit height
			if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
					uiSpinner.height() > 0 ) {
				uiSpinner.height( uiSpinner.height() );
			}

			// disable spinner if element was already disabled
			if ( this.options.disabled ) {
				this.disable();
			}
		},

		_keydown: function( event ) {
			var options = this.options,
				keyCode = $.ui.keyCode;

			switch ( event.keyCode ) {
			case keyCode.UP:
				this._repeat( null, 1, event );
				return true;
			case keyCode.DOWN:
				this._repeat( null, -1, event );
				return true;
			case keyCode.PAGE_UP:
				this._repeat( null, options.page, event );
				return true;
			case keyCode.PAGE_DOWN:
				this._repeat( null, -options.page, event );
				return true;
			}

			return false;
		},

		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
		},

		_buttonHtml: function() {
			return "" +
				"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'>" +
					"<span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" +
				"</a>" +
				"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
					"<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" +
				"</a>";
		},

		_start: function( event ) {
			if ( !this.spinning && this._trigger( "start", event ) === false ) {
				return false;
			}

			if ( !this.counter ) {
				this.counter = 1;
			}
			this.spinning = true;
			return true;
		},

		_repeat: function( i, steps, event ) {
			i = i || 500;

			clearTimeout( this.timer );
			this.timer = this._delay(function() {
				this._repeat( 40, steps, event );
			}, i );

			this._spin( steps * this.options.step, event );
		},

		_spin: function( step, event ) {
			var value = this.value() || 0;

			if ( !this.counter ) {
				this.counter = 1;
			}

			value = this._adjustValue( value + step * this._increment( this.counter ) );

			if ( !this.spinning || this._trigger( "spin", event, { value: value } ) !== false) {
				this._value( value );
				this.counter++;
			}
		},

		_increment: function( i ) {
			var incremental = this.options.incremental;

			if ( incremental ) {
				return $.isFunction( incremental ) ?
					incremental( i ) :
					Math.floor( i*i*i/50000 - i*i/500 + 17*i/200 + 1 );
			}

			return 1;
		},

		_precision: function() {
			var precision = this._precisionOf( this.options.step );
			if ( this.options.min !== null ) {
				precision = Math.max( precision, this._precisionOf( this.options.min ) );
			}
			return precision;
		},

		_precisionOf: function( num ) {
			var str = num.toString(),
				decimal = str.indexOf( "." );
			return decimal === -1 ? 0 : str.length - decimal - 1;
		},

		_adjustValue: function( value ) {
			var base, aboveMin,
				options = this.options;

			// make sure we're at a valid step
			// - find out where we are relative to the base (min or 0)
			base = options.min !== null ? options.min : 0;
			aboveMin = value - base;
			// - round to the nearest step
			aboveMin = Math.round(aboveMin / options.step) * options.step;
			// - rounding is based on 0, so adjust back to our base
			value = base + aboveMin;

			// fix precision from bad JS floating point math
			value = parseFloat( value.toFixed( this._precision() ) );

			// clamp the value
			if ( options.max !== null && value > options.max) {
				return options.max;
			}
			if ( options.min !== null && value < options.min ) {
				return options.min;
			}

			return value;
		},

		_stop: function( event ) {
			if ( !this.spinning ) {
				return;
			}

			clearTimeout( this.timer );
			clearTimeout( this.mousewheelTimer );
			this.counter = 0;
			this.spinning = false;
			this._trigger( "stop", event );
		},

		_setOption: function( key, value ) {
			if ( key === "culture" || key === "numberFormat" ) {
				var prevValue = this._parse( this.element.val() );
				this.options[ key ] = value;
				this.element.val( this._format( prevValue ) );
				return;
			}

			if ( key === "max" || key === "min" || key === "step" ) {
				if ( typeof value === "string" ) {
					value = this._parse( value );
				}
			}
			if ( key === "icons" ) {
				this.buttons.first().find( ".ui-icon" )
					.removeClass( this.options.icons.up )
					.addClass( value.up );
				this.buttons.last().find( ".ui-icon" )
					.removeClass( this.options.icons.down )
					.addClass( value.down );
			}

			this._super( key, value );

			if ( key === "disabled" ) {
				if ( value ) {
					this.element.prop( "disabled", true );
					this.buttons.button( "disable" );
				} else {
					this.element.prop( "disabled", false );
					this.buttons.button( "enable" );
				}
			}
		},

		_setOptions: modifier(function( options ) {
			this._super( options );
			this._value( this.element.val() );
		}),

		_parse: function( val ) {
			if ( typeof val === "string" && val !== "" ) {
				val = window.Globalize && this.options.numberFormat ?
					Globalize.parseFloat( val, 10, this.options.culture ) : +val;
			}
			return val === "" || isNaN( val ) ? null : val;
		},

		_format: function( value ) {
			if ( value === "" ) {
				return "";
			}
			return window.Globalize && this.options.numberFormat ?
				Globalize.format( value, this.options.numberFormat, this.options.culture ) :
				value;
		},

		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				// TODO: what should we do with values that can't be parsed?
				"aria-valuenow": this._parse( this.element.val() )
			});
		},

		// update the value without triggering change
		_value: function( value, allowAny ) {
			var parsed;
			if ( value !== "" ) {
				parsed = this._parse( value );
				if ( parsed !== null ) {
					if ( !allowAny ) {
						parsed = this._adjustValue( parsed );
					}
					value = this._format( parsed );
				}
			}
			this.element.val( value );
			this._refresh();
		},

		_destroy: function() {
			this.element
				.removeClass( "ui-spinner-input" )
				.prop( "disabled", false )
				.removeAttr( "autocomplete" )
				.removeAttr( "role" )
				.removeAttr( "aria-valuemin" )
				.removeAttr( "aria-valuemax" )
				.removeAttr( "aria-valuenow" );
			this.uiSpinner.replaceWith( this.element );
		},

		stepUp: modifier(function( steps ) {
			this._stepUp( steps );
		}),
		_stepUp: function( steps ) {
			if ( this._start() ) {
				this._spin( (steps || 1) * this.options.step );
				this._stop();
			}
		},

		stepDown: modifier(function( steps ) {
			this._stepDown( steps );
		}),
		_stepDown: function( steps ) {
			if ( this._start() ) {
				this._spin( (steps || 1) * -this.options.step );
				this._stop();
			}
		},

		pageUp: modifier(function( pages ) {
			this._stepUp( (pages || 1) * this.options.page );
		}),

		pageDown: modifier(function( pages ) {
			this._stepDown( (pages || 1) * this.options.page );
		}),

		value: function( newVal ) {
			if ( !arguments.length ) {
				return this._parse( this.element.val() );
			}
			modifier( this._value ).call( this, newVal );
		},

		widget: function() {
			return this.uiSpinner;
		}
	});

	}( jQuery ) );

	(function( $, undefined ) {

	var tabId = 0,
		rhash = /#.*$/;

	function getNextTabId() {
		return ++tabId;
	}

	function isLocal( anchor ) {
		return anchor.hash.length > 1 &&
			decodeURIComponent( anchor.href.replace( rhash, "" ) ) ===
				decodeURIComponent( location.href.replace( rhash, "" ) );
	}

	$.widget( "ui.tabs", {
		version: "1.10.3",
		delay: 300,
		options: {
			active: null,
			collapsible: false,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,

			// callbacks
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},

		_create: function() {
			var that = this,
				options = this.options;

			this.running = false;

			this.element
				.addClass( "ui-tabs ui-widget ui-widget-content ui-corner-all" )
				.toggleClass( "ui-tabs-collapsible", options.collapsible )
				// Prevent users from focusing disabled tabs via click
				.delegate( ".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function( event ) {
					if ( $( this ).is( ".ui-state-disabled" ) ) {
						event.preventDefault();
					}
				})
				// support: IE <9
				// Preventing the default action in mousedown doesn't prevent IE
				// from focusing the element, so if the anchor gets focused, blur.
				// We don't have to worry about focusing the previously focused
				// element since clicking on a non-focusable element should focus
				// the body anyway.
				.delegate( ".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
					if ( $( this ).closest( "li" ).is( ".ui-state-disabled" ) ) {
						this.blur();
					}
				});

			this._processTabs();
			options.active = this._initialActive();

			// Take disabling tabs via class attribute from HTML
			// into account and update option properly.
			if ( $.isArray( options.disabled ) ) {
				options.disabled = $.unique( options.disabled.concat(
					$.map( this.tabs.filter( ".ui-state-disabled" ), function( li ) {
						return that.tabs.index( li );
					})
				) ).sort();
			}

			// check for length avoids error when initializing empty list
			if ( this.options.active !== false && this.anchors.length ) {
				this.active = this._findActive( options.active );
			} else {
				this.active = $();
			}

			this._refresh();

			if ( this.active.length ) {
				this.load( options.active );
			}
		},

		_initialActive: function() {
			var active = this.options.active,
				collapsible = this.options.collapsible,
				locationHash = location.hash.substring( 1 );

			if ( active === null ) {
				// check the fragment identifier in the URL
				if ( locationHash ) {
					this.tabs.each(function( i, tab ) {
						if ( $( tab ).attr( "aria-controls" ) === locationHash ) {
							active = i;
							return false;
						}
					});
				}

				// check for a tab marked active via a class
				if ( active === null ) {
					active = this.tabs.index( this.tabs.filter( ".ui-tabs-active" ) );
				}

				// no active tab, set to false
				if ( active === null || active === -1 ) {
					active = this.tabs.length ? 0 : false;
				}
			}

			// handle numbers: negative, out of range
			if ( active !== false ) {
				active = this.tabs.index( this.tabs.eq( active ) );
				if ( active === -1 ) {
					active = collapsible ? false : 0;
				}
			}

			// don't allow collapsible: false and active: false
			if ( !collapsible && active === false && this.anchors.length ) {
				active = 0;
			}

			return active;
		},

		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: !this.active.length ? $() : this._getPanelForTab( this.active )
			};
		},

		_tabKeydown: function( event ) {
			/*jshint maxcomplexity:15*/
			var focusedTab = $( this.document[0].activeElement ).closest( "li" ),
				selectedIndex = this.tabs.index( focusedTab ),
				goingForward = true;

			if ( this._handlePageNav( event ) ) {
				return;
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
					selectedIndex++;
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.LEFT:
					goingForward = false;
					selectedIndex--;
					break;
				case $.ui.keyCode.END:
					selectedIndex = this.anchors.length - 1;
					break;
				case $.ui.keyCode.HOME:
					selectedIndex = 0;
					break;
				case $.ui.keyCode.SPACE:
					// Activate only, no collapsing
					event.preventDefault();
					clearTimeout( this.activating );
					this._activate( selectedIndex );
					return;
				case $.ui.keyCode.ENTER:
					// Toggle (cancel delayed activation, allow collapsing)
					event.preventDefault();
					clearTimeout( this.activating );
					// Determine if we should collapse or activate
					this._activate( selectedIndex === this.options.active ? false : selectedIndex );
					return;
				default:
					return;
			}

			// Focus the appropriate tab, based on which key was pressed
			event.preventDefault();
			clearTimeout( this.activating );
			selectedIndex = this._focusNextTab( selectedIndex, goingForward );

			// Navigating with control key will prevent automatic activation
			if ( !event.ctrlKey ) {
				// Update aria-selected immediately so that AT think the tab is already selected.
				// Otherwise AT may confuse the user by stating that they need to activate the tab,
				// but the tab will already be activated by the time the announcement finishes.
				focusedTab.attr( "aria-selected", "false" );
				this.tabs.eq( selectedIndex ).attr( "aria-selected", "true" );

				this.activating = this._delay(function() {
					this.option( "active", selectedIndex );
				}, this.delay );
			}
		},

		_panelKeydown: function( event ) {
			if ( this._handlePageNav( event ) ) {
				return;
			}

			// Ctrl+up moves focus to the current tab
			if ( event.ctrlKey && event.keyCode === $.ui.keyCode.UP ) {
				event.preventDefault();
				this.active.focus();
			}
		},

		// Alt+page up/down moves focus to the previous/next tab (and activates)
		_handlePageNav: function( event ) {
			if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ) {
				this._activate( this._focusNextTab( this.options.active - 1, false ) );
				return true;
			}
			if ( event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ) {
				this._activate( this._focusNextTab( this.options.active + 1, true ) );
				return true;
			}
		},

		_findNextTab: function( index, goingForward ) {
			var lastTabIndex = this.tabs.length - 1;

			function constrain() {
				if ( index > lastTabIndex ) {
					index = 0;
				}
				if ( index < 0 ) {
					index = lastTabIndex;
				}
				return index;
			}

			while ( $.inArray( constrain(), this.options.disabled ) !== -1 ) {
				index = goingForward ? index + 1 : index - 1;
			}

			return index;
		},

		_focusNextTab: function( index, goingForward ) {
			index = this._findNextTab( index, goingForward );
			this.tabs.eq( index ).focus();
			return index;
		},

		_setOption: function( key, value ) {
			if ( key === "active" ) {
				// _activate() will handle invalid values and update this.options
				this._activate( value );
				return;
			}

			if ( key === "disabled" ) {
				// don't use the widget factory's disabled handling
				this._setupDisabled( value );
				return;
			}

			this._super( key, value);

			if ( key === "collapsible" ) {
				this.element.toggleClass( "ui-tabs-collapsible", value );
				// Setting collapsible: false while collapsed; open first panel
				if ( !value && this.options.active === false ) {
					this._activate( 0 );
				}
			}

			if ( key === "event" ) {
				this._setupEvents( value );
			}

			if ( key === "heightStyle" ) {
				this._setupHeightStyle( value );
			}
		},

		_tabId: function( tab ) {
			return tab.attr( "aria-controls" ) || "ui-tabs-" + getNextTabId();
		},

		_sanitizeSelector: function( hash ) {
			return hash ? hash.replace( /[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&" ) : "";
		},

		refresh: function() {
			var options = this.options,
				lis = this.tablist.children( ":has(a[href])" );

			// get disabled tabs from class attribute from HTML
			// this will get converted to a boolean if needed in _refresh()
			options.disabled = $.map( lis.filter( ".ui-state-disabled" ), function( tab ) {
				return lis.index( tab );
			});

			this._processTabs();

			// was collapsed or no tabs
			if ( options.active === false || !this.anchors.length ) {
				options.active = false;
				this.active = $();
			// was active, but active tab is gone
			} else if ( this.active.length && !$.contains( this.tablist[ 0 ], this.active[ 0 ] ) ) {
				// all remaining tabs are disabled
				if ( this.tabs.length === options.disabled.length ) {
					options.active = false;
					this.active = $();
				// activate previous tab
				} else {
					this._activate( this._findNextTab( Math.max( 0, options.active - 1 ), false ) );
				}
			// was active, active tab still exists
			} else {
				// make sure active index is correct
				options.active = this.tabs.index( this.active );
			}

			this._refresh();
		},

		_refresh: function() {
			this._setupDisabled( this.options.disabled );
			this._setupEvents( this.options.event );
			this._setupHeightStyle( this.options.heightStyle );

			this.tabs.not( this.active ).attr({
				"aria-selected": "false",
				tabIndex: -1
			});
			this.panels.not( this._getPanelForTab( this.active ) )
				.hide()
				.attr({
					"aria-expanded": "false",
					"aria-hidden": "true"
				});

			// Make sure one tab is in the tab order
			if ( !this.active.length ) {
				this.tabs.eq( 0 ).attr( "tabIndex", 0 );
			} else {
				this.active
					.addClass( "ui-tabs-active ui-state-active" )
					.attr({
						"aria-selected": "true",
						tabIndex: 0
					});
				this._getPanelForTab( this.active )
					.show()
					.attr({
						"aria-expanded": "true",
						"aria-hidden": "false"
					});
			}
		},

		_processTabs: function() {
			var that = this;

			this.tablist = this._getList()
				.addClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
				.attr( "role", "tablist" );

			this.tabs = this.tablist.find( "> li:has(a[href])" )
				.addClass( "ui-state-default ui-corner-top" )
				.attr({
					role: "tab",
					tabIndex: -1
				});

			this.anchors = this.tabs.map(function() {
					return $( "a", this )[ 0 ];
				})
				.addClass( "ui-tabs-anchor" )
				.attr({
					role: "presentation",
					tabIndex: -1
				});

			this.panels = $();

			this.anchors.each(function( i, anchor ) {
				var selector, panel, panelId,
					anchorId = $( anchor ).uniqueId().attr( "id" ),
					tab = $( anchor ).closest( "li" ),
					originalAriaControls = tab.attr( "aria-controls" );

				// inline tab
				if ( isLocal( anchor ) ) {
					selector = anchor.hash;
					panel = that.element.find( that._sanitizeSelector( selector ) );
				// remote tab
				} else {
					panelId = that._tabId( tab );
					selector = "#" + panelId;
					panel = that.element.find( selector );
					if ( !panel.length ) {
						panel = that._createPanel( panelId );
						panel.insertAfter( that.panels[ i - 1 ] || that.tablist );
					}
					panel.attr( "aria-live", "polite" );
				}

				if ( panel.length) {
					that.panels = that.panels.add( panel );
				}
				if ( originalAriaControls ) {
					tab.data( "ui-tabs-aria-controls", originalAriaControls );
				}
				tab.attr({
					"aria-controls": selector.substring( 1 ),
					"aria-labelledby": anchorId
				});
				panel.attr( "aria-labelledby", anchorId );
			});

			this.panels
				.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
				.attr( "role", "tabpanel" );
		},

		// allow overriding how to find the list for rare usage scenarios (#7715)
		_getList: function() {
			return this.element.find( "ol,ul" ).eq( 0 );
		},

		_createPanel: function( id ) {
			return $( "<div>" )
				.attr( "id", id )
				.addClass( "ui-tabs-panel ui-widget-content ui-corner-bottom" )
				.data( "ui-tabs-destroy", true );
		},

		_setupDisabled: function( disabled ) {
			if ( $.isArray( disabled ) ) {
				if ( !disabled.length ) {
					disabled = false;
				} else if ( disabled.length === this.anchors.length ) {
					disabled = true;
				}
			}

			// disable tabs
			for ( var i = 0, li; ( li = this.tabs[ i ] ); i++ ) {
				if ( disabled === true || $.inArray( i, disabled ) !== -1 ) {
					$( li )
						.addClass( "ui-state-disabled" )
						.attr( "aria-disabled", "true" );
				} else {
					$( li )
						.removeClass( "ui-state-disabled" )
						.removeAttr( "aria-disabled" );
				}
			}

			this.options.disabled = disabled;
		},

		_setupEvents: function( event ) {
			var events = {
				click: function( event ) {
					event.preventDefault();
				}
			};
			if ( event ) {
				$.each( event.split(" "), function( index, eventName ) {
					events[ eventName ] = "_eventHandler";
				});
			}

			this._off( this.anchors.add( this.tabs ).add( this.panels ) );
			this._on( this.anchors, events );
			this._on( this.tabs, { keydown: "_tabKeydown" } );
			this._on( this.panels, { keydown: "_panelKeydown" } );

			this._focusable( this.tabs );
			this._hoverable( this.tabs );
		},

		_setupHeightStyle: function( heightStyle ) {
			var maxHeight,
				parent = this.element.parent();

			if ( heightStyle === "fill" ) {
				maxHeight = parent.height();
				maxHeight -= this.element.outerHeight() - this.element.height();

				this.element.siblings( ":visible" ).each(function() {
					var elem = $( this ),
						position = elem.css( "position" );

					if ( position === "absolute" || position === "fixed" ) {
						return;
					}
					maxHeight -= elem.outerHeight( true );
				});

				this.element.children().not( this.panels ).each(function() {
					maxHeight -= $( this ).outerHeight( true );
				});

				this.panels.each(function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				})
				.css( "overflow", "auto" );
			} else if ( heightStyle === "auto" ) {
				maxHeight = 0;
				this.panels.each(function() {
					maxHeight = Math.max( maxHeight, $( this ).height( "" ).height() );
				}).height( maxHeight );
			}
		},

		_eventHandler: function( event ) {
			var options = this.options,
				active = this.active,
				anchor = $( event.currentTarget ),
				tab = anchor.closest( "li" ),
				clickedIsActive = tab[ 0 ] === active[ 0 ],
				collapsing = clickedIsActive && options.collapsible,
				toShow = collapsing ? $() : this._getPanelForTab( tab ),
				toHide = !active.length ? $() : this._getPanelForTab( active ),
				eventData = {
					oldTab: active,
					oldPanel: toHide,
					newTab: collapsing ? $() : tab,
					newPanel: toShow
				};

			event.preventDefault();

			if ( tab.hasClass( "ui-state-disabled" ) ||
					// tab is already loading
					tab.hasClass( "ui-tabs-loading" ) ||
					// can't switch durning an animation
					this.running ||
					// click on active header, but not collapsible
					( clickedIsActive && !options.collapsible ) ||
					// allow canceling activation
					( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
				return;
			}

			options.active = collapsing ? false : this.tabs.index( tab );

			this.active = clickedIsActive ? $() : tab;
			if ( this.xhr ) {
				this.xhr.abort();
			}

			if ( !toHide.length && !toShow.length ) {
				$.error( "jQuery UI Tabs: Mismatching fragment identifier." );
			}

			if ( toShow.length ) {
				this.load( this.tabs.index( tab ), event );
			}
			this._toggle( event, eventData );
		},

		// handles show/hide for selecting tabs
		_toggle: function( event, eventData ) {
			var that = this,
				toShow = eventData.newPanel,
				toHide = eventData.oldPanel;

			this.running = true;

			function complete() {
				that.running = false;
				that._trigger( "activate", event, eventData );
			}

			function show() {
				eventData.newTab.closest( "li" ).addClass( "ui-tabs-active ui-state-active" );

				if ( toShow.length && that.options.show ) {
					that._show( toShow, that.options.show, complete );
				} else {
					toShow.show();
					complete();
				}
			}

			// start out by hiding, then showing, then completing
			if ( toHide.length && this.options.hide ) {
				this._hide( toHide, this.options.hide, function() {
					eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
					show();
				});
			} else {
				eventData.oldTab.closest( "li" ).removeClass( "ui-tabs-active ui-state-active" );
				toHide.hide();
				show();
			}

			toHide.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			});
			eventData.oldTab.attr( "aria-selected", "false" );
			// If we're switching tabs, remove the old tab from the tab order.
			// If we're opening from collapsed state, remove the previous tab from the tab order.
			// If we're collapsing, then keep the collapsing tab in the tab order.
			if ( toShow.length && toHide.length ) {
				eventData.oldTab.attr( "tabIndex", -1 );
			} else if ( toShow.length ) {
				this.tabs.filter(function() {
					return $( this ).attr( "tabIndex" ) === 0;
				})
				.attr( "tabIndex", -1 );
			}

			toShow.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			});
			eventData.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			});
		},

		_activate: function( index ) {
			var anchor,
				active = this._findActive( index );

			// trying to activate the already active panel
			if ( active[ 0 ] === this.active[ 0 ] ) {
				return;
			}

			// trying to collapse, simulate a click on the current active header
			if ( !active.length ) {
				active = this.active;
			}

			anchor = active.find( ".ui-tabs-anchor" )[ 0 ];
			this._eventHandler({
				target: anchor,
				currentTarget: anchor,
				preventDefault: $.noop
			});
		},

		_findActive: function( index ) {
			return index === false ? $() : this.tabs.eq( index );
		},

		_getIndex: function( index ) {
			// meta-function to give users option to provide a href string instead of a numerical index.
			if ( typeof index === "string" ) {
				index = this.anchors.index( this.anchors.filter( "[href$='" + index + "']" ) );
			}

			return index;
		},

		_destroy: function() {
			if ( this.xhr ) {
				this.xhr.abort();
			}

			this.element.removeClass( "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible" );

			this.tablist
				.removeClass( "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" )
				.removeAttr( "role" );

			this.anchors
				.removeClass( "ui-tabs-anchor" )
				.removeAttr( "role" )
				.removeAttr( "tabIndex" )
				.removeUniqueId();

			this.tabs.add( this.panels ).each(function() {
				if ( $.data( this, "ui-tabs-destroy" ) ) {
					$( this ).remove();
				} else {
					$( this )
						.removeClass( "ui-state-default ui-state-active ui-state-disabled " +
							"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel" )
						.removeAttr( "tabIndex" )
						.removeAttr( "aria-live" )
						.removeAttr( "aria-busy" )
						.removeAttr( "aria-selected" )
						.removeAttr( "aria-labelledby" )
						.removeAttr( "aria-hidden" )
						.removeAttr( "aria-expanded" )
						.removeAttr( "role" );
				}
			});

			this.tabs.each(function() {
				var li = $( this ),
					prev = li.data( "ui-tabs-aria-controls" );
				if ( prev ) {
					li
						.attr( "aria-controls", prev )
						.removeData( "ui-tabs-aria-controls" );
				} else {
					li.removeAttr( "aria-controls" );
				}
			});

			this.panels.show();

			if ( this.options.heightStyle !== "content" ) {
				this.panels.css( "height", "" );
			}
		},

		enable: function( index ) {
			var disabled = this.options.disabled;
			if ( disabled === false ) {
				return;
			}

			if ( index === undefined ) {
				disabled = false;
			} else {
				index = this._getIndex( index );
				if ( $.isArray( disabled ) ) {
					disabled = $.map( disabled, function( num ) {
						return num !== index ? num : null;
					});
				} else {
					disabled = $.map( this.tabs, function( li, num ) {
						return num !== index ? num : null;
					});
				}
			}
			this._setupDisabled( disabled );
		},

		disable: function( index ) {
			var disabled = this.options.disabled;
			if ( disabled === true ) {
				return;
			}

			if ( index === undefined ) {
				disabled = true;
			} else {
				index = this._getIndex( index );
				if ( $.inArray( index, disabled ) !== -1 ) {
					return;
				}
				if ( $.isArray( disabled ) ) {
					disabled = $.merge( [ index ], disabled ).sort();
				} else {
					disabled = [ index ];
				}
			}
			this._setupDisabled( disabled );
		},

		load: function( index, event ) {
			index = this._getIndex( index );
			var that = this,
				tab = this.tabs.eq( index ),
				anchor = tab.find( ".ui-tabs-anchor" ),
				panel = this._getPanelForTab( tab ),
				eventData = {
					tab: tab,
					panel: panel
				};

			// not remote
			if ( isLocal( anchor[ 0 ] ) ) {
				return;
			}

			this.xhr = $.ajax( this._ajaxSettings( anchor, event, eventData ) );

			// support: jQuery <1.8
			// jQuery <1.8 returns false if the request is canceled in beforeSend,
			// but as of 1.8, $.ajax() always returns a jqXHR object.
			if ( this.xhr && this.xhr.statusText !== "canceled" ) {
				tab.addClass( "ui-tabs-loading" );
				panel.attr( "aria-busy", "true" );

				this.xhr
					.success(function( response ) {
						// support: jQuery <1.8
						// http://bugs.jquery.com/ticket/11778
						setTimeout(function() {
							panel.html( response );
							that._trigger( "load", event, eventData );
						}, 1 );
					})
					.complete(function( jqXHR, status ) {
						// support: jQuery <1.8
						// http://bugs.jquery.com/ticket/11778
						setTimeout(function() {
							if ( status === "abort" ) {
								that.panels.stop( false, true );
							}

							tab.removeClass( "ui-tabs-loading" );
							panel.removeAttr( "aria-busy" );

							if ( jqXHR === that.xhr ) {
								delete that.xhr;
							}
						}, 1 );
					});
			}
		},

		_ajaxSettings: function( anchor, event, eventData ) {
			var that = this;
			return {
				url: anchor.attr( "href" ),
				beforeSend: function( jqXHR, settings ) {
					return that._trigger( "beforeLoad", event,
						$.extend( { jqXHR : jqXHR, ajaxSettings: settings }, eventData ) );
				}
			};
		},

		_getPanelForTab: function( tab ) {
			var id = $( tab ).attr( "aria-controls" );
			return this.element.find( this._sanitizeSelector( "#" + id ) );
		}
	});

	})( jQuery );

	(function( $ ) {

	var increments = 0;

	function addDescribedBy( elem, id ) {
		var describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ );
		describedby.push( id );
		elem
			.data( "ui-tooltip-id", id )
			.attr( "aria-describedby", $.trim( describedby.join( " " ) ) );
	}

	function removeDescribedBy( elem ) {
		var id = elem.data( "ui-tooltip-id" ),
			describedby = (elem.attr( "aria-describedby" ) || "").split( /\s+/ ),
			index = $.inArray( id, describedby );
		if ( index !== -1 ) {
			describedby.splice( index, 1 );
		}

		elem.removeData( "ui-tooltip-id" );
		describedby = $.trim( describedby.join( " " ) );
		if ( describedby ) {
			elem.attr( "aria-describedby", describedby );
		} else {
			elem.removeAttr( "aria-describedby" );
		}
	}

	$.widget( "ui.tooltip", {
		version: "1.10.3",
		options: {
			content: function() {
				// support: IE<9, Opera in jQuery <1.7
				// .text() can't accept undefined, so coerce to a string
				var title = $( this ).attr( "title" ) || "";
				// Escape title, since we're going from an attribute to raw HTML
				return $( "<a>" ).text( title ).html();
			},
			hide: true,
			// Disabled elements have inconsistent behavior across browsers (#8661)
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: true,
			tooltipClass: null,
			track: false,

			// callbacks
			close: null,
			open: null
		},

		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			});

			// IDs of generated tooltips, needed for destroy
			this.tooltips = {};
			// IDs of parent tooltips where we removed the title attribute
			this.parents = {};

			if ( this.options.disabled ) {
				this._disable();
			}
		},

		_setOption: function( key, value ) {
			var that = this;

			if ( key === "disabled" ) {
				this[ value ? "_disable" : "_enable" ]();
				this.options[ key ] = value;
				// disable element style changes
				return;
			}

			this._super( key, value );

			if ( key === "content" ) {
				$.each( this.tooltips, function( id, element ) {
					that._updateContent( element );
				});
			}
		},

		_disable: function() {
			var that = this;

			// close open tooltips
			$.each( this.tooltips, function( id, element ) {
				var event = $.Event( "blur" );
				event.target = event.currentTarget = element[0];
				that.close( event, true );
			});

			// remove title attributes to prevent native tooltips
			this.element.find( this.options.items ).addBack().each(function() {
				var element = $( this );
				if ( element.is( "[title]" ) ) {
					element
						.data( "ui-tooltip-title", element.attr( "title" ) )
						.attr( "title", "" );
				}
			});
		},

		_enable: function() {
			// restore title attributes
			this.element.find( this.options.items ).addBack().each(function() {
				var element = $( this );
				if ( element.data( "ui-tooltip-title" ) ) {
					element.attr( "title", element.data( "ui-tooltip-title" ) );
				}
			});
		},

		open: function( event ) {
			var that = this,
				target = $( event ? event.target : this.element )
					// we need closest here due to mouseover bubbling,
					// but always pointing at the same event target
					.closest( this.options.items );

			// No element to show a tooltip for or the tooltip is already open
			if ( !target.length || target.data( "ui-tooltip-id" ) ) {
				return;
			}

			if ( target.attr( "title" ) ) {
				target.data( "ui-tooltip-title", target.attr( "title" ) );
			}

			target.data( "ui-tooltip-open", true );

			// kill parent tooltips, custom or native, for hover
			if ( event && event.type === "mouseover" ) {
				target.parents().each(function() {
					var parent = $( this ),
						blurEvent;
					if ( parent.data( "ui-tooltip-open" ) ) {
						blurEvent = $.Event( "blur" );
						blurEvent.target = blurEvent.currentTarget = this;
						that.close( blurEvent, true );
					}
					if ( parent.attr( "title" ) ) {
						parent.uniqueId();
						that.parents[ this.id ] = {
							element: this,
							title: parent.attr( "title" )
						};
						parent.attr( "title", "" );
					}
				});
			}

			this._updateContent( target, event );
		},

		_updateContent: function( target, event ) {
			var content,
				contentOption = this.options.content,
				that = this,
				eventType = event ? event.type : null;

			if ( typeof contentOption === "string" ) {
				return this._open( event, target, contentOption );
			}

			content = contentOption.call( target[0], function( response ) {
				// ignore async response if tooltip was closed already
				if ( !target.data( "ui-tooltip-open" ) ) {
					return;
				}
				// IE may instantly serve a cached response for ajax requests
				// delay this call to _open so the other call to _open runs first
				that._delay(function() {
					// jQuery creates a special event for focusin when it doesn't
					// exist natively. To improve performance, the native event
					// object is reused and the type is changed. Therefore, we can't
					// rely on the type being correct after the event finished
					// bubbling, so we set it back to the previous value. (#8740)
					if ( event ) {
						event.type = eventType;
					}
					this._open( event, target, response );
				});
			});
			if ( content ) {
				this._open( event, target, content );
			}
		},

		_open: function( event, target, content ) {
			var tooltip, events, delayedShow,
				positionOption = $.extend( {}, this.options.position );

			if ( !content ) {
				return;
			}

			// Content can be updated multiple times. If the tooltip already
			// exists, then just update the content and bail.
			tooltip = this._find( target );
			if ( tooltip.length ) {
				tooltip.find( ".ui-tooltip-content" ).html( content );
				return;
			}

			// if we have a title, clear it to prevent the native tooltip
			// we have to check first to avoid defining a title if none exists
			// (we don't want to cause an element to start matching [title])
			//
			// We use removeAttr only for key events, to allow IE to export the correct
			// accessible attributes. For mouse events, set to empty string to avoid
			// native tooltip showing up (happens only when removing inside mouseover).
			if ( target.is( "[title]" ) ) {
				if ( event && event.type === "mouseover" ) {
					target.attr( "title", "" );
				} else {
					target.removeAttr( "title" );
				}
			}

			tooltip = this._tooltip( target );
			addDescribedBy( target, tooltip.attr( "id" ) );
			tooltip.find( ".ui-tooltip-content" ).html( content );

			function position( event ) {
				positionOption.of = event;
				if ( tooltip.is( ":hidden" ) ) {
					return;
				}
				tooltip.position( positionOption );
			}
			if ( this.options.track && event && /^mouse/.test( event.type ) ) {
				this._on( this.document, {
					mousemove: position
				});
				// trigger once to override element-relative positioning
				position( event );
			} else {
				tooltip.position( $.extend({
					of: target
				}, this.options.position ) );
			}

			tooltip.hide();

			this._show( tooltip, this.options.show );
			// Handle tracking tooltips that are shown with a delay (#8644). As soon
			// as the tooltip is visible, position the tooltip using the most recent
			// event.
			if ( this.options.show && this.options.show.delay ) {
				delayedShow = this.delayedShow = setInterval(function() {
					if ( tooltip.is( ":visible" ) ) {
						position( positionOption.of );
						clearInterval( delayedShow );
					}
				}, $.fx.interval );
			}

			this._trigger( "open", event, { tooltip: tooltip } );

			events = {
				keyup: function( event ) {
					if ( event.keyCode === $.ui.keyCode.ESCAPE ) {
						var fakeEvent = $.Event(event);
						fakeEvent.currentTarget = target[0];
						this.close( fakeEvent, true );
					}
				},
				remove: function() {
					this._removeTooltip( tooltip );
				}
			};
			if ( !event || event.type === "mouseover" ) {
				events.mouseleave = "close";
			}
			if ( !event || event.type === "focusin" ) {
				events.focusout = "close";
			}
			this._on( true, target, events );
		},

		close: function( event ) {
			var that = this,
				target = $( event ? event.currentTarget : this.element ),
				tooltip = this._find( target );

			// disabling closes the tooltip, so we need to track when we're closing
			// to avoid an infinite loop in case the tooltip becomes disabled on close
			if ( this.closing ) {
				return;
			}

			// Clear the interval for delayed tracking tooltips
			clearInterval( this.delayedShow );

			// only set title if we had one before (see comment in _open())
			if ( target.data( "ui-tooltip-title" ) ) {
				target.attr( "title", target.data( "ui-tooltip-title" ) );
			}

			removeDescribedBy( target );

			tooltip.stop( true );
			this._hide( tooltip, this.options.hide, function() {
				that._removeTooltip( $( this ) );
			});

			target.removeData( "ui-tooltip-open" );
			this._off( target, "mouseleave focusout keyup" );
			// Remove 'remove' binding only on delegated targets
			if ( target[0] !== this.element[0] ) {
				this._off( target, "remove" );
			}
			this._off( this.document, "mousemove" );

			if ( event && event.type === "mouseleave" ) {
				$.each( this.parents, function( id, parent ) {
					$( parent.element ).attr( "title", parent.title );
					delete that.parents[ id ];
				});
			}

			this.closing = true;
			this._trigger( "close", event, { tooltip: tooltip } );
			this.closing = false;
		},

		_tooltip: function( element ) {
			var id = "ui-tooltip-" + increments++,
				tooltip = $( "<div>" )
					.attr({
						id: id,
						role: "tooltip"
					})
					.addClass( "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
						( this.options.tooltipClass || "" ) );
			$( "<div>" )
				.addClass( "ui-tooltip-content" )
				.appendTo( tooltip );
			tooltip.appendTo( this.document[0].body );
			this.tooltips[ id ] = element;
			return tooltip;
		},

		_find: function( target ) {
			var id = target.data( "ui-tooltip-id" );
			return id ? $( "#" + id ) : $();
		},

		_removeTooltip: function( tooltip ) {
			tooltip.remove();
			delete this.tooltips[ tooltip.attr( "id" ) ];
		},

		_destroy: function() {
			var that = this;

			// close open tooltips
			$.each( this.tooltips, function( id, element ) {
				// Delegate to close method to handle common cleanup
				var event = $.Event( "blur" );
				event.target = event.currentTarget = element[0];
				that.close( event, true );

				// Remove immediately; destroying an open tooltip doesn't use the
				// hide animation
				$( "#" + id ).remove();

				// Restore the title
				if ( element.data( "ui-tooltip-title" ) ) {
					element.attr( "title", element.data( "ui-tooltip-title" ) );
					element.removeData( "ui-tooltip-title" );
				}
			});
		}
	});

	}( jQuery ) );


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! svg.js v2.3.0 MIT*/;!function(t,e){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e(t,t.document)}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){return t instanceof e}function n(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function r(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function o(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function h(t,e,i){return null==i?i=t.height/t.width*e:null==e&&(e=t.width/t.height*i),{width:e,height:i}}function u(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function l(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function c(t){return t instanceof v.Matrix||(t=new v.Matrix(t)),t}function f(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function d(t){return t=t.replace(v.regex.whitespace,"").replace(v.regex.matrix,"").split(v.regex.matrixElements),l(v.utils.map(t,function(t){return parseFloat(t)}))}function p(t){for(var e=0,i=t.length,n="";i>e;e++)n+=t[e][0],null!=t[e][1]&&(n+=t[e][1],null!=t[e][2]&&(n+=" ",n+=t[e][2],null!=t[e][3]&&(n+=" ",n+=t[e][3],n+=" ",n+=t[e][4],null!=t[e][5]&&(n+=" ",n+=t[e][5],n+=" ",n+=t[e][6],null!=t[e][7]&&(n+=" ",n+=t[e][7])))));return n+" "}function m(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e]instanceof SVGElement&&m(t.childNodes[e]);return v.adopt(t).id(v.eid(t.nodeName))}function x(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function g(t){var e=t.toString().match(v.regex.reference);return e?e[1]:void 0}var v=this.SVG=function(t){return v.supported?(t=new v.Doc(t),v.parser||v.prepare(t),t):void 0};if(v.ns="http://www.w3.org/2000/svg",v.xmlns="http://www.w3.org/2000/xmlns/",v.xlink="http://www.w3.org/1999/xlink",v.svgjs="http://svgjs.com/svgjs",v.supported=function(){return!!e.createElementNS&&!!e.createElementNS(v.ns,"svg").createSVGRect}(),!v.supported)return!1;v.did=1e3,v.eid=function(t){return"Svgjs"+s(t)+v.did++},v.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},v.extend=function(){var t,e,i,n;for(t=[].slice.call(arguments),e=t.pop(),n=t.length-1;n>=0;n--)if(t[n])for(i in e)t[n].prototype[i]=e[i];v.Set&&v.Set.inherit&&v.Set.inherit()},v.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,v.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&v.extend(e,t.extend),t.construct&&v.extend(t.parent||v.Container,t.construct),e},v.adopt=function(t){if(!t)return null;if(t.instance)return t.instance;var e;return e="svg"==t.nodeName?t.parentNode instanceof SVGElement?new v.Nested:new v.Doc:"linearGradient"==t.nodeName?new v.Gradient("linear"):"radialGradient"==t.nodeName?new v.Gradient("radial"):v[s(t.nodeName)]?new(v[s(t.nodeName)]):new v.Element(t),e.type=t.nodeName,e.node=t,t.instance=e,e instanceof v.Doc&&e.namespace().defs(),e.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),e},v.prepare=function(t){var i=e.getElementsByTagName("body")[0],n=(i?new v.Doc(i):t.nested()).size(2,0),r=v.create("path");n.node.appendChild(r),v.parser={body:i||t.parent(),draw:n.style("opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"),poly:n.polyline().node,path:r}},v.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,matrix:/matrix\(|\)/g,matrixElements:/,*\s+|,/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,negExp:/e\-/gi,comma:/,/g,hyphen:/\-/g,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,whitespaces:/\s+/,X:/X/g},v.utils={map:function(t,e){var i,n=t.length,r=[];for(i=0;n>i;i++)r.push(e(t[i]));return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(t){return[].filter.call(t,function(t){return t instanceof SVGElement})}},v.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},v.Color=function(t){var e;this.r=0,this.g=0,this.b=0,"string"==typeof t?v.regex.isRgb.test(t)?(e=v.regex.rgb.exec(t.replace(/\s/g,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):v.regex.isHex.test(t)&&(e=v.regex.hex.exec(a(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b)},v.extend(v.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+o(this.r)+o(this.g)+o(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new v.Color(t),this},at:function(t){return this.destination?(t=0>t?0:t>1?1:t,new v.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),v.Color.test=function(t){return t+="",v.regex.isHex.test(t)||v.regex.isRgb.test(t)},v.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},v.Color.isColor=function(t){return v.Color.isRgb(t)||v.Color.test(t)},v.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},v.extend(v.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];e>t;t++)-1==i.indexOf(this.value[t])&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];i>e;e++)n.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new v.Array(n)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(/\s+/)},reverse:function(){return this.value.reverse(),this}}),v.PointArray=function(t,e){this.constructor.call(this,t,e||[[0,0]])},v.PointArray.prototype=new v.Array,v.extend(v.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];e>t;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];i>e;e++)n.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new v.PointArray(n)},parse:function(t){if(t=t.valueOf(),Array.isArray(t))return t;t=this.split(t);for(var e,i=0,n=t.length,r=[];n>i;i++)e=t[i].split(","),r.push([parseFloat(e[0]),parseFloat(e[1])]);return r},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n=this.value.length-1;n>=0;n--)this.value[n]=[this.value[n][0]+t,this.value[n][1]+e];return this},size:function(t,e){var i,n=this.bbox();for(i=this.value.length-1;i>=0;i--)this.value[i][0]=(this.value[i][0]-n.x)*t/n.width+n.x,this.value[i][1]=(this.value[i][1]-n.y)*e/n.height+n.y;return this},bbox:function(){return v.parser.poly.setAttribute("points",this.toString()),v.parser.poly.getBBox()}}),v.PathArray=function(t,e){this.constructor.call(this,t,e||[["M",0,0]])},v.PathArray.prototype=new v.Array,v.extend(v.PathArray,{toString:function(){return p(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n,r=this.value.length-1;r>=0;r--)n=this.value[r][0],"M"==n||"L"==n||"T"==n?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==n?this.value[r][1]+=t:"V"==n?this.value[r][1]+=e:"C"==n||"S"==n||"Q"==n?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==n&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==n&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var i,n,r=this.bbox();for(i=this.value.length-1;i>=0;i--)n=this.value[i][0],"M"==n||"L"==n||"T"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y):"H"==n?this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x:"V"==n?this.value[i][1]=(this.value[i][1]-r.y)*e/r.height+r.y:"C"==n||"S"==n||"Q"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y,this.value[i][3]=(this.value[i][3]-r.x)*t/r.width+r.x,this.value[i][4]=(this.value[i][4]-r.y)*e/r.height+r.y,"C"==n&&(this.value[i][5]=(this.value[i][5]-r.x)*t/r.width+r.x,this.value[i][6]=(this.value[i][6]-r.y)*e/r.height+r.y)):"A"==n&&(this.value[i][1]=this.value[i][1]*t/r.width,this.value[i][2]=this.value[i][2]*e/r.height,this.value[i][6]=(this.value[i][6]-r.x)*t/r.width+r.x,this.value[i][7]=(this.value[i][7]-r.y)*e/r.height+r.y);return this},parse:function(t){if(t instanceof v.PathArray)return t.valueOf();var e,i,n,r,s,a,o=0,h=0,u={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7};if("string"==typeof t){for(t=t.replace(v.regex.negExp,"X").replace(v.regex.pathLetters," $& ").replace(v.regex.hyphen," -").replace(v.regex.comma," ").replace(v.regex.X,"e-").trim().split(v.regex.whitespaces),e=t.length;--e;)if(t[e].indexOf(".")!=t[e].lastIndexOf(".")){var l=t[e].split("."),c=[l.shift(),l.shift()].join(".");t.splice.apply(t,[e,1].concat(c,l.map(function(t){return"."+t})))}}else t=t.reduce(function(t,e){return[].concat.apply(t,e)},[]);var a=[];do{for(v.regex.isPathLetter.test(t[0])?(r=t[0],t.shift()):"M"==r?r="L":"m"==r&&(r="l"),s=[r.toUpperCase()],e=0;e<u[s[0]];++e)s.push(parseFloat(t.shift()));r==s[0]?"M"==r||"L"==r||"C"==r||"Q"==r?(o=s[u[s[0]]-1],h=s[u[s[0]]]):"V"==r?h=s[1]:"H"==r?o=s[1]:"A"==r&&(o=s[6],h=s[7]):"m"==r||"l"==r||"c"==r||"s"==r||"q"==r||"t"==r?(s[1]+=o,s[2]+=h,null!=s[3]&&(s[3]+=o,s[4]+=h),null!=s[5]&&(s[5]+=o,s[6]+=h),o=s[u[s[0]]-1],h=s[u[s[0]]]):"v"==r?(s[1]+=h,h=s[1]):"h"==r?(s[1]+=o,o=s[1]):"a"==r&&(s[6]+=o,s[7]+=h,o=s[6],h=s[7]),"M"==s[0]&&(i=o,n=h),"Z"==s[0]&&(o=i,h=n),a.push(s)}while(t.length);return a},bbox:function(){return v.parser.path.setAttribute("d",this.toString()),v.parser.path.getBBox()}}),v.Number=v.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:0>t?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(v.regex.numberAndUnit),e&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5])):t instanceof v.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return new v.Number(this+new v.Number(t),this.unit)},minus:function(t){return this.plus(-new v.Number(t))},times:function(t){return new v.Number(this*new v.Number(t),this.unit)},divide:function(t){return new v.Number(this/new v.Number(t),this.unit)},to:function(t){var e=new v.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new v.Number(t),this},at:function(t){return this.destination?new v.Number(this.destination).minus(this).times(t).plus(this):this}}}),v.ViewBox=v.invent({create:function(t){var e,i,n,r,s,a,o,h,u=[1,0,0,1],l=1,c=1,f=/-?[\d\.]+/g;if(t instanceof v.Element){for(o=t,h=t,a=(t.attr("viewBox")||"").match(f),s=t.bbox,n=new v.Number(t.width()),r=new v.Number(t.height());"%"==n.unit;)l*=n.value,n=new v.Number(o instanceof v.Doc?o.parent().offsetWidth:o.parent().width()),o=o.parent();for(;"%"==r.unit;)c*=r.value,r=new v.Number(h instanceof v.Doc?h.parent().offsetHeight:h.parent().height()),h=h.parent();this.x=0,this.y=0,this.width=n*l,this.height=r*c,this.zoom=1,a&&(e=parseFloat(a[0]),i=parseFloat(a[1]),n=parseFloat(a[2]),r=parseFloat(a[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=e,this.y=i,this.width=n,this.height=r)}else t="string"==typeof t?t.match(f).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):u,this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t){var t=1==arguments.length?[t.x,t.y,t.width,t.height]:[].slice.call(arguments);return this.destination=new v.ViewBox(t),this},at:function(t){return this.destination?new v.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}}}),v.Element=v.invent({create:function(t){this._stroke=v.defaults.attrs.stroke,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=h(this.bbox(),t,e);return this.width(new v.Number(i.width)).height(new v.Number(i.height))},clone:function(){var t=m(this.node.cloneNode(!0));return this.after(t),t},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(/\s+/)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return v.get(this.attr(t))},parent:function(t){var e=this;if(!e.node.parentNode)return null;if(e=v.adopt(e.node.parentNode),!t)return e;for(;e&&e.node instanceof SVGElement;){if("string"==typeof t?e.matches(t):e instanceof t)return e;e=v.adopt(e.node.parentNode)}},doc:function(){return this instanceof v.Doc?this:this.parent(v.Doc)},parents:function(t){var e=[],i=this;do{if(i=i.parent(t),!i||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return n(this.node,t)},"native":function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof v.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var n=0,r=i.firstChild.childNodes.length;r>n;n++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){var t=this.each?this:this.lines();t.each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return i(this,t)}}}),v.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return-Math.cos(t*Math.PI/2)+1}},v.morph=function(t,e){return new MorphObj(t,e).at(pos)},v.Situation=v.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new v.Number(t.duration).valueOf(),this.delay=new v.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=!1,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),v.Delay=function(t){this.delay=new v.Number(t).valueOf()},v.FX=v.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0},extend:{animate:function(t,e,i){"object"==typeof t&&(e=t.ease,i=t.delay,t=t.duration);var n=new v.Situation({duration:t||1e3,delay:i||0,ease:v.easing[e||"-"]||e});return this.queue(n),this},delay:function(t){var t=new v.Delay(t);return this.queue(t)},target:function(t){return t&&t instanceof v.Element?(this._target=t,this):this._target},timeToPos:function(t){return(t-this.situation.start)/this.situation.duration},posToTime:function(t){return this.situation.duration*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.situation.start=+new Date+this.situation.delay,this.situation.finish=this.situation.start+this.situation.duration,this.initAnimations(),this.active=!0,this.startAnimFrame()),this},queue:function(t){return("function"==typeof t||t instanceof v.Situation||t instanceof v.Delay)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){if(this.situation&&this.situation.stop&&this.situation.stop(),this.situation=this.situations.shift(),this.situation){var t=function(){this.situation instanceof v.Situation?this.initAnimations().at(0):this.situation instanceof v.Delay?this.dequeue():this.situation.call(this)}.bind(this);this.situation.delay?setTimeout(function(){t()},this.situation.delay):t()}return this},initAnimations:function(){var t,e=this.situation;if(e.init)return this;for(t in e.animations)"viewbox"==t?e.animations[t]=this.target().viewbox().morph(e.animations[t]):(e.animations[t].value="plot"==t?this.target().array().value:this.target()[t](),e.animations[t].value.value&&(e.animations[t].value=e.animations[t].value.value),e.animations[t].relative&&(e.animations[t].destination.value=e.animations[t].destination.value+e.animations[t].value));for(t in e.attrs)if(e.attrs[t]instanceof v.Color){var i=new v.Color(this.target().attr(t));e.attrs[t].r=i.r,e.attrs[t].g=i.g,e.attrs[t].b=i.b}else e.attrs[t].value=this.target().attr(t);for(t in e.styles)e.styles[t].value=this.target().style(t);return e.initialTransformation=this.target().matrixify(),e.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){return this.active||this.start(),e&&this.clearQueue(),this.active=!1,t&&(this.situation.loop=!1,this.situation.loops%2==0&&this.situation.reversing&&(this.situation.reversed=!0),this.at(1)),this.stopAnimFrame(),clearTimeout(this.timeout),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.at(0)}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},at:function(t){return this.pos=t,this.situation.start=+new Date-t*this.situation.duration,this.situation.finish=this.situation.start+this.situation.duration,this.step(!0)},speed:function(t){return this.situation.duration=this.situation.duration*this.pos+(1-this.pos)*this.situation.duration/t,this.situation.finish=this.situation.start+this.situation.duration,this.at(this.pos)},loop:function(t,e){return this.situation.loop=this.situation.loops=t||!0,e&&(this.last().reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),clearTimeout(this.timeout),this},play:function(){return this.paused?(this.paused=!1,this.at(this.pos)):this},reverse:function(t){var e=this.last();return e.reversed="undefined"==typeof t?!e.reversed:t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last(),i=function n(i){i.detail.situation==e&&(t.call(this,e),this.off("finished.fx",n))};return this.target().on("finished.fx",i),this},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,v.morph,i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)})},afterAll:function(t){var e=function i(){t.call(this),this.off("allfinished.fx",i)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,v.morph,e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)})},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,setTimeout(function(){this.start()}.bind(this),0),this},step:function(t){if(t||(this.pos=this.timeToPos(+new Date)),this.pos>=1&&(this.situation.loop===!0||"number"==typeof this.situation.loop&&--this.situation.loop))return this.situation.reversing&&(this.situation.reversed=!this.situation.reversed),this.at(this.pos-1);this.situation.reversed&&(this.pos=1-this.pos),this.pos>1&&(this.pos=1),this.pos<0&&(this.pos=0);var e=this.situation.ease(this.pos);for(var i in this.situation.once)i>this.lastPos&&e>=i&&(this.situation.once[i].call(this.target(),this.pos,e),delete this.situation.once[i]);return this.active&&this.target().fire("during",{pos:this.pos,eased:e,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.target().off(".fx"),this.active=!1),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=e,this):this},eachAt:function(){var t,e,i=this,n=this.target(),r=this.situation;for(t in r.animations)e=[].concat(r.animations[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n[t].apply(n,e);for(t in r.attrs)e=[t].concat(r.attrs[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n.attr.apply(n,e);for(t in r.styles)e=[t].concat(r.styles[t]).map(function(t){return t.at?t.at(r.ease(i.pos),i.pos):t}),n.style.apply(n,e);if(r.transforms.length){e=r.initialTransformation;for(t in r.transforms){var s=r.transforms[t];s instanceof v.Matrix?e=s.relative?e.multiply(s.at(r.ease(this.pos))):e.morph(s).at(r.ease(this.pos)):(s.relative||s.undo(e.extract()),e=e.multiply(s.at(r.ease(this.pos))))}n.matrix(e)}return this},once:function(t,e,i){return i||(t=this.situation.ease(t)),this.situation.once[t]=e,this}},parent:v.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new v.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new v.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this}}}),v.MorphObj=v.invent({create:function(t,e){return v.Color.isColor(e)?new v.Color(t).morph(e):v.regex.numberAndUnit.test(e)?new v.Number(t).morph(e):(this.value=0,this.destination=e,void 0)},extend:{at:function(t,e){return 1>e?this.value:this.destination},valueOf:function(){return this.value}}}),v.extend(v.FX,{attr:function(t,e){if("object"==typeof t)for(var i in t)this.attr(i,t[i]);else this.add(t,new v.MorphObj(null,e),"attrs");return this},style:function(t,e){if("object"==typeof t)for(var i in t)this.style(i,t[i]);else this.add(t,new v.MorphObj(null,e),"styles");return this},x:function(t,e){if(this.target()instanceof v.G)return this.transform({x:t},e),this;var i=(new v.Number).morph(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof v.G)return this.transform({y:t},e),this;var i=(new v.Number).morph(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",(new v.Number).morph(t))},cy:function(t){return this.add("cy",(new v.Number).morph(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target()instanceof v.Text)this.attr("font-size",t);else{var i;t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",(new v.Number).morph(t)).add("height",(new v.Number).morph(e))}return this},plot:function(t){return this.add("plot",this.target().array().morph(t))},leading:function(t){return this.target().leading?this.add("leading",(new v.Number).morph(t)):this},viewbox:function(t,e,i,n){return this.target()instanceof v.Container&&this.add("viewbox",new v.ViewBox(t,e,i,n)),this},update:function(t){if(this.target()instanceof v.Stop){if("number"==typeof t||t instanceof v.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),v.BBox=v.invent({create:function(t){if(t){var e;try{e=t.node.getBBox()}catch(i){if(t instanceof v.Shape){var n=t.clone().addTo(v.parser.draw);e=n.bbox(),n.remove()}else e={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height}x(this)},parent:v.Element,construct:{bbox:function(){return new v.BBox(this)}}}),v.TBox=v.invent({create:function(t){if(t){var e=t.ctm().extract(),i=t.bbox();this.width=i.width*e.scaleX,this.height=i.height*e.scaleY,this.x=i.x+e.x,this.y=i.y+e.y}x(this)},parent:v.Element,construct:{tbox:function(){return new v.TBox(this)}}}),v.RBox=v.invent({create:function(e){if(e){var i=e.doc().parent(),n=e.node.getBoundingClientRect(),r=1;for(this.x=n.left,this.y=n.top,this.x-=i.offsetLeft,this.y-=i.offsetTop;i=i.offsetParent;)this.x-=i.offsetLeft,this.y-=i.offsetTop;for(i=e;i.parent&&(i=i.parent());)i.viewbox&&(r*=i.viewbox().zoom,this.x-=i.x()||0,this.y-=i.y()||0);this.width=n.width/=r,this.height=n.height/=r}x(this),this.x+=t.pageXOffset,this.y+=t.pageYOffset},parent:v.Element,construct:{rbox:function(){return new v.RBox(this)}}}),[v.BBox,v.TBox,v.RBox].forEach(function(t){v.extend(t,{merge:function(e){var i=new t;return i.x=Math.min(this.x,e.x),i.y=Math.min(this.y,e.y),i.width=Math.max(this.x+this.width,e.x+e.width)-i.x,i.height=Math.max(this.y+this.height,e.y+e.height)-i.y,x(i)}})}),v.Matrix=v.invent({create:function(t){var e,i=l([1,0,0,1,0,0]);for(t=t instanceof v.Element?t.matrixify():"string"==typeof t?d(t):6==arguments.length?l([].slice.call(arguments)):"object"==typeof t?t:i,e=w.length-1;e>=0;--e)this[w[e]]=t&&"number"==typeof t[w[e]]?t[w[e]]:i[w[e]]},extend:{extract:function(){var t=u(this,0,1),e=u(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new v.Matrix(this)}},clone:function(){return new v.Matrix(this)},morph:function(t){return this.destination=new v.Matrix(t),this},at:function(t){if(!this.destination)return this;var e=new v.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t});if(this.param&&this.param.to){var i={rotation:this.param.from.rotation+(this.param.to.rotation-this.param.from.rotation)*t,cx:this.param.from.cx,cy:this.param.from.cy};e=e.rotate((this.param.to.rotation-2*this.param.from.rotation)*t,i.cx,i.cy),e.param=i}return e},multiply:function(t){return new v.Matrix(this.native().multiply(c(t).native()))},inverse:function(){return new v.Matrix(this.native().inverse())},translate:function(t,e){return new v.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,n){return(1==arguments.length||3==arguments.length)&&(e=t),3==arguments.length&&(n=i,i=e),this.around(i,n,new v.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=v.utils.radians(t),this.around(e,i,new v.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):this.scale(1,-1,0,e)},skew:function(t,e,i,n){return this.around(i,n,this.native().skewX(t||0).skewY(e||0))},skewX:function(t,e,i){return this.around(e,i,this.native().skewX(t||0))},skewY:function(t,e,i){return this.around(e,i,this.native().skewY(t||0))},around:function(t,e,i){return this.multiply(new v.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new v.Matrix(1,0,0,1,-t||0,-e||0))},"native":function(){for(var t=v.parser.draw.node.createSVGMatrix(),e=w.length-1;e>=0;e--)t[w[e]]=this[w[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:v.Element,construct:{ctm:function(){return new v.Matrix(this.node.getCTM())},screenCTM:function(){return new v.Matrix(this.node.getScreenCTM())}}}),v.Point=v.invent({create:function(t,e){var i,n={x:0,y:0};i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=e?{x:t,y:e}:n,this.x=i.x,this.y=i.y},extend:{clone:function(){return new v.Point(this)},morph:function(t){return this.destination=new v.Point(t),this},at:function(t){if(!this.destination)return this;var e=new v.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t});return e},"native":function(){var t=v.parser.draw.node.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new v.Point(this.native().matrixTransform(t.native()))}}}),v.extend(v.Element,{point:function(t,e){return new v.Point(t,e).transform(this.screenCTM().inverse())}}),v.extend(v.Element,{attr:function(t,e,i){if(null==t){for(t={},e=this.node.attributes,i=e.length-1;i>=0;i--)t[e[i].nodeName]=v.regex.isNumber.test(e[i].nodeValue)?parseFloat(e[i].nodeValue):e[i].nodeValue;
	return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?v.defaults.attrs[t]:v.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),("fill"==t||"stroke"==t)&&(v.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof v.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new v.Number(e):v.Color.isColor(e)?e=new v.Color(e):Array.isArray(e)?e=new v.Array(e):e instanceof v.Matrix&&e.param&&(this.param=e.param),"leading"==t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),v.extend(v.Element,{transform:function(t,e){var i,n=this;if("object"!=typeof t)return i=new v.Matrix(n).extract(),"string"==typeof t?i[t]:i;if(i=new v.Matrix(n),e=!!e||!!t.relative,null!=t.a)i=e?i.multiply(new v.Matrix(t)):new v.Matrix(t);else if(null!=t.rotation)f(t,n),i=e?i.rotate(t.rotation,t.cx,t.cy):i.rotate(t.rotation-i.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(f(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var r=i.extract();t.scaleX=1*t.scaleX/r.scaleX,t.scaleY=1*t.scaleY/r.scaleY}i=i.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skewX||null!=t.skewY){if(f(t,n),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,!e){var r=i.extract();i=i.multiply((new v.Matrix).skew(r.skewX,r.skewY,t.cx,t.cy).inverse())}i=i.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?i=i.flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset):(null!=t.x||null!=t.y)&&(e?i=i.translate(t.x,t.y):(null!=t.x&&(i.e=t.x),null!=t.y&&(i.f=t.y)));return this.attr("transform",i)}}),v.extend(v.FX,{transform:function(t,e){var i,n=this.target();return"object"!=typeof t?(i=new v.Matrix(n).extract(),"string"==typeof t?i[t]:i):(e=!!e||!!t.relative,null!=t.a?i=new v.Matrix(t):null!=t.rotation?(f(t,n),i=new v.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(f(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,i=new v.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(f(t,n),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,i=new v.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?i=(new v.Matrix).morph((new v.Matrix).flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset)):(null!=t.x||null!=t.y)&&(i=new v.Translate(t.x,t.y)),i?(i.relative=e,this.last().transforms.push(i),setTimeout(function(){this.start()}.bind(this),0),this):this)}}),v.extend(v.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){var t=(this.attr("transform")||"").split(/\)\s*/).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(v.regex.matrixElements).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(l(e[1])):t[e[0]].apply(t,e[1])},new v.Matrix);return t},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.rect(1,1),n=i.screenCTM().inverse();return i.remove(),this.addTo(t).untransform().transform(n.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),v.Transformation=v.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.create([].slice.call(arguments));if("object"==typeof t)for(var i=0,n=this.arguments.length;n>i;++i)this[this.arguments[i]]=t[this.arguments[i]];if(Array.isArray(t))for(var i=0,n=this.arguments.length;n>i;++i)this[this.arguments[i]]=t[i];this.inversed=!1,e===!0&&(this.inversed=!0)},extend:{at:function(t){for(var e=[],i=0,n=this.arguments.length;n>i;++i)e.push(this[this.arguments[i]]);var r=this._undo||new v.Matrix;return r=(new v.Matrix).morph(v.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){return this._undo=new(v[s(this.method)])(t,!0).at(1),this}}}),v.Translate=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),v.Rotate=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new v.Matrix).rotate((new v.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){this._undo=t}}}),v.Scale=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),v.Skew=v.invent({parent:v.Matrix,inherit:v.Transformation,create:function(t,e){"object"==typeof t?this.constructor.call(this,t,e):this.constructor.call(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),v.extend(v.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!v.regex.isCss.test(t))return this.node.style[r(t)];t=t.split(";");for(var i=0;i<t.length;i++)e=t[i].split(":"),this.style(e[0].replace(/\s+/g,""),e[1])}else this.node.style[r(t)]=null===e||v.regex.isBlank.test(e)?"":e;return this}}),v.Parent=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Element,extend:{children:function(){return v.utils.map(v.utils.filterSVGElements(this.node.childNodes),function(t){return v.adopt(t)})},add:function(t,e){return this.has(t)||(e=null==e?this.children().length:e,this.node.insertBefore(t.node,this.node.childNodes[e]||null)),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return this.children().indexOf(t)},get:function(t){return this.children()[t]},first:function(){return this.children()[0]},last:function(){return this.children()[this.children().length-1]},each:function(t,e){var i,n,r=this.children();for(i=0,n=r.length;n>i;i++)r[i]instanceof v.Element&&t.apply(r[i],[i,r]),e&&r[i]instanceof v.Container&&r[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),v.extend(v.Parent,{ungroup:function(t,e){return 0===e||this instanceof v.Defs?this:(t=t||(this instanceof v.Doc?this:this.parent(v.Parent)),e=e||1/0,this.each(function(){return this instanceof v.Defs?this:this instanceof v.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),v.Container=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Parent,extend:{viewbox:function(t){return 0==arguments.length?new v.ViewBox(this):(t=1==arguments.length?[t.x,t.y,t.width,t.height]:[].slice.call(arguments),this.attr("viewBox",t))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){v.Element.prototype[t]=function(e){var i=this;return this.node["on"+t]="function"==typeof e?function(){return e.apply(i,arguments)}:null,this}}),v.listeners=[],v.handlerMap=[],v.listenerId=0,v.on=function(t,e,i,n){var r=i.bind(n||t.instance||t),s=(v.handlerMap.indexOf(t)+1||v.handlerMap.push(t))-1,a=e.split(".")[0],o=e.split(".")[1]||"*";v.listeners[s]=v.listeners[s]||{},v.listeners[s][a]=v.listeners[s][a]||{},v.listeners[s][a][o]=v.listeners[s][a][o]||{},i._svgjsListenerId||(i._svgjsListenerId=++v.listenerId),v.listeners[s][a][o][i._svgjsListenerId]=r,t.addEventListener(a,r,!1)},v.off=function(t,e,i){var n=v.handlerMap.indexOf(t),r=e&&e.split(".")[0],s=e&&e.split(".")[1];if(-1!=n)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;v.listeners[n][r]&&v.listeners[n][r][s||"*"]&&(t.removeEventListener(r,v.listeners[n][r][s||"*"][i],!1),delete v.listeners[n][r][s||"*"][i])}else if(s&&r){if(v.listeners[n][r]&&v.listeners[n][r][s]){for(i in v.listeners[n][r][s])v.off(t,[r,s].join("."),i);delete v.listeners[n][r][s]}}else if(s)for(e in v.listeners[n])for(namespace in v.listeners[n][e])s===namespace&&v.off(t,[e,s].join("."));else if(r){if(v.listeners[n][r]){for(namespace in v.listeners[n][r])v.off(t,[r,namespace].join("."));delete v.listeners[n][r]}}else{for(e in v.listeners[n])v.off(t,e);delete v.listeners[n]}},v.extend(v.Element,{on:function(t,e,i){return v.on(this.node,t,e,i),this},off:function(t,e){return v.off(this.node,t,e),this},fire:function(t,e){return t instanceof Event?this.node.dispatchEvent(t):this.node.dispatchEvent(new b(t,{detail:e})),this}}),v.Defs=v.invent({create:"defs",inherit:v.Container}),v.G=v.invent({create:"g",inherit:v.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new v.G)}}}),v.extend(v.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof v.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof v.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),v.Mask=v.invent({create:function(){this.constructor.call(this,v.create("mask")),this.targets=[]},inherit:v.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new v.Mask)}}}),v.extend(v.Element,{maskWith:function(t){return this.masker=t instanceof v.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),v.ClipPath=v.invent({create:function(){this.constructor.call(this,v.create("clipPath")),this.targets=[]},inherit:v.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new v.ClipPath)}}}),v.extend(v.Element,{clipWith:function(t){return this.clipper=t instanceof v.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),v.Gradient=v.invent({create:function(t){this.constructor.call(this,v.create(t+"Gradient")),this.type=t},inherit:v.Container,extend:{at:function(t,e,i){return this.put(new v.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),v.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),v.extend(v.Gradient,v.FX,{from:function(t,e){return"radial"==(this.target||this).type?this.attr({fx:new v.Number(t),fy:new v.Number(e)}):this.attr({x1:new v.Number(t),y1:new v.Number(e)})},to:function(t,e){return"radial"==(this.target||this).type?this.attr({cx:new v.Number(t),cy:new v.Number(e)}):this.attr({x2:new v.Number(t),y2:new v.Number(e)})}}),v.extend(v.Defs,{gradient:function(t,e){return this.put(new v.Gradient(t)).update(e)}}),v.Stop=v.invent({create:"stop",inherit:v.Element,extend:{update:function(t){return("number"==typeof t||t instanceof v.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new v.Number(t.offset)),this}}}),v.Pattern=v.invent({create:"pattern",inherit:v.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),v.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),v.extend(v.Defs,{pattern:function(t,e,i){return this.put(new v.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),v.Doc=v.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,v.create("svg")),t.appendChild(this.node)),this.namespace().size("100%","100%").defs())},inherit:v.Container,extend:{namespace:function(){return this.attr({xmlns:v.ns,version:"1.1"}).attr("xmlns:xlink",v.xlink,v.xmlns).attr("xmlns:svgjs",v.svgjs,v.xmlns)},defs:function(){if(!this._defs){var t;this._defs=(t=this.node.getElementsByTagName("defs")[0])?v.adopt(t):new v.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this}}}),v.Shape=v.invent({create:function(t){this.constructor.call(this,t)},inherit:v.Element}),v.Bare=v.invent({create:function(t,e){if(this.constructor.call(this,v.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:v.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),v.extend(v.Parent,{element:function(t,e){return this.put(new v.Bare(t,e))},symbol:function(){return this.defs().element("symbol",v.Container)}}),v.Use=v.invent({create:"use",inherit:v.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,v.xlink)}},construct:{use:function(t,e){return this.put(new v.Use).element(t,e)}}}),v.Rect=v.invent({create:"rect",inherit:v.Shape,construct:{rect:function(t,e){return this.put(new v.Rect).size(t,e)}}}),v.Circle=v.invent({create:"circle",inherit:v.Shape,construct:{circle:function(t){return this.put(new v.Circle).rx(new v.Number(t).divide(2)).move(0,0)}}}),v.extend(v.Circle,v.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),v.Ellipse=v.invent({create:"ellipse",inherit:v.Shape,construct:{ellipse:function(t,e){return this.put(new v.Ellipse).size(t,e).move(0,0)}}}),v.extend(v.Ellipse,v.Rect,v.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),v.extend(v.Circle,v.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new v.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new v.Number(t).divide(2))},size:function(t,e){var i=h(this.bbox(),t,e);return this.rx(new v.Number(i.width).divide(2)).ry(new v.Number(i.height).divide(2))}}),v.Line=v.invent({create:"line",inherit:v.Shape,extend:{array:function(){return new v.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,n){return t=4==arguments.length?{x1:t,y1:e,x2:i,y2:n}:new v.PointArray(t).toLine(),this.attr(t)},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=h(this.bbox(),t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,n){return this.put(new v.Line).plot(t,e,i,n)}}}),v.Polyline=v.invent({create:"polyline",inherit:v.Shape,construct:{polyline:function(t){return this.put(new v.Polyline).plot(t)}}}),v.Polygon=v.invent({create:"polygon",inherit:v.Shape,construct:{polygon:function(t){return this.put(new v.Polygon).plot(t)}}}),v.extend(v.Polyline,v.Polygon,{array:function(){return this._array||(this._array=new v.PointArray(this.attr("points")))},plot:function(t){return this.attr("points",this._array=new v.PointArray(t))},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=h(this.bbox(),t,e);return this.attr("points",this.array().size(i.width,i.height))}}),v.extend(v.Line,v.Polyline,v.Polygon,{morphArray:v.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),v.Path=v.invent({create:"path",inherit:v.Shape,extend:{morphArray:v.PathArray,array:function(){return this._array||(this._array=new v.PathArray(this.attr("d")))},plot:function(t){return this.attr("d",this._array=new v.PathArray(t))},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=h(this.bbox(),t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new v.Path).plot(t)}}}),v.Image=v.invent({create:"image",inherit:v.Shape,extend:{load:function(t){if(!t)return this;var i=this,n=e.createElement("img");return n.onload=function(){var e=i.parent(v.Pattern);null!==e&&(0==i.width()&&0==i.height()&&i.size(n.width,n.height),e&&0==e.width()&&0==e.height()&&e.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:n.width,height:n.height,ratio:n.width/n.height,url:t}))},this.attr("href",n.src=this.src=t,v.xlink)},loaded:function(t){return this._loaded=t,this}},construct:{image:function(t,e,i){return this.put(new v.Image).load(t).size(e||0,i||e||0)}}}),v.Text=v.invent({create:function(){this.constructor.call(this,v.create("text")),this.dom.leading=new v.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",v.defaults.attrs["font-family"])},inherit:v.Shape,extend:{clone:function(){var t=m(this.node.cloneNode(!0));return this.after(t),t},x:function(t){return null==t?this.attr("x"):(this.textPath||this.lines().each(function(){this.dom.newLined&&this.x(t)}),this.attr("x",t))},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if("undefined"==typeof t){for(var t="",e=this.node.childNodes,i=0,n=e.length;n>i;++i)0!=i&&3!=e[i].nodeType&&1==v.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var i=0,r=t.length;r>i;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new v.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=v.utils.map(v.utils.filterSVGElements(t.childNodes),function(t){return v.adopt(t)});return new v.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,n=this.dom.leading*new v.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(this.textPath||this.attr("x",e.attr("x")),"\n"==this.text()?i+=n:(this.attr("dy",n+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new v.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new v.Text).text(t)},plain:function(t){return this.put(new v.Text).plain(t)}}}),v.Tspan=v.invent({create:"tspan",inherit:v.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(v.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),v.extend(v.Text,v.Tspan,{plain:function(t){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new v.Tspan;return this._build===!1&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),v.TextPath=v.invent({create:"textPath",inherit:v.Parent,parent:v.Text,construct:{path:function(t){for(var e=new v.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,v.xlink),this},plot:function(t){var e=this.track();return e&&e.plot(t),this},track:function(){var t=this.textPath();return t?t.reference("href"):void 0},textPath:function(){return this.node.firstChild&&"textPath"==this.node.firstChild.nodeName?v.adopt(this.node.firstChild):void 0}}}),v.Nested=v.invent({create:function(){this.constructor.call(this,v.create("svg")),this.style("overflow","visible")},inherit:v.Container,construct:{nested:function(){return this.put(new v.Nested)}}}),v.A=v.invent({create:"a",inherit:v.Container,extend:{to:function(t){return this.attr("href",t,v.xlink)},show:function(t){return this.attr("show",t,v.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new v.A).to(t)}}}),v.extend(v.Element,{linkTo:function(t){var e=new v.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),v.Marker=v.invent({create:"marker",inherit:v.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),v.extend(v.Defs,{marker:function(t,e,i){return this.put(new v.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),v.extend(v.Line,v.Polyline,v.Polygon,v.Path,{marker:function(t,e,i,n){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof v.Marker?arguments[1]:this.doc().marker(e,i,n),this.attr(r,t)}});var y={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if("string"==typeof i||v.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=y[t].length-1;e>=0;e--)null!=i[y[t][e]]&&this.attr(y.prefix(t,y[t][e]),i[y[t][e]]);return this},v.extend(v.Element,v.FX,i)}),v.extend(v.Element,v.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,n){return this.transform({skewX:t,skewY:e,cx:i,cy:n})},scale:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:n})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return this.transform({flip:t,offset:e})},matrix:function(t){return this.attr("transform",new v.Matrix(t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x((this instanceof v.FX?0:this.x())+t,!0)},dy:function(t){return this.y((this instanceof v.FX?0:this.y())+t,!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),v.extend(v.Rect,v.Ellipse,v.Circle,v.Gradient,v.FX,{radius:function(t,e){var i=(this.target||this).type;return"radial"==i||"circle"==i?this.attr({r:new v.Number(t)}):this.rx(t).ry(null==e?t:e)}}),v.extend(v.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),v.extend(v.Parent,v.Text,v.FX,{font:function(t){for(var e in t)"leading"==e?this.leading(t[e]):"anchor"==e?this.attr("text-anchor",t[e]):"size"==e||"family"==e||"weight"==e||"stretch"==e||"variant"==e||"style"==e?this.attr("font-"+e,t[e]):this.attr(e,t[e]);return this}}),v.Set=v.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;e>t;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;i>e;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){var t=new v.BBox;if(0==this.members.length)return t;var e=this.members[0].rbox();return t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,this.each(function(){t=t.merge(this.rbox())}),t}},construct:{set:function(t){return new v.Set(t)}}}),v.FX.Set=v.invent({create:function(t){this.set=t}}),v.Set.inherit=function(){var t,e=[];for(var t in v.Shape.prototype)"function"==typeof v.Shape.prototype[t]&&"function"!=typeof v.Set.prototype[t]&&e.push(t);e.forEach(function(t){v.Set.prototype[t]=function(){for(var e=0,i=this.members.length;i>e;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new v.FX.Set(this)):this}}),e=[];for(var t in v.FX.prototype)"function"==typeof v.FX.prototype[t]&&"function"!=typeof v.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){v.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;i>e;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},v.extend(v.Element,{data:function(t,e,i){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(n){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:i===!0||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),v.extend(v.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),v.get=function(t){var i=e.getElementById(g(t)||t);return v.adopt(i)},v.select=function(t,i){return new v.Set(v.utils.map((i||e).querySelectorAll(t),function(t){return v.adopt(t)}))},v.extend(v.Parent,{select:function(t){return v.select(t,this.node)}});var w="abcdef".split("");if("function"!=typeof b){var b=function(t,i){i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=e.createEvent("CustomEvent");return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n};b.prototype=t.Event.prototype,t.CustomEvent=b}return function(e){for(var i=0,n=["moz","webkit"],r=0;r<n.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[r]+"CancelAnimationFrame"]||e[n[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+r)},r);return i=n+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),v});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;


	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function($, u){

	$( document ).ready(function() {

	    var losange = (function(){




	          // Init global variables
	          var diamondsHover = false;
	          var tile_width = 225;
	          var artistTrigger = false;
	          var flowerSpeed = 500;

	          // Caching dom El
	          var $el              = $(".wrapper__diamonds");
	          var $diamondsWrapper = $el.find('.diamond__itemsWrapper');
	          var $diamonds        = $el.find('.diamond__items');
	          var $diamondsContour = $el.find('.diamond__contour');
	          var $diamondsHolder  = $el.find('.diamond');

	          // Init function
	          dimondsProjectsLoader();

	          //Biding Event
	          $diamonds.on('mouseenter', hoverDiamonds);
	          $diamonds.on('mouseleave', leaveDiamonds);
	          $(window).on('resize', dimondsProjectsLoader);


	          function dimondsProjectsLoader(){

	              sizeProjects();
	              if($(window).width() > 1024)
	              {
	                   positionProjects();
	                   artistTrigger = true;
	                }
	                else
	                {
	                  positionProjects();
	                  artistTrigger = true;
	                }
	                 sizeProjects();
	          }

	          function hoverDiamonds(event){

	              $(this).find('.diamond__contour').stop().animate({'width':'153px','height':'153px','marginLeft':'-76.5px','marginTop':'-76.5px',},500, 'easeInOutCubic', function(){
	                  $(this).find('h6').stop().animate({'opacity':'1'},600, 'easeInOutCubic');
	                  $(this).find('span').stop().animate({'opacity':'1', 'top': '50%'},300, 'easeInOutCubic');
	              })
	              $diamonds.not(this).stop().animate({'opacity':1},100);

	          }

	           function leaveDiamonds(){

	              $(this).find('h6').css({'opacity':'0'})
	              $(this).find('span').css({'opacity':'0', 'top': '80%'})
	              $(this).find('.diamond__contour').stop().animate({'width':'255px','height':'255px','marginLeft':'-127.5px','marginTop':'-127.5px',},300, 'easeInOutCubic');
	              $diamonds.not(this).stop().animate({'opacity':1},100);

	          }

	           function sizeProjects(){

	             // alert($diamondsWrapper.attr('class'))

	              var wWidth = $(window).width();
	              var wHeight = $(window).height();
	              diamonds_height = 600;
	              var zoom_factor = 1;

	              /////////////////////////////////// ENTRE 1024 et 1600////////////////////////////////////////////////////

	              if(wWidth > 1024 && wWidth < 1600)
	                { // if gallery is still landscape but too narrow to fit the diamonds, elements will scale down.

	                   var container_size = Math.round(wWidth / 2) - 200;
	                   var container_size_H = $diamonds.height()*2-100;

	                    if(wHeight - 200 < container_size){container_size = wHeight - 200;}
	                   zoom_factor = container_size / 600;
	                  var left_margin = Math.round((Math.round(wWidth / 2) - container_size) / 2);
	                  var top_margin = Math.round(Math.round(wHeight - container_size_H) / 2) - 30;


	                  $el.css({"width" : container_size + "px", "height" : container_size_H + "px", "top" : top_margin + "px", "left" : left_margin + "px"});
	                  $diamondsHolder.css({"height" : container_size_H + "px", "transform" : 'scale(' + zoom_factor + ')', "-webkit-transform" : 'scale(' + zoom_factor + ')', '-moz-transform': 'scale(' + zoom_factor + ')', 'top' : 0, 'left' : '0'});

	              }

	                /////////////////////////////////// INFERIEUR OU EGALE A 1024////////////////////////////////////////////////////

	              else if(wWidth <= 1024)
	              {
	                var container_size = 600;
	                var images_holder_top = "";

	                if(wWidth < 401){
	                  container_size  = 360;
	                  zoom_factor = 0.6;
	                }

	                  $el.css({"width" : "", "height": "", "top" : '', "left": ''});
	                  $diamondsHolder.css({"height" : container_size + "px", "transform" : 'scale(' + zoom_factor + ')', "-webkit-transform" : 'scale(' + zoom_factor + ')', '-moz-transform': 'scale(' + zoom_factor + ')', '-ie-transform': 'scale(' + zoom_factor + ')', "top": images_holder_top});

	              }

	                /////////////////////////////////// SUPERIEUR A 1600 ////////////////////////////////////////////////////

	              else
	              {
	                  var container_size = 600;
	                  var container_size_H = (container_size/2)+100;

	                  zoom_factor = 1;
	                  var left_margin = Math.round((Math.round(wWidth / 2) - container_size) / 2);
	                  var top_margin = Math.round(Math.round(wHeight - 400) / 2);
	                  $el.css({"width" : container_size + "px", "height" : container_size_H + "px", "top" : top_margin + "px", "left" : left_margin + "px"});
	              }

	                  var diamonds_top = 'inherit';


	              /////////////////////////////////// INFERIEUR A 1025 ////////////////////////////////////////////////////

	              var diamonds_top = 'inherit';
	              if(wWidth < 1025){
	                var diamonds_top = 'inherit';

	              } else if(wWidth >= 1025 && wWidth < 1600) {
	                diamonds_top = Math.round((wHeight - diamonds_height) ) / 4 ;
	              } else {
	               diamonds_top = Math.round((wHeight - diamonds_height) / 2) ;
	              }

	              if(wWidth < 401){
	                zoom_factor = 0.6;
	              }



	              /////////////////////////////////// SUPERIERUR A 1024 /////////////////////////////////////////////////

	              if(wWidth > 1024)
	              {
	                  var l_projects_width = wWidth / 2 - 10;
	                  var l_projects_height = wHeight - 20;
	              }

	               /////////////////////////////////// INFERIEUR A 1024 /////////////////////////////////////////////////

	              else
	              {

	                  var l_projects_width = wWidth - 20;
	                  var l_projects_height = 800;
	                  if(wWidth >= 580 && wWidth < 780)
	                    {
	                      l_projects_height = 1250;
	                    }
	                    else if(wWidth < 580)
	                    {
	                      l_projects_height = 1100;
	                    }

	               }
	               if(artistTrigger || $(window).width() > 1024)
	               {
	                  positionProjects();
	               }


	          }

	          function positionProjects(){



	            var wWidth = $(window).width();

	            if(wWidth > 780){
	              max_row = 3;
	            } else if(wWidth <= 780 && wWidth > 580){
	              max_row = 2;

	            } else {
	              max_row = 1;
	            }

	            //var max_row = 3;
	            var min_row = max_row - 1;
	            if(min_row < 1){min_row = 1;}

	            if(max_row < 3){

	            } else {
	              $diamondsHolder.css({"width" : "600px"});
	            }
	            var counter = 0;

	            var no_elements = $diamondsWrapper.size();
	            var no_steps = Math.ceil(no_elements / (max_row + min_row));


	            if(no_elements > 0){
	              for(var i = 0; i < no_steps; i++){  /// nom de ligne ici 3

	                 //if(counter <= 2 || counter >= 5 ){max_row = 2; }else{max_row=3}
	                 //alert(max_row);

	                for(var j = 0; j < min_row; j++){ // first pass Nombre de colonnes pour la permière ligne ici 3

	                  var x = i * tile_width;
	                  var y = j * tile_width + tile_width /2;


	                  if(counter < no_elements){
	                    var time_delay = 500 + Math.round(Math.random() * 500) ;
	                    $diamondsWrapper.eq(counter).stop(false,false).animate({'left' : y + 'px', 'top' : x + 'px', 'opacity' : 1}, time_delay);
	                  }

	                  counter++;

	                }

	                for(var j = 0; j < max_row; j++){ // second pass Nombre de colonnes pour le seconde ligne ici 2

	                  var x = i * tile_width + tile_width /2;
	                  var y = j * tile_width ;

	                  if(counter < no_elements){
	                    var time_delay = 500 + Math.round(Math.random() * 500) ;
	                    $diamondsWrapper.eq(counter).stop(false,false).animate({'left' : y + 'px', 'top' : x + 'px', 'opacity' : 1}, time_delay);


	                  }

	                  counter++;
	                }
	              }
	            }
	          }


	    })();

	 })

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))




/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_RESULT__ = function($){


	 $( document ).ready(function() {

	     var resumer = (function(){


	     	  var currentLang = $('.wrapper__about h2').attr('data-lang');

	          // Init global variables
	          var $btn_resumer   = $('.btn__shadows');
	          var $box_resumer   = $('.wrapper__box-cv');
	          var $aplat    	 = $('.wrapper__aplat');
	          var $blurPage    	 = $('.webpage');




	          // Init function
	          customScrollBar();

	          //Biding Event
	          $btn_resumer.on('click', OpenResumer);
	          $aplat.on('click', closeResumer);
	          $aplat.on('mouseenter', displayCross);


	          function customScrollBar(){
	          	$('#js_box-cv').simplebar({autoHide: false});
	          }


	          function OpenResumer(){

					if($(window).width()>800 && (currentLang == 'en' || currentLang == 'ja') )
						{

					    $blurPage.addClass('webpage-blur');
					    $('body, html').css('overflow-y', 'hidden');

					    $box_resumer.css('display', 'block');
					    $aplat.css('display', 'block');

					    $aplat.delay(100).animate({opacity : 0.8},700);

					    $box_resumer.delay(500).animate({top : '55%', opacity : 1},700);

					}else{

					 	window.location = 'resumer/pdf.php';
					}
	          }

	          function closeResumer(){

			    	$aplat.removeClass('cross-cursor');

			    	$box_resumer.animate({top : '70%', opacity : 0},700, function(){

				    	$aplat.delay(100).animate({opacity : 0},700);
				    	$aplat.css('display', 'none');
				    	$box_resumer.css('display', 'none');
				        $('body, html').attr( "style", "" );

			    	})

		    		$blurPage.delay(500).removeClass('webpage-blur');
	          }

	          function displayCross(){

					if($box_resumer.is(':visible'))
					 	 {
						 	$aplat.addClass('cross-cursor');
						 }
	          }

	    })();

	  })

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 *  SimpleBar.js - v1.1.9
	 *  Scrollbars, simpler.
	 *  https://grsmto.github.io/simplebar/
	 *
	 *  Made by Adrien Grsmto from a fork by Jonathan Nicol
	 *  Under MIT License
	 */
	 !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
		!function(a){"object"==typeof module&&"object"==typeof module.exports?a(__webpack_require__(2),window,document):a(window.jQuery,window,document)}(function(a,b,c,d){function e(){var b=a('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;top:-200px;left:-200px;"><div style="height:100px;"></div>'),c=0,d=0;return a("body").append(b),c=a(b).innerWidth(),d=a("div",b).innerWidth(),b.remove(),c-d}function f(b,c){this.el=b,this.$el=a(b),this.$track,this.$scrollbar,this.dragOffset,this.flashTimeout,this.$contentEl=this.$el,this.$scrollContentEl=this.$el,this.scrollDirection="vert",this.scrollOffsetAttr="scrollTop",this.sizeAttr="height",this.scrollSizeAttr="scrollHeight",this.offsetAttr="top",this.options=a.extend({},f.DEFAULTS,c),this.theme=this.options.css,this.init()}var g,h="WebkitAppearance"in c.documentElement.style;f.DEFAULTS={wrapContent:!0,autoHide:!0,css:{container:"simplebar",content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",scrollbarTrack:"simplebar-track"}},f.prototype.init=function(){return"undefined"==typeof g&&(g=e()),0===g?(this.$el.css("overflow","auto"),void 0):(("horizontal"===this.$el.data("simplebar-direction")||this.$el.hasClass(this.theme.container+" horizontal"))&&(this.scrollDirection="horiz",this.scrollOffsetAttr="scrollLeft",this.sizeAttr="width",this.scrollSizeAttr="scrollWidth",this.offsetAttr="left"),this.options.wrapContent&&this.$el.wrapInner('<div class="'+this.theme.scrollContent+'"><div class="'+this.theme.content+'"></div></div>'),this.$contentEl=this.$el.find("."+this.theme.content),this.$el.prepend('<div class="'+this.theme.scrollbarTrack+'"><div class="'+this.theme.scrollbar+'"></div></div>'),this.$track=this.$el.find("."+this.theme.scrollbarTrack),this.$scrollbar=this.$el.find("."+this.theme.scrollbar),this.$scrollContentEl=this.$el.find("."+this.theme.scrollContent),this.resizeScrollContent(),this.options.autoHide&&this.$el.on("mouseenter",a.proxy(this.flashScrollbar,this)),this.$scrollbar.on("mousedown",a.proxy(this.startDrag,this)),this.$scrollContentEl.on("scroll",a.proxy(this.startScroll,this)),this.resizeScrollbar(),this.options.autoHide||this.showScrollbar(),void 0)},f.prototype.startDrag=function(b){b.preventDefault();var d=b.pageY;"horiz"===this.scrollDirection&&(d=b.pageX),this.dragOffset=d-this.$scrollbar.offset()[this.offsetAttr],a(c).on("mousemove",a.proxy(this.drag,this)),a(c).on("mouseup",a.proxy(this.endDrag,this))},f.prototype.drag=function(a){a.preventDefault();var b=a.pageY,c=null,d=null,e=null;"horiz"===this.scrollDirection&&(b=a.pageX),c=b-this.$track.offset()[this.offsetAttr]-this.dragOffset,d=c/this.$track[this.sizeAttr](),e=d*this.$contentEl[0][this.scrollSizeAttr],this.$scrollContentEl[this.scrollOffsetAttr](e)},f.prototype.endDrag=function(){a(c).off("mousemove",this.drag),a(c).off("mouseup",this.endDrag)},f.prototype.resizeScrollbar=function(){if(0!==g){var a=this.$contentEl[0][this.scrollSizeAttr],b=this.$scrollContentEl[this.scrollOffsetAttr](),c=this.$track[this.sizeAttr](),d=c/a,e=Math.round(d*b)+2,f=Math.floor(d*(c-2))-2;a>c?("vert"===this.scrollDirection?this.$scrollbar.css({top:e,height:f}):this.$scrollbar.css({left:e,width:f}),this.$track.show()):this.$track.hide()}},f.prototype.startScroll=function(a){this.$el.trigger(a),this.flashScrollbar()},f.prototype.flashScrollbar=function(){this.resizeScrollbar(),this.showScrollbar()},f.prototype.showScrollbar=function(){this.$scrollbar.addClass("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&b.clearTimeout(this.flashTimeout),this.flashTimeout=b.setTimeout(a.proxy(this.hideScrollbar,this),1e3))},f.prototype.hideScrollbar=function(){this.$scrollbar.removeClass("visible"),"number"==typeof this.flashTimeout&&b.clearTimeout(this.flashTimeout)},f.prototype.resizeScrollContent=function(){h||("vert"===this.scrollDirection?(this.$scrollContentEl.width(this.$el.width()+g),this.$scrollContentEl.height(this.$el.height())):(this.$scrollContentEl.width(this.$el.width()),this.$scrollContentEl.height(this.$el.height()+g)))},f.prototype.recalculate=function(){this.resizeScrollContent(),this.resizeScrollbar()},f.prototype.getScrollElement=function(){return this.$scrollContentEl},f.prototype.getContentElement=function(){return this.$contentEl},a(b).on("load",function(){a("[data-simplebar-direction]").each(function(){a(this).simplebar()})});var i=a.fn.simplebar;a.fn.simplebar=function(b){var c,e=arguments;return"undefined"==typeof b||"object"==typeof b?this.each(function(){a.data(this,"simplebar")||a.data(this,"simplebar",new f(this,b))}):"string"==typeof b?(this.each(function(){var d=a.data(this,"simplebar");d instanceof f&&"function"==typeof d[b]&&(c=d[b].apply(d,Array.prototype.slice.call(e,1))),"destroy"===b&&a.data(this,"simplebar",null)}),c!==d?c:this):void 0},a.fn.simplebar.Constructor=f,a.fn.simplebar.noConflict=function(){return a.fn.simplebar=i,this}});
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }
]);