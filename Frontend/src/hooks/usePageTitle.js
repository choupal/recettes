import useUnderToSpace from './useUnderToSpace'

/**
 * Change the title meta tag in HTML based on the provided title (the page you are on).
 * @function useGetRecettes
 * @param {object} title - An object containing the page title stored in name or type properties || An empty object.
 * @return {} - void
 */

const usePageTitle = (title) => {
  let pageTitle = document.getElementById("page-title");
  // Check if the title is a (recette) name - For Individual Recette Pages
  title.nom
    ? (pageTitle.innerText = `Recette - ${useUnderToSpace(title.nom)}`)
    : // Check if the title is a (recette) type - For Recettes List Pages
      title.type
      ? (pageTitle.innerText = `Recettes - ${title.type}`)
      : // For Home Page
        (pageTitle.innerText = `Recettes`);
};

export default usePageTitle;
