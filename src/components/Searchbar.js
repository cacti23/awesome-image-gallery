import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({ searchText }) => {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        <AiOutlineSearch className='search-icon' />
        <input
          type='text'
          placeholder='Search Photos'
          onChange={e => searchText(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
