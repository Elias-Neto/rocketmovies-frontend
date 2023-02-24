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
    padding: 8rem 12rem 12rem;

    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
    }

    grid-area: content;
  }
`

export const Content = styled.div`
  width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    button {
      align-self: flex-start;
    }

    #title {
      display: flex;
      align-items: center;
      gap: 2rem;

      h2 {
        font-size: 3.6rem;
        font-weight: 500;
      }
    }

    #noteData {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

      img {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.GRAY_700};
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  ul {
    gap: 1rem;
  }

  p {
    text-align: justify;
  }
`
