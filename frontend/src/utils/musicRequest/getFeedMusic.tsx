import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

const getFeedMusic = async (setData: any, token: any) => {
  await axios
    .get(`${URL}/music/artista`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(function (response: any) {
      console.log(response.data)
      setData(response.data)
    })
    .catch(function (err) {
      console.log(err)
    })
}
export default getFeedMusic
