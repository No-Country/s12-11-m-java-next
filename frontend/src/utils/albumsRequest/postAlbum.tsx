import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API
export async function postAlbum(albumData: any, token: any, closeModal: any) {
  try {
    const response = await axios.post(`${URL}/album`, albumData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    closeModal()
    return response
  } catch (error) {
    console.log(error)
  }
}
