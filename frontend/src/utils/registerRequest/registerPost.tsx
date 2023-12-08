import axios from "axios"
const registerPost = async (userData: any, router: any) => {
    await axios.post(
        `http://3.139.80.10:8080/auth/registro`, userData
    )
        .then(function (response: any) {
            console.log('se registro pa');
            router.push('/descubre')
        })
        .catch(function (err: any) {
            console.log(err);
        })
}

export default registerPost