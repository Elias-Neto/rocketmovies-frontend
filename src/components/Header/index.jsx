import { FiSearch } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import api from "../../services/api"

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { Container, Profile } from "./styles"

import Input from "../../components/Input"
import ButtonText from "../../components/ButtonText"

export default function Header() {
  const { signOut, user, search, setSearch } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return (
    <Container>
      <h1>
        <Link to="/">RocketMovies</Link>
      </h1>

      <Input
        type="text"
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <ButtonText title="sair" onClick={handleSignOut} />
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
