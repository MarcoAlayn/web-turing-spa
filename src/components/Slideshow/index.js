import React, { useRef, useEffect } from "react";
import "./slideshow.css";
// import imagen from "../../assets/image1.jpg";
// import imagenDos from "../../assets/image2.jpg";
import imagenTres from "../../assets/image3.jpg";
import imagenCuatro from "../../assets/imagen4.jpg";
import imagenCinco from "../../assets/imagen5.jpeg";
import imagenSeis from "../../assets/imagen6.jpg";
import { ReactComponent as LeftArrow } from "../../assets/iconmonstr-angel-left-thin.svg";
import { ReactComponent as RightArrow } from "../../assets/iconmonstr-angel-right-thin.svg";

// eslint-disable-next-line react/prop-types
const Slideshow = () => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = () => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      // Obtenemos el primer elemento del slideshow
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = "1000ms ease-out all";

      const slideTamaño = slideshow.current.children[0].offsetWidth;
      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${slideTamaño}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow a 0px.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0px)";

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    console.log("anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];

      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const slideTamaño = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideTamaño}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `1000ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervaloSlideshow.current = setInterval(() => {
      siguiente();
    }, 5000);

    // // Eliminamos los intervalos
    // slideshow.current.addEventListener("mouseenter", () => {
    //   clearInterval(intervaloSlideshow.current);
    // });

    // // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
    // slideshow.current.addEventListener("mouseleave", () => {
    //   intervaloSlideshow.current = setInterval(() => {
    //     siguiente();
    //   }, 5000);
    // });
  }, [siguiente]);

  return (
    <div className="ContenedorPrincipal">
      <div className="contenedorSlideshow" ref={slideshow}>
        <div className="slide">
          <a href="#">
            <img src={imagenCinco} alt="imagen 1" />
          </a>
          <p className="textoSlide">
            JPMorgan Chase elige Tableau para ofrecer análisis de autoservicio y
            seguir el vertiginoso ritmo de los cambios en el sector
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imagenSeis} alt="imagen 2" />
          </a>
          <p className="textoSlide">
            Whole Foods Market democratiza el acceso a los datos en sus 460
            tiendas para 18 000 empleados gracias a Tableau
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imagenTres} alt="imagen 3" />
          </a>
          <p className="textoSlide">
            Red Hat adopta el Blueprint de Tableau y Tableau Online, y
            profundiza en la cultura de datos con más de 4500 empleados en menos
            de un año
          </p>
        </div>
        <div className="slide">
          <a href="#">
            <img src={imagenCuatro} alt="imagen 4" />
          </a>
          <p className="textoSlide">
            Verizon usa Tableau para reducir las llamadas de soporte en un 43 %
            y así mejorar la experiencia del cliente
          </p>
        </div>
      </div>
      <div className="controles">
        <button className="leftArrow" onClick={anterior}>
          <LeftArrow />
        </button>
        <button className="rightArrow" onClick={siguiente}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
