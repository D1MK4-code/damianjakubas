import styled from 'styled-components';

export const PostItemStyles = styled.div`
  background-color: var(--light-secondary);
  padding: 1.5rem;
  a {
    text-decoration: none;
  }

  h4 {
    font-size: 1.6rem;
    margin: 1rem 0 0.8rem;
    transition: all 0.1s ease-in-out;
    font-family: 'DM Sans';
    line-height: 1.2em;
    font-weight: 600;
    &:hover {
      color: var(--button);
    }
    &:before {
      display: none;
    }
  }
  p {
    font-size: 1.2rem;
    &.categories-text {
      font-weight: 500;
      a {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (min-width: 992px) {
    h4 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
