import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_URL_API
const getUserMe = async (token: any, setData: any) => {
    await axios.get(`${URL}/auth/me`, {
        headers:
            { Authorization: `Bearer ${token}` }
    }).then(function (res) {
        setData(res.data)
        console.log(res.data);
    }).catch(function (err) {
        console.log(err);

    })
}

export default getUserMe