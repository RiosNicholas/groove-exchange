import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './routes/Home.jsx';
import NavBar from './components/NavBar.jsx';
import EditPost from './routes/EditPost.jsx'
import CreatePost from './routes/CreatePost.jsx'
import PostDetailed from './routes/PostDetailed.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route index={true} path='/' element={<Home />} />
          <Route index={true} path='/create-post' element={<CreatePost />} />
          <Route index={true} path='/edit-post/:id' element={<EditPost />} />
          <Route index={true} path='/post/:id' element={<PostDetailed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
