// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </Router>
  );
};

export default App;
