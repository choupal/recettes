import { Theme } from "../types.ts";

// Check if param is Theme Type
const isTheme = (param: string): param is Theme => {
  return Object.values(Theme)
    .map((g) => g.toString())
    .includes(param);
};

// Check if param is String Type
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

// Parse param to check if its Theme type
const parseTheme = (theme: unknown): Theme => {
  if (theme && isString(theme) && isTheme(theme)) {
    return theme;
  } else {
    throw new Error("Incorrect or missing Theme: " + theme);
  }
};

/**
 * Get the Saved Theme from localStorage or Preferred Theme from browser settings
 * @function useGetTheme
 * @return {Theme} - The value "dark" or "light"
 */

const useGetTheme = (): Theme => {
  if (localStorage.getItem("theme")) {
    return parseTheme(localStorage.getItem("theme"));
  } else {
    return parseTheme(
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light",
    );
  }
};

export { useGetTheme };
