import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useState } from "react"

import { useAuth } from "../../hooks/auth"

import { Container, Form, BackgroundImg } from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ButtonText from "../../components/ButtonText"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Faça seu Login</h2>

        <div id="formWrapper">
          <div id="inputWrapper">
            <Input
              placeholder="E-mail"
              type="text"
              icon={FiMail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              type="password"
              icon={FiLock}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button title="Entrar" onClick={handleSignIn} />
        </div>

        <Link to="/register">Criar Conta</Link>
      </Form>

      <BackgroundImg />
    </Container>
  )
}
