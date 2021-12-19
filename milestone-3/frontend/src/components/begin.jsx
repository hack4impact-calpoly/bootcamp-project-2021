import recipes from './components/data';
import Recipe from './components/Recipes';


export default function Title({recipes}){
    return (
    <div className ="App">
      <body>
      <header class = "head">
        <h1 class = "title"> Nick's Kitchen </h1>
        <Navbar />
      </header>
      <h2> Welcome to Nick's Kitchen! </h2>
        <p> Welcome to my first website!
            Here I will be showing you some recipes I enjoy!
        </p>
        <br />
        <h1> Recipe List </h1>
        <div id = "item">
        {recipes.map(recipe => 
            <Recipe 
                name={recipe.name}
                imgsrc = {recipe.imgsrc}
                description = {recipe.description}
            />
        )};
        </div>
        
      </body>
        
    </div>
    )
}