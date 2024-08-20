import React from 'react'
import Darkmode from '../DarkMode/DarkMode'
import './Navbar.css'
import Fire from '../../assets/fire.png'
import Star from '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieSite</h1>

        <div className='navbar_links'>
            <Darkmode />
            <a href="#popular">Popular <img className='navbar_emoji' src={Fire} alt="fire emoji" /> </a>
            <a href="#top_rated">Top Rated <img className='navbar_emoji' src={Star} alt="star emoji" /> </a>
            <a href="#upcoming">Upcoming <img className='navbar_emoji' src={Party} alt="party emoji" /> </a>
        </div>
    </nav>
  )
}

export default Navbar
