export const MainMenu = ({items, MenuClick}) => (
    <div className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-inner hidden-phone">
            <div className="container_first">
                <div className="nav pull-left flags">
                    <div className="btn-group">
                        <a type="button" href="#" className="btn dropdown-toggle"  data-toggle="dropdown" >
                          <span className="orange forcebtn"> 
                            <span className="glyphicon glyphicon-flag forcebtn" aria-hidden="true"></span> Language"
                            <b className="caret"> </b>
                          </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li> <a href="#" > <span className="change_lang" id="sv">Svenska</span></a></li>
                            <li role="separator" className="divider"></li>
                            <li> <a href="#"> <span className="change_lang" id="en">English</span>  </a></li>
                            <li role="separator" className="divider"></li>
                            <li> <a href="#"> <span className="change_lang" id="fi">Suomalainen</span>  </a></li>
                            <li role="separator" className="divider"></li>
                            <li> <a href="#" > <span className="change_lang" id="de">Deutsch</span>  </a></li>
                            <li role="separator" className="divider"></li>
                            <li> <a href="#"> <span className="change_lang" id="da">Dansk</span>  </a></li>
                        </ul>
                    </div>
                    <form action="/i18n/setlang/" method="post" id="lang" >
                        csrf_token
                        <input name="next" type="hidden" value="{{ redirect_to }}" />
                        <input name="language" type="hidden" value="en"/>
                    </form>
              </div> 
              <span className="midhead">
                  <img src="/media/tagline_orange.png" alt="tagline - svensk produktion och design" className="tagline_img" />
              </span>

              <ul className="nav pull-right flags orange">
                  <li>
                      <a id="token" href="/cart/show/" >
                      <button type="button" className="btn btn-default button_has_item"> 
    							        <span className="glyphicon glyphicon-gift orange" aria-hidden="true"></span>
                            
                          <div id="updatecart orange"></div>
                      </button>
                      </a>
                  </li>
                </ul>
            </div>
        </div>
        <div className="navbar-inner">
            <div className="menu_container">
				        <span className= "visible-xs">
      					  <a id="token" href="/cart/show/">
      					   <span className="mob_shop_icon">
                      <h4 className="glyphicon glyphicon-gift orange" aria-hidden="true" alt="Vamlingbolaget shopping cart" ></h4>
                   </span>
      					  </a>
      				  </span> 

                <a href="/" className="navbar-brand hidden-phone">
                  <img src="/media/Vamlingbolaget_orange.png" alt="Vamlingbolaget logo" className="align-middle vb_logo" />
                </a> 
                <a href="/" className="navbar-brand visible-phone orange">
                  <img src="/media/Vamlingbolaget_orange.png" style="width:180px" alt="Vamlingbolaget logo"/>
                </a>

                <button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navHeaderCollapse">
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                        <span className= "icon-bar"></span>
                </button>
                <div class = "collapse navbar-collapse navHeaderCollapse main_nav">

                     <ul class = "nav navbar-nav nav-list mainnav mob_nav orange">                   
                        <li>
                            <a href="/products/full/">Shop"<span className="visible-phone"> - Kvinna </span></a>
                        </li>
                        <li className="visible-phone">
                            <a href="/products/type/man/">Shop - Herr</a>
                        </li className="visible-phone">
                        <li className="visible-phone">
                            <a href="/products/type/barn/">Shop - Barn</a>
                        </li>                  
                         <li className="visible-phone">
                            <a href="/cart/show/" >Shoppinglåda"</a>
                        </li>
                        <li> 
                            <a href="/about/" id="about">Om oss"</a>
                        </li>
                        <li class = "dropdown visible-xs">
                            <a href="/about/" class = "dropdown-toggle" data-toggle = "dropdown">Om oss"<b class = "caret"></b></a>
                            <ul className= "dropdown-menu">
                                <li><a href="/about/">Om oss"</a></li>
                                <li><a href="/shops/">Butiker"</a></li>
                                <li><a href="/order/">Beställ"</a></li>
						                    <li><a href="/galleries/">Bildgallerier"</a></li>
                                <li><a href="/newsletter/">Nyhetsbrev"</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
)

