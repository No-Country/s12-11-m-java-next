import axios from "axios";

const URL = process.env.NEXT_PUBLIC_URL_API
const putUserMe = async (formDatauser: any, token: any, Id: any) => {
    await axios.put(`${URL}/Artista/${Id}`, formDatauser, {
        headers:
            { Authorization: `Bearer ${token}` }
    }).then(function (res) {
        window.location.reload()
    }).catch(function (err) {
        console.log(err);
    })
}

export default putUserMe