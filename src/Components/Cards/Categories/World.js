/*jshint esversion:6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class World extends Component {
  constructor(props){
    super(props);
    this.state = {
      post:[
        {
          author:"",
          discription:"",
          publishedAt:"",
          title:"",
          content:"",
          urlToImage:""
        }
      ]
    };
  }

 componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=fe76e3e41c7647358505016dad4f958a')
          .then(response => response.json())
          .then(response => this.setState({post :response.articles}));
  }
  render(){
    const { post } = this.state;
    const postlist = post.length ? (
      post.map((post) => {
        return (
          <div>
              <div class="container">
                <br/>
                <br/>
                <div class="blog-list clearfix">
                    <div class="blog-box row">
                        <div class="col-md-4">
                            <div class="post-media">
                                <Link to={'/' + post.url}>
                                  <a title="">
                                      <img class="img-fluid" src={post.urlToImage} alt="Broken Image" />
                                      <div class="hovereffect"></div>
                                  </a>
                                </Link>
                            </div>
                        </div>
                        <div class="blog-meta big-meta col-md-8">
                            <Link to={'/' + post.url}>
                                <h4><a title="">{post.title}</a></h4>
                            </Link>
                            <p>{post.description}</p>
                            <small class="firstsmall"><a class="bg-orange" title="">TOP</a></small>
                            <small><a title="">{post.publishedAt}</a></small>
                            <small><a title=""> {post.author}</a></small>
                            <small><a title=""><i class="fa fa-eye"></i> 1114</a></small>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        );
      })
    )

    : (
      <div class="center alert alert-primary">No post yet!</div>
    );


    return (
      <div class="container">
         <div class="">
            {postlist}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         </div>
      </div>
    );
  }
}

export default World;
