import React, { useContext, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import { SearchModalContext } from '../../context/searchModalContext';
import SearchInput from './SearchInput';

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);

  const [searchQuery, setSearchQuery] = useState('');

  const handleOnFocus = () => {
    console.log('focused');
  };

  if (!isSearchModalOpen) return null;

  return (
    <SearchModalStyles>
      <div className="modal-container">
        <ActionButton className="close-btn" onClick={() => closeSearchModal()}>
          <CloseIcon />
        </ActionButton>
        <SearchInput
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
      </div>
    </SearchModalStyles>
  );
}

export default Search;
