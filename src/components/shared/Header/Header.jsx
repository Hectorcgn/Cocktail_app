import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

function Header() {

  const location = useLocation().pathname;

  return (
    <header>
      <Navbar/>
      <div className='header-main'>
        <h1 className='header-main-title'>Cocktails &  Getränke!</h1>
        <p className='header-main-p'>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!</p>
      </div>
      {location !== '/adddrink' && <div>
        <Search/>
        <div className='header-icon'>
          <FontAwesomeIcon icon={faAnglesDown} size="xl" style={{color: "#ffffff",}} />
        </div>
      </div>}
    </header>
  )
}

export default Header