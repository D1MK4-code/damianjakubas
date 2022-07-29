import styled from 'styled-components';

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
    display: block;
    width: 100%;
    z-index: 2;
    &:before {
      max-width: 13rem;
    }
  }
  @media (min-width: 992px) {
    padding: 6rem 0 8rem;
    h3 {
      font-size: 3.5rem;
    }
  }
`;
