import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL_API
const postPosts = async (formData: any, token: any, closeModal: any, setErr: any) => {
    await axios.post(`${URL}/publicacion`,
        formData,
        {
            headers:
            {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
                Accept: 'application/json'
            }
        })
        .then(function (res) {
            closeModal()
            window.location.reload()
        }).catch(function (res) {
            setErr(res.response.data);

        })
}

export default postPosts