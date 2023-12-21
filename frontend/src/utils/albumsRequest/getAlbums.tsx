import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

export default async function getAlbums(setAlbums: any, token: any) {
  await axios.get(`${URL}/album`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(function (res) {
      setAlbums(res.data)
      console.log(res.data);

    })
    .catch(function (error) {
      console.log(error)
    })
}
