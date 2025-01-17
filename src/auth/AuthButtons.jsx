// LOGIN, REGISTER, LOGOUT BUTTONS

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModule';
import RegisterModal from './RegisterModule';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/init';
import { signOut } from 'firebase/auth';
import '../styles/buttons.css';

const AuthButtons = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
    } else {
      setDisplayName('');
    }
  })

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };
  const handleLogout = () => {
    signOut(auth);
    console.log("logged out");
  };

  const cookie = () => {
    document.cookie = "name=cookie SameSite=None Secure";
  }

  return (
    <div id="auth-btn">
      {!loading &&!user && (
        <>
        
          <Button
            variant="outline-none"
            onClick={handleShowLoginModal}
            style={{
              backgroundColor: 'var(--color-ice-blue)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
            className="auth-btn"
          >
            Login
          </Button>
          <Button
            variant="outline-none"
            onClick={handleShowRegisterModal}
            style={{
              backgroundColor: 'var(--color-ice-blue)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
            className="auth-btn"
          >
            Register
          </Button>
         
        </>
      )}

      {!loading && user && (
        <>
        
          <Button
            variant="outline-none"
            onClick={handleLogout}
            style={{
              backgroundColor: 'var(--color-ice-blue)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
            className="auth-btn"
          >
            Logout
          </Button>
        </>
      )}

      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal}  />
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </div>
  );
};

export default AuthButtons;