import axios from "axios"
const registerPost = async (userData: any, router: any) => {
  await axios
    .post(`http://3.145.112.182:8080/auth/registro`, userData)
    .then(function (response: any) {
      console.log("se registro pa")
      router.push("/auth/login")
    })
    .catch(function (err: any) {
      console.log(err)
    })
}

export default registerPost
