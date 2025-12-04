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
  // Removido: IonList, IonItemDivider, IonListHeader, IonCard (não estão no HTML)
  IonAccordionGroup,
  IonAccordion,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, chevronDownOutline } from 'ionicons/icons';

addIcons({ arrowBackOutline, chevronDownOutline });

@Component({
  selector: 'app-intermediario',
  templateUrl: './intermediario.page.html',
  styleUrls: ['./intermediario.page.scss'],
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

    IonItem, // Necessário para exibir os exercícios
    IonLabel, // Necessário para exibir os exercícios

    IonAccordionGroup, // Necessário para a lista de dias
    IonAccordion, // Necessário para cada dia
  ]
})
export class IntermediarioPage {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/treinos']);
  }
}