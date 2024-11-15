/**
 * Replaces spaces with underscores in the provided string, use for URLs.
 * @function useSpaceToUnder
 * @param {string} string - The string to change.
 * @return {string} - The modified string with no spaces.
 * @example
 * useSpaceToUnder("Parmentier de Canard") // returns "Parmentier_de_Canard"
 */
const useSpaceToUnder = (string) => {
  if (string) {
    return string.replace(/\s/g, "_");
  }
};

export default useSpaceToUnder;
