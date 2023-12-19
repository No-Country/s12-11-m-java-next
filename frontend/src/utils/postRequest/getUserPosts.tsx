import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_NEWURL
const getUserPost = async (setData: any, token: any) => {
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