import styled from "styled-components"

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 0.8rem;
  padding: 1.6rem 3.2rem;
  background-color: ${({ theme, colorInvert }) =>
    colorInvert ? theme.COLORS.BLACK : theme.COLORS.PINK};

  color: ${({ theme, colorInvert }) =>
    colorInvert ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`
