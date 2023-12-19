import axios from 'axios'

const deletePost = async (Id: any, token: any) => {
    axios.delete(`https://stereos.fly.dev/publicacion/${Id}`
        ,
        {
            headers:
            {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
                Accept: 'application/json'
            }

        }
    ).then(function (res) {
        console.log('se elimino pa');

    }).catch(function (res) {
        console.log(res);

    })
}

export default deletePost