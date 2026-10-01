import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonList
} from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonList
  ]
})
export class TablaPage {

  numero: number = 0;
  resultados: string[] = [];

  mostrarTabla() {

    this.resultados = [];

    for (let i = 1; i <= 13; i++) {

      const resultado = this.numero * i;

      this.resultados.push(
        `${this.numero} x ${i} = ${resultado}`
      );

    }
  }

}