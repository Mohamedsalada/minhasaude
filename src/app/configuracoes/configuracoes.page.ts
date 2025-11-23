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
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, logOutOutline } from 'ionicons/icons'; 

addIcons({ arrowBackOutline, logOutOutline }); 

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonButtons, 
    IonButton, 
    IonIcon ,   
  ]
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/home']);
  }
  
  async logout() {
    console.log('Realizando Logout... Redirecionando para /login.');
    try {
      await this.router.navigateByUrl('/login', { replaceUrl: true });
    } catch (error) {
      console.error('Erro ao tentar navegar para /login.', error);
    }
  }
}