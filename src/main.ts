import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';

import { routes } from './app/app.routes';

// ✅ CORREÇÃO CRÍTICA: Importar o provedor de função correto para serviços HTTP
import { provideHttpClient } from '@angular/common/http'; 

// 🔥 Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// 🟣 Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTUi766qUn0KmpRb0V0xr3brUwLt47Wxk",
  authDomain: "minhasaude-87135.firebaseapp.com",
  projectId: "minhasaude-87135",
  storageBucket: "minhasaude-87135.firebasestorage.app",
  messagingSenderId: "879373316317",
  appId: "1:879373316317:web:5e7be02ab1cbddac81eb34",
  measurementId: "G-ZKL4G6NFVK"
};

// 🚀 Bootstrap do aplicativo
bootstrapApplication(AppComponent, {
  providers: [
    // Estratégia de reutilização de rotas do Ionic
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Fornece todos os serviços do Ionic
    provideIonicAngular(),

    // Fornece roteamento com preload de módulos
    provideRouter(routes, withPreloading(PreloadAllModules)),

    // 🎯 HABILITA CHAMADAS HTTP GLOBALMENTE
    provideHttpClient(), 

    // 🔥 Inicialização do Firebase + Auth + Firestore
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), 
  ],
})
.catch(err => console.error(err));