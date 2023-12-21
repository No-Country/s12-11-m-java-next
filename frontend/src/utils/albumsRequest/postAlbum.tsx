import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API
export async function postAlbum(albumData: any, token: any, closeModal: any) {
  try {
    await axios.post(`${URL}/album`, albumData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    closeModal()
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}