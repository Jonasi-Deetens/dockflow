import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-32 px-24 m-0 flex justify-between items-center'>
        <h1 className='text-green-300'>Jonasi</h1>
        <ul>
            <Link to="/">Home</Link>
        </ul>
    </nav>
  )
}

export default Navbar