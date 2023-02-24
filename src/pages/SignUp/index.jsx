import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import api from "../../services/api"

import { Container, Form, BackgroundImg } from "./styles"

import Input from "../../components/Input"
import Button from "../../components/Button"
import ButtonText from "../../components/ButtonText"

export default function SignIn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    try {
      await api.post("/users", { name, email, password })
      alert("Usuário cadastrado com sucesso!")
      handleBack()
    } catch (error) {
      if (error.message) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar!")
      }
    }
  }

  return (
    <Container>
      <Form>
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <h2>Crie sua Conta</h2>

        <div id="formWrapper">
          <div id="inputWrapper">
            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              onChange={(e) => setName(e.target.value)}
            />
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

          <Button title="Cadastrar" onClick={handleSignUp} />
        </div>

        <ButtonText
          title="Voltar para o login"
          icon={FiArrowLeft}
          onClick={handleBack}
        />
      </Form>

      <BackgroundImg />
    </Container>
  )
}
