import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL_API

const getAlbum = async (setAlbums: any) => {
  await axios
    .get(`${URL}/album`)
    .then(function (response: any) {
      setAlbums(response.data)
    })
    .catch(function (err) {
      console.log(err)
    })
}

export default getAlbum
