import React from "react";

const NewsletterForm = () => {
  return (
    <div className="newsletter-form">
      <h2>¡Suscríbete a nuestro Newsletter!</h2>
      <p>
        Suscribirse ahora a nuestro newsletter para recibir información sobre
        nuestros servicios y consejos para mejorar y hacer crecer tu negocio.
      </p>
      <form>
        <label>Email</label>
        <input type="text" name="email" placeholder="Ingresa tu email" />
        <button>¡Suscribirme ahora!</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
