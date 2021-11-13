import './home.css';
import Navbar from './navbar.jsx';
import RecipePreview from './recipePreview.jsx';
import {mac_object, blt_object, shrimp_object} from './recipeData.js';


export default function Home() {
  
  return (
      //home page  which is routed to "/" in app.js
      <header>
          <div class="title">
            <h1>Adam's Delicous Delectable Delights</h1>
          </div>

          <Navbar />

          <div class="welcome">
            <h2>Welcome!!</h2>
            <h3>You have entered into your first step at becoming a fantastic cook!</h3>
            <h3>These recipes are guarunteed to satisfy any food connoisseur, impress any date, win over any soul.</h3>
            <h3>Make any of these delicous dishes and you will positively become the an instant elite chef.</h3>
          </div>

          <div class="recipeBox">
            <RecipePreview recipe={mac_object} />
            <div class="middle_recipe">
              <RecipePreview recipe={shrimp_object} />
            </div>
            <RecipePreview recipe={blt_object} />
          </div>

      </header>
  );
}

