import React, { useState } from 'react';
import './searchbar.scss';
import { BsSearch } from 'react-icons/bs';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    onSearch(term);
    setSearchTerm(term);
  };

  return (
    <div className='container'>
      <div className="women-search-main">
        <input
          type="text"
          placeholder="Search"
          className="women-search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        <BsSearch className="women-search-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
