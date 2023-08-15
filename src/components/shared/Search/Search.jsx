import React from 'react'
import './Search.scss'

function Search() {
  return (
    <div className='header-search'>
      <input type="text" placeholder='type something' />
      <button>Search</button>
    </div>
  )
}

export default Search