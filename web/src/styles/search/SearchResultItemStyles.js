import { Link } from 'gatsby';
import styled from 'styled-components';

export const SearchResultItemStyles = styled(Link)`
  width: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  background-color: var(--search);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-family: 'DM Sans';
  h3 {
    margin: 0;
    text-align: left;
    font-size: 1.4rem;
    font-family: 'DM Sans';
    font-weight: 700;
  }
  div {
    h3 {
      margin: 0 0 0.2rem 0;
    }
  }
  p {
    margin: 0;
    text-align: left;
  }
  .search-img,
  .author-image {
    min-width: 5rem;
    min-height: 5rem;
    max-width: 5rem;
    max-height: 5rem;
  }
`;
