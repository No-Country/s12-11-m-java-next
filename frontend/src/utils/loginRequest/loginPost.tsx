import axios from "axios"
const loginPost = async (userData: any, router: any) => {
    await axios.post(
        `http://3.139.80.10:8080/auth/login`, userData
    )
        .then(function (response: any) {
            localStorage.setItem('tKeyId', response.data.token);
            router.push('/descubre')
        })
        .catch(function (err) {
            console.log(err);
        })
}

export default loginPost