import './ToDoSearch.css';
import React from 'react';
import PropTypes from 'prop-types';
//import searchIcon from './search.svg';

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
        <i className="search__icon"></i>
      </form>
    </div>
  );
}

ToDoSearch.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
