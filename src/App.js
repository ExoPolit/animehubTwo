import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { auth } from './firebase/init';
import { onAuthStateChanged } from 'firebase/auth';
import Main from './pages/Main';
import Welcome from './pages/Welcome';
import './index.css';

function App() {
  const [user, setUser] = useState({});
  document.cookie= "cookieName=cookieValue; SameSite=Strict; Secure";
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    },[]);
  });
 

 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Welcome' element={<Welcome />} />
        </Routes>
    </Router>
  );
}

export default App;
