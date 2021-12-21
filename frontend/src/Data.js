import { useState, useEffect } from "react";

function Data() {
  let [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      let data = await fetch("http://localhost:3001/api/recipe");
      setRecipes(await data.json());
    };
    getRecipes();
  }, []);
}

export default Data;
