import './App.css';
import './styles.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Homepage/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from './components/RecipePage/RecipePage';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/:recipeId" element={<RecipePage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
