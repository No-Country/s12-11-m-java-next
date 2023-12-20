import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL_API
const token = localStorage.getItem('tKeyId')

const getAlbum = async (setAlbums: any) => {
    await axios.get(`${ URL }/album`,
        {
            headers:
                { Authorization: `Bearer ${ token }` }
        }
    )
        .then(function (response: any) {
            setAlbums(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

export default getAlbum