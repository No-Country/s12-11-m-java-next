import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API

const deleteEvent = (Id: any, token: any) => {
    axios.delete(`${URL}/eventos/${Id}`,
        {
            headers:
                { Authorization: `Bearer ${token}` }
        })
        .then(function (res) {
            console.log('se elimino pa');

        }).catch(function (err) {
            console.log(err);

        })
}

export default deleteEvent