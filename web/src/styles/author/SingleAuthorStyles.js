import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .profileImage {
    height: 150px;
    width: 150px;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 2rem;
  }
  .name {
    margin-bottom: 1rem;
  }
  .bio {
    margin: 0 auto 4rem;
    max-width: 500px;
  }
  h4 {
    font-size: 1.8rem;
    margin-bottom: 3rem;
    font-family: 'DM Sans';
    &:before {
      display: none;
    }
  }
  hr {
    color: var(--light);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    h4 {
      font-size: 2.2rem;
    }
  }
`;
