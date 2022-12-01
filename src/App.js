
import React , { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Switch
} from "react-router-dom";


 function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
   
  
  const showAlert=(message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
   };


  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils-Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils-Light Mode"
    }
  }
  return (
    <>
    <Router>
    
   <NavBar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <Switch>
          <Route  path="/about">
            <About />
          </Route>
          <Route  path="/">
         <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>  
          </Route>
    </Switch>      
          
        
    
   </div>
   
    
    </Router>
    </>
  );
}

export default App;

