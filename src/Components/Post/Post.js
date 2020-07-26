/*jshint esversion: 8*/
// eslint-disable-next-line
import React from 'react';


const Post = (post) => {
    const validUrl = post.match.params.url;
    const postcard = (post) => {
        if (validUrl === post.url) {
          return (
            <div>
              <div class="card card-cascade wider reverse">
                <div class="view view-cascade overlay">
                  <img class="card-img-top" src={post.urlToImage} alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body card-body-cascade text-center">
                  <h4 class="card-title"><strong>{post.title}</strong></h4>
                  <h6 class="font-weight-bold indigo-text py-2">{post.author}</h6>
                  <p class="card-text">{post.content}</p>
                  <p><a class="px-2 fa-lg li-ic">Source:{post.author}</a></p>
                </div>
              </div>)
            </div>
          );
        } else {
          return <div><h1>Page Not Found</h1></div>;
        }
      };


    return (
      <div class="container">
          {console.log(post)}
          {postcard}
      </div>
    );
  };




export default Post;
