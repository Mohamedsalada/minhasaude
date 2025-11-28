import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar,
  
  IonButton,
  IonInput,
  IonItem,
  IonImg,
  IonLabel, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonContent ,IonButton,IonInput,IonItem,
  IonImg,
  IonLabel, ]
})
export class InicialPage   {

  constructor(private router: Router) {}
  
goTocadastro() {
    this.router.navigate(['/cadastro']);
  }

  loginEmail() {
    this.router.navigate(['/login']);
  }
 
  ngOnInit() {
  }

}
