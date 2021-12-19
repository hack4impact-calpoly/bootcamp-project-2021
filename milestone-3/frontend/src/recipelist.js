import './App.css';
import necessaryVals from './components/data';
import howtomake from './components/AllInstructIngreds';
import Navbar from './components/navbar';


function recipelist() {
  return( 
    <div className ="recipelist">
      <body>
      <header class = "head">
        <h1 class = "title"> Nick's Kitchen </h1>
        <Navbar />
      </header>
      <h2> Welcome to Nick's Kitchen! </h2> {/*food Recipe*/}
        <p> Welcome to my first website!
            Here I will be showing you some recipes I enjoy!
        </p>
        <br />
        <div id = "item">
        {recipes.map(recipe => 
            <Recipe 
                name={recipe.name}
                imgsrc = {recipe.imgsrc}
                description = {recipe.description}
            />
        )};
        </div>
        <div id = "ingredients">
            <h2> Ingredients </h2>
        </div>
        <ul>
            <FriedRiceIng />
        </ul>
        <label> Add an ingredient here! </label><br />


        <div id = instructions>
        <h2> Instructions </h2>
    </div>
    <div id = instructlist>
        <ol>
            <li> Prepare the tonkatsu sauce: In a small bow, combine all of the ingredients </li>
            <li> Prepare the chicken: Fill a large cast-iron or heavy skillet with 1/3-inch oil. Heat over medium.</li>
            <li> Place flour, eggs, and bread crumbs in 3 separate wide, shallow bowls or large plates </li>
            <li> Season chicken cutlets with salt and pepper. Working with one cutlet at a time, dredge in flour until fully coated</li>
            <li> Shake off excess and dip in egg and then press into bread crumbs until well coated  </li>
            <li> Gently lower 2 cutlets into the oil and fry until golden. Turn over and fry other side for 1.5 to 2 minutes longer </li>
            <li> Slice cutlets into thick slices and serve</li>
        </ol>
    </div>
        
      </body>
        
    </div>
    );
}

function FriedRiceIng() {
    return(<li> 6 tablespoons ketchup </li>
    <li> 6 tablespoons Worcestershire sauce </li>
    <li> 4 teaspoons unsulphured molasses </li>
    <li> 2 teaspoons low-sodium sauce </li>
    <li> 2 teaspoons granulated sugar </li>
    <li> 1/4 teaspoon grated peeled fresh ginger </li>
    <li> 1/8 teaspoon ground cloves </li>
    <li> 1/2 cup all-purpose flour </li>
    <li> 2 large eggs, beaten</li>
    <li> 1 1/2 cups pank bread crumbs </li>
    <li> 2 boneless, skinless chicken breasts, halved crosswise then pounded 1/4 inch-thick</li>
    <li> Kosher salt and black pepper</li>
    <li> 4 cups tightly packed finely shredded green cabbage </li>);
}
  
function ChickenKatsu() {
    return <h2>About</h2>;
}

function TeriyakiChicken(){
    return <h2>About</h2>;
}
export default recipelist;
