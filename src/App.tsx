import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Post from './features/post/Post';
import Pokemon from './features/pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Demo</h1>
      <Counter />
      <Post />
      <Pokemon />
    </div>
  );
}

export default App;
