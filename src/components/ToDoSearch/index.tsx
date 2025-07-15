import './ToDoSearch.css';
import { FaSearch as SearchSVG } from 'react-icons/fa';
import { Dispatch, SetStateAction } from 'react';

interface ToDoSearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

export function ToDoSearch({
  searchValue,
  setSearchValue,
  loading,
}: ToDoSearchProps) {
  return (
    <div className="search-container">
      <form
        className={`search__form ${loading ? 'search__form--disabled' : ''}`}
        name="search"
      >
        <input
          value={searchValue || ''}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          type="text"
          className="search__input"
          disabled={loading}
        />
        <SearchSVG className="search__icon" />
      </form>
    </div>
  );
}
