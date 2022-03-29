import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {onAuthStateChanged} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext';

function App() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  
  function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
  
    return currentUser ? children : <Navigate to="/login" />;
  }
  return (
    
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={ <PrivateRoute><Home /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>

    </>


  )
}

export default App;
