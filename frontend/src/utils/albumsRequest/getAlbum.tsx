import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL_API
const getAlbum = async () => {
    await axios.get(`${URL}/album`)
        .then(function (res) {
            console.log(res);

        })
}

export default getAlbum