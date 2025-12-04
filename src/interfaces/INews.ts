export interface INews {
  id?: string; // attributs optionnels
  titre: string;
  texte: string;
  categorie: string;
  datePublication: string;
  dateModification: string | null;
  image: string;
}
