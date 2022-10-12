import React, { useState } from 'react';
import fire from './fire';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './session/Login';

import './App.css';
import {Navbar} from './components/navbar/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  console.log('logged in?', isLoggedIn);

  const signOut = () => {
  fire.auth().signOut()
  };



  return (
    <div className="App">  
    <Navbar/> 
    <Router>
        
        {!isLoggedIn
          ? (
            <>
              <Routes>
              <Route path="/" element={<Login />} />
                
              </Routes>
            </>
          ) 
          : (
            <>
            <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span>
            </>
          )}
      </Router>
     
      {/* add ItemListcontainer con una prop greeting, y muestra el mensaje dentro del contenedor con styling integrado */}
     
    
      
    </div>
    
  );
}

export default App;

