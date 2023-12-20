import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL_API

const loginPost = async (userData: any, router: any) => {
  await axios
    .post(`${URL}/auth/login`, userData)
    .then(function (response: any) {
      localStorage.setItem("tKeyId", response.data.token)
      router.push("/descubre")
    })
    .catch(function (err) {
      console.log(err)
    })
}

export default loginPost
