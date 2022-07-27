import styled from 'styled-components';

export const ParagraphStyles = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.size.m};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.s};
  }
`;
