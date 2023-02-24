import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding-inline: 14.4rem;

    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 1.8rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.PINK};
      /* font-size: 1.6rem; */
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 6.4rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  #textInputWrapper,
  #passwordInputWrapper {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -16rem auto 4rem;
  width: 18.6rem;
  height: 18.6rem;

  img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    input {
      display: none;
    }
  }
`
