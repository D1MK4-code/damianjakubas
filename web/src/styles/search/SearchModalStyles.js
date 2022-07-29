import styled from 'styled-components';

export const SearchModalStyles = styled.div`
  position: fixed;
  z-index: 3000;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10rem 1.5rem 3rem;
  .modal-container {
    width: 100%;
    max-width: 45rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 2.5rem;
    background-color: var(--white);
    box-shadow: 4px 4px 24px -5px rgba(66, 68, 90, 1);
    label,
    input {
      width: 100%;
      display: block;
    }
    input {
      min-height: 4rem;
      padding: 1rem 1.5rem 1rem 4rem;
      font-size: 1.4rem;
      font-weight: 500;
      font-family: 'DM Sans';
      border: 1px solid var(--secondary);
      &:focus,
      &:hover,
      &:active {
        outline: 2px solid var(--button);
        border: 1px solid var(--button);
      }
    }
    label {
      width: calc(100% - 4rem);
      margin-right: 1.5rem;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        left: 1rem;
        transform: translateY(-50%);
        width: 2rem;
        height: 2rem;
      }
    }
    .close-btn {
      width: 2.5rem;
      height: 2.5rem;
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      z-index: 2;
      position: relative;
      svg {
        width: 2.5rem;
        height: 2.5rem;
        fill: var(--black);
        transition: all 0.1s ease-in-out;
        &:hover {
          fill: var(--button);
        }
      }
    }
    .search-result {
      padding-top: 2rem;
      width: 100%;
      p {
        text-align: left;
        color: var(--primary);
        letter-spacing: 0.05rem;
        font-size: 1.4rem;
        font-weight: 500;
        margin-bottom: 0.8rem;
      }
      a {
        p {
          margin: 0;
          font-size: 1.2rem;
          color: var(--secondary);
        }
      }
    }
  }
`;
