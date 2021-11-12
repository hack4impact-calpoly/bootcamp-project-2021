import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Recipe from './components/recipe.jsx';
import recipes from './recipeData.json';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {recipes.map(recipe => {
            return (
              <Route path={`/recipes/${recipe.name}`}>
                <Recipe recipe={recipe} />
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
