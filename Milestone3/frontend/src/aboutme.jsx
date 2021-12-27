import logo from './logo.svg';
import "./aboutme.css"

function AboutMe() {
    return (
        <div>
            <p class="title">Michelle's Cookbook!</p>
            <p class="MealTitle"> About Me </p>
            <img src="file:///Users/michelletan/Desktop/Screen%20Shot%202021-10-24%20at%208.18.56%20PM.png" width= "300"/>
            <br />
            <p class="GHInfo">Here's a picture of me and my best friends!</p>
            <p class="MealTitle"> Some Qualities of Mine </p>
            <div>
                <ul>
                    <li class="GHInfo">I love listening to music</li>
                    <li class="GHInfo">Food makes me happy</li>
                    <li class="GHInfo">Milk drinkers are the best people on Earth</li>
                    <li class="GHInfo">I really like Jack-in-the-Box</li>
                    <li class="GHInfo">Marinara Pasta is superior to Mac N Cheese</li>
                    <li class="GHInfo">I would like to be Gordon Ramsey by the time I am 40</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe;