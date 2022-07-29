import styled from 'styled-components';

export default styled.section`
  padding: 7rem 0 0;
  background: var(--light);
  .container {
    min-height: 62.5rem;
    display: flex;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    .hero-pattern-2 {
      position: absolute;
      bottom: -6rem;
      right: 0;
      width: 18rem;
      height: 18rem;
    }
  }

  .left {
    position: relative;
    display: flex;
    justify-content: center;
    > * {
      z-index: 2;
    }
    .hero-pattern-1 {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      width: 300px;
      height: 380px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 5;
    padding-bottom: 4rem;
  }
  h1 {
    line-height: 1.1em;
    font-size: 4rem;
  }

  .hero-text {
    margin-bottom: 3rem;
    font-size: 1.6rem;
    max-width: 45rem;
  }
  .hero-image {
    max-width: 30rem;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    padding: 10rem 0 0;

    .left {
      .hero-pattern-1 {
        width: 500px;
        height: 600px;
        top: 50%;
        left: 50%;
        transform: translate(-53%, -41%);
      }
    }

    .container {
      min-height: 50rem;
      .hero-pattern-2 {
        width: 300px;
        height: 330px;
        right: 4rem;
        bottom: -14rem;
      }
    }
    .hero-image {
      max-width: 50rem;
    }
    h1 {
      font-size: 5rem;
    }
  }
`;
