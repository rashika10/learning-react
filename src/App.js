import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtilss" aboutText="About TextUtils"/>
    <div className="container my-3" >
    <TextForm heading="Enter Your Heading Velow"/>
    </div>
   
    </>
  );
}

export default App;
