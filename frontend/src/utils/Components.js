const db = [
  { numero: 1 },
  { numero: 1 },
  { numero: 1 },
  { numero: 1 },
  { numero: 1 },
  { numero: 1 },
]
export default db

const getIds = async () => {
  await fetch(ril)
    .then(function (res) {
      console.log(res.json)
    })
    .catch(function (err) {
      console.log(err)
    })
}
