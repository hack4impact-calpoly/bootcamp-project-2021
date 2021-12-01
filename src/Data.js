// RECIPE PREVIEW DATA //

const recipes = [
  {
    recipeName: "Lemon Garlic Salmon",
    description:
      "This Lemon Garlic Salmon recipe is that recipe we all need in our lives. Simple, quick, and so easy to make. Made with a handful of ingredients and ready in just 30 minutes.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/09/GARLIC-LEMON-SALMON_-6.jpg",
    route: "/salmon",
  },
  {
    recipeName: "Grilled Beef Shawarma Bowl",
    description:
      "Bring Middle East street food to your table with this easy Grilled Beef Shawarma recipe! In just 30 minutes.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/12/Grilled-beef-shawarma-7.jpg",
    route: "/beef",
  },
  {
    recipeName: "Blueberry Muffins",
    description:
      "These Healthy blueberry muffins are so moist, fluffy, and bursting with flavor. A delicious healthy breakfast or dessert option that everyone can enjoy. Simple, easy to make, and ready in 30 minutes.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2021/08/Healthy-blueberry-muffins-9.jpg",
    route: "/muffins",
  },
];

// RECIPE PAGE DATA //

const pageData = [
  {
    recipeName: "Lemon Garlic Salmon",
    description:
      "If you love salmon, you will love this easy and delicious baked salmon recipe. Very easy to make with just a few ingredients you most likely have handy. It is gluten-free, dairy-free, low carb, and keto-friendly. The marinade is made of lemon juice, lemon zest, freshly grated garlic, olive oil, salt, and pepper. This lemon garlic salmon will work well for a quick weeknight dinner or a salad topper for added protein. Also, if you like to meal prep your meals, serve this easy baked salmon with some sweet potatoes and a side of veggies.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/09/GARLIC-LEMON-SALMON_-6.jpg",
    imagePrep:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/09/GARLIC-LEMON-SALMON_.jpg",
    ingredientList: [
      "1.25 pounds salmon filets",
      "3 medium lemons, 2 squeezed & 1 sliced",
      "2 tsp lemon zest",
      "3-4 garlic cloves, minced",
      "2 tbsp. extra virgin olive oil",
      "1 tsp. kosher salt",
      "1/2 tsp. freshly ground black pepper – plus additional to taste",
      "Finely chopped fresh parsley",
    ],
    instructionList: [
      "First, preheat the oven: Preheat the oven to 400°F and grease a baking  dish that can fit all pieces of salmon with some oil.",
      "Next, make the marinade: Whisk lemon juice, garlic, oil, salt, and pepper into a bowl.",
      "Marinade the salmon: Place the salmon fillets into a Ziploc bag and pour over the lemon marinade. Seal the bag and move the pieces of salmon to get them evenly coated with the marinade. Let marinate for at least 30 minutes.",
      "Then, prepare the salmon: Now layer the lemon slices into your prepared dish and arrange the salmon on top.",
      "Bake the salmon: Bake the salmon for about 12-15 minutes until cooked through. Depending on the thickness of your salmon.",
      "Once done, lay a few slices of lemon on top of your cooked salmon and switch the oven to the broil setting. Broil for 3 minutes until the top is nicely golden and crisp.",
      "Finally, remove from the oven, garnish with parsley and serve.",
    ],
    route: "/salmon",
  },
  {
    recipeName: "Grilled Beef Shawarma Bowl",
    description:
      "Beef shawarma is one of my favorite go-to Middle Eastern recipes that’s usually on every middle eastern restaurant menu and famous street food around the world. It is one of those recipes that can easily be recreated and enjoyed at home too. Make this beef shawarma into a bowl with salad, rice, or a sandwich. The result will be a juicy, tangy beef over rice with some of your favorite veggies of choice.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/12/Grilled-beef-shawarma-7.jpg",
    imagePrep:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/12/Grilled-beef-shawarma-.jpg",
    ingredientList: [
      "Ground cumin",
      "Ground coriander",
      "Smoked paprika",
      "Ground tumeric",
      "Cayenne pepper",
      "Ground cinnamon",
      "Ground cloves",
      "Garlic powder",
      "Onion powder",
      "Kosher salt",
      "Ground pepper",
      "Beefsteak, or your favorite cut",
      "Olive oil",
    ],
    instructionList: [
      "Combine all the spices in a small bowl and mix well.",
      "Place the beef steak in a shallow dish and sprinkle with the seasoning mix. Drizzle with 1 tbsp olive oil. Rub it evenly on all sides of the meat.",
      "Cover and allow it to sit for 15 to 30 minutes at room temp.",
      "Heat an outdoor grill or grill pan over medium-high, and brush with some oil.",
      "Add marinated steak and grill for 2-4 minutes per side, or until it’s done to your liking.",
      "Allow the steak to sit for a bit before slicing it.",
      "Add a base of cooked basmati rice to each bowl, and top with chopped veggies, pickles, and sliced shawarma steak. Garnish with freshly chopped parsley and serve with yogurt and pita bread.",
    ],
    route: "/beef",
  },
  {
    recipeName: "Blueberry Muffins",
    description:
      "These blueberry oatmeal muffins are packed with flavor, loaded with fresh blueberries, and made with oat flour, maple syrup, and no butter. They come out fluffy and so tasty. Hard to believe that they are made with no refined sugar, no butter, and no flour. Also, the flour used is simply oat flour which you can make on your own using rolled oats! You will love these healthy blueberry oatmeal muffins which can be enjoyed as a quick on-the-go breakfast, a snack, or a healthy dessert option.",
    imageSrc:
      "https://healthyfitnessmeals.com/wp-content/uploads/2021/08/Healthy-blueberry-muffins-9.jpg",
    imagePrep:
      "https://healthyfitnessmeals.com/wp-content/uploads/2021/08/Healthy-blueberry-muffins.jpg",
    ingredientList: [
      "Ground cumin",
      "Ground coriander",
      "Smoked paprika",
      "Ground tumeric",
      "Cayenne pepper",
      "Ground cinnamon",
      "Ground cloves",
      "Garlic powder",
      "Onion powder",
      "Kosher salt",
      "Ground pepper",
      "Beefsteak, or your favorite cut",
      "Olive oil",
    ],
    instructionList: [
      "Preheat the oven to 375 F and line a muffin tin with 12 cup liners.",
      "To a large bowl, add the flour, rolled oats, baking powder, ground  cinnamon, and salt. Mix well to combine.",
      "In a separate bowl, whisk in the eggs, milk, maple syrup, coconut oil,  and vanilla extract.",
      "Next, add the egg and milk mixture to the oat flour mixture. Whisk to  combine.",
      "Fold in the fresh blueberries and divide the batter among your  prepared muffin cups.",
      "Bake for 15-18 minutes, or until a toothpick comes out clean.",
      "Let the muffins cool for at least 5 minutes before serving.",
    ],
    route: "/muffins",
  },
];

export default recipes;
