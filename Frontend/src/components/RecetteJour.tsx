import "./RecetteJour.css";
import { Link } from "react-router-dom";
import { Recette } from "../types.ts";
import { spaceToUnder } from "../utils/stringManipulation.ts";
import { convertDuration } from "../utils/convertDuration.ts";

type RecetteJourProps = {
  recette: Recette;
};

const RecetteJour = (props: RecetteJourProps) => {
  // Create variable from props
  const recette = props.recette;
  return (
    <div className={"recetteJour"}>
      <Link to={`/recettes/${spaceToUnder(recette.nom)}`}>{recette.nom}</Link>
      <h2 className={recette.type}>{recette.type}</h2>
      <p>
        <strong>{recette.personnes} Personnes</strong>
      </p>
      <p>
        <strong>Préparation: </strong>
        {convertDuration(recette.preparation, recette.cuisson)}
      </p>
      <p>
        <strong>Ingrédients:</strong> {recette.ingredients.length}
      </p>
    </div>
  );
};

export default RecetteJour;
