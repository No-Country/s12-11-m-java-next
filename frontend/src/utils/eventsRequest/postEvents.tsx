import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API

const postEvents = async (eventData: any, closeModal: any, token: any, setErr: any) => {
    await axios.post(
<<<<<<< HEAD
        `${URL}/eventos/eventoArtista`,
        eventData
        ,
=======
        `${ URL }/eventos`,
        eventData,
>>>>>>> 2b9760cea12ec3f22bd7d10c9337546be6b13eff
        {
            headers:
                { Authorization: `Bearer ${ token }` }
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

