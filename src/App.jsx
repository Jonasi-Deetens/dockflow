import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <>
    <nav className='w-full m-0'>
      <ul>
        <Link to="/s">Home</Link>
      </ul>
    </nav>
    <Routes>
      <Route path='/s' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
