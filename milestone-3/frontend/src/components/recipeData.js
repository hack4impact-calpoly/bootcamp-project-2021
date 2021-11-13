import macImg from "./mac.jpg";
import bltImg from "./blt.jpg";
import shrimpImg from "./shrimp_scampi.jpg";


export let mac_object = {
    recipeName: "Mac and Cheese",
    recipeDescription: "Here is my take on a American Classic. It is the perfect dish to\n            go with any entre.Heck, it can even serve as its own entre.\n            There are many different ways to make Mac and Cheese.\n            I like the make it the traditional way, which is what\n            my grandmother taught me. This recipe has been passed\n            down for generations in my family ever since the Civil War.",
    recipeImage: macImg,
    ingrediantList: [
              "1 (8 ounce) box elbow macaroni",
              "1/4 cup butter",
              "1/4 cup all-purpose flour",
              "1/2 teaspoon salt",
              "gound black pepper to taste",
              "2 cups milk",
              "2 cups shredded Cheddar cheese"
    ],
    instructionList: [
              "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked trhough but form to the bite, 8 minues, Drain.",
              "Melt butter in a saucepan over medium heat; stir in flour, salt, and pepper untilsmooth, about 5 minutes. Slowly pour milk into butter-flour mixture whilecontinuously stirring until mixture is smooth and bubbling, about 5 minutes. Add\n            Cheddar cheese to milk mixture and stir until cheese is melted, 2 to 4 minutes.",
              "Fold macaroni into cheese sauce until coated."
    ]
}

export let blt_object =  {
    recipeName: "BLT",
    recipeDescription: "Speaking of an American classic. The BLT is the staple\n            sandwhich of the USA. The L in BLT aactually stands for\n            Liberty. I do not like to do anything fancy with this\n            recipe. It is perfect the way it is.",
    recipeImage: bltImg,
    ingrediantList: [
              "4 slices bacon ",
              "2 leaves lettuce ",
              "2 slices tomato ",
              "2 slices bread, toasted ",
              "1 tablespoon mayonnaise "
    ],
    instructionList: [
              "Cook the bacon in a large, deep skillet over medium-high heat until evenly browned,about 10 minutes. Drain the bacon slices on a paper towel-lined plate.",
              "Arrange the cooked bacon, lettuce, and tomato slices on one slice of bread. Spreadone side of remaining bread slice with the mayonnaise. Bring the two pieces togetherto make a sandwich."
    ]
}

export let shrimp_object =  {
    recipeName: "Shrimp Scampi",
    recipeDescription: "You may be asking yourself, what is Shrimp Scampi?\n            This is a common question, because the name can be \n            confusing and scary to new cooks. The word \"scampi\"\n            is actually spanish for pasta. So the name of our dish\n            translates to \"shrimp pasta\" how fun!",
    recipeImage: shrimpImg,
    ingrediantList: [
              "10 large shrimp, heads off and unpeeled ",
              "1 tablespoon olive oil ",
              "3 cloves garlic, minced ",
              "4 tablespoons butter",
              "½ teaspoon dried oregano"
    ],
    instructionList: [
              "With a sharp knife, cut shrimp in half so that the meat is exposed in the shell.",
              "",
              "In a small saucepan, heat olive oil and lightly fry the garlic until just softened. Addbutter and Oregano. Heat until butter has melted.",
              "Preheat an outdoor grill for medium heat and lightly oil grate.",
              "Lay shrimp out on a tray and brush generously with the butter mixture. Grill shrimp until lightly golden."
    ]
}

// const recipes = [
// 	{mac_object},
// 	{blt_object},
// 	{shrimp_object} 
// ];

// export default recipes;