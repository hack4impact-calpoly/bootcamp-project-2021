import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home';
import RecipePage from './components/recipePage';
import About from './components/aboutMe';

import {
  // BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //  </div>
    //  <Switch>
    //    <Route exact path="/">
    //      <Home />
    //    </Route>
    //    <Route exact path="/aboutme">
    //      <About />
    //    </Route>
    //    {recipes.map(recipe =>
    //     <Route exact path={"/recipes/"+recipe.name}>
    //       <RecipePage 
    //         recipeName={recipe.name} 
    //         recipeDesc={recipe.description}
    //         imageSrc={recipe.imageSrc}
    //         ingredients={recipe.ingredients}
    //         servingSize={recipe.servingSize}
    //         instructions={recipe.instructions}
    //       />
    //     </Route>
    //    )};
    //  </Switch>
    // </Router>
  );
}

export default App;
