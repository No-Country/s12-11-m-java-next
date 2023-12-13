import axios from 'axios'
const token = localStorage.getItem('tKeyId')
const postMusica = async (closeModal: any, data: any) => {
    await axios.post(
        `http://18.116.86.45:8080/musica`,
        new FormData(data),
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


