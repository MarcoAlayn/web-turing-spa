import React from "react";
import "./ImageNtext.css";

// eslint-disable-next-line react/prop-types
function ImageNtext({ image }) {
  return (
    <div className="imageNtextContainer">
      <div className="img">
        <img src={image} alt="imagen 1" />
      </div>
      <div className="text">
        <p>
          Somos el socio estratégico que necesitas para potenciar los datos de
          tu organización. Contamos con más de 15 años de experiencia brindando
          soluciones innovadoras, adaptadas a las necesidades de nuestros
          clientes, en más de 10 industrias y diferentes áreas funcionales.
        </p>
      </div>
    </div>
  );
}

export default ImageNtext;
