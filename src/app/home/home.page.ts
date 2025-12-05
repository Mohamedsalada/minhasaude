import {
  Component,
  ElementRef,
  ViewChild,
  NgZone,
  AfterViewInit,
  OnInit,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonToolbar,
  IonFooter,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  barbellOutline,
  heart,
  walkOutline,
  add,
  homeOutline,
  trendingUpOutline,
  settingsOutline,
  waterOutline,
  person, // Para o ícone de perfil
  scaleOutline, // Para o ícone do IMC
} from 'ionicons/icons';

// 🔹 Firebase imports
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common'; // Necessário para *ngIf

addIcons({
  barbellOutline,
  heart,
  walkOutline,
  add,
  homeOutline,
  trendingUpOutline,
  settingsOutline,
  waterOutline,
  person,
  scaleOutline,
});

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonToolbar,
    IonFooter,
    CommonModule,
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  // Injeções de dependências:
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  private router = inject(Router);

  // 🔹 Propriedades
  // Definindo 'Usuário' como valor padrão para evitar a saudação vazia
  userName = 'Usuário'; 
  
  imc = 0;
  imcStatus = 'Normal';

  waterCurrent = 0;
  waterGoal = 4.0;

  proteinCurrent = 0;
  proteinGoal = 200;

  @ViewChild('waterBar', { static: false }) waterBar!: ElementRef<HTMLDivElement>;

  isInitialized = false;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user: User | null) => {
      // ngZone.run garante que o Angular detecte as mudanças
      this.ngZone.run(() => {
        if (user) {
          // Se o usuário estiver autenticado, carregamos os dados
          this.loadUserName(user.uid, user.email);
        } else {
          // Se não houver usuário logado (ex: sessão expirada)
          this.userName = 'Usuário';
          // Opcional: redirecionar para login
          // this.router.navigate(['/login'], { replaceUrl: true });
        }
      });
    });
  }

  async loadUserName(uid: string, email?: string | null) {
    try {
      const ref = doc(this.firestore, 'usuarios', uid);
      const snap = await getDoc(ref);
      
      if (snap.exists()) {
        // 1. Tenta pegar o nome completo
        const nomeCompleto = snap.data()['nome'];
        
        if (nomeCompleto) {
          // 2. Pega apenas o primeiro nome (ex: "João Silva" -> "João")
          this.userName = nomeCompleto.split(' ')[0];
        } else {
          this.userName = 'Usuário';
        }
      } else {
        // Fallback: usar a parte antes do @ do email
        this.userName = email?.split('@')[0] || 'Usuário';
      }
    } catch (err) {
      console.error('Erro ao buscar nome:', err);
      // Fallback em caso de erro na busca
      this.userName = email?.split('@')[0] || 'Usuário';
    }
  }

  ngAfterViewInit() {
    this.isInitialized = true;
  }

  // --- MÉTODOS DE ÁGUA ---

  // Método onWaterBarClick (mantido)
  onWaterBarClick(event: MouseEvent) {
    if (!this.isInitialized) return;

    this.ngZone.run(() => {
      const bar = this.waterBar.nativeElement;
      const rect = bar.getBoundingClientRect();
      let clickX = event.clientX - rect.left;

      if (clickX < 0) clickX = 0;
      if (clickX > rect.width) clickX = rect.width;

      let newPercentage = clickX / rect.width;
      const valueStr = (newPercentage * this.waterGoal).toFixed(2).replace(',', '.');
      this.waterCurrent = parseFloat(valueStr);
    });
  }

  // ✅ Método decrementWater
  decrementWater() {
    if (!this.isInitialized) return;
    if (this.waterCurrent > 0) {
      const newVal = this.waterCurrent - 0.1;
      this.waterCurrent = parseFloat(newVal.toFixed(2));
    }
  }

  // ✅ Método incrementWater
  incrementWater() {
    if (!this.isInitialized) return;
    if (this.waterCurrent < this.waterGoal) {
      const newVal = this.waterCurrent + 0.1;
      this.waterCurrent = parseFloat(newVal.toFixed(2));
    }
  }

  // ✅ Getter waterPercentage
  get waterPercentage() {
    return (this.waterCurrent / this.waterGoal) * 100;
  }

  // --- MÉTODOS DE PROTEÍNAS ---

  // ✅ Método decrementProtein
  decrementProtein() {
    if (!this.isInitialized) return;
    if (this.proteinCurrent > 0) this.proteinCurrent -= 1;
  }

  // ✅ Método incrementProtein
  incrementProtein() {
    if (!this.isInitialized) return;
    if (this.proteinCurrent < this.proteinGoal) this.proteinCurrent += 1;
  }

  // ✅ Getter proteinPercentage
  get proteinPercentage() {
    return (this.proteinCurrent / this.proteinGoal) * 100;
  }

  
  // --- MÉTODOS DE NAVEGAÇÃO ---
  
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