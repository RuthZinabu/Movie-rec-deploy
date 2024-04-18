import React, { useRef, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./loginpage.css";

export const Loginpage = () => {
  const name = useRef()
  const password = useRef()
  const email = useRef()
  const correct_password = useRef()

   const [action,setAction] = useState("Login");
   const [showPassword, setShowPassword] = useState(false);
   const [showPassword1, setShowPassword1] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };


  const handlelogin = () => {
    if (!password.current.value || !email.current.value){
      alert("Need Email and Password to Login")
      return;
    } 
    const checkemail = localStorage.getItem("email")
    const checkpasswrd = localStorage.getItem("password")

    if (checkemail !== email.current.value || checkpasswrd !== password.current.value){
      alert("Incorrect Email or Password")
      return;
    }

    window.location.href = "/"
      
  }

  const handleSignIn = () => {
    if (!password.current.value || !email.current.value || !correct_password.current.value){
      alert("Need to Fill all the Required Fields")
      return;
    }
      if (password.current.value !== correct_password.current.value){
        alert("Password Doesn't Match")
        return;
       }

      localStorage.setItem("email", email.current.value)
      localStorage.setItem("password", password.current.value)

      alert("Successfully Signed Up")
      window.location.reload()

  }


  return (
    <>     
   
<div className='container w-1/2 mt-20 mb-20'>
   <div className="header">
    <div className="text">{action}</div>
   </div>
   <div className="inputs">
  {/* input field*/}
    {action==="Login"?<div></div>:<div className="input">
      <input ref={name} className='in' type="email" placeholder='Name'/>  
    </div>}


    <div className="input">
      <input ref={email} className='in' type="email" placeholder='E-mail'/>  
    </div>

    <div className="input">
              <input
              ref={password}
                className="in"
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <span className='pr-2' onClick={togglePasswordVisibility}>{showPassword ? <FaRegEyeSlash/> : <FaRegEye/>}</span>
            </div>
            


    {action==="Login"?<div></div>:<div className="input">
    <div className="input">
              <input
              ref={correct_password}
                className="in"
                type={showPassword1 ? "text" : "password"}
                placeholder="password"
              />
            </div>
            <span onClick={togglePasswordVisibility1}>{showPassword1 ? <FaRegEyeSlash/> : <FaRegEye/>}</span>
 
    </div>}

    
    
   </div>
   {action==="Sign Up"?<div></div>:<div className="forgot-password text-center">Forgotten <span>Password?</span></div>}
   
   <div className="submit-container">
   <div className={action==="Login"? "submit grey": "submit"} onClick={()=>{setAction("Sign Up"); handleSignIn()}}>Sign Up</div>
    <div className={action==="Sign Up"? "submit grey2": "submit"} onClick={()=>{setAction("Login"); handlelogin()}}>Login</div>
   </div>
</div>

</>
  )       
}

export default Loginpage;