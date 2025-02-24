export enum RecetteType {
  Entree = "entrée",
  Plat = "plat",
  Dessert = "dessert",
  Autre = "autre",
}

export interface Recette {
  nom: string;
  preparation: number;
  cuisson: number;
  personnes: number;
  ingredients: string[];
  directives: string[];
  type: RecetteType;
  id: string;
}

export type Recettes = Recette[];

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export interface RecettesMenuJour {
  entree: Recette;
  plat: Recette;
  dessert: Recette;
}

export interface RecettesJour {
  recette1: Recette;
  recette2: Recette;
}
