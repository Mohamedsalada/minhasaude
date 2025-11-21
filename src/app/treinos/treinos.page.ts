import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonFab,
  IonFabButton,
  IonFooter,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  barbellOutline,
  heart,
  walkOutline,
  add,
  homeOutline,
  trendingUpOutline,
  settingsOutline
} from 'ionicons/icons';

addIcons({
  barbellOutline,
  heart,
  walkOutline,
  add,
  homeOutline,
  trendingUpOutline,
  settingsOutline
});

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.page.html',
  styleUrls: ['./treinos.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel
  ],
})
export class TreinosPage {

  constructor(private router: Router) {}

  // -------------------------
  // 🟩 BOTÕES DO MENU INFERIOR
  // -------------------------
  goToHome() {
    this.router.navigate(['/home']);
  }

  goToTreinos() {
    this.router.navigate(['/treinos']);
  }

  goToProgresso() {
    this.router.navigate(['/progress']);
  }

  goToConfiguracoes() {
    this.router.navigate(['/settings']);
  }

  // -------------------------
  // 🟦 BOTÕES "ir" DOS TREINOS
  // -------------------------
  goToIniciante() {
    this.router.navigate(['/iniciante']);
  }

  goToIntermediario() {
    this.router.navigate(['/intermediario']);
  }

  goToAvancado() {
    this.router.navigate(['/avancado']);
  }
}
