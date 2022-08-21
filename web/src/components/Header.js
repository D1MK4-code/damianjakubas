import React, { useState, useContext } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navbar } from '../static/navbar';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import HeaderStyles from '../styles/HeaderStyles';
import { SearchModalContext } from '../context/searchModalContext';

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavItemClick = () => {
    if (isNavOpen) {
      setNavOpen(false);
    }
  };

  const { openSearchModal } = useContext(SearchModalContext);

  const handleSearchModalOpen = () => {
    openSearchModal();
  };

  return (
    <HeaderStyles>
      <Logo />
      <div className={clsx('nav-wrapper', isNavOpen && 'open')}>
        <div className="mobile-icons">
          <div
            className="mobile-search"
            onClick={handleSearchModalOpen}
            onKeyDown={handleSearchModalOpen}
            role="button"
            tabIndex={0}
            aria-label="Search site"
          >
            <SearchIcon />
          </div>
          <ActionButton
            className="mobile-button"
            onClick={() => setNavOpen(true)}
            onKeyDown={() => setNavOpen(true)}
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </ActionButton>
        </div>
        <nav>
          <ActionButton
            className="mobile-close-btn"
            onClick={() => setNavOpen(false)}
            onKeyDown={() => setNavOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </ActionButton>
          <ul>
            {navbar.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={handleNavItemClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className="search-wrapper"
        onClick={handleSearchModalOpen}
        onKeyDown={handleSearchModalOpen}
        role="button"
        tabIndex={0}
      >
        <SearchIcon />
      </div>
    </HeaderStyles>
  );
}

export default Header;
