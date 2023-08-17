import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  const [openfuntion, setOpenfuntion] = useState(false);
  const option = () => {
    setOpenfuntion(prev => prev = !prev)
  }

  return (
    <nav>
      <Link to={'/'}>
        <h2>DRINKS&CHILL</h2>
      </Link>
      <div>
        <p onClick={option}>MENU</p>
        <ul className={`list ${openfuntion ? 'open' : ''}`}>
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