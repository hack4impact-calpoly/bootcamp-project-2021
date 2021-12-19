import './App.css';
import Navbar from './components/navbar';


function aboutme() {
  return( 
    <div className ="App">
      <body>
        <header class = "head">
            <h1 class = "title"> About the Primary Chef </h1>
            <Navbar />
        </header>
        <br />
        <img src = "C:\Users\nicsl\Desktop\HACK4IMPACT\bootcamp-project-2021\my_meal.jpg" alt= "Picture of my dinner" width= "500px" class= "meal" ></img>
        <div id = "qualifications">
            <h2>
                My qualifications to cook!
            </h2>
        </div>
        <div id = "quallist">
            <ul>
                <li> I cook pasta and italian sausage at least twice a week </li>
                <li> Dinosaur Chicken Nuggets are a popular food item of mine </li>
                <li> I REALLY enjoy eating </li>
                <li> Prepared everything on my recipes page for a meal all in two hours </li>
            </ul>
        </div>
        
    </body>
        
    </div>
    );
}

export default aboutme;
