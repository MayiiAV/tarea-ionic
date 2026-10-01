import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-numeros-letras',
  templateUrl: './numeros-letras.page.html',
  styleUrls: ['./numeros-letras.page.scss'],
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class NumerosLetrasPage {

  numero: number = 0;
  resultado: string = '';

  convertir() {

    if (this.numero < 1 || this.numero > 1000) {
      this.resultado = 'Ingrese un número entre 1 y 1000';
      return;
    }

    this.resultado = this.numeroEnLetras(this.numero);
  }

  numeroEnLetras(numero: number): string {

    const unidades = [
      '',
      'uno',
      'dos',
      'tres',
      'cuatro',
      'cinco',
      'seis',
      'siete',
      'ocho',
      'nueve'
    ];

    const especiales = [
      'diez',
      'once',
      'doce',
      'trece',
      'catorce',
      'quince',
      'dieciséis',
      'diecisiete',
      'dieciocho',
      'diecinueve'
    ];

    const decenas = [
      '',
      '',
      'veinte',
      'treinta',
      'cuarenta',
      'cincuenta',
      'sesenta',
      'setenta',
      'ochenta',
      'noventa'
    ];

    const centenas = [
      '',
      'ciento',
      'doscientos',
      'trescientos',
      'cuatrocientos',
      'quinientos',
      'seiscientos',
      'setecientos',
      'ochocientos',
      'novecientos'
    ];

    if (numero === 1000) {
      return 'mil';
    }

    if (numero === 100) {
      return 'cien';
    }

    if (numero < 10) {
      return unidades[numero];
    }

    if (numero < 20) {
      return especiales[numero - 10];
    }

    if (numero < 100) {

      const decena = Math.floor(numero / 10);
      const unidad = numero % 10;

      if (decena === 2 && unidad > 0) {
        return 'veinti' + unidades[unidad];
      }

      if (unidad === 0) {
        return decenas[decena];
      }

      return decenas[decena] + ' y ' + unidades[unidad];
    }

    const centena = Math.floor(numero / 100);
    const resto = numero % 100;

    if (resto === 0) {
      return centenas[centena];
    }

    return centenas[centena] + ' ' + this.numeroEnLetras(resto);
  }

}