import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Nav from './components/navibar';
function App() {
  return (
      <div className="App">
        <Router>
        <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        </Router>
      </div>
  );
}

export default App;
