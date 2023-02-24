import { Container } from "./styles"

export default function Button({
  title,
  loading = false,
  colorInvert = false,
  ...rest
}) {
  return (
    <Container
      type="button"
      disabled={loading}
      colorInvert={colorInvert}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container>
  )
}
