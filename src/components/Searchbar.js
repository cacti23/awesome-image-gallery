import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({ searchText, setSearchText }) => {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        <AiOutlineSearch className='search-icon' />
        <input
          type='text'
          placeholder='Search Photos'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
