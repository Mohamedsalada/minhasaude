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
    loadComponent: () => import('./dietas/dietas.page').then((m) => m.DietaPage),
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
  },  {
    path: 'iniciante',
    loadComponent: () => import('./iniciante/iniciante.page').then( m => m.IniciantePage)
  },
  {
    path: 'intermediario',
    loadComponent: () => import('./intermediario/intermediario.page').then( m => m.IntermediarioPage)
  },
  {
    path: 'avancado',
    loadComponent: () => import('./avancado/avancado.page').then( m => m.AvancadoPage)
  },
  {
    path: 'progresso',
    loadComponent: () => import('./progresso/progresso.page').then( m => m.ProgressoPage)
  },

];