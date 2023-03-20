
export const getUserData = async (setdata,gender) => {
  console.log("api gender", gender);
  const res = await fetch(`https://randomuser.me/api/?results=20&gender=${gender}`)
  const data = await res.json()
  setdata(data)
}
