import axios from "axios"
const registerPost = async (userData: any, router: any) => {
    await axios.post(
        `http://18.116.86.45:8080/auth/registro`, userData
    )
        .then(function (response: any) {
            console.log('se registro pa');
            router.push('/auth/login')
        })
        .catch(function (err: any) {
            console.log(err);
        })
}

export default registerPost