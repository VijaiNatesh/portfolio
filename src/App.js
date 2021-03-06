import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Home from './component/Home';
import Navigation from './component/Navigation';
import Contact from './component/Contact';

function App() {
  return (
    <div>
       <Navigation/>
     <BrowserRouter>   
     <Routes>     
     <Route path="/home" element = {<Home/>} />
       <Route path="/about" element = {<About/>} />
       <Route path="/skills" element = {<Skills/>} />
       <Route path="/projects" element = {<Projects/>} />      
       <Route path="/contact" element = {<Contact/>} />             
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
