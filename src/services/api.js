import axios from "axios"

const api = axios.create({
  baseURL: "https://rocketmovies-xgzt.onrender.com",
})

export default api
