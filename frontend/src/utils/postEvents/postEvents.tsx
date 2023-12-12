import axios from 'axios'
const token = localStorage.getItem('tKeyId')
const postEvents = async (eventData: any, closeModal: any) => {
    await axios.post(
        `http://18.116.86.45:8080/eventos`,
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

