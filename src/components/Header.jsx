import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header py-4'>
        <div className='container flexBetween'>
            <h1 className='logo text-white text-2x1 font-bold'>TechWave</h1>
            <nav className='nav-links'>
                <ul className='nav-link flex space-x-4'>
                    <li><Link to="/" className='text-white hover:text-gray-400'>Home</Link></li>
                    <li><Link to="/product" className='text-white hover:text-gray-400'>Product</Link></li>
                    <li><Link to="/order" className='text-white hover:text-gray-400'>Order</Link></li>
                    <li><Link to="/news" className='text-white hover:text-gray-400'>News</Link></li>
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Header