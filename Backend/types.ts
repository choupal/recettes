export interface Recette {
  nom: string;
  preparation: number;
  cuisson: number;
  personnes: number;
  ingredients: string[];
  directives: string[];
  type: string;
  id?: string;
}

export type NewRecette = Omit<Recette, "id">;

export type Recettes = Recette[];
