import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { PostList } from './components/Post/PostList';

function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}

export default App;
