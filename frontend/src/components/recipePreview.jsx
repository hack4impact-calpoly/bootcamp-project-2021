import './recipe.css'
import { Link } from "react-router-dom";


export default function RecipePreview ({name,img,desc,link}) {
    return (
        <div className="outline">
            <h3 className="heading">
                <Link to={link}>{name}</Link>
            </h3>
            <div className="preview"> 
                <img className="food-img" width="200px" height="200px" src={img} alt={name}/>  
                <p className="food-desc">{desc}</p>
            </div>
            
            
        </div>
    );
}