import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ExperienciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
