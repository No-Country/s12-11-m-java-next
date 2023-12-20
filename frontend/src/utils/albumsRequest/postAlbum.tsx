import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API
export async function postAlbum(albumData: any, closeModal: any, token: any) {
  try {
    await axios.post(`${URL}album`, albumData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    // .then(function (response: any) {
    //   closeModal()
    // })
    // .catch(function (err) {
    //   console.log(err)
    // })
    closeModal()
  } catch (error) {
    console.log(error)
  }
}
