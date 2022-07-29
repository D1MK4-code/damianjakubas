import styled from 'styled-components';

export const PostsGridStyles = styled.div`
  padding-top: 3.5rem;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
