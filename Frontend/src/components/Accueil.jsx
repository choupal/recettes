import "./Accueil.css";
import { useMenuJour, useRecetteJour } from "../hooks/useRandomRecette";
import RecetteJour from "./RecetteJour";
import MenuJour from "./MenuJour";
import usePageTitle from "../hooks/usePageTitle";
import Loading from "./Loading";
import Recherche from "./Recherche";

const Accueil = ({ recettes }) => {
  // Get recettes
  const recettesJour = useRecetteJour(recettes);
  const menuJour = useMenuJour(recettes);
  // Manage the Page Title in HTML Head
  usePageTitle({});

  return (
    <div className={"accueilContainer"}>
      {/* RECETTES DU JOUR */}
      <div className={"recetteJourContainer"}>
        <h1 className={"accueilHeader"}>Recettes du Jour</h1>
        <h2 className={"accueilSubHeader"}>
          Recettes sélectionnées aléatoirement
        </h2>
        {recettes.length > 0 ? (
          <>
            <RecetteJour recette={recettesJour.recette1} />
            <RecetteJour recette={recettesJour.recette2} />
          </>
        ) : (
          <Loading />
        )}
      </div>
      <hr className={"recettesHR"} />
      {/* MENU DU JOUR */}
      <div className={"menuJourContainer"}>
        <h1 className={"accueilHeader"}>Menu du Jour</h1>
        <h2 className={"accueilSubHeader"}>Menu généré aléatoirement</h2>
        {recettes.length > 0 ? <MenuJour menuJour={menuJour} /> : <Loading />}
      </div>
      <hr className={"sectionHR"} />
      {/* RECHERCHE */}
      <Recherche recettes={recettes} />
    </div>
  );
};

export default Accueil;
