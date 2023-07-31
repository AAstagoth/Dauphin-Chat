// Interface 'Animal' permettant de définir le tronc commun à tous les animaux
export default interface Animal {
    _nom:string;
    _poids:number;
    _dateNaissance:Date;

    /**
     * Affichage des informations de l'animal en question dans un console log
     */
    display():void;
}