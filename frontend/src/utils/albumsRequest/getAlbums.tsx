import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

export default async function getAlbums() {
  try {
    const response = await axios.get(`${URL}album/`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
