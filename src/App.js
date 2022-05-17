import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
import { NavBar } from './component/NavBar';
import { Form } from './component/Form';
import { useState } from 'react';
import { Card } from '@mui/material';
import { CardData } from './component/CardData';

function App() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [details,setDetails]=useState("");
  const [gender,setGender]=useState("");


  const recieveData=(name,email,details,gender)=>{
    setName(name);
    setEmail(email);
    setDetails(details);
    setGender(gender);
  
  }
  return (
    <div className="App">

      <nav>
        <NavBar/>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='/form' element={<Form recieveData={recieveData}/>}></Route>
        <Route path='/card' element={<CardData name={name} email={email} details={details} gender={gender}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
