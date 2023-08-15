import React from 'react'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <Navbar/>
      <div className='header-main'>
        <h1 className='header-main-title'>Cocktails &  Getränke!</h1>
        <p className='header-main-p'>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!</p>
      </div>
      <Search/>
      <div className='header-icon'>
        <FontAwesomeIcon icon={faAnglesDown} size="xl" style={{color: "#ffffff",}} />
      </div>
    </header>
  )
}

export default Header