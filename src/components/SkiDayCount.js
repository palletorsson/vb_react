import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react'
import fetch from 'isomorphic-fetch'

export class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }



  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
       
            <li key={post[0].todo}>{post[0].done}</li>
       
        </ul>
      </div>
    );
  }
}

