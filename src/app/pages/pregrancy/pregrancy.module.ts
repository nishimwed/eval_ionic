import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PregrancyPageRoutingModule } from './pregrancy-routing.module';

import { PregrancyPage } from './pregrancy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PregrancyPageRoutingModule
  ],
  declarations: [PregrancyPage]
})
export class PregrancyPageModule {}
