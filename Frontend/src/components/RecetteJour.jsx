import "./RecetteJour.css";
import { Link } from "react-router-dom";
import useSpaceToUnder from "../hooks/useSpaceToUnder";
import useConvertDuration from "../hooks/useConvertDuration";

const RecetteJour = ({ recette }) => {
  return (
    <div className={"recetteJour"}>
      <Link to={`/recettes/${useSpaceToUnder(recette?.nom)}`}>
        {recette?.nom}
      </Link>
      <h2 className={recette?.type}>{recette?.type}</h2>
      <p>
        <strong>{recette?.personnes} Personnes</strong>
      </p>
      <p>
        <strong>Préparation: </strong>
        {useConvertDuration(recette.preparation, recette.cuisson)}
      </p>
      <p>
        <strong>Ingrédients:</strong> {recette?.ingredients.length}
      </p>
    </div>
  );
};

export default RecetteJour;
