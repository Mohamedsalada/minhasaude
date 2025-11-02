import { Component, inject } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonImg,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms'; // ✅ Necessário para ngModel
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from '@angular/fire/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonInput,
    IonItem,
    IonImg,
    FormsModule, // ✅ Permite [(ngModel)]
  ],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  private auth = inject(Auth);
  private router = inject(Router);

  public email: string = '';
  public password: string = '';
  public error: string = '';

  // Navega para a página de cadastro
  public goTocadastro() {
    this.router.navigate(['/cadastro']);
  }

  // Login com email e senha
  public async loginEmail() {
    this.error = '';
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      await this.router.navigateByUrl('/home'); // Redireciona para home
    } catch (e: any) {
      switch (e.code) {
        case 'auth/user-not-found':
          this.error = 'Usuário não encontrado';
          break;
        case 'auth/wrong-password':
          this.error = 'Senha incorreta';
          break;
        case 'auth/invalid-email':
          this.error = 'Email inválido';
          break;
        default:
          this.error = 'Falha ao autenticar';
      }
    }
  }

  // Login com Google
  public async loginGoogle() {
    this.error = '';
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      await signInWithPopup(this.auth, provider);
      await this.router.navigateByUrl('/home');
    } catch (e: any) {
      const code = e?.code as string | undefined;
      if (code === 'auth/popup-blocked' || code === 'auth/popup-closed-by-user') {
        try {
          await signInWithRedirect(this.auth, provider);
        } catch (e2: any) {
          this.error = e2?.code ?? 'Falha ao autenticar (redirect Google)';
        }
        return;
      }
      this.error = code ?? 'Falha ao autenticar com Google';
    }
  }
}
