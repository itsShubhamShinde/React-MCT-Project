import './App.css';
import LoginPage from './Components/Login/LoginPage';
import Navbar from './Components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ProdectPage from './Components/Prodect/ProdectPage';
import UserPage from './Components/User/UserPage';
import ContactPage from './Components/Contact/ContactPage';
import React from "react";
import { useLocation } from 'react-router-dom';
import { createContext } from "react";
import { useState } from "react";
import Cart from './Components/Prodect/Cart';

export const GlobalData = createContext();
function App() {
  const location = useLocation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [check, setCheck] = useState(false)

  return (
    <GlobalData.Provider value={{
      email: email, setEmail: setEmail, password: password, setPassword: setPassword,
      check: check, setCheck: setCheck, 
    }}>
      <div className="App">
        {location.pathname !== '/' && <Navbar />}

        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/Home' element={<HomePage />}></Route>
          <Route path='/Products' element={<ProdectPage />}>
          <Route path='/Products:parems' element={<ProdectPage />}></Route>
          </Route>
          <Route   path="/cart/:id" element={<Cart /> }/>
          <Route path='/Users' element={<UserPage />}></Route>
          <Route path='/Contact' element={<ContactPage />}></Route>
        </Routes>
      </div>
    </GlobalData.Provider>
  );
}

export default App;
