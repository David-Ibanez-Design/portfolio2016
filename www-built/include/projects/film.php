<!-- ////////////////////////////////////////// SIDE BAR /////////////////////////////////////////// -->

  <?php
    $current_project = 'Ciné chez soi';
    $menu_items = ['Concept','', 'Code'];
    include_once 'include/sideBar.php';
  ?>


<!-- ////////////////////////////////////////// grid RIGHT /////////////////////////////////////////// -->




        <article class="wrapper__article_inside grid__article-text">

            <div class="wrapper__article">

                    <div class="wrapper__article-parts js-ancor" id="concept">

                      <div class="wrapper__article-hdl-grouped">
                        <div class="grid__title--line">
                          <div class="number-hdl">01</div>
                        </div>
                        <div class="grid__title--grouped" >
                          <div class="wrapper__article-sous-title">
                            <h5 class="hdl__large--grouped"><?php echo $lang['WORKS_NAV'][0];?></h5>
                            <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS']['film']['design_sub'];?></h2>
                          </div>
                        </div>
                      </div>


                      <p class="para__large--dark"><?php echo $lang['WORKS']['film']['design_part_1'];?></p>


        	            <div class="grid__img-project">
        	                <img src="src/img/ihomecine-respon.png" class="img-project-center" alt="img-project-center">
        	                <p class="para__legende--dark"><?php echo $lang['WORKS']['film']['design_legende_1'];?></p>
        	            </div>

                    </div>

                    <div class="wrapper__article-parts js-ancor" id="code">

                          <div class="wrapper__article-hdl-grouped">
                            <div class="grid__title--line">
                              <div class="number-hdl">02</div>
                            </div>

                            <div class="grid__title--grouped" >
                              <div class="wrapper__article-sous-title">
                                <h5 class="hdl__large--grouped"><?php echo $lang['WORKS_NAV'][2];?></h5>
                                <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS']['film']['code_sub'];?></h2>
                              </div>

                            </div>
                          </div>

                          <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_1'];?></p>

                          <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS']['film']['code_small_sub_1'];?></h4>

                          <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_2'];?></p>

                  				<pre><code class="scss">
                  						$susy: (
                                						  container: 100%,
                                						  columns: 12,
                                						  gutters: 0,
                                						  global Box Sizing: border-box,
                  						);
                  				</code></pre>

                  			  <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_3'];?></p>

                          <div class="grid__img-project">
                            <img src="src/img/film-grid.png" class="img-project-center" alt="img-project-center">
                            <p class="para__legende--dark"><?php echo $lang['WORKS']['film']['code_legende_2'];?></p>
                          </div>

                          <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_4'];?></p>


                			   <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS']['film']['code_small_sub_2'];?></h4>

                	       <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_5'];?></p>

                  				<pre><code class="scss">

                  					.container{
                  						 @include container;
                  						 position: relative;
                  					}
                            .grid-logo{
                  						@include span(4);
                  						height:100%;
                  					}

                  					.grid-menu{
                  						@include span(8);
                  						height:100%;
                  					}

                  					.grid-hero-big{
                  						@include span(12);
                  						height: 766px;
                  					}

                  					.grid-hero-long{
                  						@include span(12);
                  						height: 383px;
                  					}

                  					.grid-hero-small{
                  						@include span(12);
                  						height: 383px;
                  					}

                  					.grid-box-office-movies{
                  						@include span(12);
                  					}

                  					.grid-new-movies{
                  						@include span(12);
                  						margin-top: -411px;
                  					}
                  				</code></pre>

                        <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS']['film']['code_small_sub_3'];?></h4>
                        <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_6'];?></p>

                			   <pre><code class="scss">
                  				$desktop : 1040px;
                  				$tablet  : 780px;
                  				$mobile  : 430px;
                			   </code></pre>

                			   <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_7'];?></p>

                        <pre><code class="scss">
                                              .grid-logo{
                					@include span(4);
                					height:100%;
                				}

                				.grid-menu{
                					@include span(8);
                					height:100%;
                				}

                				.grid-hero-big{
                					@include span(12);
                					height: 300px;
                					@include susy-breakpoint($desktop , $susy) {
                						 @include span(5);
                						height: 766px;
                				 	 }

                				}

                				.grid-hero-long{
                					@include span(12);
                					height: 300px;
                					@include susy-breakpoint($desktop, $susy) {
                						@include span(5);
                						height: 383px;
                					}

                				}

                				.grid-hero-small{
                					@include span(12);
                					height: 300px;
                					@include susy-breakpoint($desktop, $susy) {
                						@include span(2);
                						height: 383px;
                				 	 }

                				}

                				.grid-box-office-movies{
                					background:$blue--dark;
                					@include span(12);
                					margin-top: 0;
                					padding:20px;
                					@include susy-breakpoint($desktop, $susy) {
                						@include span(7);
                				 	 }

                				 	 @include susy-breakpoint($tablet , $susy) {
                				 	 	padding	: em(72px) em(110px) em(109px) em(157px);
                				 	 }
                				}

                				.gild-classique-movies{
                					margin-top: 133px;
                					@include span(12);

                					@include susy-breakpoint($desktop, $susy) {
                							@include gallery(6);
                							padding-left: 40px;
                					 }
                				}
                        </code></pre>


                        <h2 class="hdl__SoustitreProject--grouped--dark conclusion"><?php echo $lang['WORKS']['film']['code_small_sub_4'];?></h2>

                        <p class="para__large--dark"><?php echo $lang['WORKS']['film']['code_part_8'];?></p>

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
