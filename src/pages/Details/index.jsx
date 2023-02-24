import moment from "moment-timezone"
import { useState, useEffect } from "react"
import { FiArrowLeft, FiClock } from "react-icons/fi"
import { useNavigate, useParams } from "react-router-dom"

import api from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatarPlaceholder.svg"

import { Container, Content } from "./styles"

import Tag from "../../components/Tag"
import Header from "../../components/Header"
import ButtonText from "../../components/ButtonText"
import RatingStar from "../../components/RatingStar"

export default function Details() {
  const [data, setData] = useState({})

  const { user } = useAuth()

  const navigate = useNavigate()
  const params = useParams()

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const formattedDate = moment
    .utc(data.updated_at)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YYYY HH:mm")

  const [date, hour] = formattedDate.split(" ")

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movie_notes/${params.id}`)
      setData(response.data)
    }

    fetchMovie()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <header>
              <ButtonText
                title="Voltar"
                icon={FiArrowLeft}
                onClick={handleBack}
              />

              <div id="title">
                <h2>{data.title}</h2>
                <RatingStar isBigSize rating={data.rating} />
              </div>

              <div id="noteData">
                <div>
                  <img src={avatarURL} alt="Foto do Usuário" />
                  <span>Por {user.name}</span>
                </div>

                <div>
                  <FiClock />
                  <span>{`${date} às ${hour}`}</span>
                </div>
              </div>
            </header>

            <ul>
              {data.movieTags &&
                data.movieTags.map((tag) => (
                  <li key={tag.id}>
                    <Tag bgIsGray title={tag.name} />
                  </li>
                ))}
            </ul>

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  )
}
