import React from 'react'
import Netflix_logo from "../images/Netflix_Logo_PMS.png"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='w-full h-20 flex justify-between bg-[#020304]'>

      <img src={Netflix_logo} alt="logo" className='m-2' />

      <div className='m-3'>



        <button onClick={handleSignOut}
        className='text-white m-2'>Sign Out</button>


      </div>






    </div>
  )
}

export default Header