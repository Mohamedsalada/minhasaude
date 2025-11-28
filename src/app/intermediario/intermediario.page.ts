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
  IonAccordion,IonCard,
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

    IonItem,
    IonLabel,
    IonList,
    IonItemDivider,
    IonListHeader,

    IonAccordionGroup,
    IonAccordion, IonCard,
  ]
})
export class IntermediarioPage {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/treinos']);
  }
}
