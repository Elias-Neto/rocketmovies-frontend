import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;

    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }

    padding: 8rem 12rem 12rem;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    button {
      align-self: flex-start;
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  #inputWrapper {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  textarea {
    height: 27.5rem;
  }

  #marcadores {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      font-size: 2rem;
    }

    #tagItemWrapper {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      border-radius: 0.8rem;
      padding: 1.6rem;

      ul {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        flex-wrap: wrap;
      }
    }
  }

  #buttonWrapper {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
`
