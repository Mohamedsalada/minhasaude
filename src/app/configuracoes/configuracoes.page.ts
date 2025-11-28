import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, logOutOutline } from 'ionicons/icons';


import { 
  home, 
  homeOutline,      
  barbellOutline,  
  trendingUpOutline, 
  settingsOutline,  
} from 'ionicons/icons';

addIcons({ 
  home, 
  homeOutline, 
  barbellOutline, 
  trendingUpOutline, 
  settingsOutline,
  arrowBackOutline, 
  logOutOutline,
});


@Component({
  selector: 'app-configuracoes',
  standalone: true,
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() { this.router.navigate(['/home']); }
  goToHome() { this.router.navigate(['/home']); }
  goToTreinos() { this.router.navigate(['/treinos']); }
  goToProgresso() { this.router.navigate(['/progresso']); }
  goToConfiguracoes() { this.router.navigate(['/configuracoes']); }

  async logout() {
    console.log('Realizando Logout...');
    await this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
