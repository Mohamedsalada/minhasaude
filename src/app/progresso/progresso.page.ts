import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  // Componentes do Cabeçalho e Conteúdo
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonIcon,
  // Componentes do Rodapé (Tab Bar) 👈 ADICIONADOS
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { Camera, CameraResultType } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { 
  home, 
  homeOutline,      // 👈 Icone para a Tab Bar
  barbellOutline,   // 👈 Icone Treinos
  trendingUpOutline, // 👈 Icone Progresso
  settingsOutline,  // 👈 Icone Configurações
} from 'ionicons/icons';

// Inicializa todos os ícones necessários no template
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
    // Componentes do Cabeçalho e Conteúdo
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonIcon,
    // Componentes do Rodapé (Tab Bar) 👈 ADICIONADOS AOS IMPORTS
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonLabel,
  ],
})
export class ProgressoPage {
  // Injeção de dependência do Router
  constructor(private router: Router) {}

  // Signal para armazenar a URL da foto, inicializado como null
  foto = signal<string | null>(null);

  async tirarFoto() {
    try {
      const imagem = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      // Atualiza a signal com a URL da imagem se for válida
      if (imagem.dataUrl) {
        this.foto.set(imagem.dataUrl);
      }
    } catch (e) {
      console.error('Erro ao tirar foto:', e);
      // Implemente um toast ou alerta visual aqui para o usuário
    }
  }

  // Métodos de Navegação (Mantenha a rota /settings para o goToConfiguracoes)
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
    this.router.navigate(['/settings']); 
  }
  
  goToApi() {
    this.router.navigate(['/api']); 
  }
  
  goToCardapio() {
    this.router.navigate(['/refeicao']); 
  }
}