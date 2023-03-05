import {Component} from '@angular/core';

/**
 * @title Basic cards
 */
@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
})
export class CardPrueba{
    constructor(){
        console.log("Componente Card CARGADO");
    }
}
