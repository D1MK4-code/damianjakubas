import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../static/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.size.s};
  background: ${({ variant }) =>
    variant === buttonTypes.primary
      ? '#000'
      : variant === buttonTypes.secondary
      ? '#fff'
      : 'transparent'};

  color: ${({ variant }) =>
    variant === buttonTypes.secondary ? '#000' : '#fff'};
`;
