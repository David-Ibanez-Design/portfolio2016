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
  <link rel="stylesheet" href="src/css/libs/simplebar.css" />
  <link rel="stylesheet" href="src/css/style.css">
  <script src="src/js/libs/require.js" data-main="src/js/index.js"></script>
  <noscript><link href="src/img/svg/fallbacks/icons.fallback.css" rel="stylesheet"></noscript>
</head>

<body lang="<?php echo $current_lang; ?>">


<!-- ////////////////////////////////////////// resumer pop-up /////////////////////////////////////////// -->

<div id="js_box-cv"  class="wrapper__box-cv simplebar">
  <img src="src/img/cv-<?php  echo ($current_lang == 'en' ? 'en' : 'ja'); ?>.jpg" />
</div>

<!-- ////////////////////////////////////////// Aplat for resumer pop-up /////////////////////////////////////////// -->

<div class="wrapper__aplat"></div>


<div class="webpage">
<!-- ////////////////////////////////////////// loading /////////////////////////////////////////// -->
    <a href="index.php">
        <span class="logo-loading" >
          <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="-331 125.3 345 305" style="enable-background:new -331 125.3 345 305;" xml:space="preserve">
          <rect x="-336" y="130.3" id="st0" width="345" height="295"/>
          <rect x="-346" y="130.3" id="st1" width="363" height="295"></rect>
          <path class="mask" d="M-331,125.3v305H14v-305H-331z M-157.2,419l-57.5-92.4h57.5l77.6-138.7l-212.7-0.6l-26.7-45H1L-157.2,419z M-254,280.7
            l19.7-33.7h75.3l-18.8,33.7H-254z"/>
          </svg>
        </span>
    </a>


    <script>
       if(! sessionStorage.firstVisit){document.write('<div class="wrapper__logo--index"></div>');}
       else{document.write('<div class="wrapper__logo--visited"></div>');}
    </script>







    <div class="wrapper__profile-photo">
        <img  src="src/img/photo.png" alt='profile-photo'/>
   </div>

   <div class="grid__container container-home">

<!-- ////////////////////////////////////////// NAV mobile /////////////////////////////////////////// -->

    <div class="wrapper__mobile-nav">

      <div class="logo-portfolio">
        <span class="icon-logo logo-mobile" data-grunticon-embed></span>
      </div>

      <nav class="wrapper__lang--left">
              <ul class="lang" data-page="index">
               <li>
                    <a data-col="#fff" class="lang__label">
                      <span data-grunticon-embed class="lang__icon icon-cross-small"></span>
                      <span data-lang="<?php echo $current_lang; ?>" class="lang__selected"><?php echo $current_lang; ?></span>
                      <span class="icon-arrow-bottom"></span>
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

     <section class="grid__home--left">

       <div class="wrapper__about">
          <h1 class="hdl__xxlarge--grouped--light"><?php echo $lang['HOMEPAGE_TITLE']; ?></h1>
          <h2 data-lang="<?php echo $current_lang; ?>" class="hdl__xlarge--grouped--light hdl__soustitre-home"><?php echo $lang['HOMEPAGE_SUBTITLE']; ?></h2>
          <div class="para__meduim--light closer ellipsis about-text"><?php echo $lang['HOMEPAGE_TEXT']; ?></div>
          <div class="btn__shadows"><?php echo $lang['HOMEPAGE_BTN']; ?></div>
       </div>

     </section>



<!-- ////////////////////////////////////////// GRID-home RIGHT /////////////////////////////////////////// -->

      <div class="grid__home--right">
        <div class="wrapper__diamonds">
              <div class="diamond">
                  <div class="diamond__adjust">
                        <?php

                        if(isset($lang['GLOBAL_WORKS']))
                            {

                              foreach ($lang['GLOBAL_WORKS'] as $data => $projects){

                                echo'
                                      <div class="diamond__itemsWrapper">
                                            <a href="works.php?link='.$projects["class"].'" class="diamond__items">
                                                <div class="diamond__contour">
                                                    <div class="diamond__InnerContour">
                                                      <h6>'.$projects["name"].'</h6>
                                                      <div class="diamond__icon">
                                                        <span class="icon-plus" data-grunticon-embed></span>
                                                      </div>
                                                    </div>
                                                </div>
                                                <img class="diamond__image" src="src/img/'.$projects["class"].'-losange.jpg" alt="project-'.$projects["class"].'"/>
                                            </a>
                                      </div>
                                    ';
                              }

                            }

                            ?>
                </div>
            </div>
        </div>

        <div class="wrapper__res-social">
            <a href="https://fr.pinterest.com/david38100/" class="icon-pinterest" data-grunticon-embed></a>
            <a class="icon-linkedin" data-grunticon-embed></a>
            <a href="https://github.com/davideti38/" class="icon-github" data-grunticon-embed></a>
        </div>

      </div>

  </div>
</div>

<!-- <div class="preload banner" id="preload-01"></div>
<div class="preload banner" id="preload-02"></div>
<div class="preload banner" id="preload-03"></div>
<div class="preload banner" id="preload-04"></div>
<div class="preload banner" id="preload-05"></div>
<div class="preload banner" id="preload-06"></div>
<div class="preload banner" id="preload-07"></div> -->

<div class="preload in_browser" id="preload-08"></div>
<div class="preload in_browser" id="preload-09"></div>
<div class="preload in_browser" id="preload-10"></div>
<div class="preload in_browser" id="preload-11"></div>
<div class="preload in_browser" id="preload-12"></div>
<div class="preload in_browser" id="preload-13"></div>
<div class="preload in_browser" id="preload-14"></div>
<div class="preload in_browser" id="preload-15"></div>
<div class="preload in_browser" id="preload-16"></div>


</body>

</html>
