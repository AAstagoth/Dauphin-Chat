import Dauphin from "./classes/Dauphin"
import Chat from "./classes/Chat"

import Animal from "./interfaces/Animal"
import MilieuNaturel from "./interfaces/milieuNaturel"

const chat1: Chat = new Chat("Pheonix", 10, new Date(2017, 4, 4, 17, 23, 42, 11));
const dauphin1:Dauphin = new Dauphin("Pas d'inspi", 15, new Date(2015, 9, 17, 9, 13, 28, 6));

// On fait des tests des fonctions de la classe Chat
chat1.display();
chat1.marcher();
chat1.respirerHorsDeLeau();
chat1.miauler();

// On fait des tests des fonctions de la classe Dauphin

dauphin1.display();
dauphin1.nager();
dauphin1.retenirRespiration();
dauphin1.respirerSousEau();
dauphin1.cliquetter();