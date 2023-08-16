import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to={'/'}>
      <h2>DRINKS&CHILL</h2>
      </Link>
      <p>MENU</p>
    </nav>
  )
}

export default Navbar