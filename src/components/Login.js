import React, { useState,useRef } from 'react'
import bg from "../images/bg.jpg";
import Netflix_logo from "../images/Netflix_Logo_PMS.png"
import { checkValidData } from '../utils/validate';

import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

import Header from './Header';

const Login = () => {

 

    const [isSignIn, setIsSignIn]= useState(true);
    
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn)

    }

    const [error,setError] = useState(null);
    // console.log(isSignIn)
    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{

      console.log(email.current.value);
      console.log(password.current.value);

      const message=checkValidData(email.current.value,password.current.value);
      console.log(message);
      setError(message);

      if(message) return;

      if(!isSignIn){

      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        
         // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setError(errorCode+"-"+errorMessage);
    // ..
  });



      }
      else{

        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
       .then((userCredential) => {
    // Signed in 
       const user = userCredential.user;
       console.log(user);
      
      // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage);
  });

      }




    }


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
    <Header/>
    <div style={divStyle}  

    className='flex flex-col items-center justify-center brightness-50'
    
    >  

    {/* <div>
    <img src={Netflix_logo} alt="logo" style={logoStyle} className='h-20 w-40 font-semibold saturate-150 contrast-100' />

    </div> */}

    


    <div className='w-96  bg-black bg-opacity-80 rounded-lg mt-[-100px]'>

        <form action="
        "  onSubmit={(e)=>{e.preventDefault()}} className='w-full flex flex-col items-center justify-center'>


            <h2 className=' text-3xl p-10 text-white font-medium '>  { isSignIn ? "Sign In" : "Sign Up"} </h2>

           { !isSignIn&& <input type="text"  className='text-white my-2 h-12  p-2 w-80 rounded-lg bg-[#333333]' placeholder='Name'/>}

            <input ref={email} type="text"  className='text-white my-2 h-12  p-2 w-80 rounded-lg bg-[#333333]' placeholder='Email'/>

            <input ref={password} type="text" className='text-white my-2 h-12 w-80 p-2 rounded-lg bg-[#333333]' placeholder='Password'/>

            <h2 className='text-red-600 text-lg'>{error}</h2>

            <button className='text-white bg-[#e50914] my-2 mb-5 h-12 w-80  rounded-lg'
            onClick={handleButtonClick}
            >
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