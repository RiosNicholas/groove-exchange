import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import PostFeed from './components/PostFeed'
import PostDetailed from './components/PostDetailed'
import PostForm from './components/PostForm'

function App() {
  return (
    <>
      <NavBar /> 
      <PostFeed />
      <PostDetailed />
      <PostForm />
    </>
  )
}

export default App
