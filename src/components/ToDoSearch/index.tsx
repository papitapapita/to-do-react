import './ToDoSearch.css';
import { FaSearch as SearchSVG } from 'react-icons/fa';
import { useToDoContext } from '../../hooks/useToDoContext';

export function ToDoSearch() {
  const { searchValue, setSearchValue } = useToDoContext();
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
