import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,  Link } from 'react-router-dom';
import Home from './Components/home';
import Navbar from './Components/navbar';
import AboutMe from './Components/AboutMe';
import CarDetails from './Components/carDetails';


function App() {
  return (
    <div>
      <BrowserRouter>                                                                                                                         
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/onboarding/carDetails" element={<CarDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;