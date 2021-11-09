import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Homepage/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import RecipePreview from './components/Homepage/RecipePreview/RecipePreview';
import RecipePage from './components/RecipePage/RecipePage';
import recipes from '../../frontend/src/recipeData.js';

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
