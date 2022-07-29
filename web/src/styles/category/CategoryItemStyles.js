import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  padding: 2rem 1.5rem;
  background-color: var(--button-light);
  h4 {
    margin-bottom: 1rem;
    font-size: 2rem;
    &:before {
      display: none;
    }
  }
  p {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
  }
  @media (min-width: 576px) {
    max-width: 50%;
  }
  @media (min-width: 991px) {
    h4 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.43rem;
    }
  }
`;
