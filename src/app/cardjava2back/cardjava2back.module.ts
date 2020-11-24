import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava2backPageRoutingModule } from './cardjava2back-routing.module';

import { Cardjava2backPage } from './cardjava2back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava2backPageRoutingModule
  ],
  declarations: [Cardjava2backPage]
})
export class Cardjava2backPageModule {}
