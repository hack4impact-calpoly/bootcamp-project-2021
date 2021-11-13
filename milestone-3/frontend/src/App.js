import './App.css';
import Home from './components/home.jsx';
import Recipe_page from './components/recipe_page.jsx'
import About from './components/about.jsx'
import {mac_object, blt_object, shrimp_object} from './components/recipeData.js';
import { BrowserRouter, Route , Routes} from  'react-router-dom'


function App() {
  
  return (
    //app.js only contains routes to the compoonets which have actual html content
    //It felt organic to make app.js like a header file that links all the jsx files
    //idk if this is the best way but it certainly made it easier for me to understand
    <div className="App">
      <header className="App-header">

        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mac%20and%20Cheese" element={<Recipe_page recipe={mac_object}/>} />
            <Route path="/BLT" element={<Recipe_page recipe={blt_object}/>} />
            <Route path="/Shrimp%20Scampi" element={<Recipe_page recipe={shrimp_object}/>} />
            <Route path="/about" element={<About />} />
          </Routes>

        </ BrowserRouter>

      </header>
    </div>
  );
}

export default App;
