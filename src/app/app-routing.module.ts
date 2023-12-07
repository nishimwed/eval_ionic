import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'mens-cycle',
    loadChildren: () => import('./pages/mens-cycle/mens-cycle.module').then( m => m.MensCyclePageModule)
  },
  {
    path: 'ovulation',
    loadChildren: () => import('./pages/ovulation/ovulation.module').then( m => m.OvulationPageModule)
  },
  {
    path: 'infertility',
    loadChildren: () => import('./pages/infertility/infertility.module').then( m => m.InfertilityPageModule)
  },
  {
    path: 'pregrancy',
    loadChildren: () => import('./pages/pregrancy/pregrancy.module').then( m => m.PregrancyPageModule)
  },
  {
    path: 'safe-period',
    loadChildren: () => import('./pages/safe-period/safe-period.module').then( m => m.SafePeriodPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
