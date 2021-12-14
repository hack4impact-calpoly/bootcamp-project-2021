import './App.css';
import HomePage from "./components/home";
import Navbar from "./components/navbar";
import AboutMePage from "./components/aboutme";
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
    {/*<Router>
      <Routes>
        <Route exact path="App" element={<HomePage />} />
        <Route exact path="aboutme" element={<AboutMePage />} />
        <Route exact path="carbonara" element={<CarbonaraPage />} />
        <Route exact path="spaghetti" element={<SpaghettiPage />} />
        <Route exact path="pestoPasta" element={<PestoPastaPage />} />
      </Routes>
      <Link to="App" id="home_home"><h3>Home</h3></Link>
      <Link to="aboutme" id="about"><h3>About</h3></Link>
    </Router>*/}
      <div className="outline" >
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
}


export default App;
