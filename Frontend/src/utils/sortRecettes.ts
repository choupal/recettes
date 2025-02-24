import {stringNormalizer} from "./stringManipulation.ts";
import {Recettes} from "../types.ts";

/**
 * Sorts the provided recettes list array with the sortingType and sortingDir parameters.
 * @function sortRecettes
 * @param {Recettes} recettes - An array containing the recettes list.
 * @param {string} sortingType - A string defining the sorting type ("NOM", "PREPA", "PERS").
 * @param {string} sortingDir - A string defining the sorting order ("ASC", "DESC").
 * @return {Recettes} - The sorted recettes list array based on parameters.
 */
export const sortRecettes = (
  recettes: Recettes,
  sortingType: string,
  sortingDir: string,
): Recettes => {
  // Manage Ascending Order
  if (sortingDir === "ASC") {
    if (sortingType === "NOM") {
      return recettes.sort((a, b) =>
        stringNormalizer(a.nom) !== stringNormalizer(b.nom)
          ? stringNormalizer(a.nom) < stringNormalizer(b.nom)
            ? -1
            : 1
          : 0,
      );
    } else if (sortingType === "PERS") {
      return recettes.sort((a, b) => a.personnes - b.personnes);
    } else if (sortingType === "PREPA") {
      return recettes.sort(
        (a, b) => a.preparation + a.cuisson - (b.preparation + b.cuisson),
      );
    }
    // Manage Descending Order
  } else if (sortingDir === "DESC") {
    if (sortingType === "NOM") {
      return recettes.sort((a, b) =>
        stringNormalizer(a.nom) !== stringNormalizer(b.nom)
          ? stringNormalizer(a.nom) < stringNormalizer(b.nom)
            ? 1
            : -1
          : 0,
      );
    } else if (sortingType === "PERS") {
      return recettes.sort((a, b) => b.personnes - a.personnes);
    } else if (sortingType === "PREPA") {
      return recettes.sort(
        (a, b) => b.preparation + b.cuisson - (a.preparation + a.cuisson),
      );
    }
  }
  return recettes;
};
