import { useNavigate } from "react-router-dom";
import "./styles.css";

const NavigationButton = () => {
  const navigate = useNavigate();

  const goToAboutPageProduction = () => {
    navigate("/production");
  };
  const goToAboutPageStadistic = () => {
    navigate("/stadistic");
  };

  return (
    <div className="containerButtom">
      <button onClick={goToAboutPageProduction}>ir a produccion</button>
      <button onClick={goToAboutPageStadistic}>ir a estadisticas</button>
    </div>
  );
};

export default NavigationButton;
