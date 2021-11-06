import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Homepage/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
