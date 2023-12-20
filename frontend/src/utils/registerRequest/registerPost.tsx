import axios from "axios"
const URL = process.env.NEXT_PUBLIC_URL_API

const registerPost = async (userData: any, router: any) => {
  await axios
    .post(`${URL}auth/registro`, userData)
    .then(function (response: any) {
      console.log("se registro pa")
      router.push("/auth/login")
    })
    .catch(function (err: any) {
      console.log(err)
    })
}

export default registerPost
