import './App.css';
import Navbar from './components/navbar.jsx';
import RecipePreview from './components/recipePreview';
import RecipePage from './components/recipePage';
import About from './components/aboutMe';
import recipes from './recipeData';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Add in Welcome description here?*/}
      {recipes.map(recipe =>
        <RecipePreview 
          recipeName={recipe.name} 
          recipeDesc={recipe.description}
          imageSrc={recipe.imageSrc}
        />
      )};
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
     </div>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/aboutme">
         <About />
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
