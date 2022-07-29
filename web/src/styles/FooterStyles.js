import styled from 'styled-components';

export default styled.footer`
  padding: 2rem 0.5rem;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  background: var(--button-light);
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      a {
        font-size: 1.6rem;
        text-decoration: none;
      }
    }
    li {
      padding: 0.5rem 1rem;
    }
  }

  .footer-socials {
    a {
      width: 3rem;
      height: 3rem;
      display: block;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
