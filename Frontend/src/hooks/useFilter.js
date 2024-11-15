import useStringNormalizer from './useStringNormalizer'

/**
 * Filters the provided recettes list array with the provided filter parameter.
 * @function useFilter
 * @param {array} filter - Array containing one or multiple strings.
 * @param {array} recettes - Recettes array to filter.
 * @return {array} - The filtered recettes array.
 */

const useFilter = (filter, recettes) => {
  if (filter !== null) {
    // Filter recettes
    return recettes.filter(
      (recette) =>
        // Based on filter keyword present in "recette.nom"
        filter.some(
          (keyword) =>
            keyword !== "" &&
            useStringNormalizer(recette.nom).includes(keyword),
        ) ||
        // OR Based on filter keyword present in [recette.ingredients] items
        filter.some(
          (keyword) =>
            keyword !== "" &&
            recette.ingredients.some((ingredient) =>
              useStringNormalizer(ingredient).includes(keyword),
            ),
        ),
    );
  }
};

export default useFilter;
