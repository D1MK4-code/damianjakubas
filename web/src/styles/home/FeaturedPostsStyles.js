import styled from 'styled-components';

export const FeaturedPostsStyles = styled.div`
  padding: 0 0 5rem;
  background: var(--light);
  .container {
    position: relative;
    overflow: hidden;
    padding-top: 4rem;
  }
  .hero-pattern-2 {
    position: absolute;
    top: -8rem;
    transform: rotate(180deg);
    right: -3rem;
    width: 18rem;
    height: 18rem;
  }
  h3,
  p,
  div {
    position: relative;
    z-index: 2;
  }
  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
    display: block;
    width: 100%;

    &:before {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .hero-pattern-2 {
      right: -3rem;
      width: 250px;
      height: 300px;
      top: -12rem;
    }
    .container {
      padding-top: 6rem;
    }
    h3 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0 0 8rem;
    .hero-pattern-2 {
      right: 1rem;
      width: 300px;
      height: 330px;
      top: -16rem;
    }
    .container {
      padding-top: 6rem;
    }
    h3 {
      font-size: 3.5rem;
    }
  }
`;
