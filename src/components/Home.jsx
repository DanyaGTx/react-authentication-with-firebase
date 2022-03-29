import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  async function handleLogout(){
    try {
     
      await logout();
      navigate('/login');
    } catch (error) {
        console.log(error.message)
    }
  }
  const navigate = useNavigate();
  const {currentUser,logout} = useAuth()
  return (
    <>
    <h1>Welcome</h1> 
    <h4><strong>Your email: </strong> {currentUser && currentUser.email}</h4>
    <button variant='link' onClick={handleLogout}>Log out</button>

    </>
    
  ) 
}

export default Home