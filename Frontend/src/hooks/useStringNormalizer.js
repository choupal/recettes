/**
 * Converts a string into a normalized string (no accents/symbols) and make it lowercase (to simplify use in filter/search).
 * @function useStringNormalizer
 * @param {string} string - The string to change.
 * @return {string} - The normalized string with no accents/symbols.
 * @example
 * useStringNormalizer("Épinards à la béchamel") // returns "epinards a la bechamel"
 */
const useStringNormalizer = (string) => {
  return string
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
};

export default useStringNormalizer;
