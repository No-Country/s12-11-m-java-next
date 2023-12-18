import axios from 'axios'
import React from 'react'
const URL = process.env.NEXT_PUBLIC_URL_API
const postPosts = async () => {
    await axios.post(`${URL}/publicacion`)
        .then(function (res) {
            console.log(res);

        }).catch(function (res) {
            console.log(res);

        })
}

export default postPosts