import React, { Component } from 'react';
import Tech from '../Components/Cards/Categories/tech.js';
import Post from '../Components/Post/Post.js';
import {BrowserRouter, Route} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="Home">
            <Route exact path="/" component={Tech}/>
            <Route exact path = "/Post/:url" render={props => <Post {...props}/>}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default Home;
