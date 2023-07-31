import Animal from "../interfaces/Animal";

/**
 * Une classe qui hérite de l'interface Animal
 */
export default abstract class Mammifere implements Animal {
    _nom:string;
    _poids:number;
    _dateNaissance:Date;

    // La classe dispose de son propre constructeur
    constructor(nom:string, poids:number, dateNaissance:Date) {
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    }
    
    /**
     * Affichage des informations concernant l'animal
     */
    display(): void {
        console.log("Je m'appel " + this._nom);
    }
}