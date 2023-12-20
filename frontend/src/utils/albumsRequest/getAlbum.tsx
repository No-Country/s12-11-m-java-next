import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL_API
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

        })
        .catch(function (err) {
            console.log(err);
        })
}

export default getAlbum