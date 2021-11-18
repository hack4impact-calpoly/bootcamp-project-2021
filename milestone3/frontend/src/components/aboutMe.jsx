import './aboutMe.css'

export default function AboutMe() {
  return (
    <div>
      <h1>About the Chef</h1>
        <img className="myPicture" src="images/myPic.jpeg" height="250"/>
        <section>
          <h3>Qualifications</h3>
          <ul>
          <li> I have cooked almost everyday over the summer of 2021 </li>
          <li> I watch Gordon Ramsay videos </li>
          <li> I have a very good taste palate</li>
          <li> I have eaten from a lot of different cuisines</li>
          <li> I played a lot of Dinner Dash </li>
          </ul>
        </section>
    </div>
  );
}