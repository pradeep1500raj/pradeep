import React from "react";
import Milkybar from "../assets/bar.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Milkybar})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        When you read the title, you might think that it is a baked cake 9like the hot milk cake), but no, you are mistaken, it is a milk sweet from Uttar Pradesh. Even I mistook the name for some cake when I first saw this at Nishamadhulika. But when I saw how it is made, I immediately bookmarked it, but never got a chance to make it until now. Think of this as a cousing to kalakand. For kalakand, we cook paneer, mawa and sugar but it is set when it is soft and white in colour, but for the milk cake, milk is reduced to thick consistency like mawa, then lemon juice is added to curdle the mixture and then sugar uis added and cooked until dry. So the result is a deep browned sweet, which is slightly tangy and absolutely delicious.
        </p>
      </div>
    </div>
  );
}

export default About;
