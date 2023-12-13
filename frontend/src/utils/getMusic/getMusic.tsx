import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const getMusic = async (setData: any) => {
    await axios.get(
        `${URL}musica/`,
    )
        .then(function (response: any) {
            setData(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}
export default getMusic