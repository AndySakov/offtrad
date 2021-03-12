import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const clearSearch = () => {
  document.getElementsByClassName("search-bar")[0].value = ""
}

const SearchBar = () => {
  return (
    <div className='search-bar-wrapper'>
      <input type="text" className="search-bar" placeholder='Search for something...'/>
      <FontAwesomeIcon className='icon' icon='times' size='1x' onClick={clearSearch} />
    </div>
  )
}

export default SearchBar
