import React, { Component } from 'react';
import Business from '../Components/Cards/Categories/business.js';
import Post from '../Components/Post/Post.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/BusinessNews" component={Business}/>
            <Route exact path = "/Post/:url" render={props => <Post {...props}/>}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
