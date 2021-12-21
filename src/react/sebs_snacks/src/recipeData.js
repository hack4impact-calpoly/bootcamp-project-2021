import CarbonaraPic from "./images/carbonara.jpg";
import SpaghettiPic from "./images/spaghetti.jpg";
import PestopastaPic from "./images/pestoPasta.jpg";

/* --- Array of Objects holding data for each recipe page----

Recipe Object:
{
    name - reference ID by name
    title - Recipe page title displayed on page
    desc - recipe description
    ingredientList - list of ingredients
    instructionList - list of instructions (method of preparation)
    recipePic - Link path to the recipe image
    alt - text displayed in case image is unable to load
}
*/
let recipeData = [ 
    {
        "name": "carbonara",
        "title": "Carbonara: ",
        "desc": "Carbonara is an Italian pasta dish from Romemade with eggs, hard cheese, cured pork, and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century. The cheese is usually Pecorino Romano, Parmigiano-Reggiano, or a combination of the two. Spaghetti pasta is the most common pasta, but fettuccine, rigatoni, linguine, or bucatini are also used. Normally guanciale or pancetta are used for the meat component,but lardons of smoked bacon are a common substitute outside Italy.",
        "ingredientList": [
            "100g pancetta", 
            "50g pecorino cheese", 
            "50g parmesan", 
            "3 large eggs", 
            "350g spaghetti", 
            "2 plump garlic cloves, peeled and left whole", 
            "50g unsalted butter", 
            "Sea salt and freshly ground black pepper"
        ],
        "instructionList": [
                    "Put a large saucepan of water on to boil", 
                    "Finely chop the 100g pancetta, having first removed any rind. Finely grate 50g pecorino cheese and 50g parmesan and mix them together.", 
                    "Beat the 3 large eggs in a medium bowl and season with a little freshly grated black pepper. Set everything aside.",
                    "Add 1 tsp salt to the boiling water, add 350g spaghetti and when the water comes back to the boil, cook at a constant simmer, covered, for 10 minutes or until al dente (just cooked).",
                    "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.", 
                    "While the spaghetti is cooking, fry the pancetta with the garlic. Drop 50g unsalted butter into a large frying pan or wok and, as soon as the butter has melted, tip in the pancetta and garlic.",
                    "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp. The garlic has now imparted its flavour, so take it out with a slotted spoon and discard.",
                    "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta. Don’t worry if a little water drops in the pan as well (you want this to happen) and don’t throw the pasta water away yet.",
                    "Mix most of the cheese in with the eggs, keeping a small handful back for sprinkling over later.",
                    "Take the pan of spaghetti and pancetta off the heat. Now quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
                    "Add extra pasta cooking water to keep it saucy (several tablespoons should do it). You don’t want it wet, just moist. Season with a little salt, if needed.",
                    "Use a long-pronged fork to twist the pasta on to the serving plate or bowl. Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper. If the dish does get a little dry before serving, splash in some more hot pasta water and the glossy sauciness will be revived."
                ],
        "recipePic": CarbonaraPic,
        "alt": "Carbonara Picture"
    }
,
    {
        "name": "spaghetti",
        "title": "Spaghetti Bolognese: ",
        "desc": "Spaghetti bolognese is an Italian pasta dish from Bologna. It consists of spaghetti (long strings of pasta) with an Italian ragù (meat sauce) made with minced beef, pancetta and tomatoes, served with Parmesan cheese. Spaghetti bolognese is one of the most popular pasta dishes eaten outside of Italy.",
        "ingredientList": [
            "1 tbsp olive oil", 
            "4 rashers smoked streaky bacon, finely chopped", 
            "2 medium onions, finely chopped", 
            "2 carrots, trimmed and finely chopped", 
            "2 celery sticks, finely chopped", 
            "2 plump garlic cloves, peeled and left whole", 
            "2 garlic cloves finely chopped", 
            "2-3 sprigs rosemary leaves picked and finely chopped",
            "500g beef mince",
            "75g parmesan greated, plus extra to serve",
            "400g spaghetti",
            "Optional: lightly toasted bread (or garlic bread)"
        ],
        "instructionList": [
                    "STEP 1: Put a large saucepan on a medium heat and add 1 tbsp olive oil.", 
                    "STEP 2: Add 4 finely chopped bacon rashers and fry for 10 mins until golden and crisp.", 
                    "STEP 3: Reduce the heat and add the 2 onions, 2 carrots, 2 celery sticks, 2 garlic cloves and the leaves from 2-3 sprigs rosemary, all finely chopped, then fry for 10 mins. Stir the veg often until it softens.",
                    "STEP 4: Increase the heat to medium-high, add 500g beef mince and cook stirring for 3-4 mins until the meat is browned all over.",
                    "STEP 5: Add 2 tins plum tomatoes, the finely chopped leaves from ¾ small pack basil, 1 tsp dried oregano, 2 bay leaves, 2 tbsp tomato purée, 1 beef stock cube, 1 deseeded and finely chopped red chilli (if using), 125ml red wine and 6 halved cherry tomatoes. Stir with a wooden spoon, breaking up the plum tomatoes.", 
                    "STEP 6: Bring to the boil, reduce to a gentle simmer and cover with a lid. Cook for 1 hr 15 mins stirring occasionally, until you have a rich, thick sauce.",
                    "STEP 7: Add the 75g grated parmesan, check the seasoning and stir.",
                    "STEP 8: When the bolognese is nearly finished, cook 400g spaghetti following the pack instructions.",
                    "STEP 9: Drain the spaghetti and either stir into the bolognese sauce, or serve the sauce on top. Serve with more grated parmesan, the remaining basil leaves and crusty bread, if you like."
                ],
        "recipePic": SpaghettiPic,
        "alt": "Spaghetti Picture"
    }
,
    {
        "name": "pestoPasta",
        "title": "Pesto Pasta: ",
        "desc": "Pesto Pasta or pesto alla genovese is a sauce originating in Genoa, the capital city of Liguria, Italy. It traditionally consists of crushed garlic, European pine nuts, coarse salt, basil leaves, and hard cheese such as Parmigiano-Reggiano (also known as Parmesan cheese) or Pecorino Sardo (cheese made from sheep's milk), all blended with olive oil.",
        "ingredientList": [
            "Kroger Spinach", 
            "4 rashers smoked streaky bacon, finely chopped", 
            "Simple Truth Organic Basil", 
            "Pistachios", 
            "Garlic",
            "Lemon Juice",
            "Parmesan cheese",
            "Salt and pepper",
            "Olive oil"
        ],
        "instructionList": [
                    "bring a large pot of water to a rolling boil. Generously salt the water and cook the pasta, according to the package instructions. I used rigatoni, but you can use your favorite pasta. Other good pasta options are: farfalle, spaghetti, penne, orecchiette, linguine, fussili, or even tortellini!", 
                    "While the pasta is cooking, make the spinach pistachio pesto. In a food processor, add all of the pesto ingredients, except for the olive oil. Put the lid on and start processing, with the machine running, slowly drizzle in the olive oil. Continue processing until the mixture is well blended and smooth, but still has some texture, pausing to scrape down the sides as necessary. Taste and adjust seasonings, if necessary. If you want a thinner pesto, you can add a little extra olive oil.", 
                    "Reserve 1 cup of the pasta water before draining the pasta. The pasta water contains starches that will help the pesto stick to the pasta and make the pesto sauce extra creamy.",
                    "Drain the pasta. Put the hot pasta in a large bowl. Add the pesto (start with half of the recipe) and ¼ cup of the pasta water to the pasta and stir until pasta is well coated. Add additional pesto and pasta water, if necessary, until desired consistency and flavor is reached.",
                    "Season with salt and pepper, to taste. Garnish with crushed red pepper flakes and parmesan cheese, if desired. Serve warm."
                ],
        "recipePic": PestopastaPic,
        "alt": "Pesto Pasta Picture"
    }
]

export function getRecipeData() {
    return recipeData; //Allows to access the data anywhere
}

export function getRecipe(name) { //Each recipe has a unique name (an ID of sorts), returns the recipe object with the matching name
    return recipeData.find(dish => dish.name === name.recipeID); //Gets the "recipeID" URL component and matches it to the corresponding recipe by name"
}

export function convertToJSON() {
    console.log(JSON.stringify(recipeData));
    return JSON.stringify(recipeData);
}