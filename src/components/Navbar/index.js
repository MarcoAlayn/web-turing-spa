import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link">Inicio</Link>
      <Link className="link">Nosotros</Link>
      <Link className="link">Servicios</Link>
      <Link className="link">Contacto</Link>
    </nav>
  );
}

export default Navbar;
