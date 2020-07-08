import React, { Component } from 'react';
import posts from './posts'

class App extends Component {
  constructor(){
    super();
    this.state = {
      postsList: posts 
    }
  }

  handleChange(event){
    let word = (event.target.value).toLowerCase();
    this.setState({
      postsList: posts.filter((post) => 
        post.title.toLowerCase().includes(word)
      )
    });
  }

  render() {
    return (
      <div>
        <div className="filter">
          <input 
          type="text"
          onChange={this.handleChange.bind(this)}
          placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {this.state.postsList.map( (post, index) => 
            <li key={index}>
              <a href={post.url}><img src={post.image } alt={post.title}/></a>
              <p>{ post.title }</p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


export default App


