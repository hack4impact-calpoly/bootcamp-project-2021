import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import recipes from './recipeData';
import Navbar from './components/navbar';
import NotFound404 from './components/notFound404';
import About from './components/about';
import Home from './components/home';
import RecipePage from './components/recipePage';
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 

function App() {
  return (
    <Router>
      <Wrapper>
        <div className="App">
          <Navbar />

          <Routes>
            { recipes.map(recipe => (
              <Route path={recipe.recipeRoute} element={<RecipePage {...recipe} />} />
            ))}
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        
        </div>
      </Wrapper>
    </Router>    
  );
}

export default App;
