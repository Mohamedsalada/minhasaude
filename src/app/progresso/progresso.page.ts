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
  closeOutline,
  trashOutline  
} from 'ionicons/icons';

addIcons({ 
  home, 
  homeOutline, 
  barbellOutline, 
  trendingUpOutline, 
  settingsOutline,
  closeOutline,
  trashOutline
});

interface FotoSalva {
  dataUrl: string;
  data: string;
}

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
  
  constructor(private router: Router) {
    this.carregarFotosSalvas();
  }

  foto = signal<string | null>(null);
  mostrarFoto = signal<boolean>(false);
  fotosSalvas = signal<FotoSalva[]>([]);

  async tirarFoto() {
    try {
      const imagem = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      if (imagem.dataUrl) {
        const novaFoto: FotoSalva = {
          dataUrl: imagem.dataUrl,
          data: new Date().toLocaleDateString('pt-BR')
        };

        const lista = [...this.fotosSalvas(), novaFoto];
        this.fotosSalvas.set(lista);

        localStorage.setItem('fotosProgresso', JSON.stringify(lista));
      }
    } catch (e) {
      console.error('Erro ao tirar foto:', e);
    }
  }

  carregarFotosSalvas() {
    const fotos = localStorage.getItem('fotosProgresso');
    if (fotos) {
      this.fotosSalvas.set(JSON.parse(fotos));
    }
  }

  abrirFoto(foto: string) {
    this.foto.set(foto);
    this.mostrarFoto.set(true);
  }

  fecharFoto() {
    this.mostrarFoto.set(false);
  }

  excluirFoto() {
    const fotoAtual = this.foto();
    if (!fotoAtual) return;

    const novaLista = this.fotosSalvas().filter(f => f.dataUrl !== fotoAtual);

    this.fotosSalvas.set(novaLista);
    localStorage.setItem('fotosProgresso', JSON.stringify(novaLista));

    this.fecharFoto();
  }

  goToHome() { this.router.navigate(['/home']); }
  goToTreinos() { this.router.navigate(['/treinos']); }
  goToProgresso() { this.router.navigate(['/progresso']); }
  goToConfiguracoes() { this.router.navigate(['/configuracoes']); }
  goToApi() { this.router.navigate(['/api']); }
  goToCardapio() { this.router.navigate(['/refeicao']); }
}
