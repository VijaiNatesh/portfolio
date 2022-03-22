import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Home from './component/Home';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
     <Route path="/" element = {<Home/>} />
       <Route path="/about" element = {<About/>} />
       <Route path="/skills" element = {<Skills/>} />
       <Route path="/projects" element = {<Projects/>} />      
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
