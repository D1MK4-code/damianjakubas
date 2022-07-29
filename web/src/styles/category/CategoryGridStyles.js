import styled from 'styled-components';

export const CategoryGridStyles = styled.div`
  padding-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  @media only screen and (min-width: 768px) {
    gap: 4rem;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;
