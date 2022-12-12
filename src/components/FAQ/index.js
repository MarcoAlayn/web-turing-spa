import React from "react";

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h2>Preguntas Frecuentes</h2>
      <ul>
        <li>
          <h3>¿Qué servicios ofrece la consultoría?</h3>
          <p>
            Ofrecemos una amplia gama de servicios de consultoría en tecnología
            y negocios. Desde asesoramiento para la implementación de
            tecnología, hasta análisis de mercado y desarrollo de estrategias de
            negocios.
          </p>
        </li>
        <li>
          <h3>¿Qué clase de clientes atienden?</h3>
          <p>
            Atendemos a organizaciones de todos los tamaños, desde empresas
            pequeñas hasta empresas multinacionales.
          </p>
        </li>
        <li>
          <h3>¿Cómo puedo contactar para solicitar servicios?</h3>
          <p>
            Puede contactarnos a través de nuestro sitio web o llamarnos
            directamente al número proporcionado.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FAQs;
