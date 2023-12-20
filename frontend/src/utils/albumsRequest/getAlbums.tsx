import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

export default async function getAlbums(setAlbums: any, token: any) {
  try {
    const response = await axios.get(`${URL}album`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return setAlbums(response.data)
  } catch (error) {
    console.log(error)
  }
}
