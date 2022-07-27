import styled from 'styled-components';

export default styled.footer`
  padding: 2rem 0.5rem;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
    }
    li {
      padding: 0.5rem 1rem;
    }
  }
`;
