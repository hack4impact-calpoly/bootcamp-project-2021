import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./homepage.jsx";
import PizzaPage from './pizza';
import SalmonPage from './salmon';
import PiePage from './pie';
import AboutMe from './about';
import {
  useEffect,
  useState,
} from "react"

export default function App() {
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      let res = await fetch('http://localhost:3001/api/recipe', {mode: "no-cors"})
      setRecipes(await res.json())
      // let res = await fetch('http://localhost:3001/api/recipe')
      // fetch('http://localhost:3001/api/recipe')
      // .then(res => res.json())
      // .then(jsondata => setRecipes(jsondata))
    }
    loadRecipes();
  }, [])
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/about" element={<About/>} >
    //         {/* <About /> */}
    //       </Route>
    //       <Route path="/salmon" element={<Salmon/>} >
    //         {/* <Users /> */}
    //       </Route>
    //       <Route path="/pizza" element={<Pizza/>} />
    //       <Route path="/pie" element={<Pie/>} />
    //       <Route path="/" element={
    //         <Home
    //           recipes={recipes}
    //         />} >
    //         {/* <Home /> */}
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      {recipes ? (
      recipes.map(recipe => 
        <p> {recipe.first_name} {recipe.last_name} </p>
      )
    )
    : (
      <p> Loading ...</p>
    )
  }
</div>
  );
}

function Home(props) {
  (props.recipes)? (console.log(props.recipes)) : console.log("balls")
  return <HomePage />;
}

function About() {
  return <AboutMe />;
}

function Salmon() {
  return (
  <SalmonPage 
    index={0}
  />
  );
}

function Pizza() {
  return (
    <PizzaPage 
      index={1}
    />
    );
}

function Pie() {
  return (
    <PiePage 
      index={2}
    />
    );
}
