import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava2PageRoutingModule } from './cardjava2-routing.module';

import { Cardjava2Page } from './cardjava2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava2PageRoutingModule
  ],
  declarations: [Cardjava2Page]
})
export class Cardjava2PageModule {}
