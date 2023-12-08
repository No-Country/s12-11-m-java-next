import axios from "axios"
const registerPost = async (userData: any) => {
    await axios.post(
        `http://18.117.188.107:8080/auth/registro`, userData
    )
        .then(function (response: any) {
            console.log('se registro pa');
        })
        .catch(function (err: any) {
            console.log(err);
        })
}

export default registerPost