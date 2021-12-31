import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import Template from './components/template';
import NavBar from './components/navbar';
import recipes from './recipeData';
import AboutMe from './aboutme';

function App() {
    /*
    let [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const receiveRecipes = () => {
            fetch('http://localhost:3001/api/recipes')
            .then(res => res.json())
            .then(jsondata => setRecipes(jsondata))
        }
        receiveRecipes()
    })
    */
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/" element={<Home />} />
                {recipes.map(recipe =>
                    <Route exact path={recipe.link} element={
                        <div key={recipe.key}>
                            <Template
                                description={recipe.description}
                                name={recipe.name}
                                image={recipe.image}
                                ingredients={recipe.ingredientlist}
                                steps={recipe.steps}
                            />
                        </div>
                    }
                    />
                )
                }
            </Routes>
        </Router>
    );
}

export default App;
