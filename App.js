import './App.css';
import Navbar from './navBar';
import Home from './home';
import RecipePreview from './recipePage';
import recipes from './recipeData.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import RecipePage from './recipePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main.html" element={<Home />} />
        <Route exact path="/pesto.html" element={
          <RecipePage
            name={recipes[0].name}
            description={recipes[0].description}
            imageSrc={recipes[0].imageSrc}
            ingredientList={recipes[0].ingredientList}
            instructionList={recipes[0].instructionList}
            link={recipes[0].link}
            courtesyOf={recipes[0].courtesyOf}
          />
        } />
        <Route exact path="/challah.html" element={
          <RecipePage
            name={recipes[1].name}
            description={recipes[1].description}
            imageSrc={recipes[1].imageSrc}
            ingredientList={recipes[1].ingredientList}
            instructionList={recipes[1].instructionList}
            link={recipes[1].link}
            courtesyOf={recipes[1].courtesyOf}
          />
        } />
        <Route exact path="/bagels.html" element={
          <RecipePage
            name={recipes[2].name}
            description={recipes[2].description}
            imageSrc={recipes[2].imageSrc}
            ingredientList={recipes[2].ingredientList}
            instructionList={recipes[2].instructionList}
            link={recipes[2].link}
            courtesyOf={recipes[2].courtesyOf}
          />
        } />
        <Route exact path="/focaccia.html" element={
          <RecipePage
            name={recipes[3].name}
            description={recipes[3].description}
            imageSrc={recipes[3].imageSrc}
            ingredientList={recipes[3].ingredientList}
            instructionList={recipes[3].instructionList}
            link={recipes[3].link}
            courtesyOf={recipes[3].courtesyOf}
          />
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
