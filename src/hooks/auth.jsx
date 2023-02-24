import { createContext, useState, useEffect, useContext } from "react"

import api from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [search, setSearch] = useState("")

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
      localStorage.setItem("@rocketmovies:token", token)

      api.defaults.headers.common["Authorization"] = `Barrer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@rocketmovies:user")
    localStorage.removeItem("@rocketmovies:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUpdateForm = new FormData()
        fileUpdateForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUpdateForm)

        user.avatar = response.data.avatar
      }

      await api.put("/users", user)

      user.password = null
      user.old_password = null

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

      setData({ user, token: data.token })

      alert("Perfil atualizado!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar!")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketmovies:user")
    const token = localStorage.getItem("@rocketmovies:token")

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Barrer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
        search,
        setSearch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
