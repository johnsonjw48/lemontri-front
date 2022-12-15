import { Injectable } from '@angular/core';
import {BacDeTri} from "../interfaces/bac-de-tri";

@Injectable({
  providedIn: 'root'
})
export class BacDeTriService {

  private sorting_bin: BacDeTri[] = [
    {name: 'Ampoule et Néons', img: 'NeonAmpoule.png', arrayName : ['Ampoule', 'Néons', 'Ampoule et néon']},
    {name: 'Déchet Alimentaire', img: 'BioDechet.png', arrayName : ['Déchet Alimentaire', 'Alimentaire']},
    {name: 'Bois Palettes', img: 'Bois.png', arrayName : ['Bois', 'Palette', 'Bois palette']},
    {name: 'Bouchon en plastique', img: 'Bouchon.png', arrayName : ['Bouchon',  'Bouchon en plastique']},
    {name: 'Bouteilles et canettes', img: 'BouteilleCanette.png', arrayName : ['Bouteille', 'Canette', 'Bouteille et canette']},
    {name: 'Bouteilles en plastique', img: 'BouteillePlastique.png', arrayName : ['Bouteille Plastique', 'Bouteille en plastique']},
    {name: 'Canettes', img: 'Canette.png', arrayName : ['Canette']},
    {name: 'Capsules en aluminium', img: 'Capsule.png', arrayName : ['Capsule', 'Aluminium', 'Capsule en aluminium']},
    {name: 'Petits cartons', img: 'CartonPlie.png', arrayName : ['Petit', 'Carton', 'Petit carton']},
    {name: 'Toners et Catouches', img: 'Cartouche.png', arrayName : ['Toner', 'Catouche', 'Toner et cartouche']},
    {name: 'Conserves', img: 'Conserve.png', arrayName : ['Conserve']},
    {name: 'Déchets Electroniques', img: 'DEE.png', arrayName : ['Dechet Electonique', 'DEE', 'Electronique']},
    {name: 'Autres Déchets', img: 'DIB.png', arrayName : ['Autre Déchet', 'Autres Déchets', 'DIB']},
    {name: 'Emballages Repas en Carton', img: 'EmballageCarton.png', arrayName : ['Emballage', 'Carton', 'Emballage en carton', 'Repas']},
    {name: 'Emballages Plastiques', img: 'EmballagePlastique.png', arrayName : ['Emballage', 'Plastique', 'Emballage en plastique', 'Barquette plastique']},
    {name: 'Film Plastiques', img: 'FilmPlastique.png', arrayName : ['Film', 'Plastique', 'Film plastique']},
    {name: 'Glassine', img: 'Glassine.png', arrayName : ['Glassine']},
    {name: 'Gobelets en Carton', img: 'GobeletCarton.png', arrayName : ['Gobelet', 'Carton', 'Gobelet carton', 'Gobelet en carton']},
    {name: 'Gobelets en Plastique', img: 'GobeletPlastique.png', arrayName : ['Gobelet', 'Plaqtique', 'Gobelet plastique', 'Gobelet en plastique']},
    {name: 'Marc de café', img: 'Marc.png', arrayName : ['Café', 'Marc', 'Marc café', 'Marc de café']},
    {name: 'Masque', img: 'Masque.png', arrayName : ['Masque', 'Masque jetable']},
    {name: 'Mégot de cigarette', img: 'Megot.png', arrayName : ['Mégot', 'Megot', 'Cigarette', 'Mégot de cigarette']},
    {name: 'Papiers et cartons', img: 'PapierCarton.png', arrayName : ['Papier carton', 'Papier en carton']},
    {name: 'Papiers confidentiels', img: 'PapierConfidentiel.png', arrayName : ['Papier confidentiel']},
    {name: 'Papiers', img: 'Papier.png', arrayName : ['Papier', 'Feuille']},
    {name: 'Pile et Batteries', img: 'Pile.png', arrayName : ['Pile', 'Batterie', 'Pile et batterie']},
    {name: 'Polystyrène Expansé', img: 'PSE.png', arrayName : ['Polystyrène', 'Polystyrène Expansé','PSE']},
    {name: 'Verre', img: 'Verre.png', arrayName : ['Verre', 'Bouteille en verre']},
    {name: 'Cagette', img: 'Cagette.png', arrayName : ['Cagette']},
    {name: 'Déchets Infectieux', img: 'DechetsInfectieux.png', arrayName : ['Déchet Infectieux', 'Infectieux']},
    {name: 'Engrais', img: 'Engrais.png', arrayName : ['Engrais']},
    {name: 'Huile Alimentaire', img: 'HuileAlimentaire.png', arrayName : ['Huile', 'Huile alimentaire']},
    {name: 'Livre', img: 'Livre.png', arrayName : ['Livre']},
    {name: 'Stylo', img: 'Stylo.png', arrayName : ['Stylo']},
    {name: 'Vêtements', img: 'Vetement.png', arrayName : ['Vêtement', 'T-shirt','Jean']},
]

  constructor() {}

  get_sorting_bing (packaging: string): BacDeTri {
    const words = packaging.split(",");
    const notFound:BacDeTri = {name: 'Autres', img: '', arrayName : ['Autres']}
    const bacFinded = this.sorting_bin.find(bac => bac.arrayName.some( r=> words.indexOf(r) >= 0));
    return bacFinded !== undefined ?  bacFinded : notFound
  }
}
