import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

const getMusic = async (setData: any) => {
  await axios.get(
    `http://3.140.251.16:8080/music`,
  )
    .then(function (response: any) {
      setData(response.data);
      console.log(response);

    })
    .catch(function (err) {
      console.log(err);
    })
}
export default getMusic