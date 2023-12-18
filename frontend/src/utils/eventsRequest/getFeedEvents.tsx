import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

async function getFeedEvents(setData: any, token: any) {
    await axios.get(`http://localhost:8080/eventos/all`, {
        headers:
            { Authorization: `Bearer ${token}` }
    })
        .then(function (res) {
            setData(res);

        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getFeedEvents