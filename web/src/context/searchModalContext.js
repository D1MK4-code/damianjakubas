import React, { createContext, useState, useMemo } from 'react';

const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [isSearchModalOpen, setSearchModalOpen] = useState();

  const initialValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );
  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  );
};

export { SearchModalContext, SearchModalContextProvider };
