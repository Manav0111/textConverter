
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  // document.body.style.backgroundColor="grey"
const[alert,setalert]=useState(null);
const showAlert=(message,type)=>{
setalert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setalert(null);
  },1500)
}

const togglemode=()=>{
  if(mode==="dark")
  {
    setMode("light");
    setnavMode("dark");
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
  }
  else
  {
    setMode("dark");
    setnavMode("light");
    document.body.style.backgroundColor='#042743';
     showAlert("Dark mode has been enabled","success")
  }
}

  const[mode,setMode]=useState("light");
  const[navmode,setnavMode]=useState("light");
  const[redmode,setredmode]=useState("light")

  const redMode=()=>{
    if(redmode==="light")
    {
      setredmode("red");
      document.body.style.backgroundColor='red';

    }
    else
    {
      setredmode("light");
      document.body.style.backgroundColor='white';
    }
  }

  return (
   <>
   <Navbar title="TextUtills" about="About Us" mode={mode} redMode={redMode}togglemode={togglemode}  navmode={navmode}/>
   <Alert alert={alert}/>
   
   
   
   <Router>
    <Routes>
      <Route path='/About' mode={mode} element={<About/>}/>
      <Route path='/' element={ <div className='container my-4' >  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /></div>}/>
    </Routes>
   </Router>

   </>
  );
}

export default App;
