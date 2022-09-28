import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './Pages/About/About';
import Project from './Pages/project/Project';


function App() {
  return (
    <div className="App bg-light">
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='project' element={<Project/>} />        
        <Route path='about' element={<About/>} />        
        <Route path='Contact' element={<Contact/>} />        
        <Route path='Contact' element={<Contact/>} />        
      </Routes>
    </div>
  );
}

export default App;
