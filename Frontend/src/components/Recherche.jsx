import "./Recherche.css";
import { useEffect, useState } from "react";
import useStringNormalizer from "../hooks/useStringNormalizer";
import { Link } from "react-router-dom";
import useSpaceToUnder from "../hooks/useSpaceToUnder";
import useFilter from "../hooks/useFilter";
import useConvertDuration from "../hooks/useConvertDuration";

const Recherche = ({ recettes }) => {
  // Create filter variables
  const [filteredRecettes, setFilteredRecettes] = useState(recettes);
  const [filter, setFilter] = useState(null);

  // Get Recettes list using filter parameters
  useEffect(() => {
    setFilteredRecettes(useFilter(filter, recettes));
  }, [filter, recettes]);

  // Create an array of keywords for filter
  const manageFilter = (e) => {
    e.preventDefault();
    setFilter(useStringNormalizer(e.target.value.toLowerCase()).split(" "));
  };

  return (
    <div className={"rechercheContainer"}>
      <h1 className={"rechercheHeader"}>Rechercher une Recette</h1>
      {/* RECHERCHE INPUT */}
      <div className={"rechercheInput"}>
        <span className={"beforeInput"}></span>
        <input
          type={"search"}
          onChange={(e) => manageFilter(e)}
          placeholder={"Nom ou Ingrédient"}
        />
        <span className={"afterInput"}></span>
      </div>
      {/* RECETTES LIST */}
      <ul className={"rechercheRecettesList"}>
        {filteredRecettes?.map((recette) => (
          <li key={recette.nom} className={"rechercheRecette"}>
            <Link to={`/recettes/${useSpaceToUnder(recette.nom)}`}>
              {recette.nom}
            </Link>
            <div className={"rechercheRecetteInfos"}>
              <p>️{recette.personnes} personnes</p>
              <p>-</p>
              <p>{useConvertDuration(recette.preparation, recette.cuisson)}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recherche;
