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
  IonList,
  IonItemDivider,
  IonListHeader,
  IonAccordionGroup,
  IonCard,
  IonAccordion,
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
    IonList,
    IonCard,
    IonItemDivider,
    IonListHeader,

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
