import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.page.html',  // Certifique-se de que o arquivo HTML existe
  styleUrls: ['./sobrenos.page.scss'],  // Certifique-se de que o arquivo SCSS existe
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SobrenosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Lógica de inicialização se necessário
  }

}

