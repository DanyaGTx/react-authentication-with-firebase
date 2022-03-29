import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';
import '../components/Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const navigate = useNavigate();

    const [loading,setLoading] = useState(false);

    const {login,currentUser} = useAuth()
    
    async function handleSubmit(e){
        e.preventDefault();
        try {
            setLoading(true)
            await login(auth,loginEmail,loginPassword)
            navigate('/');
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
        
    }
    return (
        <>
            <Card className='signIn-wrapper'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={(e) => { setLoginEmail(e.target.value) }} type='email' required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => { setLoginPassword(e.target.value) }} type='password' required></Form.Control>
                        </Form.Group>
                        <Button className='w-100 text-center mt-3' type='submit'>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}

export default Login
