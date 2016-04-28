<!-- ////////////////////////////////////////// ARTICLE /////////////////////////////////////////// -->

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
                                    <h5 class="hdl__large--grouped"><?php echo $lang['WORKS_NAV'][1];?></h5>
                                    <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_sub'];?></h2>
                                  </div>

                               </div>

                            </div>

                            <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_part_1'];?></p>

                    				<?php echo $lang['WORKS'][$_GET['link']]['design_list_1'];?>

                    				<p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_part_2'];?></p>


              	            <div class="grid__img-project-small">
              	                <img src="src/img/tab-lsp.gif" class="img-project-center" alt="img-project-center">
              	                <p class="para__legende--dark"></p>
              	            </div>

                    				<p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_part_3'];?></p>


                            <div class="grid__img-project--FloatL">
                              <img src="src/img/lsp-dashboard-zoning.jpg" class="img-project-center" alt="img-project-center">
                              <p class="para__legende--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_legende_2'];?></p>
                            </div>
                            <div class="grid__img-project--FloatR">
                              <img src="src/img/lsp-dashboard.jpg" class="img-project-center" alt="img-project-center">
                              <p class="para__legende--dark"><?php echo $lang['WORKS'][$_GET['link']]['design_legende_3'];?></p>
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
                                    <h2 class="hdl__SoustitreProject--grouped--dark"><?php echo  $lang['WORKS'][$_GET['link']]['code_sub'];?></h2>
                                  </div>
                                </div>

                            </div>

                              <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_1'];?></p>

                              <div class="grid__img-project-small">
                                <img src="src/img/lsp-panier.gif" class="img-project-center" alt="img-project-center" >
                                <p class="para__legende--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_legende_1'];?></p>
                              </div>


                      			   <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_2'];?></p>

                               <?php echo $lang['WORKS'][$_GET['link']]['code_list_1'];?>

                              <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_3'];?></p>


                        			<h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_1'];?></h4>

                              <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_4'];?></p>

                      				<pre><code class="javascript">
                      						angular.module('factures').controller('facturesCtrl', function(facturesFact, $resource, $scope) {

                      							// get all the invoics of the currently logged in client
                      						    facturesFact.list.query({client_id : Cookies.getJSON('globals').currentUser.id}, function(data) {
                      						        $scope.factures = data.factures;
                      						     });

                      						    // display order details when
                      						    $scope.getInvoice = function(invoice){
                      						    	$scope.lineOrder = invoice
                      						    	showPopUp('invoice_details');
                      						    }


                      						});
                      				</code></pre>

                      				<p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_5'];?></p>

                      				<pre><code class="javascript">
                      						angular.module('factures').factory('facturesFact', function ($resource) {

                      							return {

                      									// Get all invoices
                      							    	list 			: $resource(
                      									    			'/api/factures',
                      													{client_id : '@client_id'},
                      										    	 	{'query': { method: 'GET',isArray:false }}
                      										    	 	),

                      									// Update invoice statut
                      							    	updateStatue 	: $resource('/api/facture-updatStatue',
                      													{id:'@id', statue:'@statue', client_id:'@client_id'},
                      								    	 			{'query': { method: 'PUT' }}
                      								    	 			),

                      							}

                      						})
                      				</code></pre>

                      				<p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_6'];?></p>

                      	 			<pre><code class="javascript">
                      					        // retreve all Orders
                      					         app.get('/api/factures', function(req, res) {

                      					            var client_id = req.query.client_id;

                      					                    //find the right client and retreave commandes
                      					                    clients.findOne({_id: client_id}, {'factures':1}, function(err, factures) {

                      					                        if(err)
                      					                             {
                      					                                return res.send(err);
                      					                             }
                      					                             else
                      					                             {
                      					                                return res.json(factures);
                      					                             }

                      					                    });

                      					        })
                                </code></pre>


                                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_7'];?></p>

                                <h4 class="hdl__SoustitreProject--grouped--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_small_sub_2'];?></h4>

                                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_8'];?></p>

                      				 <pre><code class="html">
                      				  &lt;div module structure="tab" content="commandes,stocks, messages"&gt; &lt;div&gt;
                      				 </code></pre>

                               <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_9'];?></p>

                          			<pre><code class="javascript">
                          						angular.module('panel')

                          							// get attribute strcture and load coressponding structure
                          							.directive('module', function() {

                          								    return {

                          								        restrict: 'A',
                          								        scope: {},

                          								        //send value to template
                          								        link: function(scope, element, attrs) {

                          								           scope.TabsData = attrs.content.split(','); // contruct the array

                          								       },

                          										templateUrl: function(elem, attrs){
                          										      return 'modules/'+attrs.skin+'/views/'+attrs.skin+'.html';
                          										}

                          								    }

                          						})
                          			</code></pre>

                                <p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_10'];?></p>

                        				<pre><code class="html">
                        						&lt;section class="m-tabs" ng-controller="TabCtrl"&gt;

                        						      &lt;ul&gt;
                        						            &lt;li ng-repeat="name in TabsData ng-class="{active:isSet($index)}"&gt;
                        						                &lt;h2 ng-click="setTab($index)">{{name}}&gt;/h2&gt;

                        						            &lt;/li&gt;
                        						      &lt;/ul&gt;

                        						       &lt;div  ng-show="isSet($index)" ng-repeat="data in TabsData" ng-include src="'modules/' + data + '/views/' + data + '.html'"&gt;&lt;div&gt;


                        						&lt;/section&gt;
                        				</code></pre>


                        				<p class="para__large--dark"><?php echo $lang['WORKS'][$_GET['link']]['code_part_11'];?></p>

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
