import avocadoImg from '..\\src\\images\\Avocado-Toast-with-Egg.jpg'
import oatMealImg from '..\\src\\images\\Blueberry-Banana-Oatmeal.jpg'
import burritoImg from '..\\src\\images\\Breakfast-Burrito-Recipe.jpg'

const recipeData = [
    {
        "recipeTitle": "Eggs On Avocado Toast",
        "description": " This tasty breakfast features the superfood, avocadoes, beneath some delicious eggs!",
        "image": avocadoImg,
        "link": "eggs-on-avocado-toast",
        "ingredientList": [
          "1 Avocado",
          "2 Eggs",
          "2 slices of bread of your choice",
          "Butter/cooking oil",
          "Salt and Pepper"
        ],
        "stepsList": [
          "Toast bread in toaster, we're going to aim for a nice golden brown to contrast the avocado we'll spread on top.",
          "In a small/medium pan over medium heat, melt butter (or heat oil).",
          "Crack two eggs and cook for 3 minutes, or until whites are set. Flip and cook other side for 1 minute.",
          "Bread should be done toasting, spread avocado onto toast and season with salt and pepper.",
          "Lay cooked eggs on avocado toast.",
          "Voila, enjoy!"
        ]
    },
    {
        "recipeTitle": "One Minute Oats",
        "description": "Perhaps the most convenient breakfast of the bunch, 1 minute oats!",
        "image": oatMealImg,
        "link": "oatmeal",
        "ingredientList": [
          "Oats",
          "Milk",
          "Peanut butter",
          "1 Banana",
          "Blue Berries",
          "Cinnamon"
        ],
        "stepsList": [
          "Pour oats into bowl with milk.",
          "Heat up oats and milk in microwave for 1 minute.",
          "Scoop 1 tbsp of peanut butter into bowl.",
          "Add desired ratio of blue berries and chopped bananas into oats.",
          "Season with cinnamon while mixing oats and berries.",
          "Voila, enjoy!"
        ]
    },
    {
        "recipeTitle": "Breakfast Burrito",
        "description": "An easy on the go breakfast to take with you to class or on the road!",
        "image": burritoImg,
        "link": "breakfast-burrito",
        "ingredientList": [
          "2 Eggs",
          "Chopped onions",
          "1 breakfast sausage",
          "Spinach",
          "Butter/cooking oil",
          "1 Tortilla",
          "Salt and Pepper"
        ],
        "stepsList": [
          "In a small/medium pan over medium heat, melt butter (or heat oil).",
          "Add chopped onions and chopped breakfast sausage to pan, cooking them for 5-7 minutes, or until they begin to brown",
          "Crack 2 eggs into separate bowl, scrambling and seasoning with salt and pepper",
          "Once onions and sausage are browned, add scrambled eggs.",
          "Cook scrambled eggs for 2-3 minutes and add spinach. Continue scrambling until spinach is cooked down.",
          "Add scramble onto tortilla and roll!",
          "Voila, enjoy!"
        ]
    }
]

export default recipeData;