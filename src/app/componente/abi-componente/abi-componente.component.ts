import { Component } from "@angular/core";

@Component({
    selector: 'abi-componente',
    templateUrl: './abi-componente.component.html'
})
export class AbiComponente{
    constructor(){
        console.log("Componente abi-componente CARGADO");
    }
}