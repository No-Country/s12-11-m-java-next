import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const postEvents = async (eventData: any, closeModal: any, token: any) => {
    await axios.post(
        `${URL}eventos`,
        eventData
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
        })

}
export default postEvents

