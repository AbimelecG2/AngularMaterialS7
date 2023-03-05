import {Component} from '@angular/core';

/**
 * @title Basic list
 */
@Component({
  selector: 'mat-list',
  templateUrl: 'lista.component.html',
})
export class Lista1 {
    constructor(){
        console.log("Componente Lista CARGADO");
    }
}