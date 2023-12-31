import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API

const postMusica = async (closeModal: any, formDataMusic: any, token: any) => {
    await axios.post(`${URL}musica`,
        formDataMusic,
        {
            headers:
                { Authorization: `Bearer ${token}` }
        }
    )
        .then(function (response: any) {
            closeModal()
        })
        .catch(function (err) {
            console.log(err);
        })

}
export default postMusica


