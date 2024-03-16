import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';
import { Store } from '../ContextApi/context';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setIsLoggedIn, generateToken } = useContext(Store);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      try {
        console.log('Email:', email);
        console.log('Password:', password);
        
        // const token = await generateToken();
        
        setIsLoggedIn(true);
        // if (token) {
        //   setIsLoggedIn(true);
        //   navigate('/'); 
        // } else {
        //   alert('Invalid email or password. Please try again.');
        // }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred during login. Please try again later.');
      }
    } else {
      alert('Please enter a valid email and password');
    }
  };

  return (
    <Container className="login-container mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className='my-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className='my-3'>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
