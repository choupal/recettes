/**
 * Replaces underscores with spaces in the provided string, use when string come from URL parameters.
 * @function useUnderToSpace
 * @param {string} string - The string to change.
 * @return {string} - The modified string with no underscores.
 * @example
 * useSpaceToUnder("Parmentier_de_Canard"") // returns "Parmentier de Canard"
 */
const useUnderToSpace = (string) => {
  if (string) {
    return string.replace(/_/g, " ");
  }
};

export default useUnderToSpace;
