/*jshint esversion: 8*/
// eslint-disable-next-line
import React, {Component} from 'react';

const Post = (props) => {
    const validUrl = this.props.match.params.url;
    const postcard = () => {
        if (validUrl === props.url) {
          return (
            <div>
              <div className="card card-cascade wider reverse">
                <div className="view view-cascade overlay">
                  <img className="card-img-top" src={props.urlToImage} alt="Card image cap"/>
                  <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div className="card-body card-body-cascade text-center">
                  <h4 className="card-title"><strong>{props.title}</strong></h4>
                  <h6 className="font-weight-bold indigo-text py-2">{props.author}</h6>
                  <p className="card-text">{props.content}</p>
                  <p><a className="px-2 fa-lg li-ic">Source:{props.author}</a></p>
                </div>
              </div>)
            </div>
          );
        } else {
          return <div><h1>Page Not Found</h1></div>;
        }
      };

    return (
      <div className="container">
          {postcard}
      </div>
    );

  };



export default Post;
