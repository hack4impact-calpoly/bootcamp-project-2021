import '../src/images/strawberry-banana.jpg';
import '../src/images/raspberry-coconut.jpg';
import '../src/images/blackberry-lime.jpg';
let strawberryBanana = '../src/images/strawberry-banana.jpg';
let raspberryCoconut = '../src/images/raspberry-coconut.jpg';
let blackberryLime = '../src/images/blackberry-lime.jpg';

const recipes = [
	{
        "recipeName":"Strawberry Banana Smoothie",
        "recipeLink":"strawberry-banana",
        "recipeSource":"Love & Lemons",
        "recipeDescription":"This refreshing strawberry banana smoothie recipe is the perfect healthy breakfast! It's lightly sweet, a little creamy, and totally satisfying. ",
        "recipeImage":{strawberryBanana},
        "ingredientList":["1 1/2 cup raspberries","1 cup strawberries","1/2 frozen banana","1 cup almond milk, or oat milk","1 tablespoon honey or maple syrup","1 1/2 cups ice","Handful of mint or basil, optional"],"instructionList": [" Combine the raspberries, strawberries, banana, almond milk, honey or maple, basil, if using, and ice in a blender. Blend until smooth. "," Taste. If it's too tart for you, add another 1/2 cup or so of almond milk and another tablespoon of honey or maple. "]
    },
	{
        "recipeName":"Raspberry Coconut Smoothie",
        "recipeLink":"raspberry-coconut",
        "recipeSource":"Love & Lemons",
        "recipeDescription":"This easy smoothie recipe only has five ingredients and will transport you to a tropical island.",
        "recipeImage":{raspberryCoconut},
        "ingredientList":["1 cup Almond Breeze Unsweetened Almond Milk","1 cup raspberries fresh or frozen","1/2 medium banana","1/2 cup spinach","2 tablespoons coconut for garnish"],
        "instructionList":[" Place the milk, raspberries, banana, and spinach in the blender and blend until smooth. "," Pour into a glass and garnish with coconut. Serve immediately. "," Note-if I use fresh raspberries I like to throw in a few ice cubes to get a thicker/colder smoothie."]
    },
    {
        "recipeName":"Blackberry Lime Smoothie",
        "recipeLink":"blackberry-lime",
        "recipeSource":"Two Peas & Their Pod",
        "recipeDescription":"This refreshing blackberry smoothie has a kick of lime. It is great for breakfast, snack time, or dessert!","recipeImage":{blackberryLime},
        "ingredientList":["1 cup milk or almond milk","6 ounces Yoplait Original French Vanilla yogurt","1/2 teaspoon lime zest","Juice of one large lime","1 cup fresh spinach","1 cup frozen blackberries","1 frozen banana"],
        "instructionList":[" Add milk, yogurt, lime zest, lime juice, spinach, blackberries, and banana to the blender. "," Place the lid on and blend until smooth. Pour into glasses and serve immediately. "," Note-I always keep unpeeled bananas in the freezer for smoothies. If you don't have a frozen banana, you can use a regular banana and add a few ice cubes. "]
    }
];

export default recipes; // This will allow us to access this data anywhere!
