import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
// import { useState } from 'react';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const removeBgColor = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }
  const toggleMode = (cls) => {
    removeBgColor();
    console.log(cls);
    document.body.classList.add("bg-" + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(11,48,143)";
      showAlert("Dark mode has been enable", "success");
      document.title = "React App - DarkMode enable"

    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      document.title = "React App - Home"
    }
  }



  return (
    <>
      <Router>
        <Navbar title="Code Mafias" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Write some logic" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
