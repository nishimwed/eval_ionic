import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PregrancyPage } from './pregrancy.page';

const routes: Routes = [
  {
    path: '',
    component: PregrancyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PregrancyPageRoutingModule {}
