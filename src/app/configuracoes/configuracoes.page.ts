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
  IonButtons, // 👈 Inclua o IonButtons aqui
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { arrowBackOutline, logOutOutline } from 'ionicons/icons'; // 👈 Inclua o ícone de logout

// Adicionar os ícones que serão usados no template
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
    IonButtons, // 👈 IonButtons na lista de imports
    IonButton, 
    IonIcon ,   
  ]
})
export class ConfiguracoesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Lógica de inicialização, se houver
  }

  // A função de navegação está correta:
  goBack() {
    this.router.navigate(['/home']);
  }
  
  // Sua função de logout (mantida)
  async logout() {
    console.log('Realizando Logout... Redirecionando para /login.');
    try {
      await this.router.navigateByUrl('/login', { replaceUrl: true });
    } catch (error) {
      console.error('Erro ao tentar navegar para /login.', error);
    }
  }
}