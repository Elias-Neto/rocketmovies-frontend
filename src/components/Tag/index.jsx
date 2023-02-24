import { Container } from "./styles"

export default function Tag({ bgIsGray = false, title, ...rest }) {
  return (
    <Container bgIsGray={bgIsGray} {...rest}>
      {title}
    </Container>
  )
}
