import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
   redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'sumadora',
    loadComponent: () => import('./pages/sumadora/sumadora.page').then( m => m.SumadoraPage)
  },
  {
    path: 'numeros-letras',
    loadComponent: () => import('./pages/numeros-letras/numeros-letras.page').then( m => m.NumerosLetrasPage)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./pages/tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia/experiencia.page').then( m => m.ExperienciaPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu.page').then( m => m.MenuPage)
  },

  {
  path: 'menu',
  loadComponent: () =>
    import('./pages/menu/menu.page').then(
      (m) => m.MenuPage
    )
},

];
