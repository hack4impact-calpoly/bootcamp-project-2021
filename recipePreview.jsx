import React from 'react';
import './style.css'


export default function RecipePreview({name, desc, image, route}) {
  return (
    <div>
      <div className = "LinkedRecipes"> 
         <a id = "tab" href = {route}>
            {name}
         </a>
      </div>
      <div className = "Recipes">
         <div className = "imageContainer">
            <img src={image} alt="img" width = "300px"/>
         </div>
         <div className = "RescDescContainer">
            <p id = "recipedesc">{desc}</p>
         </div>
      </div>
      <br/>
   </div>
  );
}

{/* <div class = "LinkedRecipes">
            
            <a id = "tab" href = "pizza.html">Combo 'za</a>
         </div>
   
         <div class = "Recipes">
            <div style="display:inline-block;vertical-align:top;">
               <img id = "tab" src = "https://static.toiimg.com/thumb/56933159.cms?width=1200&height=900" width = 300px>
            </div>
            <div style="display:inline-block;">
               <p id = "recipedesc">My go to recipe for any Friday night at home either alone or with family and friends. This is a pizza dish that is sure to impress.</p>
               
            </div>
         </div> */}