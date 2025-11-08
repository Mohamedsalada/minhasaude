import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, 
  IonButton, IonBackButton, IonButtons, IonSpinner, IonIcon 
} from '@ionic/angular/standalone';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';

@Component({
  standalone: true,
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  imports: [
    CommonModule, FormsModule, 
    IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, 
    IonButton, IonBackButton, IonButtons, IonSpinner, IonIcon
  ],
})
export class ResetPasswordPage implements OnInit {
  private auth = inject(Auth);
  private route = inject(ActivatedRoute);
  
  public recoveryEmail: string = '';
  public error: string = '';
  public loading: boolean = false;
  public emailSent: boolean = false;

  ngOnInit() {
   
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.recoveryEmail = params['email'];
      }
    });
  }

  public async sendResetLink() {
    this.error = '';
    this.loading = true;

    if (!this.recoveryEmail) {
      this.error = 'Por favor, digite seu e-mail.';
      this.loading = false;
      return;
    }

    try {
      
      await sendPasswordResetEmail(this.auth, this.recoveryEmail);
      this.emailSent = true;
      
    } catch (e: any) {
      console.error('Erro ao enviar e-mail de redefinição:', e);
      let errorMessage = 'Falha ao enviar e-mail de redefinição.';

      switch (e.code) {
        case 'auth/user-not-found':
          errorMessage = 'Este e-mail não está cadastrado.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'O formato do e-mail é inválido.';
          break;
      }
      this.error = errorMessage;
      this.emailSent = false;
    } finally {
      this.loading = false;
    }
  }
}