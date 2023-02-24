import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) =>
    isNew ? `0.2rem dashed ${theme.COLORS.GRAY_700}` : "none"};
  border-radius: 1rem;
  padding: 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE_900};

  input {
    width: 100%;
    background-color: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE_800};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  button {
    border: none;
    background: none;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
