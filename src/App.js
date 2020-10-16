import React, { useState, useEffect } from 'react';
import posts from './posts'

function App() {
  const [ postsList, setPosts ] = useState([]);

  useEffect(() => {
    setPosts(posts);
  }, [])

  const handleChange = (e) => {
    let word = (e.target.value).toLowerCase();
    const newPosts = posts.filter((post) => 
      post.title.toLowerCase().includes(word)
    )
    setPosts(newPosts);
  }

  return (
    <div>
      <div className="filter">
        <input 
        type="text"
        onChange={ handleChange }
        placeholder="Ingresa el término de búsqueda" />
      </div>
      <ul>
        {postsList.map( (post, index) => 
          <li key={index}>
            <a href={post.url}><img src={post.image } alt={post.title}/></a>
            <p>{ post.title }</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App


