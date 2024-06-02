import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setloading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signup = async({fullName,username,password,confirmPassword,gender}) =>{
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return;
    try {
      const res = await fetch("/api/auth/signup",{
        method: "POST",
        headers :{"Content-Type":"application/json"},
        body : JSON.stringify({fullName,username,password,confirmPassword,gender})
      })

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      //localstorage
      localStorage.setItem("chat-app user",JSON.stringify(data))
      //context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setloading(false);
    }
  }
  return {loading, signup}
}

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
  if(!fullName || !username || !password || !confirmPassword|| !gender){
    toast.error('Please fill all the details')
    return false;
  }

  if(password!=confirmPassword){
    toast.error('Passwords mismatch');
    return false;
  }

  if(password.length < 0){
    toast.error('Passwords should be atleast 6 characters')
    return false;
  }

  return true;
}