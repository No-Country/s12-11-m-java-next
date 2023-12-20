import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

async function getUserEvents(setData: any, token: any) {
    await axios.get(`${URL}/eventos/getMyEvents`,
        {
            headers:
                { Authorization: `Bearer ${token}` }
        }
    )
        .then(function (res) {
            setData(res.data);



        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getUserEvents