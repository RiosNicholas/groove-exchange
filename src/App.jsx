import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import PostFeed from './components/PostFeed'
import PostDetailed from './components/PostDetailed'

function App() {
  return (
    <>
      <NavBar /> 
      <PostFeed />
      <PostDetailed />
    </>
  )
}

export default App
