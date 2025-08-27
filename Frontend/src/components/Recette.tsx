import { Navigate, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import "./Recette.css";
import { useEffect } from "react";
import Loading from "./Loading.js";
import { underToSpace } from "../utils/stringManipulation.ts";
import { convertDuration } from "../utils/convertDuration.ts";
import DownloadButton from "./DownloadButton.tsx";
import { Recettes } from "../types.ts";

type RecetteProps = {
  recettes: Recettes;
};

const Recette = (props: RecetteProps) => {
  // Create variable from props
  const recettes = props.recettes;

  // Get the recette "nom" from the URL parameters
  const { nom } = useParams();
  const recetteName: string = nom ? nom : "";

  // Manage the Page Title in HTML Head
  usePageTitle(recetteName);

  // Get the recette from the recettes list array
  const recette = recettes.find(
    (recette) => recette.nom === underToSpace(recetteName),
  );

  // Scroll Back to Top when component render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Manage Unknown Recette
  if (recettes.length !== 0 && !recette) {
    return <Navigate replace to="/erreur" />;
  }

  return recette ? (
    <div className={"recetteContainer"}>
      {/* RECETTE HEADER */}
      <h1 className={"recetteHeader"}>{recette.nom}</h1>
      {/* RECETTE INFOS */}
      <div className={"recetteInfosContainer"}>
        <p>
          <strong>Préparation: </strong>
          {convertDuration(recette.preparation, null)}
        </p>
        <p>-</p>
        <p>
          <strong>Cuisson: </strong>
          {convertDuration(null, recette.cuisson)}
        </p>
        {recette.personnes !== 0 && <p>-</p>}
        <p>
          {recette.personnes !== 0 && (
            <strong>{recette.personnes} Personnes</strong>
          )}
        </p>
      </div>
      {/* RECETTE INSTRUCTIONS */}
      <div className={"recetteInstructions"}>
        {/* RECETTE INGREDIENTS */}
        <div className={"recetteIngredients"}>
          <h1>Ingrédients</h1>
          <ul>
            {recette.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {/* RECETTE DIRECTIVES */}
        <div className={"recetteDirectives"}>
          <h1>Préparation</h1>
          <ol>
            {recette.directives.map((directive) => (
              <li key={directive}>{directive}</li>
            ))}
          </ol>
        </div>
      </div>
      {/* DOWNLOAD RECETTE BUTTON */}
      <DownloadButton
        url={`/documents-word/${underToSpace(recetteName)}.doc`}
      ></DownloadButton>
    </div>
  ) : (
    <Loading />
  );
};

export default Recette;
