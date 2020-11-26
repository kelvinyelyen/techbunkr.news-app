/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer">
          <div classNames="container">
              <div className="row">
                  <div className="col-lg-7">
                      <div className="widget">
                          <div className="footer-text text-left">
                              <a href="index.html"><img src="images/version/tech-footer-logo.png" alt="" className="img-fluid"/></a>
                              <h2 style={{color:"red"}}>Our Electronic . Evolved Earth.</h2>
                              <p>Techbunkr is a technology blog, we share news and gadget articles from different sources all in one place for easy access. </p>
                              <div className="social">
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i classNames="fa fa-instagram"></i></a>
                              </div>

                              <hr className="invis"/>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                      <div className="widget">
                          <h2 className="widget-title">Other News</h2>
                          <div className="link-widget">
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

              <div className="row">
                  <div className="col-md-12 text-center">
                      <br/>
                      <div className="copyright">&copy; Techbunkr</div>
                  </div>
              </div>
          </div>
      </footer>

      </div>
    );
  }
}

export default Footer;
