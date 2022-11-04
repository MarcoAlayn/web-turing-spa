/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ to, className, content }) {
  return (
    <div className="customButton">
      <Link to={to}>
        <p className={className}>{content}</p>
      </Link>
    </div>
  );
}

export default Button;
