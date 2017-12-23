import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch'

class reaProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('./todo.json')
      .then(response => response.json()
   		.then(todos => { 
   			console.log(todos)
	      const posts = todos;
        this.setState({ posts });
     });
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

