import styled from "styled-components"

export const Container = styled.span`
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, bgIsGray }) =>
    bgIsGray ? theme.COLORS.BACKGROUND_600 : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: 1.2rem;
`
