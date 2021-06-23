import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = ({ searchText, pageSet }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
    pageSet(1);
  };

  return (
    <div className='search-container'>
      <div className='search-bar'>
        <AiOutlineSearch className='search-icon' />
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Search Photos'
            onChange={e => setText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Searchbar;
