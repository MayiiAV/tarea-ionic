import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    RouterLink
  ]
})
export class MenuPage {}