import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API

const postEvents = async (formData: any, token: any, closeModal: any, setErr: any) => {
    await axios.post(
        `${URL}/eventos/eventoArtista`,
        formData
        ,
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

            setErr('Hubo un error, intente mas tarde');
        })

}
export default postEvents

