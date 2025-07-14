import './ToDoSearch.css';
import React, { useContext } from 'react';
import { FaSearch as SearchSVG } from 'react-icons/fa';
import { ToDoContext } from '../ToDoContext';

export function ToDoSearch() {
  const { searchValue, setSearchValue } =
    useContext(ToDoContext);
  return (
    <div className="search-container">
      <form className="search__form" name="search">
        <input
          value={searchValue || ''}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="text"
          className="search__input"
        />
        <SearchSVG className="search__icon" />
      </form>
    </div>
  );
}
