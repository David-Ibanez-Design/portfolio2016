<?php  include_once 'lang/common.php';?>
<?php include_once("include/analyticstracking.php") ?>

<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php echo $lang['GLOBAL_PAGE_TITLE']; ?></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="src/img/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="src/css/style.css">
  <script src="src/js/libs/require.js" data-main="src/js/contact.js"></script>
  <noscript><link href="src/img/svg/fallbacks/icons.fallback.css" rel="stylesheet"></noscript>
</head>


<body lang="<?php echo $current_lang; ?>">

   <section class="grid__container grid__container--contact">
    <div class="wrapper__logo--contact">
      <a href="index.php">
        <span class="icon-logo logo-contact" data-grunticon-embed ></span>
      </a>
    </div>

    <div class="wrapper__mobile-nav">

        <div class="logo-portfolio">
          <span class="icon-logo logo-mobile" data-grunticon-embed></span>
        </div>

        <nav class="wrapper__lang--right">
            <ul class="lang" data-page="contact">
               <li>
                 <a data-col="#fff" class="lang__label">
                  <span data-grunticon-embed class="lang__icon icon-cross-small"></span>
                  <span data-lang="<?php echo $current_lang; ?>" class="lang__selected"><?php echo $current_lang; ?></span>
                  <span class="icon-arrow-bottom-contact"></span>
                 </a>
                 <?php  include_once 'include/lang.php'; ?>
                </li>
             </ul>
        </nav>

        <nav class="wrapper__menu">
          <?php  include_once 'include/nav.php'; ?>
        </nav>


    </div>
<!-- ////////////////////////////////////////// GRID LEFT /////////////////////////////////////////// -->


    <section class="grid__contact--left">


      <div class="wrapper__form">

        <form class="form" action="include/fromProcess.php" method="post" name="form" role="form" novalidate autocomplete="off">

        <div class="form__result">
         <h1 class="result hdl__xxlarge--grouped--dark"><?php echo $lang['CONTACT_TITLE']; ?></h1>
         <h2 class="resultSub hdl__xlarge--grouped--dark" class="lh__soustitre"><?php echo $lang['CONTACT_SUBTITLE']; ?></h2>
       </div>

       <div class="grid__form--filed">
          <div class="form__wrapper">
           <label class="form__label " for="rf_name" ><?php echo $lang['CONTACT_FORM']['labels']['Name'][0]; ?></label>
           <input class="form__input form__required" type="text" id="rf_name"  name="name" type="text" minlength="2"  required="required">
           <span class="form__errorMessage" ><?php echo $lang['CONTACT_FORM']['labels']['Name'][1]; ?></span>
          </div>
        </div>

        <div class="grid__form--filed">
          <div class="form__wrapper">
           <label class="form__label" for="rf_societe"><?php echo $lang['CONTACT_FORM']['labels']['Company']; ?></label>
           <input class="form__input" type="text" id="rf_societe" name="societe">
          </div>
        </div>

        <div class="grid__form--filed">
          <div class="form__wrapper" >
           <label class="form__label" for="rf_email"><?php echo $lang['CONTACT_FORM']['labels']['Email'][0]; ?></label>
           <input class="form__input form__required" type="text" id="rf_email" name="email"  required="required" >
           <span class="form__errorMessage"><?php echo $lang['CONTACT_FORM']['labels']['Email'][1]; ?></span>
          </div>
        </div>

        <div class="grid__form--filed">
          <div class="form__wrapper" >
           <label class="form__label" for="rf_web"><?php echo $lang['CONTACT_FORM']['labels']['Website']; ?></label>
           <input class="form__input" type="text" id="rf_web" name="web">
          </div>
        </div>

<!--          <p class="form__antispam"><input type="text" name="url" />
 -->
        <div class="form__wrapper" >
           <label class="form__label" for="rf_message"><?php echo $lang['CONTACT_FORM']['labels']['Message'][0]; ?></label>
           <textarea class="form__input form__textarea form__required" id="rf_message" name="message" maxlength="452" maxlength="452" required="required"></textarea>
         <span class="form__errorMessage" ><?php echo $lang['CONTACT_FORM']['labels']['Message'][1]; ?></span>
        </div>

        <div class="center-inline">
                  <input type="submit" value="<?php echo $lang['CONTACT_BTN'] ?>" id="rf_envoyer" class="form__envoyer btn__shadows-contact"/>
                  <span class="form__icon form__icon--success hidden"></span>
                  <span class="form__icon form__icon--error hidden"></span>
        </div>

      </section>



<!-- ////////////////////////////////////////// GRID RIGHT /////////////////////////////////////////// -->


    <section class="grid__contact--right">

        <div class="grid__contact--image">
            <img src="src/img/bg-contact.jpg" />
        </div>

        <div class="grid__contact--infos">
             <div class="wrapper__contact-info">

                       <div class="contact__info-icons">
                         <ul>
                          <li><span class="icon-mail" data-grunticon-embed></span></li>
                          <li><span class="icon-phone" data-grunticon-embed></span></li>
                         </ul>
                       </div>
                     <div class="contact__info-line">
                       <div class="contact-info-line"></div>
                     </div>
                     <div class="contact__info-text">
                        <ul>
                          <li>dibanez@rocketmail.com</li>
                          <li>david.eti38</li>
                       </ul>
                        <ul>
                          <a href="https://fr.pinterest.com/david38100/" class="icon-pinterest" data-grunticon-embed></a>
                          <a class="icon-linkedin" data-grunticon-embed></a>
                          <a href="https://github.com/davideti38/" class="icon-github" data-grunticon-embed></a>
                       </ul>
                    </div>

             </div>
        </div>

      </section>

   </section>

</body>
</html>
