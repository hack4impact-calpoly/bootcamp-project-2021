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
  useState,
  useEffect
} from "react";

export default function App() {
  let [recipes, setRecipes] = useState([])

  useEffect(() => {
    const loadRecipes = async () => {
      let res = await fetch('http://localhost:3000/api/recipe'
      )
      setRecipes(await res.json())
    }
    loadRecipes();
  }, [])

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. FAke  */}
        <Routes>
          <Route path="/about" element={<About/>} >
            {/* <About /> */}
          </Route>
          <Route path="/salmon" element={<Salmon/>} />
          <Route path="/pizza" element={<Pizza/>} />
          <Route path="/pie" element={<Pie/>} />
          <Route path="/" element={
            <Home
              recipes={recipes}
            />} >
            {/* <Home /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home(props) {
  props.recipes? (console.log(props.recipes)) : (console.log("Loooooaad"))
  return <HomePage />
}

function About() {
  return <AboutMe />;
}

function Salmon() {
  return (
  <SalmonPage 
    index={0}
    // recipes = {recipes}
  />
  );
}

function Pizza() {
  return (
    <PizzaPage 
      index={1}
      // recipes = {recipes}
    />
    );
}

function Pie() {
  return (
    <PiePage 
      index={2}
      // recipes = {recipes}
    />
    );
}
