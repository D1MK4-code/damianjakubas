import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled(Link)`
  background-color: var(--button-light);
  border-radius: 8px;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  .profile-image {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }
  h4 {
    margin: 0;
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--primary);
    font-family: 'DM Sans';
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
