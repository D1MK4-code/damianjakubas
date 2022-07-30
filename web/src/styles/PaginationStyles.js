import styled from 'styled-components';

export const PaginationStyles = styled.div`
  text-align: center;
  margin-top: 6rem;
  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      background: var(--search);
      padding: 0.8rem 1.2rem;
      border-radius: 4px;
      background-color: var(--button);
      color: var(--white);
      text-decoration: none;
      svg {
        padding: 0;
        margin: 0;
        transition: all 0.15s ease-in-out;
      }
      &.disabled {
        opacity: 0.3;
        pointer-events: none;
        background-color: var(--search);
        color: var(--primary);
      }
      &:first-child {
        &:hover {
          svg {
            transform: translateX(-0.4rem);
          }
        }
      }
      &:last-child {
        &:hover {
          svg {
            transform: translateX(0.4rem);
          }
        }
      }
    }
  }
  p {
    font-size: 1.4rem;
  }
`;
