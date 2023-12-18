import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

const getAllEvents = async (setData: any) => {
    await axios.get(`${URL}/eventos/all`,
        //  {
        //     headers:
        //         { Authorization: `Bearer ${token}` }
        // }
    )
        .then(function (res) {
            setData(res.data);



        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getAllEvents