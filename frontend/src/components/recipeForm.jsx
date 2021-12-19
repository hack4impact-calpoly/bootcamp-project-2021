import React from "react";
import { useForm } from "react-hook-form";

export default function RecipeForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newPut = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        dishName: data.dishName,
        shortDescription: data.shortDescription,
        description: data.description,
        photo: data.photo,
        ingredients: ["filling", "dough"],
        instructions: ["buy 6 for 5 euros", "eat them all"],
      }),
    };
    fetch("http://localhost:3001/api/recipe", newPut)
      .then((res) => res.json())
      .then((response) => console.log(response));
  };

  return (
    <div>
      <h2>Add a new Recipe!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("dishName")} placeholder="Dish Name"/>
        <input {...register("shortDescription")} placeholder="Short Description"/>
        <input {...register("description")} placeholder="Longer Description"/>
        <input {...register("photo")} placeholder="Link to a Photo"/>
        <input type="submit" />
      </form>
    </div>
  );
}
