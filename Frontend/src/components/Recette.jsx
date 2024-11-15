import { Navigate, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import "./Recette.css";
import { useEffect } from "react";
import useUnderToSpace from "../hooks/useUnderToSpace";
import Loading from "./Loading";
import useConvertDuration from "../hooks/useConvertDuration";

const Recette = ({ recettes }) => {
  // Get the recette "nom" from the URL parameters
  let { nom } = useParams();

  // Manage the Page Title in HTML Head
  usePageTitle({ nom });

  // Get the recette from the recettes list array
  const recette = recettes.find(
    (recette) => recette.nom === useUnderToSpace(nom),
  );

  // Scroll Back to Top when component render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Manage Unknown Recette
  if (recettes.length !== 0 && !recette) {
    return <Navigate replace to="/erreur" />;
  }

  return recettes.length > 0 ? (
    <div className={"recetteContainer"}>
      {/* RECETTE HEADER */}
      <h1 className={"recetteHeader"}>{recette?.nom}</h1>
      {/* RECETTE INFOS */}
      <div className={"recetteInfosContainer"}>
        <p>
          <strong>Préparation: </strong>
          {useConvertDuration(recette.preparation, null)}
        </p>
        <p>-</p>
        <p>
          <strong>Cuisson: </strong>
          {useConvertDuration(null, recette.cuisson)}
        </p>
        <p>-</p>
        <p>
          <strong>{recette?.personnes} Personnes</strong>
        </p>
      </div>
      {/* RECETTE INSTRUCTIONS */}
      <div className={"recetteInstructions"}>
        {/* RECETTE INGREDIENTS */}
        <div className={"recetteIngredients"}>
          <h1>Ingrédients</h1>
          <ul>
            {recette?.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {/* RECETTE DIRECTIVES */}
        <div className={"recetteDirectives"}>
          <h1>Préparation</h1>
          <ol>
            {recette?.directives.map((directive) => (
              <li key={directive}>{directive}</li>
            ))}
          </ol>
        </div>
      </div>
      {/* DOWNLOAD RECETTE BUTTON */}
      <div className={"downloadButtonContainer"}>
        <a
          className={"downloadButton"}
          href={`/documents-word/${useUnderToSpace(nom)}.doc`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          Télécharger la recette
          <p>Document Word</p>
        </a>
      </div>
    </div>
  ) : (
    <Loading color={"black"} />
  );
};

export default Recette;
