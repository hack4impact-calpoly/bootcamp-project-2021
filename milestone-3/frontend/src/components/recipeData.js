import './App.css';
import recipes from './data';
import Recipe from './Recipes';
function App(){
    return( 
    <div className ="App">
        <h2> Welcome to Nick's Kitchen! </h2>
        <p> Welcome to my first website!
            Here I will be showing you some recipes I enjoy!
        </p>
        <br />
        <h1> Recipe List </h1>
        {recipes.map(recipe => 
            <Recipe 
                name={recipe.name}
                img = {recipe.imgsrc}
                description = {recipe.description}
            />
        )};
    </div>
    );
    
    
}