import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL_API
const postPosts = async (eventData: any, closeModal: any, token: any, setErr: any) => {
    await axios.post(`${URL}/publicacion`, eventData
        ,
        {
            headers:
                { Authorization: `Bearer ${token}` }
        })
        .then(function (res) {
            console.log(res);
            closeModal()

        }).catch(function (res) {
            console.log(res);

            setErr('Hubo un error, intente mas tarde');

        })
}

export default postPosts