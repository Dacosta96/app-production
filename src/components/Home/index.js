import React from "react";
import NavigationButton from "../Navigation/NavigationButton";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Control de Produccion Huevos Tropical</h1>
      <div className="buttoms">
        <NavigationButton />
      </div>
    </div>
  );
}

export { Home };
