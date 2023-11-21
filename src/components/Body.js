import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

    const approuter = createBrowserRouter([
        {
            path: "/",
            element : <Login/>
        },
        {
            path: "/browse",
            element : <Browse/>
        }
    ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,displayName,email} = user;
          dispatch(addUser({
            uid: uid,
            displayName: displayName,
            email: email,
          }))
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
        }
      });

    },[]);


  return (
    <div>
       <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body