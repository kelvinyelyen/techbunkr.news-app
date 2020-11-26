/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import Logo from './logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav  className="navbar navbar-expand navbar-light bg-slight flex-column flex-md-row pipe-navbar justify-md-content-between">
            <a className="navbar-brand" href="/"><img src={Logo} style={{marginLeft:'100px'}} width="207px" height="24px" className="d-inline-block align-top" /></a>
              <div classNames="navbar-nav-scroll ml-md-auto">
                <ul style={{marginTop:'15px', marginRight:'100px'}} className="navbar-nav">
                    <li className="nav-item">
                      <Link to='/' class="nav-link" style={{backgroundColor:'black'}}>HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/WorldNews" style={{backgroundColor:'black'}} className="nav-link" rel="noopener">WORLD</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/BusinessNews' class="nav-link" style={{backgroundColor:'black'}}>BUSINESS</Link>
                    </li>
                </ul>
              </div>
          </nav>

      </div>
    );
  }
}

export default Navbar;
