import axios from 'axios'
const getEvents = async (setData: any) => {
    await axios.get(
        `http://18.116.86.45:8080/eventos`,
    )
        .then(function (response: any) {
            setData(response.data);
        })
        .catch(function (err) {
            console.log(err);
        })
}

export default getEvents