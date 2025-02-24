import {stringNormalizer} from "./stringManipulation.ts";
import {Recettes} from "../types.ts";

/**
 * Filters the provided recettes list array with the provided filter parameter.
 * @function filterRecettes
 * @param {string[]|null} filter - Array containing one or multiple strings OR null.
 * @param {Recettes} recettes - Recettes array to filter.
 * @return {Recettes|null} - The filtered recettes array OR null.
 */

export const filterRecettes = (
  filter: string[] | null,
  recettes: Recettes,
): Recettes | null => {
  if (filter !== null) {
    // Filter recettes
    return recettes.filter(
      (recette) =>
        // Based on filter keyword present in "recette.nom"
        filter.some(
          (keyword) =>
            keyword !== "" && stringNormalizer(recette.nom).includes(keyword),
        ) ||
        // OR Based on filter keyword present in [recette.ingredients] items
        filter.some(
          (keyword) =>
            keyword !== "" &&
            recette.ingredients.some((ingredient) =>
              stringNormalizer(ingredient).includes(keyword),
            ),
        ),
    );
  }
  return null;
};
