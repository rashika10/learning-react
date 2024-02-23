import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() =>{
      setAlert(null);
     },1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode';
      // check setInterval  to make title shine
    }
  }
  return (
    <>
    <Navbar title="TextUtilss" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm showAlert={showAlert} heading="Enter Your Heading Below" mode={mode}/>
    {/* <About/> */}
    </div>
   
    </>
  );
}

export default App;
