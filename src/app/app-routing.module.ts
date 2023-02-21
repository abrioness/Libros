import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'libro',
    pathMatch: 'full'
  },
  {
    path: 'libro',
    loadChildren: () => import('./libro/libro.module').then( m => m.LibroPageModule)
  },
  
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },  {
    path: 'reg-lib',
    loadChildren: () => import('./reg-lib/reg-lib.module').then( m => m.RegLibPageModule)
  },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
