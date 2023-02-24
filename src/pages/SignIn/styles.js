import styled from "styled-components"

import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;

  text-align: left;

  header {
    h1 {
      font-size: 4.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  #formWrapper {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    #inputWrapper {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }

  a {
    align-self: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`
