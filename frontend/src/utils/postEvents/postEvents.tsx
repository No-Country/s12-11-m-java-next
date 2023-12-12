import axios from 'axios'

const postEvents = async (eventData: any, closeModal: any) => {
    await axios.post(
        `http://3.139.80.10:8080/eventos/`, eventData
    )
        .then(function (response: any) {
            closeModal()
        })
        .catch(function (err) {
            console.log(err);
        })

}
export default postEvents

