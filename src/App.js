import React from 'react'
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Footer from "./Components/Footer/Footer";
import Contact from './Components/Contact/Contact';

import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'   
    style={{
      background: darkMode? 'black':'',
      color : darkMode? 'white' : ''
    }}
    >
    <Navbar/>
    <About/>
    <Team/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
