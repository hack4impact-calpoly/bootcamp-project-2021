import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './home';
import Template from './template';
import recipes from './recipeData';
import AboutMe from './aboutme';

function App() {
    return (
        <Router>
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
