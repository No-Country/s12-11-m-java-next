import axios from "axios"
const loginPost = async (userData: any, router: any) => {
    await axios.post(
        `http://18.116.86.45:8080/auth/login`, userData
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