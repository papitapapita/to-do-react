import './ToDoSearch.css';
import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch as SearchSVG } from 'react-icons/fa';

export function ToDoSearch({
  searchValue,
  setSearchValue,
}) {
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

ToDoSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
