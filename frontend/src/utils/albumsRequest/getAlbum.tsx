import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL_API
<<<<<<< HEAD
const getAlbum = async (token: string, setAlbums: any) => {
    await axios.get(`${ URL }/album`,
        {
            headers:
                { Authorization: `Bearer ${ token }` }
        }
    )
        .then(function (response: any) {
            setAlbums(response.data);
            // console.log(response);
=======
>>>>>>> 380b46a6e8af271d06b3cda1287d8225dd502d03

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
