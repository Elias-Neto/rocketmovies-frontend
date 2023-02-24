import { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import { Container, Form } from "./styles"

import Input from "../../components/Input"
import Header from "../../components/Header"
import Button from "../../components/Button"
import TagItem from "../../components/TagItem"
import Textarea from "../../components/Textarea"
import ButtonText from "../../components/ButtonText"

export default function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o título do filme.")
    }

    const isRatingValid = rating >= 0 && rating <= 5

    if (!isRatingValid) {
      return alert("A nota do filme deve ser entre 0 e 5.")
    }

    if (newTag) {
      return alert("Você esqueceu de adicionar uma tag.")
    }

    await api.post("/movie_notes", { title, description, rating, tags })

    alert("Nota adicionada com sucesso!")
    navigate(-1)
  }

  function handleDiscardMovie() {
    const userConfirmation = confirm(
      "Tem certeza que deseja excluir essa nota?"
    )

    if (userConfirmation) {
      navigate(-1)
    }
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText
              title="Voltar"
              icon={FiArrowLeft}
              onClick={handleBack}
            />

            <h2>Novo Filme</h2>
          </header>

          <div id="inputWrapper">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <section id="marcadores">
            <p>Marcadores</p>

            <div id="tagItemWrapper">
              <ul>
                {tags.map((tag, index) => (
                  <li key={String(index)}>
                    <TagItem value={tag} onClick={() => handleRemoveTag(tag)} />
                  </li>
                ))}

                <TagItem
                  isNew
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </ul>
            </div>
          </section>

          <div id="buttonWrapper">
            <Button
              colorInvert
              title="Excluir Filme"
              onClick={handleDiscardMovie}
            />
            <Button title="Salvar Alterações" onClick={handleNewMovieNote} />
          </div>
        </Form>
      </main>
    </Container>
  )
}
