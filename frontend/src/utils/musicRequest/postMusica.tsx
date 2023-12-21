import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

const postMusica = async (closeModal: any, form: any, token: any) => {
  await axios
    .post(`${ URL }/music`, form, {
      headers: { Authorization: `Bearer ${ token }` },
    })
    .then(function (response: any) {
      closeModal()
      window.location.reload()
    })
    .catch(function (err) {
      console.log(err)
    })
}
export default postMusica
