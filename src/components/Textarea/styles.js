import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 1rem;
  padding: 2rem 1.6rem;
  resize: none;

  color: ${({ theme }) => theme.COLORS.WHITE_800};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }
`
