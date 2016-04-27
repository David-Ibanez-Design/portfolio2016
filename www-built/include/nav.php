
         <ul class="nav">
           <li class="nav__wrapper--white">
                <a class="nav__label"><?php echo $lang['MENU_LABEL']; ?> <span class="icon-menu" data-grunticon-embed></span></a>

                <ul class="nav__dropdown">

                      <li class="nav__dropdown__items">
                        <span class="icon-cross-small nav__closeIcon" data-grunticon-embed></span>
                      </li>

                      <li class="nav__dropdown__items">
                        <a href="index.php"><?php echo $lang['MENU_HOME']; ?></a>
                      </li>

                      <li class="nav__dropdown__items">

                              <a href="#"><?php echo $lang['MENU_PROJECTS']; ?>
                                <span class="nav__moreIcon">
                                  <span class="line-horizontal"></span>
                                  <span class="line-vertical"></span>
                                </span>
                              </a>

                              <ul class="nav__sousMenu">
                                 <?php
                                   foreach ($lang['GLOBAL_WORKS'] as $data => $projects)
                                    {
                                     echo  '<li class="nav__sousMenu__items"><a href="works.php?link='.$projects["class"].'">'.$projects["name"].'</a></li>';
                                    }
                                 ?>
                              </ul>

                      </li>

                      <li class="nav__dropdown__items"><a href="contact.php<?php echo '?lang='.$current_lang; ?>"><?php echo $lang['MENU_CONTACT']; ?></a></li>

                  </ul>

            </li>
         </ul>