import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'treinos',
    loadComponent: () => import('./treinos/treinos.page').then((m) => m.TreinosPage),
  },
  {
    path: 'dietas',
    loadComponent: () => import('./dietas/dietas.page').then((m) => m.DietasPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then((m) => m.CadastroPage),
  },
  {
    path: 'sobrenos',
    loadComponent: () => import('./sobrenos/sobrenos.page').then((m) => m.SobrenosPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'api',
    loadComponent: () => import('./api/api.page').then( m => m.ApiPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  // Rota raiz sempre redireciona para login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];