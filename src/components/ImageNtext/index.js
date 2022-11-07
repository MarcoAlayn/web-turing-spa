import React from "react";
import "./ImageNtext.css";
import image1 from "../../assets/image1.jpg";
// import image2 from "../../assets/image2.jpg";

function ImageNtext() {
  return (
    <div className="imageNtextContainer">
      <div className="text">
        <p>
          Somos el socio estratégico que necesitas para potenciar los datos de
          tu organización. Contamos con más de 15 años de experiencia brindando
          soluciones innovadoras, adaptadas a las necesidades de nuestros
          clientes, en más de 10 industrias y diferentes áreas funcionales.
        </p>
      </div>
      <div className="img">
        <img src={image1} alt="imagen 1" />
      </div>
    </div>
  );
}

export default ImageNtext;
