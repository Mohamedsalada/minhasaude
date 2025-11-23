import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { addIcons } from 'ionicons';
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
  settingsOutline 
});

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.page.html',
  styleUrls: ['./progresso.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonLabel,
  ],
})
export class ProgressoPage {
  constructor(private router: Router) {}

  foto = signal<string | null>(null);

  async tirarFoto() {
    try {
      const imagem = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      if (imagem.dataUrl) {
        this.foto.set(imagem.dataUrl);
      }
    } catch (e) {
      console.error('Erro ao tirar foto:', e);
    }
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToTreinos() {
    this.router.navigate(['/treinos']);
  }

  goToProgresso() {
    this.router.navigate(['/progresso']);
  }

  goToConfiguracoes() {
    this.router.navigate(['/configuracoes']);
  }
  
  goToApi() {
    this.router.navigate(['/api']); 
  }
  
  goToCardapio() {
    this.router.navigate(['/refeicao']); 
  }
}