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

    grid-area: content;

    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 3.2rem;
        font-weight: 400;
      }

      a {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        padding: 1.6rem 3.2rem;
        border-radius: 0.8rem;

        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
          font-size: 1.8rem;
        }
      }
    }
  }
`

export const Content = styled.ul`
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
  height: 52rem;
  padding-right: 2.4rem;

  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 1.6rem;
  }
`
