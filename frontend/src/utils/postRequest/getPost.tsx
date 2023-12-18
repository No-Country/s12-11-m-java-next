import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const getPost = async (setData: any) => {
    await axios.get(`${URL}/publicacion`)
        .then(function (res) {
            setData(res)


        })
        .catch(function (res) {
            console.log(res);

        })
}

export default getPost