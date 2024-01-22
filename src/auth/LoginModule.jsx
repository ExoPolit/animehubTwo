import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { auth } from '../firebase/init.js';

const LoginModule = ({ show, handleClose }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              placeholder="Enter email"
              name='email'
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              placeholder="Password"
              name='password'
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"var(--color-bg-dark-op)"}}>
          Close
        </Button>
        <Button variant="none" onClick={handleLogin} style={{backgroundColor:"var(--color-ice-blue)", fontWeight:"500"}}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModule;