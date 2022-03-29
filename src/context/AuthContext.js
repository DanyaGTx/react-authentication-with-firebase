import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const[currentUser,setCurrentUser] = useState()

  function signup(auth,email,password){
    return createUserWithEmailAndPassword(auth,email,password)
  }
  function login(auth,email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }
  function logout(){
    return signOut(auth);
  }

  useEffect(()=>{
    const unsibscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user);
    })
    return unsibscribe
  },[])
  
  const value={
      currentUser,
      signup,
      login,
      logout
  }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
