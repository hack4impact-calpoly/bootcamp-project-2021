import './App.css';
import Recipe from "./recipe";
import recipeInfoList from "./recipeInfo";

function App() {
  return (
    <div className="App">
      <p>Hello World</p>
      <h1>Coles Concoctions</h1>
      {recipeInfoList.map(recipe => 
        <Recipe 
          name={recipe.name}
          img={recipe.imgSrc}
          desc={recipe.description}
        />
      )};
    </div>
  );
}

export default App;
