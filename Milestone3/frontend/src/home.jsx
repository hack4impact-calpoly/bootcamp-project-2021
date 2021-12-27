import logo from './logo.svg';
import './home.css';
import Recipe from './components/recipe';
import recipes from './recipeData';
import { Link } from "react-router-dom";
import AboutMe from './aboutme';
import "./aboutme.css"

function Home() {
  return (
    <div className="App">
      <br />
      <Link to="/aboutme"><span className="bleh">About Me</span></Link>
      <p id="title">Michelle's Cookbook</p>
      <p id="info">Hey! I'm Michelle and I love spending my free time cooking and experimenting with new recipes. Here you will find some of my favorite recipes of food I love to make!</p>
      <br />
      <p id="subtitle">Recipes:</p>
      {recipes.map(recipe =>
        <Recipe
        name={recipe.name}
        img={recipe.image}
        link={recipe.link}
        />
        
      )}
    </div>
  );
}

export default Home;
