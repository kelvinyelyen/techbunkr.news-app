/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './tech.css';

class Cards extends Component {
 constructor (props) {
   super(props);
   this.state = {
     post: [
       {
         author:"",
         discription:"",
         publishedAt:"",
         title:"",
         content:"",
         urlToImage:"",
         url:""
       }
     ]
   };
 }

componentDidMount() {
fetch('https://newsapi.org/v2/top-headlines?' +
      'country=us&' + 'category=technology&' +
      'apiKey=fe76e3e41c7647358505016dad4f958a')
    .then(response => response.json())
    .then(response => this.setState({post :response.articles}));
}


  render() {
    const { post } = this.state;
    const postlist = post.length ? (
      post.map((post) => {
        return (
          <div>
              <div className="container">
                <br/>
                <br/>
                <div className="blog-list clearfix">
                    <div className="blog-box row">
                        <div className="col-md-4">
                            <div className="post-media">
                                <Link to={`/Post/${post.url}`}>
                                  <a title="">
                                      <img className="img-fluid" src={post.urlToImage} alt="Broken Image" />
                                      <div className="hovereffect"></div>
                                  </a>
                                </Link>
                            </div>
                        </div>
                        <div className="blog-meta big-meta col-md-8">
                            <Link to={`/Post/${post.url}`}>
                                <h4><a title="">{post.title}</a></h4>
                            </Link>
                            <p>{post.description}</p>
                            <small className="firstsmall"><a className="bg-orange" title="">Tech</a></small>
                            <small><a title="">{post.publishedAt}</a></small>
                            <small><a title=""> {post.author}</a></small>
                            <small><a title=""><i className="fa fa-eye"></i> 1114</a></small>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        );
      })
    )

    : (
      <div className="center alert alert-primary">No post yet!</div>
    );


    return (
          <div>
            {postlist}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         </div>

    );
  }
}

export default Cards;
