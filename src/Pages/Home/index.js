import React from "react";
import "./home.css";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Slogan from "../../components/Slogan";
import Button from "../../components/Button";
import Video from "../../assets/Inicio.mp4";

function Home() {
  return (
    <div className="homeContainer">
      <div className="overslide"></div>
      <video src={Video} autoPlay muted loop />
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="navContainer">
        <Navbar />
      </div>
      <div className="sloganContainer">
        <Slogan />
      </div>
      <div className="buttonContainer">
        <Button to="/" className="whiteButton" content="Conoce como" />
      </div>
      <div className="callTo">
        <p>Nuestros servicios son sinónimo de escalabilidad</p>
      </div>
    </div>
  );
}

export default Home;
