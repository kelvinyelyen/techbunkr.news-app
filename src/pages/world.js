import React, { Component } from 'react';
import World from '../Components/Cards/Categories/world.js';
import Post from '../Components/Post/Post.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/WorldNews" component={World}/>
            <Route exact path = "/Post/:url" render={props => <Post {...props}/>}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
