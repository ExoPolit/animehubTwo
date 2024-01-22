import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth } from "../firebase/init"; 


const RegisterModule = ({ show, handleClose }) => {
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Set display name
      await updateProfile(user, { displayName: formData.name });

      console.log(user);
      setUser(user);

    } catch (error) {
      console.log("Already Registered");
    }
  };

  const setDisplayName = async (user, displayName) => {
    try {
      await updateProfile(user, {
        displayName: displayName,

      });
    }
    catch (error) {
      console.log(error);
    };
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"var(--color-bg-dark-op)"}}>
          Close
        </Button>
        <Button variant="none" onClick={handleRegister} style={{backgroundColor:"var(--color-ice-blue)", fontWeight:"500"}}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModule;