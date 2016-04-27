<?php  include_once("include/page-header.php"); ?>

  <body class="grid__container--projects" lang="<?php echo $current_lang; ?>">

        <div class="grid__container grid__container--projects">

            <!-- ////////////////////////////////////////// MENU /////////////////////////////////////////// -->

                <div class="wrapper__mobile-nav wrapper__mobile-nav--project">

                    <div class="logo-portfolio">
                      <span class="icon-logo logo-mobile" data-grunticon-embed></span>
                    </div>

                    <nav class="wrapper__menu menu-projects">
                      <?php  include_once 'include/nav.php'; ?>
                    </nav>


                    <nav class="wrapper__lang--projects">

                      <ul class="lang"  data-page="projects">
                       <li class="lang__items--white">
                          <a class="lang__label lang__label--white" data-col="#fff">
                            <span data-grunticon-embed class="lang__icon icon-cross-small"></span>
                            <span data-lang="<?php echo $current_lang; ?>" class="lang__selected lang__selected--projects"><?php echo $current_lang; ?></span>
                          </a>
                            <?php  include_once 'include/lang.php'; ?>
                        </li>
                     </ul>

                    </nav>

                </div>

<!-- ////////////////////////////////////////// SIDE BAR /////////////////////////////////////////// -->

            <?php include_once 'include/sideBar.php'; ?>

            <!-- ////////////////////////////////////////// ARTICLE HEADER /////////////////////////////////////////// -->



                       <section class="grid__project--right">

                              <div class="wrapper__article-header-img">

                                    <div class="inner-projectCover" id="<?php echo $_GET['link']; ?>-bg">

                                      <div class="projectCover-overlay"></div>

                                      <div class="wrapper__article-header-logo">
                                            <div class="projet-pre-text">
                                              <img src="src/img/logo-<?php echo $_GET['link']; ?>.png"  class="logo-project lazy" alt="logo-project">
                                            </div>
                                      </div>
                                    </div>

                             </div>

                              <article class="grid__article-header projects-article">

                                <div class="wrapper__article-header">

                                          <div class="grid__project-sunnary">

                                               <div class="art_skills clearfix">
                                                    <div class="skills_used">
                                                          <?php
                                                        if(isset($lang['GLOBAL_WORKS'][$_GET['link']]['skills']))
                                                        {
                                                               foreach ($lang['GLOBAL_WORKS'][$_GET['link']]['skills'] as $data => $skills)
                                                               {
                                                                echo  '<p class="label__skills--light"><span class="icon-'.$lang['GLOBAL_SKILLS'][$skills].'_code" data-grunticon-embed></span>'.$skills.'</p>';
                                                              }
                                                        }

                                                          ?>
                                                    </div>
                                                </div>

                                                <div class="grid__title--grouped float-left" >
                                                  <div class="wrapper__article-sous-title">
                                                    <h5 class="hdl__large--grouped"><?php echo $lang['GLOBAL_WORKS'][$_GET['link']]['name'];?></h5>
                                                    <h2 class="hdl__xslarge--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['task'];?></h2>
                                                  </div>
                                                </div>

                                                <p class="para__intro--dark"><?php echo $lang['WORKS'][$_GET['link']]['sunnary'];?></p>

                                                <div class="wrapper__btn-projects">
                                                <?php

                                                    if($lang['GLOBAL_WORKS'][$_GET['link']]['link'] == '')
                                                    {

                                                        echo '<a href="#article" class="btn__dark" id="articleBtn"><span class="icon-double-arrow" data-grunticon-embed></span>'.$lang['WORKS_BTN_READ'].'</a>';

                                                    }
                                                    else
                                                    {

                                                        echo '<a href="'.$lang['GLOBAL_WORKS'][$_GET['link']]['link'].'" class="btn__dark"><span class="icon-read_more" data-grunticon-embed></span>'.$lang['WORKS_BTN_ONLINE'].'</a>';

                                                    }


                                                        foreach($lang['GLOBAL_WORKS_LIST'] as $value)
                                                        {
                                                          if($value == $_GET['link'])
                                                          {
                                                             $nextWork =  current($lang['GLOBAL_WORKS_LIST']);
                                                          }

                                                        }


                                                  ?>
                                                     <a href="works.php?link=<?php echo $nextWork; ?>" class="btn__gray"><?php echo $lang['WORKS_BTN_NEXT'];?><span class="icon-arrow-right" data-grunticon-embed>></span></a>
                                                </div>

                                          </div>

                                          <div class="grid__project-inbrowser <?php if(isset($lang['WORKS'][$_GET['link']]['wide'])){ echo 'grid__inbrowser-wide';}?>">
                                              <img src="src/img/<?php echo $_GET['link']; ?>-in_browser.png" alt="in_browser">
                                          </div>
                                  </div>

                              </article>




              <?php
                if($_GET['link'])
                {
                  include_once 'include/projects/'.$_GET['link'].'.php';
                }

              ?>

        </div>

</body>



</html>
