import axios from 'axios';
const URL = process.env.NEXT_PUBLIC_URL_API

const getMusic = async (setData: any) => {
  await axios.get(
    `${URL}/music/list`,
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