import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  return <button onClick={goBack}>Volver</button>;
};

export default BackButton;
