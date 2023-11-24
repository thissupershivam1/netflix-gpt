import React, { useEffect, useState } from 'react'
import Netflix_logo from "../images/Netflix_Logo_PMS.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { USER_AVATAR } from '../utils/constants';

const Header = () => {
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const [loggedin, setLoggedin]=useState(false);
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
    });

   





  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,displayName,email} = user;
        dispatch(addUser({
          uid: uid,
          displayName: displayName,
          email: email,
        }))
        setLoggedin(true);
        navigate("/browse")
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        setLoggedin(false);
        navigate("/")
      }
    });

    return ()=> unsubscribe();

  },[]);
  return (
    <div className='w-full h-20 flex justify-between bg-[#020304] `${loggedin ? "bg-[#020304]" : " "}`
    '>

      <img src={Netflix_logo} alt="logo" className='m-2' />

      {loggedin&& <div className=' flex justify-center items-center'>


        <div className="">
          <img className='h-9 w-9' src={USER_AVATAR} alt="" />
        </div>



        <button onClick={handleSignOut}
        className='text-white m-5 '>Sign Out</button>


      </div>}






    </div>
  )
}

export default Header