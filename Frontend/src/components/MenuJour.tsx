import "./MenuJour.css";
import { Link } from "react-router-dom";
import { RecettesMenuJour } from "../types.ts";
import { convertDuration } from "../utils/convertDuration.ts";
import { spaceToUnder } from "../utils/stringManipulation.ts";

type MenuJourProps = {
  menuJour: RecettesMenuJour;
};

const MenuJour = (props: MenuJourProps) => {
  // Create variable from props
  const menuJour = props.menuJour;
  return (
    <div className={"menuJour"}>
      {/* ENTREE */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${spaceToUnder(menuJour.entree.nom)}`}>
          {menuJour.entree.nom}
        </Link>
        <h2 className={menuJour.entree.type}>{menuJour.entree.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {convertDuration(
            menuJour.entree.preparation,
            menuJour.entree.cuisson,
          )}
        </p>
      </div>
      {/* PLAT */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${spaceToUnder(menuJour.plat.nom)}`}>
          {menuJour.plat.nom}
        </Link>
        <h2 className={menuJour.plat.type}>{menuJour.plat.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {convertDuration(menuJour.plat.preparation, menuJour.plat.cuisson)}
        </p>
      </div>
      {/* DESSERT */}
      <div className={"menuRecette"}>
        <Link to={`/recettes/${spaceToUnder(menuJour.dessert.nom)}`}>
          {menuJour.dessert.nom}
        </Link>
        <h2 className={menuJour.dessert.type}>{menuJour.dessert.type}</h2>
        <p>
          <strong>Préparation: </strong>
          {convertDuration(
            menuJour.dessert.preparation,
            menuJour.dessert.cuisson,
          )}
        </p>
      </div>
    </div>
  );
};

export default MenuJour;
