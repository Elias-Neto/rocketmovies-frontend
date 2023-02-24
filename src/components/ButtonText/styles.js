import styled from "styled-components"

export const Container = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
