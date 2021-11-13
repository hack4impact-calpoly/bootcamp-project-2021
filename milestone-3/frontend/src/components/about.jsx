import './about.css';
import Adam from "./IMG_2737.jpg";
import Navbar from './navbar';


export default function About() {
    return (
    //boring about page that never changes, route to path "/about"
    <header>  
        <div class="title">
            <h1>Who is Adam Meza???!</h1>
        </div>

        <Navbar />

        <div class="image_text">
            <div class="welcome">
                <h3>Getting to know the Chef? I am glad you clicked on this page!</h3>
                <h3>I am a seoncd year transfer student studying Computer Engineering.</h3>
                <h3>As someone who normally works with low level code, I am </h3>
                <h3>defintely out of my comfort zone making a website. But, I am</h3>
                <h3>having fun doing it and I am eager to keep learning.</h3>
            </div>
            <img id="mac_page_img" src={Adam} alt="adam" width="400" height="500"/>
        </div>
    </header>
    );
  }