import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import { auth } from './firebase/init';
import { onAuthStateChanged } from 'firebase/auth';
import Main from './pages/Main';
import './index.css';

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
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
        </Routes>
    </Router>
  );
}

export default App;
