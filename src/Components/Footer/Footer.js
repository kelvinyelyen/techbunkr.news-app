/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div>
      <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-lg-7">
                      <div class="widget">
                          <div class="footer-text text-left">
                              <a href="index.html"><img src="images/version/tech-footer-logo.png" alt="" class="img-fluid"/></a>
                              <h2 style={{color:"red"}}>Our Electronic . Evolved Earth.</h2>
                              <p>Techbunkr is a technology blog, we share news and gadget articles from different sources all in one place for easy access. </p>
                              <div class="social">
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                              </div>

                              <hr class="invis"/>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <div class="widget">
                          <h2 class="widget-title">Other News</h2>
                          <div class="link-widget">
                              <ul>
                                  <li><a href="#">Top Headlines</a></li>
                                  <li><a href="#">World</a></li>
                                  <li><a href="#">Business</a></li>
                                  <li><a href="#">Entertainment</a></li>
                                  <li><a href="#">Science and Health</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-md-12 text-center">
                      <br/>
                      <div class="copyright">&copy; Techbunkr</div>
                  </div>
              </div>
          </div>
      </footer>

      </div>
    );
  }
}

export default Footer;
