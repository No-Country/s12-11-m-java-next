import React from 'react'


import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

const getAllEvents = async (setData: any) => {
    await axios.get(`http://localhost:8080/eventos/all`)
        .then(function (res) {
            setData(res.data)
        })
        .catch(function (res) {
            console.log(res);

        })
}


export default getAllEvents