import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  .search-wrapper {
    display: none;
  }
  nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transform: translateX(100%);
    transition: all 0.25s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 1;
    .mobile-close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
  .nav-wrapper {
    &.open {
      nav {
        transform: none;
      }
    }
  }
  @media (min-width: 768px) {
    .mobile-icons,
    .mobile-close-btn {
      display: none;
    }
    .search-wrapper {
      display: block;
    }
    nav {
      position: static;
      transform: none;
      width: auto;
      height: auto;
      ul {
        display: flex;
        align-items: center;
        padding: 0;
      }
      li {
        padding: 0 1em;
      }
      a {
        text-decoration: none;
      }
    }
  }
`;
