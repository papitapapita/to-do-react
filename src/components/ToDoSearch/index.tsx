import './ToDoSearch.css';
import { FaSearch as SearchSVG } from 'react-icons/fa';
import React from 'react';

interface ToDoSearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export function ToDoSearch({
  searchValue,
  setSearchValue,
}: ToDoSearchProps) {
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
