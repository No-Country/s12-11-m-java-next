import axios from "axios"
const loginPost = async (userData: any) => {
    await axios.post(
        `http://18.117.188.107:8080/auth/login`, userData
    )
        .then(function (response: any) {
            localStorage.setItem('tKeyId', response.data.token);
        })
        .catch(function (err) {
            console.log(err);
        })
}

export default loginPost