webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(5);


	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(s) {

	  grunticon(["src/img/svg/fallbacks/icons.data.svg.css", "src/img/svg/fallbacks/icons.data.png.css", "src/img/svg/fallbacks/icons.fallback.css"], grunticon.svgLoadedCallback);


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function($){

	$( document ).ready(function() {

	  var form =  (function(){

	            // Init global variables
	            var nameValidation  = /^[a-zA-Z ]+$/;
	            var emailValidation = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
	            var urlValidation   = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;

	            var feature_onLoadInit = true;
	            // Class names used for focus and populated statuses
	            var class_focused =    'is_focused';
	            var class_populated =  'is_populated';

	            // Caching dom El
	            var $el            = $('form');
	            var $wrapperChamps = $el.find('.form__wrapper');
	            var $champs        = $el.find('input[type="text"], textarea');
	            var $nom           = $el.find('#rf_name');
	            var $entrprise     = $el.find('#rf_societe');
	            var $email         = $el.find('#rf_email');
	            var $adresseWeb    = $el.find('#rf_web');
	            var $message       = $el.find('#rf_message');
	            var $btnEnvoyer    = $el.find('#rf_envoyer');

	            var $resultSubmail = $el.find('.form__result');
	            var $errorMess     = $el.find('.form__errorMessage');

	            //Biding Event
	            $el.on('submit', sendForm.bind(this));
	            $champs.on('keyup', onTyping);
	            $message.on('keyup', messageBox.bind(this));
	            $message.on('focusout', messageFocusOUt);
	            $champs.on('blur.flowupLabelsEvt', labelEventHandler);
	            $champs.on('focus.flowupLabelsEvt', function() {$(this).closest('.form__wrapper').addClass(class_focused); })


	            inti()

	            function labelEventHandler(){

	                var $this = $(this);

	                if ($this.val().length) {
	                  $this.closest('.form__wrapper')
	                    .addClass(class_populated)
	                    .removeClass(class_focused);
	                }
	                else {
	                  $this.closest('.form__wrapper')
	                    .removeClass(class_populated + ' ' + class_focused);
	                }
	            }

	            function inti(){
	              $champs.val('');
	            }


	            function messageBox(e){

	              if ((/(\r\n|\n|\r)/.test($message.val()))) {
	                  var h = $message.height();
	                $message.addClass('textarea_is_foused');
	                $message.css("min-height","0px");
	                var sh = $message.prop("scrollHeight");
	                var minh = $message.css("min-height").replace("px", "");
	                $message.css("min-height",Math.max(sh,minh)+"px");
	                $btnEnvoyer.css("margin-top",Math.max(sh,minh));
	             }

	            }

	            function messageFocusOUt(){
	              if($message.val() == '')
	                {
	                  $message.removeClass('textarea_is_foused');
	                  $message.css("min-height",0);
	                  $btnEnvoyer.css("margin-top",0);
	                }
	            }


	            function sendForm(event){

	                $btnEnvoyer.addClass('form__envoyer--submitting');

	                $.ajax({
	                    type     : $el.attr('method'),
	                    url      : $el.attr('action'),
	                    data     : $el.serializeArray(),
	                    dataType : 'json'
	                })

	                .done(function (data) {processForm(data);})

	                event.preventDefault();
	            }


	            function processForm(data){

	                $resultSubmail.find('h1').removeClass('error').removeClass('success');
	                $btnEnvoyer.removeClass('form__envoyer--error').removeClass('form__envoyer--success');
	                $btnEnvoyer.closest('span').addClass('hidden');

	                var strName, strValue ;

	                displaySucess($champs);
	                console.log(data.errors)

	                for(strName in data.errors)
	                  {
	                       var $nomChamp = $el.find('[name='+strName+']').parent();
	                       displayError($nomChamp)
	                  }


	                $el.find('[name=societe]').parent().addClass('is-valid');
	                $el.find('[name=web]').parent().addClass('is-valid');

	                data.success == true ? displaySucess($wrapperChamps): false;

	                $resultSubmail.find('h1').addClass(''+data.status+'').html(data.validate);
	                $resultSubmail.find('h2').text(data.validationSubText);
	                $resultSubmail.find('h2').append('<span class="resultSubmail red" >'+data.resultMessagesubmail+'</span>')
	                $btnEnvoyer.removeClass('form__envoyer--submitting').addClass('form__envoyer--'+data.status+'');
	                $btnEnvoyer.parent().find('.form__icon--'+data.status+'').removeClass('hidden');

	                if(data.errors){setTimeout(clearErrorMess, 3000, data)}
	            }

	              function clearErrorMess(data) {

	                $btnEnvoyer.parent().find('.form__icon--error').addClass('hidden');
	                $btnEnvoyer.removeClass('form__envoyer--error');
	                $resultSubmail.find('h1').removeClass('error').html(data.base_title);
	                $resultSubmail.find('h2').html(data.base_text);

	             }


	             function displayError($tragetWrapper) {
	                $tragetWrapper.removeClass('is-valid').addClass('has-error').children('span').fadeIn();
	             }


	             function displaySucess($tragetWrapper) {
	                $tragetWrapper.removeClass('has-error').addClass('is-valid').children('span').fadeOut();
	             }


	            function onTyping(){

	              var $scope = $(this)
	              var $tragetWrapper = $(this).parent();

	              if($scope.is(':required'))
	              {

	                $scope.val() == ''
	                {
	                  $tragetWrapper.removeClass('is-valid').removeClass('has-error');
	                  $scope.closest('span').html('').fadeIn();
	                }


	                if( $scope.val() != '' &&  $scope.val().length >= 3)
	                {

	                    switch( $scope.attr('name'))
	                    {
	                      case 'name'  :  $scope.val().match(nameValidation)  ? displaySucess($tragetWrapper)   : displayError($tragetWrapper); break;
	                      case 'email' :  $scope.val().match(emailValidation) ? displaySucess($tragetWrapper)   : displayError($tragetWrapper); break;
	                      //case 'web'   :  $scope.val().match(urlValidation)   ? displaySucess($tragetWrapper)   : displayError($tragetWrapper); break;
	                      default      :  displaySucess($tragetWrapper);
	                    }

	                }

	                 $scope.val() != '' &&  $scope.val().length > 0 &&  $scope.val().length <= 3 ? displayError($tragetWrapper) : false; // ERROR ????

	              }

	              else
	              {
	                 $scope.val() == '' ? $tragetWrapper.removeClass('is-valid') :  $tragetWrapper.addClass('is-valid');}
	              }


	    })();

	 })


	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }
]);