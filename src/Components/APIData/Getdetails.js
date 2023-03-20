export const getdata = async (setdata, name) => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${name}`)
  const data = await res.json()
  // console.log("api",data)
  setdata(data)

}
export const getUserData = async (setdata,gender) => {
  console.log("api gender", gender);
  const res = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`)
  const data = await res.json()
  // console.log("api",data)
  setdata(data)

}
