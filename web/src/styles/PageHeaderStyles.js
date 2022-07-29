import styled from 'styled-components';

export const PageHeaderStyles = styled.div`
  margin: 3rem 0 1rem;
  max-width: 40rem;
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
    h3 {
      font-size: 3.5rem;
    }
  }
`;
