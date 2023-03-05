import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbiComponente } from './componente/abi-componente/abi-componente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Lista1 } from './componente/lista-componente/lista.component';
import { CardPrueba } from './componente/card-componente/card.component';


@NgModule({
  declarations: [
    AppComponent,
    AbiComponente,
    Lista1, 
    CardPrueba,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
