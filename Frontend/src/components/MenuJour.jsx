import "./MenuJour.css";
import { Link } from "react-router-dom";
import useSpaceToUnder from "../hooks/useSpaceToUnder";
import useConvertDuration from "../hooks/useConvertDuration";

const MenuJour = ({ menuJour }) => {
  return (
    <div className={"menuJour"}>
      {/* ENTREE */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${useSpaceToUnder(menuJour.entree?.nom)}`}>
          {menuJour.entree?.nom}
        </Link>
        <h2 className={menuJour.entree?.type}>{menuJour.entree?.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {useConvertDuration(
            menuJour.entree?.preparation,
            menuJour.entree?.cuisson,
          )}
        </p>
      </div>
      {/* PLAT */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${useSpaceToUnder(menuJour.plat?.nom)}`}>
          {menuJour.plat?.nom}
        </Link>
        <h2 className={menuJour.plat?.type}>{menuJour.plat?.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {useConvertDuration(
            menuJour.plat?.preparation,
            menuJour.plat?.cuisson,
          )}
        </p>
      </div>
      {/* DESSERT */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${useSpaceToUnder(menuJour.dessert?.nom)}`}>
          {menuJour.dessert?.nom}
        </Link>
        <h2 className={menuJour.dessert?.type}>{menuJour.dessert?.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {useConvertDuration(
            menuJour.dessert?.preparation,
            menuJour.dessert?.cuisson,
          )}
        </p>
      </div>
    </div>
  );
};

export default MenuJour;
