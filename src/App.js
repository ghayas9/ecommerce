import React, { useState } from 'react'
import Prodects from './Pages/Prodects'
import NavBar from './Components/NavBar'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Admin from './Pages/Admin';
import AddProduct from './Pages/AddProduct';
import Payment from './Pages/Payment';



export default function App() {



 
  return (
    <>
    
    <Router>
    <NavBar/>
        <Routes>
          <Route path="/" element={<Prodects/>}/>
          <Route path="/products" element={<Prodects/>}/>
          <Route path="/signin" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/product/add" element={<AddProduct/>}/>
          <Route path="/payment" element={<Payment/>}/>
          {/* <Route path="*" element={<Error/>}/> */}
        </Routes>
      </Router>
    </>
  )
}




