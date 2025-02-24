import {Recettes, RecettesJour, RecettesMenuJour} from "../types.ts";

/**
 * Selects 2 random recettes from the provided recettes list array.
 * @function useRecetteJour
 * @param {Recettes} recettes - An array containing the recettes list.
 * @return {RecettesJour} - An object containing 2 recette objects - {recette1, recette2}.
 */
const useRecetteJour = (recettes: Recettes): RecettesJour => {
  // Pick a recette from the provided recettes list array
  const recette1 = recettes[Math.floor(Math.random() * recettes.length)];
  // Remove the picked recette from the recettes list array
  const filteredRecettes = recettes.filter((recette) => recette !== recette1);
  // Pick a second recette from the filtered array
  const recette2 =
    filteredRecettes[Math.floor(Math.random() * filteredRecettes.length)];

  return { recette1, recette2 };
};

/**
 * Selects 1 random recette from each recettes types from the provided recettes list array.
 * @function useMenuJour
 * @param {Recettes} recettes - An array containing the recettes list.
 * @return {RecettesMenuJour} - An object containing 3 recette objects - {entree, plat, dessert} .
 */
const useMenuJour = (recettes: Recettes): RecettesMenuJour => {
  // Pick a recette from the entrée type
  const entrees = recettes.filter((recette) => recette.type === "entrée");
  const entree = entrees[Math.floor(Math.random() * entrees.length)];
  // Pick a recette from the plat type
  const plats = recettes.filter((recette) => recette.type === "plat");
  const plat = plats[Math.floor(Math.random() * plats.length)];
  // Pick a recette from the dessert type
  const desserts = recettes.filter((recette) => recette.type === "dessert");
  const dessert = desserts[Math.floor(Math.random() * desserts.length)];

  return { entree, plat, dessert };
};

export { useRecetteJour, useMenuJour };
