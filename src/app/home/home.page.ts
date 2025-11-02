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
} from 'ionicons/icons';

// 🔹 Firebase imports
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common'; // IMPORTANTE para *ngIf

addIcons({
  barbellOutline,
  heart,
  walkOutline,
  add,
  homeOutline,
  trendingUpOutline,
  settingsOutline,
  waterOutline,
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
    CommonModule, // 🔹 Necessário para *ngIf no template
  ],
})
export class HomePage implements OnInit, AfterViewInit {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  userName = 'Usuário';
  imc = 22.5;
  imcStatus = 'Normal';

  waterCurrent = 1.5;
  waterGoal = 2.0;

  proteinCurrent = 70;
  proteinGoal = 100;

  @ViewChild('waterBar', { static: false }) waterBar!: ElementRef<HTMLDivElement>;

  isInitialized = false;

  constructor(private router: Router, private ngZone: NgZone) {}

  ngOnInit() {
    const user = this.auth.currentUser;

    if (user) {
      this.loadUserName(user.uid, user.email);
    } 
  }

  async loadUserName(uid: string, email?: string | null) {
    try {
      const ref = doc(this.firestore, 'usuarios', uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        this.userName = snap.data()['nome'] || 'Usuário';
      } else {
        this.userName = email?.split('@')[0] || 'Usuário';
      }
    } catch (err) {
      console.error('Erro ao buscar nome:', err);
      this.userName = email?.split('@')[0] || 'Usuário';
    }
  }

  ngAfterViewInit() {
    this.isInitialized = true;
  }

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

  decrementWater() {
    if (!this.isInitialized) return;
    if (this.waterCurrent > 0) {
      const newVal = this.waterCurrent - 0.1;
      this.waterCurrent = parseFloat(newVal.toFixed(2).replace(',', '.'));
    }
  }

  incrementWater() {
    if (!this.isInitialized) return;
    if (this.waterCurrent < this.waterGoal) {
      const newVal = this.waterCurrent + 0.1;
      this.waterCurrent = parseFloat(newVal.toFixed(2).replace(',', '.'));
    }
  }

  get waterPercentage() {
    return (this.waterCurrent / this.waterGoal) * 100;
  }

  decrementProtein() {
    if (!this.isInitialized) return;
    if (this.proteinCurrent > 0) this.proteinCurrent -= 1;
  }

  incrementProtein() {
    if (!this.isInitialized) return;
    if (this.proteinCurrent < this.proteinGoal) this.proteinCurrent += 1;
  }

  get proteinPercentage() {
    return (this.proteinCurrent / this.proteinGoal) * 100;
  }

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

  // ✅ NOVO MÉTODO PARA SOBRE
  goToSobrenos() {
    this.router.navigate(['/sobrenos']); // ajuste a rota se necessário
  }
  

  // ✅ Método para Cardápio (já existente)
  goToCardapio() {
    this.router.navigate(['/refeicao']); 
  }
}

