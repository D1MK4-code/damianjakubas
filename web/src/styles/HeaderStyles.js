import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  .search-wrapper {
    display: none;
  }
  .mobile-icons {
    display: flex;
    align-items: center;
  }
  .mobile-search {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      transition: all 0.1s ease-in-out;
      &:hover {
        fill: var(--button);
      }
    }
  }
  .mobile-button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    outline: none;
    cursor: pointer;
    svg {
      width: 2.5rem;
      height: 2.5rem;
      transition: all 0.1s ease-in-out;
      &:hover {
        fill: var(--button);
      }
    }
  }
  nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    transform: translateX(100%);
    transition: all 0.25s ease-in-out;
    background-color: #fff;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10rem 1.5rem 1.5rem;
    .mobile-close-btn {
      position: absolute;
      top: 2.5rem;
      right: 1.5rem;
      background: transparent;
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      cursor: pointer;
      svg {
        width: 2.5rem;
        height: 2.5rem;
        transition: all 0.1s ease-in-out;
        &:hover {
          fill: var(--button);
        }
      }
    }
    ul {
      text-align: center;
      a {
        cursor: pointer;
        font-size: 2rem;
        color: var(--primary);
        display: inline-block;
        text-decoration: none;
        margin-bottom: 2rem;
        font-weight: 500;
        transition: all 0.1s ease-in-out;
        &:focus,
        &:active,
        &:hover {
          color: var(--button);
        }
      }
    }
  }
  .nav-wrapper {
    &.open {
      nav {
        transform: none;
      }
    }
  }
  @media (min-width: 992px) {
    .mobile-icons,
    .mobile-close-btn {
      display: none;
    }
    .search-wrapper {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      cursor: pointer;
      svg {
        width: 2.5rem;
        height: 2.5rem;
        transition: all 0.1s ease-in-out;
        &:hover {
          fill: var(--button);
        }
      }
    }
    nav {
      position: static;
      transform: none;
      width: auto;
      height: auto;
      padding: 0;
      background-color: transparent;
      ul {
        display: flex;
        align-items: center;
        padding: 0;
        li {
          padding: 0 1rem;
        }
        a {
          text-decoration: none;
          margin: 0;
          font-size: 1.6rem;
        }
      }
      .mobile-close-btn {
        display: none;
      }
    }
  }
`;
