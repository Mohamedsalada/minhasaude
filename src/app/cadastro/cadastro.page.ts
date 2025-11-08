
import { Component, OnInit, ViewChild, ElementRef, inject, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonIcon,
  IonItem,
  IonInput,
  IonButton,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonText,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, User } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonIcon,
    IonItem,
    IonInput,
    IonButton,
    IonRow,
    IonCol,
    IonSelect,
    IonSelectOption,
    IonText,
  ],
})
export class CadastroPage {
  private auth = inject(Auth);
  private router = inject(Router);
  error = '';

  async register(email: string, password: string, confirm: string) {
    this.error = '';
    if (!email || !password) { this.error = 'Preencha email e senha.'; return; }
    if (password.length < 8) { this.error = 'Senha precisa de 8+ caracteres.'; return; }
    if (password !== confirm) { this.error = 'As senhas não conferem.'; return; }

    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      await this.router.navigateByUrl('/home'); 
    } catch (e: any) {
      this.error = e?.code ?? 'Falha ao cadastrar';
    }
  }
}
