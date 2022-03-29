import React, { useRef, useState } from 'react'
import { Card, Form, Button} from 'react-bootstrap'
import { auth } from '../firebase';
import '../components/Signin.css';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const navigate = useNavigate();

    const [registerEmail,setRegisterEmail] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');

    const [loading,setLoading] = useState(false);
    const {signup,currentUser} = useAuth()

    async function handleSubmit(e){
        e.preventDefault();
        try {
            setLoading(true)
            await signup(auth,registerEmail,registerPassword)
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
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} onChange={(e) => {setRegisterEmail(e.target.value)}} type='email' required></Form.Control>
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} onChange={(e) => {setRegisterPassword(e.target.value)}} type='password' required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className='w-100 text-center mt-3' type='submit'>Create account</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Login if you have an account <Link to='/login'>Login</Link>
            </div>
            
        </>
            
    )
}

export default Signup
