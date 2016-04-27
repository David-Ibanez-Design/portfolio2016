
<!-- ////////////////////////////////////////// ARTICLE /////////////////////////////////////////// -->

      <article class="wrapper__article_inside grid__article-text">

          <div class="wrapper__article">

              <div class="wrapper__article-parts js-ancor" id="concept">

                <div class="wrapper__article-hdl-grouped" id="article">
                  <div class="grid__title--line">
                    <div class="number-hdl">01</div>
                  </div>

                  <div class="grid__title--grouped" >
                    <div class="wrapper__article-sous-title">
                      <h5 class="hdl__large--grouped"><?php echo $lang['WORKS_NAV'][0];?></h5>
                      <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['concept_sub'];?></h2>
                    </div>
                  </div>

                </div>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['concept_part_1'];?></p>

              </div>

              <div class="wrapper__article-parts js-ancor" id="design">

                <div class="wrapper__article-hdl-grouped">

                    <div class="grid__title--line">
                      <div class="number-hdl">02</div>
                    </div>

                    <div class="grid__title--grouped" >
                     <div class="wrapper__article-sous-title">
                      <h5 class="hdl__large--grouped">Design</h5>
                      <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_sub'];?></h2>
                    </div>

                  </div>

                </div>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_part_1'];?></p>

                <div class="grid__img-project--full">
                 <img src="src/img/color-palette-portfolio.jpg" class="img-project-center" alt="img-project-center">
                 <p class="para__legende--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_legende_1'];?></p>
               </div>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_part_2'];?></p>

                <div class="grid__img-project-small">
                 <img src="src/img/contact-portfolio.gif" class="img-project-center" alt="img-project-center">
                 <p class="para__legende--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_legende_2'];?></p>
               </div>

           </div>

            <div class="wrapper__article-parts js-ancor" id="code">

              <div class="wrapper__article-hdl-grouped">
                <div class="grid__title--line">
                  <div class="number-hdl">03</div>
                </div>
                <div class="grid__title--grouped" >
                  <div class="wrapper__article-sous-title">
                    <h5 class="hdl__large--grouped"><?php echo $lang['WORKS_NAV'][2];?></h5>
                    <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['cod_sub'];?></h2>
                  </div>
                </div>

              </div>

                  <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_1'];?></p>

                  <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_1'];?></h4>

                  <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_2'];?></p>

                  <?php echo $lang['WORKS'][$_GET['link']]['code_list_1'];?>

                  <pre><code class="html">
                    &lt;nav class="wrapper__lang--left"&gt;
                      &lt;ul class="lang"&gt;
                        &lt;li&gt;
                        &lt;a class="lang__label"&gt;
                          &lt;span class="lang__icon icon-cross-small">&lt;/span&gt;
                          &lt;span class="lang__selected">&lt;/span&gt;
                        &lt;/a&gt;
                          &lt;ul class="lang__dropdown"&gt;
                          &lt;li class="lang__dropdown--items" &gt;&lt;a href=""&gt;fr&lt;/a&gt;&lt;/li&gt;
                          &lt;li class="lang__dropdown--items" &gt;&lt;a href=""&gt;en&lt;/a&gt;&lt;/li&gt;
                          &lt;li class="lang__dropdown--items" &gt;&lt;a href=""&gt;jp&lt;/a&gt;&lt;/li&gt;
                          &lt;/ul&gt;
                        &lt;/li&gt;
                      &lt;/ul&gt;
                    &lt;/nav&gt;
                  </code></pre>

                  <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_3'];?></p>

                  <pre><code class="scss">
                   .lang {
                         position:relative;
                         z-index: 4;
                         width:27px;
                         height:41px;
                         margin: 0 auto;
                         cursor:pointer;

                             @include e(label) {
                               @extend %lang__label;
                               z-index: 2;
                               border: 3px solid $black;
                               span{font-family: $font-family--primary--regular;}
                              }

                             @include e(icon) {
                               @include absolute(top -6px left 4px);
                               @extend %lang-span;
                               width: 13px;
                               opacity: 0;
                            }

                            @include e(selected) {
                              @include transform(rotate(45deg));
                              display: block;
                              margin-left: 3px;
                              font-size: 13px;
                              line-height: 21px;
                              text-align: center;
                              @include m(projects){color:$white;}
                            }

                            @include e(dropdown) {
                              @include center-axis(x);
                              @include absolute(top -25px);
                              display: none;
                              padding: 40px 11px 9px;
                              background-color:$black;

                              @include m(items) {
                                position:relative;
                                width:50px;
                                height: 33px;
                                margin-bottom: 5px;
                                margin-top: 5px;
                                text-align:center;
                          }
                  }
                }
                </code></pre>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_4'];?></p>

                <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_2'];?></h4>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_5'];?></p>

                <pre><code class="scss">

                 .para {

                 @include e(large) {

                     @include m(dark) {
                       @extend %para;
                       color: $gray;
                       @include trailer(1);
                    }

                    @include m(light) {
                      @extend %para;
                      color: $blue--x-light;
                      @include trailer(1);
                    }
                }


                @include e(meduim) {

                    @include m(dark) {
                      @extend %para-medium;
                      color: $gray;
                      @include trailer(1);
                    }

                    @include m(light) {
                      @extend %para-medium;
                      color: $blue--x-light;
                      @include trailer(1);
                     }
                  @extend %para-medium;
                }


                @include e(xsmall) {

                    @include m(dark) {
                      @extend %para-xsmall;
                      color: $gray;
                      @include trailer(1);
                      text-shadow: 1px 1px $black;
                    }

                    @include m(light) {
                      @extend %para-xsmall;
                      color: $blue--light;
                      @include trailer(1);
                      text-shadow: 1px 1px $black;
                    }
                    @extend %para-small;
                }

                </code></pre>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_6'];?></p>

                <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_3'];?></h4>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_7'];?></p>

                <?php echo $lang['WORKS'][$_GET['link']]['code_list_2'];?>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_8'];?></p>

                <h2 class="hdl__SoustitreProject--grouped--dark conclusion"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_4'];?></h2>

                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_9'];?></p>

            </div>

        </div>

        <div class="wrapper__back-top">
          <span class="icon-arrow-top" data-grunticon-embed></span>
        </div>
      </article>

    </section>

  </div>

  </body>

</html>
