import Mammifere from "./Mammifere";
import Aquatique from "../interfaces/Aquatique";

export default class Dauphin extends Mammifere implements Aquatique {
    
    // If not reset then die
    private _maxSousEau:number = 600000;

    /**
     * Permet au dauphin de retenir sa respiration dans l'eau
     */
    retenirRespiration():void {
        
    }

    /** 
     * Permet au dauphin de comminiquer
    */
    cliquetter():void {
        console.log("Voici le dauphin !");
    }

    /**
     * Le dauphin pourra nager grâce à cette fonction
     */
    nager() {
        console.log("I'm fast af boi");
    }

    /**
     * Permet au dauphin de respirer sous l'eau
     * (alors, techniquement non. Il ne respire pas sous l'eau mais retient son souffle avant le reprendre hors de l'eau.)
     * (En même temps c'est pas un poisson le truc)
     */
    respirerSousEau() {
        console.log("*bruit de noyade* je respire sous l'eau !")
    }
}