import axios from "axios";
import {Recettes} from "../types.ts";

/**
 * Get the Recettes list from the api/backend.
 * @function getRecettes
 * @return {Recettes} - An array containing the recettes.
 */

const getRecettes = async (): Promise<Recettes> => {
  const url: string =
    import.meta.env.VITE_API_URL || "http://localhost:3000/api/recettes";
  const response = await axios.get<Recettes>(url);
  return response.data;
};

export default getRecettes;
