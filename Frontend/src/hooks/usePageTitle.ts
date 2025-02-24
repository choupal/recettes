import {underToSpace} from "../utils/stringManipulation.ts";

/**
 * Change the title meta tag in HTML based on the provided title (the page you are on).
 * @function usePageTitle
 * @param {string} title - An string containing the page title || an empty string
 * @return {void} - void
 */

const usePageTitle = (title: string): void => {
  const pageTitleElement = document.getElementById("page-title");
  const pageTitle = underToSpace(title);
  if (pageTitleElement) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    pageTitle.length === 0
      ? (pageTitleElement.innerText = `Recettes`)
      : (pageTitleElement.innerText = `Recette - ${pageTitle}`);
  }
};

export default usePageTitle;
