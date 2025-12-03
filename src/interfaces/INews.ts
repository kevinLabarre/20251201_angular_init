export interface INews {
  id?: string; // attributs optionnels
  categorie: string;
  titre: string;
  texte: string;
  datePublication: string;
  dateModification: string | null;
  image: string;
}
