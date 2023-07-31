import Mammifere from "./Mammifere";
import Terrestre from "../interfaces/Terrestre";

export default class Chat extends Mammifere implements Terrestre {
    
    /**
     * Permet au chat de communiquer
     * (généralement en fonction la nuit pendant que tout le monde dort)
     */
    miauler():void {
        console.log("Meow !");
    }

    /**
     * Cette fonction permet au chat de respirer
     * S'il est fait comme tout être vivants qui peuvent respirer, alors cela devra être set auto
     */
    respirerHorsDeLeau(): void {
        console.log("Je respire hors de l'eau"); 
    }

    /**
     * Cette fonction permet au chat de marcher
     */
     marcher(): void {
        console.log("Je marche tel un..... Bah tel un animal normalement composé quoi");
     }
}