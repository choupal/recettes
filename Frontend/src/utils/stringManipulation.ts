/**
 * Replaces spaces with underscores in the provided string, use for URLs.
 * @function spaceToUnder
 * @param {string} string - The string to change.
 * @return {string} - The modified string with no spaces.
 * @example
 * useSpaceToUnder("Parmentier de Canard") // returns "Parmentier_de_Canard"
 */
export const spaceToUnder = (string: string): string => {
  return string.replace(/\s/g, "_");
};

/**
 * Replaces underscores with spaces in the provided string, use when string come from URL parameters.
 * @function underToSpace
 * @param {string} string - The string to change.
 * @return {string} - The modified string with no underscores.
 * @example
 * useUnderToSpace("Parmentier_de_Canard"") // returns "Parmentier de Canard"
 */
export const underToSpace = (string: string): string => {
  return string.length > 0 ? string.replace(/_/g, " ") : string;
};

/**
 * Converts a string into a normalized string (no accents/symbols) and make it lowercase (to simplify use in filter/search).
 * @function stringNormalizer
 * @param {string} string - The string to change.
 * @return {string} - The normalized string with no accents/symbols.
 * @example
 * useStringNormalizer("Épinards à la béchamel") // returns "epinards a la bechamel"
 */
export const stringNormalizer = (string: string): string => {
  return string
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
};
