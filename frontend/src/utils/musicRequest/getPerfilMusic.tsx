import axios from "axios";
const URL = process.env.NEXT_PUBLIC_URL_API

const getPerfilMusic = async (token: any, setData: any) => {
    await axios.get(
        `${ URL }/music/artista`, { headers: { Authorization: `Bearer ${ token }` } }
    )
        .then(function (response: any) {
            setData(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
export default getPerfilMusic
