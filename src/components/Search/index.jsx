import React, { useEffect, useState } from 'react';
import './Search.css'

const Search = ({ searchQuery, setSearchQuery }) => {
  const [str, setStr] = useState('');

  const handleEnterKeyPress = (ev) => {
    if(ev.key === 'Enter' || ev.keyCode === 13) {
      setSearchQuery(str);
    }
  }

  useEffect(() => {
    if(searchQuery !== '') {
      setStr(searchQuery);
    }
  }, [searchQuery])

  return (
    <div id="search-container">
      <input 
        type="text" 
        placeholder='Search by name, color or type' 
        value={str} 
        onChange={(ev) => setStr(ev.target.value)} 
        onKeyUp={handleEnterKeyPress}
      />
    </div>
  )
}

export default Search
