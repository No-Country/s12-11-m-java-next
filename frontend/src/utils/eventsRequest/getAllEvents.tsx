import React from 'react'


import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

const getAllEvents = async (setData: any) => {
    await axios.get(`${URL}/eventos`)
        .then(function (res) {
            setData(res.data)
        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getAllEvents