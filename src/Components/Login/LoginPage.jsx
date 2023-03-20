import React, { useContext } from 'react'
import './Loginpage.css'
import loginImg from '../../Images/LoginPageimg.PNG'
import {  useNavigate } from 'react-router-dom'
import {GlobalData} from '../../App'

const LoginPage = () => {
  const context = useContext(GlobalData)
  const navigate = useNavigate()
 const login = ()=>{
     if(context.email !== "" && context.password !== "" && context.check !== false){
      localStorage.setItem('login',true)
      navigate('/Home')
      context.setEmail("")
      context.setPassword("")
      context.setCheck(false)
     }else{
      alert("Please Fill Valid Input")
     }
 }

  
  return (
    <div className='loginpageOuterDiv'>
      <div className='loginpageBox'>
        <div className='LoginPageLeftDiv'>
          <div className='loginUpperDiv'>
            <h1 >Welcome back to Pritty Login</h1>
            <p>Its great to have you back!</p>
            <span>
              <label>Email:</label>
              <input type="text" onChange={(e)=>{
                context.setEmail(e.target.value)
              }} style={{paddingLeft:"10px"}}></input>
            </span>
            <span>
              <label>Password:</label>
              <input type="password" onChange={(e)=>{
                context.setPassword(e.target.value)
              }} style={{paddingLeft:"10px"}}></input>
            </span>
          </div>
          <div className='checkbox'>
            <div className='check'>
              <input type='checkbox' value="" onClick={()=>{
                context.setCheck(!context.check)
              }}/>
              <label>Remember me?</label>
            </div>
            <p>Forget Password?</p>
          </div>
          <div className='LoginbuttonDiv'>
            <button onClick={()=>{
              login()
            }}>Login</button>
            <button>Create Account</button>
          </div>
          <div className='loginFooter'>
            <p>Or log with</p>
            <div> 
            <p>Facebook</p>
            <p>Google</p>
            </div>
          </div>

        </div>


        <div className='LoginPageRightDiv'>
          <img src={loginImg} alt="Img" />
        </div>
      </div>
    </div>
  )
}

export default LoginPage