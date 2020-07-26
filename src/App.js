/*jshint esversion:6*/
import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Cards from './Components/Cards/Cards.js';
import World from './Components/Cards/Categories/World.js';
import Business from './Components/Cards/Categories/Business.js';
import Footer from './Components/Footer/Footer.js';
import Post from './Components/Post/Post.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Cards}/>
            <Route exact path="/WorldNews" component={World}/>
            <Route exact path="/BusinessNews" component={Business}/>
            <Route exact path = "/Post/:url" render={props => <Post {...props}/>}/>
            <Footer/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
