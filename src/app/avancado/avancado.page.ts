import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
  IonIcon, IonItem, IonLabel, IonList, IonAccordionGroup, IonAccordion
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

addIcons({ arrowBackOutline });

@Component({
  selector: 'app-avancado',
  templateUrl: './avancado.page.html',
  styleUrls: ['./avancado.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
    IonIcon, IonItem, IonLabel, IonList,
    IonAccordionGroup, IonAccordion
  ]
})
export class AvancadoPage {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/treinos']);
  }
}
