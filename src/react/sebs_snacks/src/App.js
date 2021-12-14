import './App.css';
import Home from "./components/home";
//import Recipe from "./components/recipe";
import Navbar from "./components/navbar";
import AboutMePage from "./components/aboutme";
//import recipeInfo from "./recipeInfo";
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  
  return (
    
    <div className="App">
    {/*<Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="aboutme" element={<AboutMePage />} />
        <Route exact path="carbonara" element={<CarbonaraPage />} />
        <Route exact path="spaghetti" element={<SpaghettiPage />} />
        <Route exact path="pestoPasta" element={<PestoPastaPage />} />
      </Routes>
    </Router>*/}
      <div className="outline" >
        <Navbar />
        <Home />
      </div>
    </div>
  );
}


export default App;
