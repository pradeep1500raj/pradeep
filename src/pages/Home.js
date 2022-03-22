import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/milksweet.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> MILKY SWEETS </h1>
        <p> Bdam Milsk to Palkovao</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
