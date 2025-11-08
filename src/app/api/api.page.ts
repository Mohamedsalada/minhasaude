import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { addIcons } from 'ionicons';

import { add, restaurantOutline } from 'ionicons/icons'; 
import { Router } from '@angular/router';


import { NutricaoService, ItemAlimento } from '../services/nutricao'; 

import {
 
  IonHeader, 
  IonToolbar, 
  IonTitle,
  IonLabel,
  IonListHeader, 
  IonContent,
  IonSearchbar,
  IonChip,
  IonImg,
  IonButton,
  IonIcon, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-api',
  templateUrl: 'api.page.html',
  styleUrls: ['api.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 

   
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    IonContent,
    IonSearchbar,
    IonChip,
    IonImg,
    IonButton,
    IonIcon, 
    IonListHeader,
  ],
})
export class ApiPage implements OnInit {

  public alimentos: ItemAlimento[] = [];
  public isLoading = false;
  public errorMessage: string | null = null;
  public termoBusca: string = '';

  
  constructor(
    
    private nutricaoService: NutricaoService, 
    private router: Router 
  ) {
    addIcons({ add, restaurantOutline });
  }

  ngOnInit() {
    
    
  }

  carregarAlimentos(termo?: string) {
    if (termo !== undefined) {
      this.termoBusca = termo;
    }

    if (!this.termoBusca.trim()) {
      this.alimentos = [];
      this.errorMessage = null;
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    
    this.nutricaoService.buscarAlimentos(this.termoBusca) 
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (dados: ItemAlimento[]) => {
          this.alimentos = dados;

          if (dados.length === 0) {
            this.errorMessage = `Nenhum alimento encontrado para o termo "${this.termoBusca}".`;
          } else {
            this.errorMessage = null;
          }
        },
        error: (err: any) => {
          console.error('Erro de Rede/Servidor:', err);
          this.errorMessage = 'Falha crítica ao carregar dados da API. Verifique sua chave ou o console.';
          this.alimentos = [];
        }
      });
  }
}