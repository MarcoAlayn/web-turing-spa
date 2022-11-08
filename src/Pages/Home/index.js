import React from "react";
import "./home.css";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import Slogan from "../../components/Slogan";
import Button from "../../components/Button";
import Video from "../../assets/Inicio.mp4";
import Slideshow from "../../components/Slideshow";
import ImageNtext from "../../components/ImageNtext";
import world from "../../assets/mundo.png";
import angel from "../../assets/est.png";
import image from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import ImageNtextT from "../../components/imgNtxt2 ";
import TechWeUse from "../../components/TechWeUse";

function Home() {
  return (
    <div className="homeContainer">
      <div className="worldImg">
        <img src={world} alt="imagen del mundo" />
      </div>
      <div className="angelImg">
        <img src={angel} alt="imagen del angel de la independencia" />
      </div>
      <div className="overslide"></div>
      {/* hero */}
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
      {/* hero */}
      {/* body */}
      <div className="textWeDo">
        <h2>QUE HACEMOS</h2>
      </div>
      <div className="weAre">
        <h3>
          Turing-IA es una empresa de consultoría global de tecnología y
          negocios que brinda soluciones que aportan al éxito de las empresas.
        </h3>
      </div>
      <div className="buttonContainerWeAre">
        <Button to="/" className="blueButton" content="Conoce como" />
      </div>
      <div className="textOurClients">
        <h2>HISTORIAS DE CLIENTES</h2>
      </div>
      <div className="slideContainer">
        <Slideshow />
      </div>
      <div className="theWayText">
        <h2>LA MANERA IDEAL PARA MANEJAR TUS DATOS</h2>
      </div>
      <div className="ImgNtxt">
        <ImageNtext image={image} />
      </div>
      <div className="ImgNtxt2">
        <ImageNtextT image={image2} />
      </div>
      {/* <div className="relleno">soy un relleno</div> */}
      <div className="textTechno">
        <h2>TECNOLOGIAS QUE UTILIZAMOS</h2>
      </div>
      <div className="logos">
        <TechWeUse />
      </div>
      {/* body */}
    </div>
  );
}

export default Home;
