/**
 * Converts duration in minutes to hours or days if needed.
 * Can use only 1 parameter if one is null/not needed.
 * @function useConvertDuration
 * @param {number||null} preparation - Preparation time in minutes.
 * @param {number||null} cuisson - Cuisson time in minutes.
 * @return {string} - A string with the converted duration.
 * @example
 * useConvertDuration(20,10) // returns "30 Minutes"
 * useConvertDuration(120) // returns "2 Heures"
 * useConvertDuration(null, 2880) // returns "2 Jours"
 */

const useConvertDuration = (preparation, cuisson) => {
  // Convert to Days function
  const convertToDays = (num1, num2) =>
    Math.ceil((num1 + (num2 ? num2 : 0)) / 60 / 24);
  // Convert to Hours function
  const convertToHours = (num1, num2) =>
    Math.ceil((num1 + (num2 ? num2 : 0)) / 60);

  // When there are 2 parameters
  if (typeof preparation === "number" && typeof cuisson === "number") {
    // Convert to Days when the duration is more than 24h
    if (preparation + cuisson >= 1440) {
      const duration = convertToDays(preparation, cuisson);
      return `${duration} Jours`;
      // Convert to Hours when the duration is more than 2h
    } else if (preparation + cuisson >= 120) {
      const duration = convertToHours(preparation + cuisson);
      return `${duration} Heures`;
      // No need to convert if duration is less than 2h
    } else {
      const duration = preparation + cuisson;
      return `${duration} Minutes`;
    }
    // When only preparation parameter is needed
  } else if (typeof preparation === "number" && !cuisson) {
    // Convert to Days when the duration is more than 24h
    if (preparation >= 1440) {
      const duration = convertToDays(preparation);
      return `${duration} Jours`;
      // Convert to Hours when the duration is more than 2h
    } else if (preparation >= 120) {
      const duration = convertToHours(preparation);
      return `${duration} Heures`;
      // No need to convert if duration is less than 2h
    } else {
      return `${preparation} Minutes`;
    }
    // When only cuisson parameter is needed
  } else if (typeof cuisson === "number" && !preparation) {
    // Convert to Days when the duration is more than 24h
    if (cuisson >= 1440) {
      const duration = convertToDays(cuisson);
      return `${duration} Jours`;
      // Convert to Hours when the duration is more than 2h
    } else if (cuisson >= 120) {
      const duration = convertToHours(cuisson);
      return `${duration} Heures`;
      // No need to convert if duration is less than 2h
    } else {
      return `${cuisson} Minutes`;
    }
  }
};

export default useConvertDuration;
