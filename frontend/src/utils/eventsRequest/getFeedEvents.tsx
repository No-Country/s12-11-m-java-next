import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

async function getFeedEvents(setData: any, token: any) {
    await axios.get(`https://95db-201-231-218-234.ngrok-free.app/eventos/all`, {
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