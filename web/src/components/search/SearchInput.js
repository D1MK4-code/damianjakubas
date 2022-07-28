import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchInputStyles } from '../../styles/search/SearchInputStyles';

function SearchInput({ value, setValue, onFocus }) {
  return (
    <SearchInputStyles>
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      <SearchIcon className="search-icon" />
    </SearchInputStyles>
  );
}

export default SearchInput;
