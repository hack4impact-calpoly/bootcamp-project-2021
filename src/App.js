import './App.css';
import Recipe from './components/recipe';
import recipes from './recipeData';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Jin's Egg-cellent Recipes</Link>
        <Link to="/">Home</Link>
        <Link to="/About">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="boiled_egg" element={<Boiled_Egg />} />
        <Route path="scrambled_egg" element={<Scrambled_Egg />} />
        <Route path="steamed_egg" element={<Steamed_Egg />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome, Welcome, Welcome, to the page that will change your life!</h1>
      </div>
      <div>
        <h3>This website contains the collective cooking knowledge of humanity and it will lead you to a successful
          life. These foods will give you an unparalleled
          advantage in sports, academics and social life. The foods showcased are tasty and nutritious! So you better
          pay close attention so you can egg-cel in everything that you do, starting with a good diet!
        </h3>
      </div>
      <div>
        <h1>The Recipies</h1>
        {recipes.map(recipe =>
          <Recipe
            name={recipe.recipeName}
            img={recipe.recipeImage}
            desc={recipe.recipeInfo}
            link={recipe.link} />
        )}
      </div>
    </div>
  )
}

function About() {
  return (
    <div>
      <div>
        <h2>Who am I?</h2>
      </div>
      <p id="info_head">My name is Jin Wu! You can have absolute trust in my recipies because:</p>
      <div id="information">
        <img id="my_pic" src="http://pm1.narvii.com/6452/fe2a228ae89fac9570142d3f46e3b134df0d173f_00.jpg"></img>
        <ul>
          <li>I have egg-cellent taste!</li>
          <li>I usually eat like 5 eggs a day! That's a lot!</li>
          <li>Im a good guy?</li>
          <li>I can touch my toes!</li>
        </ul>
      </div>
    </div>
  );
}

function Boiled_Egg() {
  return (
    <div>
      <div>
        <h1 id="name">Boiled Eggs!!!</h1>
      </div>
      <div class="recipe-content">
        <img id="image" class="pic"
          src="https://www.mommyhatescooking.com/wp-content/uploads/2020/01/ninja-foodi-hard-boiled-eggs-3-720x720.jpg">
        </img>
        <div>
          <p id="description">Boiled eggs are among one of the best foods to make and eat.They are super easy and
            super delicious</p>
        </div>
      </div>
      <div class="Ingredients_Steps">
        <div class="ingredients">
          <h1>Ingredients</h1>
          <ul id="ingredient_list">
            <li>Eggs (Exactly 4)</li>
            <li>1 quart Pot</li>
            <li>1 Gallon of water</li>
            <li>Ice (9 cubes)</li>
            <li>Bowl (any size will do)</li>
          </ul>
          <input id="ingredient_input"></input>
          <button id="add_ingredient" onclick="addIngredient()">Click to add ingredient!</button>
        </div>
        <div class="steps">
          <h1>Steps</h1>
          <ol id="step_list">
            <li>Grab pot and fill with water</li>
            <li>Place pot on stove</li>
            <li>Place the 4 eggs in the pot</li>
            <li>Turn on stove at high heat for 8 minutes</li>
            <li>Place Ice and water in Bowl</li>
            <li>Place Eggs in Ice bowl</li>
            <li>Enjoy your eggs!</li>
          </ol>
          <input id="step_input"></input>
          <button id="add_step_button" onclick="addStep()">Click to add step!</button>
        </div>
      </div>
    </div>
  );
}

function Scrambled_Egg() {
  return (
    <div>
      <div>
        <h1 id="name">Scrambled Eggs</h1>
      </div>
      <div class="recipe-content">
        <img id="image" class="pic"
          src="https://assets.epicurious.com/photos/57b35f844924889253994109/16:9/w_1280,c_limit/scrambled-eggs.jpg">
        </img>
        <div>
          <p id="description">Scrambled Eggs are a staple breakfast dish and can go well with just about anything!</p>
        </div>
      </div>
      <div class="Ingredients_Steps">
        <div class="ingredients">
          <h1>Ingredients</h1>
          <ul id="ingredient_list">
            <li>Eggs (as much as you want)</li>
            <li>A big pan</li>
            <li>Oil (any will do)</li>
            <li>Salt, Pepper and any spices you have in the kitchen</li>
            <li>Plate</li>
            <li>Bowl</li>
            <li>Fork</li>
          </ul>
          <input id="ingredient_input"></input>
          <button id="add_ingredient" onclick="addIngredient()">Click to add ingredient!</button>
        </div>
        <div class="steps">
          <h1>Steps</h1>
          <ol id="step_list">
            <li>Crack all eggs into bowl</li>
            <li>Abuse eggs with fork</li>
            <li>Put some oil on the pan</li>
            <li>Place pan on stove and heat to medium temperature</li>
            <li>Pour beaten eggs into pan</li>
            <li>Cook</li>
            <li>Add seasonings</li>
            <li>Remove eggs from Pan into a plate</li>
            <li>Enjoy!</li>
          </ol>
          <input id="step_input"></input>
          <button id="add_step_button" onclick="addStep()">Click to add step!</button>
        </div>
      </div>
    </div>
  );
}

function Steamed_Egg() {
  return (
    <div>
      <div>
        <h1 id="name">Steamed Egg</h1>
      </div>
      <div class="recipe-content">
        <img id="image" class="pic"
          src="https://kirbiecravings.com/wp-content/uploads/2018/06/instant-pot-steamed-egg-5.jpg">
        </img>
        <div>
          <p id="description">Steamed Eggs are good</p>
        </div>
      </div>
      <div class="Ingredients_Steps">
        <div class="ingredients">
          <h1>Ingredients</h1>
          <ul id="ingredient_list">
            <li>Eggs (One costco sized pack will do)</li>
            <li>Big, wide, pot</li>
            <li>1 Gallon of water</li>
            <li>Bowl (Must fit in the big pot)</li>
            <li>Metal thing (To keep bowl off the water)</li>
            <li>Salt, White Pepper, Sesame Oil</li>
            <li>Fork</li>
            <li>Plastic Wrap</li>
          </ul>
          <input id="ingredient_input"></input>
          <button id="add_ingredient" onclick="addIngredient()">Click to add ingredient!</button>
        </div>
        <div class="steps">
          <h1>Steps</h1>
          <ol id="step_list">
            <li>Crack eggs into bowl and beat with fork</li>
            <li>Add an ample amount of salt, white pepper and sesame oil to eggs</li>
            <li>Place Water in big pot and put on stove at medium temperatre</li>
            <li>Put metal thing in pot</li>
            <li>Plastic wrap bowl with egg mixture</li>
            <li>Place bowl onto metal thing inside the pot</li>
            <li>Close pot and wait for 20 minutes</li>
            <li>Enjoy!</li>
          </ol>
          <input id="step_input"></input>
          <button id="add_step_button" onclick="addStep()">Click to add step!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
