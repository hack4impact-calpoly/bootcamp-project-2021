import './App.css';
import Recipe from "./components/recipe";
import Navbar from "./components/navbar";
import recipeInfo from "./recipeInfo";

function App() {
  
  return (
    <div className="App">
      <div className="outline" >
        <Navbar />
        <br/>
        <p id="welcome"><h2>Welcome to Sebastien's Snacks</h2></p>
        <p id="welcomeMessage"><h4>This is where I share some of my personal favorite snack and dinner recipes. Bon Apetito!</h4></p>
        <br/>
        <div class="recipes">
          <h2 id="snacks">Snacks:</h2>
          {recipeInfo.map(recipe => 
            <Recipe 
              name={recipe.name}
              img={recipe.imgSrc}
              desc={recipe.description}
              alt = {recipe.alt}
            />
          )}
        </div>
      </div>
    </div>
  );
}


export default App;
