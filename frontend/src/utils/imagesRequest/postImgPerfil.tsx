import axios from 'axios'

const postImgPerfil = async (Id: any, formdata: any, token: any) => {
    // const URL = process.env.NEXT_PUBLIC_URL_API
    await axios.post(`https://stereos.fly.dev/Usuario/fotoPerfil/${Id}`, formdata, {
        headers:
        {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }

    })
        .then(function (res: any) {
            console.log(res);


        }).catch(function (res: any) {
            console.log(res);



        })
}

export default postImgPerfil