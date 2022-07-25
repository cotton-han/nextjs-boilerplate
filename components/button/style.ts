import styled from '@emotion/styled';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.BLACK};
  color: white;

  padding: 5px 10px;

  border: none;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
