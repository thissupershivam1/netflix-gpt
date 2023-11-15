import React, { useState } from 'react'
import bg from "../images/bg.jpg";
import Netflix_logo from "../images/Netflix_Logo_PMS.png"

const Login = () => {

    const [isSignIn, setIsSignIn]= useState(true);
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn)

    }
    // console.log(isSignIn)

    const divStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover', // or 'contain', or any other CSS background properties
         // set your desired width
        height: '600px', // set your desired height
      };
      const logoStyle = {
        position: 'absolute',
        top: '20px', // Adjust the top value to your desired position
        left: '20px', // Adjust the left value to your desired position
      };
  return (
    <>
    <div style={divStyle}  

    className='flex flex-col items-center justify-center brightness-50'
    
    >  

    <div>
    <img src={Netflix_logo} alt="logo" style={logoStyle} className='h-20 w-40 font-semibold saturate-150 contrast-100' />

    </div>

    


    <div className='w-96  bg-black bg-opacity-80 rounded-lg'>

        <form action="
        "  className='w-full flex flex-col items-center justify-center'>


            <h2 className=' text-3xl p-10 text-white font-medium '>  { isSignIn ? "Sign In" : "Sign Up"} </h2>

           { !isSignIn&& <input type="text"  className='my-2 h-12  p-2 w-80 rounded-lg bg-[#333333]' placeholder='Name'/>}

            <input type="text"  className='my-2 h-12  p-2 w-80 rounded-lg bg-[#333333]' placeholder='Email'/>

            <input type="text" className='my-2 h-12 w-80 p-2 rounded-lg bg-[#333333]' placeholder='Password'/>

            <button className='text-white bg-[#e50914] my-2 mb-5 h-12 w-80  rounded-lg'>
            { isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p onClick={toggleSignInForm}  className='cursor-pointer mb-10 text-white'>
            { isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In"}
            
            </p>



        </form>



    </div>







    </div>
    
    
    
    </>
    
  )
}

export default Login