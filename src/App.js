import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light");
  const [alert,setalert] = useState(null);

  const showAlert = (msg, type)=>{
    setalert({
      msg : msg,
      type : type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor = "#0b2e4c";
      showAlert("Dark Mode Enabled Successfully","success");
      document.title = 'TextUtils - Dark mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled Successfully","success");
      document.title = 'TextUtils - Light mode';
    }
  }

  return (
  <>
  <Router>
    <Navbar title="TextUtils" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
      <Route exact path="/" element={<TextForm enterText="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
      <Route exact path="/about" element={<About/>} />
    </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
