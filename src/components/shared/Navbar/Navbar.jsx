import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav>
      <Link to={'/'}>
        <h2>DRINKS&CHILL</h2>
      </Link>
      <div>
        <p>MENU</p>
        <ul className='list'>
        <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/adddrink'}>
            <li>Add Drink</li>
          </Link>
          <Link to={'/mydrink'}>
            <li>My Drink</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar