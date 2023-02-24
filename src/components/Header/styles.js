import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;
  padding-inline: 12rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_900};

  display: flex;
  align-items: center;
  gap: 6.4rem;

  h1 a {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;

    width: max-content;

    strong,
    span {
      font-size: 1.4rem;
    }

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE_800};
    }

    button {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      align-self: flex-end;
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_700};
  }
`
