import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Main from './pages/Main';
import Welcome from './pages/Welcome';
import './index.css';

function App() {
  document.cookie= "cookieName=cookieValue; SameSite=Strict; Secure";

 
 

 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/Main' element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
