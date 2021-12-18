export function getRecipes() {
  return recipeData;
}

export function getRecipe(name) {
  return recipeData.find(recipe => recipe.recipeName === name);
}

const recipeData = [
  {
    recipeName: "melon pan",
    recipeDescription:
      "melon pan is a sweet Japanese bread with a cookie crust on top. its name comes from its resemblance to a melon. it has a soft inside and a crunchy outside, and is also just really cute!",
    recipeImage: "melonpan.jpeg",
    ingredientList: [
      "300 g baker's flour",
      "40 g butter chopped",
      "25 g sugar",
      "4 g salt",
      "160 ml milk",
      "1 extra large egg",
      "3 g dry yeast",
      "240 g plain flour",
      "1 tsp baking powder",
      "80 g butter",
      "80 g sugar",
      "1 extra large egg",
      "1/2 tsp vanilla essence",
      "granule sugar for sprinkle"
    ],
    instructionList: [
      "Make the cookie dough by placing the butter and sugar in a large bowl and beat until light and creamy.",
      "Add the egg and vanilla essence and mix until well combined.",
      "Fold through the flour and baking powder.",
      "Divide the cookie dough into 8 small balls and set aside in the fridge.",
      "Combine egg, yeast, milk and sugar in a small bowl or jug.",
      "Combine the flour and salt in a large bowl.",
      "Make a well in the centre of the flour and add the liquid mixture and stir to form a soft dough.",
      "Transfer to an electric mixer fitted with a dough hook and knead for about 10 min or until smooth and elastic.",
      "With the mixer motor running, add the chopped butter until the butter is combined and a smooth and silky dough forms (about a further 10 minutes).",
      "Place the dough in a greased bowl and cover and set aside in a warm place to prove for 1 hour or until doubled in size.",
      "Divide the bread dough into 8 equal sized balls and knead on a lightly floured surface until smooth.",
      "Roll out the refrigerated cookie dough on cling wrap to 5mm thick.",
      "Once it is rolled place one bread dough on top of one cookie dough ball and wrap together using cling wrap.",
      "Take the cling wrap off and score the cookie dough surface diagonally and sprinkle the granule sugar.",
      "Repeat for all 8 bread rolls.",
      "Place them on a cooking paper lined oven tray and cover with clean damp cloth and set aside for about 40 min or until doubled in size.",
      "Preheat oven to 356 f and bake for 15 minutes."
    ]
  },
  {
    recipeName: "tiramisu",
    recipeDescription:
      "tiramisu is a coffee flavored Italian dessert that has a soft texture! it goes well with tea. i love to get tiramisu because I like the slightly bitter taste as compared to an overwhelmingly sweet dessert.",
    recipeImage: "./tiramisu.jpeg",
    ingredientList: [
      "4 large egg yolks",
      "1/2 cups of granulated sugar, divided",
      "3/4 cup heavy cream",
      "1 cup mascarpone",
      "1 3/4 cups good espresso or very strong coffee",
      "2 tablespoons rum or cognac",
      "2 tablespoons unsweetened cocoa powder",
      "about 24 ladyfingers",
      "1 to 2 ounces bittersweet chocolate, for shaving (optional)"
    ],
    instructionList: [
      "Using an electric mixer in a medium bowl, whip together egg yolks and 1/4 cup sugar until very pale yellow and about tripled in volume. A slight ribbon should fall from the beaters (or whisk attachment) when lifted from the bowl. Transfer mixture to a large bowl, wiping out the medium bowl used to whip the yolks and set aside.",
      "In the medium bowl, whip cream and remaining 1/4 cup sugar until it creates soft-medium peaks. Add mascarpone and continue to whip until it creates a soft, spreadable mixture with medium peaks. Gently fold the mascarpone mixture into the sweetened egg yolks until combined.",
      "Combine espresso and rum in a shallow bowl and set aside.",
      "Using a sifter, dust the bottom of a 2-quart baking dish (an 8x8-inch dish, or a 9-inch round cake pan would also work here) with 1 tablespoon cocoa powder.",
      "Working one at a time, quickly dip each ladyfinger into the espresso mixture -- they are quite porous and will fall apart if left in the liquid too long -- and place them rounded side up at the bottom of the baking dish. Repeat, using half the ladyfingers, until you’ve got an even layer, breaking the ladyfingers in half as needed to fill in any obvious gaps (a little space in between is O.K.). Spread half the mascarpone mixture onto the ladyfingers in one even layer. Repeat with remaining espresso-dipped ladyfingers and mascarpone mixture.",
      "Dust top layer with remaining tablespoon of cocoa powder. Top with shaved or finely grated chocolate, if desired.",
      "Cover with plastic wrap and let chill in the refrigerator for at least 4 hours (if you can wait 24 hours, all the better) before slicing or scooping to serve."
    ]
  },
  {
    recipeName: "sesame mochi bread",
    recipeDescription:
      "sesame mochi bread is a Korean bread with a mild taste and chewy texture. they are sometimes called dino eggs because of their speckled appearance. these are my favorite snack breads when I go to a Korean bakery :)",
    recipeImage: "./sesamebread.jpeg",
    ingredientList: [
      "2/3 cup milk",
      "2 Tablespoon unsalted butter",
      "3 Tablespoon granulated sugar",
      "1/4 teaspoon Kosher salt",
      "1/2 teaspoon vanilla extract",
      "35 grams all-purpose flour",
      "130 grams tapioca flour",
      "1 large egg, beaten",
      "1 1/2 Tablespoon black sesame seed, toasted"
    ],
    instructionList: [
      "Preheat the oven to 350°F and prepare a sheet pan lined with parchment paper.",
      "In a saucepan, combine the milk, butter, sugar, and salt. Bring it to a simmer over medium heat while stirring occasionally.",
      "Once the mixture comes to a simmer, take it off the heat and stir in the vanilla. Immediately sift in the 35 grams of all-purpose flour and whisk the mixture until it thickens to a baby food consistency and becomes as smooth as possible. Some small lumps are okay.",
      "After the all-purpose flour have been incorporated, add the tapioca flour and fold everything together until no more dry flour is visible. The dough will become quite stiff and thick. Let the dough cool until it's warm to the touch.",
      "Once the dough has cooled, add the beaten egg in 3 additions and incorporate the egg completely with a spatula before adding the next. After each addition of eggs, check the consistency of the dough. A proper dough will flow slowly like thick batter, looks slightly translucent, and forms a triangular shape when it breaks off.",
      "Once the dough has cooled, add the beaten egg in 3 additions and incorporate the egg completely with a spatula before adding the next. After each addition of eggs, check the consistency of the dough. A proper dough will flow slowly like thick batter, looks slightly translucent, and forms a triangular shape when it breaks off.",
      "Pipe the dough out into a 1½ inch wide dome, about 1 inch in height. Keep each piping about 1 inch apart to accommodate for some puffing up when baking. Dip your finger into some cold water and dab the tips of each dough dome to round it off.",
      "Bake the mochi breads for about 25 to 30 minutes or until it turns slightly golden brown. Let cool for a few minutes and enjoy!"
    ]
  }
];

export default recipeData;
