import React, { useState } from 'react';
import style from '../CSS/SearchBar.module.css';

function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query.trim().toLowerCase());
  };

  return (
    <form className={style.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search dishes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={style.input}
      />
      <button type="submit" className={style.button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
