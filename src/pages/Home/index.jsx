import { FiPlus } from "react-icons/fi"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { Container, Content } from "./styles"

import Header from "../../components/Header"
import Movie from "../../components/Movie"

export default function Home() {
  const [notes, setNotes] = useState([])

  const { search } = useAuth()

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header />

      <main>
        <header>
          <h2>Meus Filmes</h2>
          <Link to="/new">
            <FiPlus />
            Adicionar Filme
          </Link>
        </header>

        <Content>
          {notes.map((note, index) => (
            <li key={index}>
              <Movie data={note} onClick={() => handleDetails(note.id)} />
            </li>
          ))}
        </Content>
      </main>
    </Container>
  )
}
