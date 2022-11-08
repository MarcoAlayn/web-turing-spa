import React from "react";
import "./techWeUse.css";
import aws from "../../assets/partner-logo-color-aws-300x150.svg";
import google from "../../assets/partner-logo-color-google-cloud-300x150.svg";
import microsoft from "../../assets/partner-logo-color-microsoft-300x150.svg";
import salesforce from "../../assets/partner-logo-color-salesforce-300x150.svg";
import snowflake from "../../assets/partner-logo-color-snowflake-300x150.svg";
import tableu from "../../assets/partner-logo-color-tableau-300x150.svg";

function TechWeUse() {
  const logos = [aws, google, microsoft, salesforce, snowflake, tableu];
  return (
    <div className="logosContainer">
      {logos?.map((img) => {
        return <img className="img" src={img} key={img.index} />;
      })}
    </div>
  );
}

export default TechWeUse;
