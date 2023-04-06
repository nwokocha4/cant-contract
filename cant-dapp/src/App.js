import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/Home'
import { About } from './component/pages/About'
import { Details } from './component/pages/Details'
import { Map } from './component/pages/Map'
import { FAQ } from './component/pages/FAQ'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import './App.css';
import { useState } from 'react';


function App() {


  return (
  <>
  <Router>
  <Navbar/>
  <Home />
  <About />
  <Details />
  <Map />
  <FAQ />
  
  
   
  
  <Footer />
  </Router>
  </>
   )
}

export default App;

