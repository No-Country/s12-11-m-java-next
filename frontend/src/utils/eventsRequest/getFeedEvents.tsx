import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

async function getFeedEvents(setData: any, token: any) {
    await axios.get(`${URL}/eventos/getMyEvents`, {
        headers:
            { Authorization: `Bearer ${token}` }
    })
        .then(function (res) {
            console.log(res);

        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getFeedEvents