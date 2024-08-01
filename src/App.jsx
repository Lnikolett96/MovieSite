import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import MovieList from './components/movielist/MovieList'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App

