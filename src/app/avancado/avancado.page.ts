import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  // Removido: IonList, IonItemDivider, IonListHeader, IonCard (limpeza)
  IonAccordionGroup,
  IonAccordion,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, chevronDownOutline } from 'ionicons/icons'; // Adicionei chevronDownOutline que faltava

addIcons({ arrowBackOutline, chevronDownOutline });

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.page.html',
  styleUrls: ['./avancado.page.scss'],
  standalone: true,
  imports: [
    CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonButtons,
    IonButton,
    IonIcon,

    IonItem,
    IonLabel,
    
    IonAccordionGroup,
    IonAccordion,
  ]
})
export class AvancadoPage {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/treinos']);
  }
}