import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home/Home"
import Works from './components/Works/Works';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='works' element={<Works />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
   
  );
}

export default App;
