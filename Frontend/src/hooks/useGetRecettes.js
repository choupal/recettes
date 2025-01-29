import axios from 'axios'

/**
 * Get the Recettes list from the api/backend.
 * @function useGetRecettes
 * @return {array} - An array containing the recettes.
 */

const useGetRecettes = async () => {
  const url =
    import.meta.env.VITE_API_URL || "http://localhost:3000/api/recettes";
  const response = await axios.get(url);
  return response.data;
};

export default useGetRecettes;
