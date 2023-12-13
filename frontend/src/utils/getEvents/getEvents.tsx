import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const getEvents = async (setData: any) => {
    await axios.get(
        `${URL}eventos/`,
    )
        .then(function (response: any) {
            setData(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

export default getEvents