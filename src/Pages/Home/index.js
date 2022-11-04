import React from "react";
import "./home.css";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Slogan from "../../components/Slogan";

function Home() {
  return (
    <div className="homeContainer">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="sloganContainer">
        <Slogan />
      </div>
    </div>
  );
}

export default Home;
