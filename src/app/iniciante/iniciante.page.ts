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
  IonItem, // Necessário para exibir os exercícios
  IonLabel, // Necessário para exibir os exercícios
  // Removido: IonList, IonItemDivider, IonListHeader, IonCard (não estão no HTML)
  IonAccordionGroup, // Necessário para o grupo de treinos
  IonAccordion, // Necessário para cada dia de treino
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, chevronDownOutline } from 'ionicons/icons';

addIcons({ arrowBackOutline, chevronDownOutline });

@Component({
  selector: 'app-iniciante',
  templateUrl: './iniciante.page.html',
  styleUrls: ['./iniciante.page.scss'],
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
export class IniciantePage {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/treinos']);
  }
}