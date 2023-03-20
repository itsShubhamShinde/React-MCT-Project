import React, { useEffect, useState } from 'react'
import './Userpage.css'
import { getUserData } from '../APIData/Getdetails'

const UserPage = () => {
  const [user, setUser] = useState([])
  const [gender, setGender] = useState("all")
  useEffect(() => {
    getUserData(setUser, gender)
  }, [gender]);
  const changegender = (e) => {
    console.log("event", e.target.value);
    setGender(e.target.value)
  }
  return (
    <div className='userOuterDiv'>
      <div className='UserTitleDiv'>
        <h1>User Details</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi porro amet et commodi id assumenda, sed molestiae hic  voluptates voluptatibus expedita, magni praesentium ducimus velit exercitationem. Suscipit, nesciunt nisi? Odit unde inventore corrupti incidunt. Illum modi sint id accusamus temporibus consequatur odio ipsam veritatis ea ducimus  necessitatibus nemo debitis incidunt eius inventore aliquid consequatur? Qui recusandae molestias placeat!</p>
        <div className='SelectoptionDiv' onChange={(e) => {
          changegender(e)
        }}>
          <span>
            <input type="radio" name="category" checked={gender === 'all'} value="all" onChange={(e) => {
              changegender(e)
            }} /><label >All</label>
          </span>
          <span>
            <input type="radio" name="category" checked={gender === 'male'} value="male" onChange={(e) => {
              changegender(e)
            }} /><label >Male</label>
          </span>
          <span>
            <input type="radio" name="category" checked={gender === 'female'} value="female" onChange={(e) => {
              changegender(e)
            }} /><label >Female</label>
          </span>
        </div>
      </div>
      <div className='UserAnswerDiv'>
        <div className='tabletitlediv'>
          <p className='image'>IMAGE</p>
          <p className='name'>NAME</p>
          <p className='email'>EMAIL</p>
          <p className='gender'>GENDER</p>
        </div>
        {
          user.length === 0 ? <div>Data Not Found Plz try after Some time</div> :
            user.results.map((ele) => {
              return <div className='TableDiv'>
                <img src={ele.picture.large} alt="Img" className='image1' />
                <p className='name'>{ele.name.first}</p>
                <p className='email'>{ele.email}</p>
                <p className='gender'>{ele.gender}</p>
                <hr />
              </div>
            })
        }
      </div>
    </div>
  )
}

export default UserPage