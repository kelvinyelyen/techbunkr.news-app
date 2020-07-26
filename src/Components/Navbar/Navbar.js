/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Logo from './logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row pipe-navbar justify-md-content-between">
            <a class="navbar-brand" href="/"><img src={Logo} width="170px" height="20px" class="d-inline-block align-top" /></a>
              <div class="navbar-nav-scroll ml-md-auto">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/WorldNews" class="nav-link" rel="noopener">WORLD</Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/BusinessNews' class="nav-link">BUSINESS</Link>
                    </li>
                </ul>
              </div>
          </nav>

      </div>
    );
  }
}

export default Navbar;
