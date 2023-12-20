import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

const getPerfilMusic = async (setData: any) => {
    await axios.get(
        `${URL}/music/Artista`,
    )
        .then(function (response: any) {
            setData(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
export default getPerfilMusic
