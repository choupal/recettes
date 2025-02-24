import "./Recherche.css";
import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recettes } from "../types.ts";
import { filterRecettes } from "../utils/filterRecettes.ts";
import { spaceToUnder, stringNormalizer } from "../utils/stringManipulation.ts";
import { convertDuration } from "../utils/convertDuration.ts";

type RechercheProps = {
  recettes: Recettes;
};

const Recherche = (props: RechercheProps) => {
  // Create variable from props
  const recettes = props.recettes;
  // Create filter variables
  const [filteredRecettes, setFilteredRecettes] = useState<Recettes | null>();
  const [filter, setFilter] = useState<string[] | null>(null);

  // Filter the recettes list with the filter parameter
  useEffect(() => {
    setFilteredRecettes(filterRecettes(filter, recettes));
  }, [filter, recettes]);

  // Create an array of keywords for filter
  const manageFilter = (event: ChangeEvent): void => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setFilter(stringNormalizer(target.value.toLowerCase()).split(" "));
  };

  return (
    <div className={"rechercheContainer"}>
      <h1 className={"rechercheHeader"}>Rechercher une Recette</h1>
      {/* RECHERCHE INPUT */}
      <div className={"rechercheInput"}>
        <span className={"beforeInput"}></span>
        <input
          type={"search"}
          onChange={(event) => manageFilter(event)}
          placeholder={"Nom ou Ingrédient"}
        />
        <span className={"afterInput"}></span>
      </div>
      {/* RECETTES LIST */}
      <ul className={"rechercheRecettesList"}>
        {filteredRecettes &&
          filteredRecettes.map((recette) => (
            <li key={recette.nom} className={"rechercheRecette"}>
              <Link to={`/recettes/${spaceToUnder(recette.nom)}`}>
                {recette.nom}
              </Link>
              <div className={"rechercheRecetteInfos"}>
                <p>️{recette.personnes} personnes</p>
                <p>-</p>
                <p>{convertDuration(recette.preparation, recette.cuisson)}</p>
              </div>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Recherche;
