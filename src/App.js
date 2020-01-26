import React from 'react'
import Post from './components/Post'
import Comment from './components/Comment'

function App() {
  return (
    <div className="App">
      <h2>Posts</h2>
      <Post />
      <h2>Comments</h2>
      <Comment />
    </div>
  );
}

export default App;
