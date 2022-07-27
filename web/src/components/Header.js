import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navbar } from '../static/navbar';
import Logo from './Logo';
import ActionButton from './buttons/ActionButton';
import HeaderStyles from '../styles/HeaderStyles';

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);
  const handleNavItemClick = () => {
    if (isNavOpen) {
      setNavOpen(false);
    }
  };

  return (
    <HeaderStyles>
      <Logo />
      <div className={clsx('nav-wrapper', isNavOpen && 'open')}>
        <div className="mobile-icons">
          <SearchIcon />
          <ActionButton
            className="mobile-button"
            onClick={() => setNavOpen(true)}
            onKeyDown={() => setNavOpen(true)}
          >
            <MenuIcon />
          </ActionButton>
        </div>
        <nav>
          <ActionButton
            class="mobile-close-btn"
            onClick={() => setNavOpen(false)}
            onKeyDown={() => setNavOpen(false)}
          >
            <CloseIcon />
          </ActionButton>
          <ul>
            {navbar.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onclick={handleNavItemClick}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="search-wrapper">
        <SearchIcon />
      </div>
    </HeaderStyles>
  );
}

export default Header;
