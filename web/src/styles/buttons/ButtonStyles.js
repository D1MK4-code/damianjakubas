import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../static/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.05rem;
  text-decoration: none;
  position: relative;

  span {
    position: relative;
    z-index: 2;
    color: ${({ variant }) =>
      variant === buttonTypes.secondary ? 'var(--white)' : 'var(--white)'};
  }
  &:after {
    content: '';
    position: absolute;
    width: calc(100% - 0.2rem);
    height: calc(100% - 0.2rem);
    border: 0.1rem solid var(--secondary);
    left: 0;
    top: 0;
    transition: all 0.1s ease-in-out;
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 1;
    background: ${({ variant }) =>
      variant === buttonTypes.primary
        ? 'var(--button)'
        : variant === buttonTypes.secondary
        ? 'var(--black)'
        : 'transparent'};
  }
  &:hover {
    &:after {
      transform: translate(0.7rem, 0.7rem);
    }
  }
`;
