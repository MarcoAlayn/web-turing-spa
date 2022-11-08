import React from "react";
import "./imgNtxt2.css";

// eslint-disable-next-line react/prop-types
function ImageNtextT({ image }) {
  return (
    <div className="imageNtextContainer2">
      <div className="text2">
        <p>
          En un mundo moderno, con la cantidad de problemas y su complejidad
          cada vez es mayor, el desarrollo de aplicaciones, una herramienta para
          obtener soluciones precisas, dándole tareas repetitivas a la
          computadora y logrando así la automatización de procesos que todavía
          requieren la intervención de las personas en tareas repetitivas.
        </p>
      </div>
      <div className="img2">
        <img src={image} alt="imagen 1" />
      </div>
    </div>
  );
}

export default ImageNtextT;
