import React from 'react'
import './App.css';
import Registration from './components/authentication/registration';
import Login from './components/authentication/login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Registration/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;