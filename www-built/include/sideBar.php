  <?php

    $current_project = $lang['GLOBAL_WORKS'][$_GET['link']]['name'];
    $menu_items = $lang['GLOBAL_WORKS'][$_GET['link']]['menu_items'];

  ?>

   <aside class="grid__project--left">

      <div class="wrapper__sidebar">

        <div class="wrapper__sideBar-elements">

          <div class="wrapper__sideBar-logo">

            <a href="index.php">
              <span class="icon-logo logo-projects" data-grunticon-embed ></span>
              <p><?php echo $lang['WORKS_LOGO_BACK'] ?></p>
            </a>
          </div>

          <div class="wrapper__sidebar-currennt-project">
            <p><?php echo $current_project; ?></p>
          </div>

          <ul class="wrapper__sideBar-nav">
            <?php

                $array_menu = [$lang['WORKS_NAV'][0],$lang['WORKS_NAV'][1], $lang['WORKS_NAV'][2]];

                  if($array_menu[0] == $menu_items[0]){

                  echo
                    '
                      <li class="sideBar-nav__items">
                        <span class="current-sideBar"></span>
                        <span class="sideBar-nav__triangle-select"></span>
                        <span class="sideBar-nav__title">
                          <span class="sideBar-nav__icon icon-concept" data-grunticon-embed></span><a class="js-links-projects sideBar-nav__items-links" href="#concept">'.$lang["WORKS_NAV"][0].'</a>
                        </span>
                      </li>
                    ';


                  }
                  if($array_menu[1] == $menu_items[1]){

                    echo
                    '
                        <li class="sideBar-nav__items">
                          <span class="current-sideBar"></span>
                          <span class="sideBar-nav__triangle-select"></span>
                          <span class="sideBar-nav__title">
                            <span class="sideBar-nav__icon icon-design" data-grunticon-embed></span><a class="js-links-projects sideBar-nav__items-links" href="#design">'.$lang["WORKS_NAV"][1].'</a>
                          </span>
                        </li>
                    ';


                  }

                  if($array_menu[2] == $menu_items[2]){

                    echo
                    '
                      <li class="sideBar-nav__items">
                        <span class="current-sideBar"></span>
                        <span class="sideBar-nav__triangle-select"></span>
                        <span class="sideBar-nav__title">
                          <span class="sideBar-nav__icon icon-code" data-grunticon-embed></span><a class="js-links-projects sideBar-nav__items-links" href="#code">'.$lang["WORKS_NAV"][2].'</a>
                        </span>
                      </li>
                    ';

                  }



            ?>

          </ul>

          <ul class="wrapper__sidebar-projects-nav">

            <li class="projects-menu__bg">

              <span class="projects-menu__icon icon-menu_projects" data-grunticon-embed></span>

              <ul class="projects-menu__list">


                <li class="projects-menu__arrow">
                  <a class="projects-menu__prev projects-menu__arrow--controls">
                    <span class="icon-arrowLeft arrowLeft icon-arrow" data-grunticon-embed></span>
                  </a>
                  <a class="projects-menu__next controls projects-menu__arrow--controls">
                    <span class="icon-arrowRight arrowRight icon-arrow" data-grunticon-embed></span>
                  </a>
                </li>

                <ul>

                <?php

                  if( $current_project !== 'Labosalem portail')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=lsa-portail" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-portail.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['lsa-portail']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['lsa-portail']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }

                  if( $current_project !== 'Ciné chez soi')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=film" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-film.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['film']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['film']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }

                  if( $current_project !== 'Osis')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=osis" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-osis.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['osis']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['osis']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }

                  if( $current_project !== 'ELSA')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=elsa" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-elsa.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['elsa']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['elsa']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }


                  if( $current_project !== 'Labosalem production')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=lsp" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-production.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['lsp']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['lsp']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }


                  if( $current_project !== 'Isucare')
                  {
                    echo
                    '
                      <li>
                        <a href="works.php?link=isucare" class="projects-menu__thumbs">
                          <img class="projects-menu__thumbs--visual" src="src/img/thumbs-isucare.jpg">
                          <p class="wrapper__text_thumbs">
                            <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['isucare']['name'].'</span>
                            <span class="projects-menu__thumbs--text">'.$lang['WORKS']['isucare']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                          </p>
                        </a>
                      </li>
                    ';
                  }

                  if( $current_project !== 'Portfolio')
                  {
                    echo
                    '
                      <li>
                          <a href="works.php?link=portfolio" class="projects-menu__thumbs">
                            <img class="projects-menu__thumbs--visual" src="src/img/thumbs-portfolio.jpg">
                            <p class="wrapper__text_thumbs">
                              <span class="projects-menu__thumbs--titre">'.$lang['GLOBAL_WORKS']['portfolio']['name'].'</span>
                              <span class="projects-menu__thumbs--text">'.$lang['WORKS']['portfolio']['nav_sunnary'].'</span>
                            <span class="projects-menu__thumbs--link" href="">'.$lang['WORKS_BTN_VIEW'].'</span>
                            </p>
                          </a>
                      </li>
                    ';
                  }
                ?>

                </ul>

              </ul>

            </li>

          </ul>

        </div>

       </div>

      </aside>