import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

async function getFeedEvents () {

    await new Promise((resolve, reject) => {

        const data = axios.get(
            `${ URL }/eventos/`,
        )
        console.log(data);

        if (!data) {
            reject(new Error('No hay data'))
        } else {

            resolve(data);
        }
    })
}


export default getFeedEvents