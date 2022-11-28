
import React , { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
   
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   }


  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <div>
   <NavBar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
    <TextForm heading="Enter your text to analyze below" mode={mode}/>
   </div>
   <div>
    <About/>
   </div>
    </div>
  );
}

export default App;
