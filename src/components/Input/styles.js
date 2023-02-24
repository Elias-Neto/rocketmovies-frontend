import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  gap: 1.2rem;

  input {
    width: 100%;
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE_800};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-size: 1.4rem;
    }
  }
`
