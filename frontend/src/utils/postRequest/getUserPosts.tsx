import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const getUserPost = async (token: any, setData: any) => {
    await axios.get(`${URL}/publicacion/usuario_posts`, {
        headers:
            { Authorization: `Bearer ${token}` }
    })
        .then(function (res) {
            setData(res.data)
        })
        .catch(function (res) {
            console.log(res);

        })
}

export default getUserPost