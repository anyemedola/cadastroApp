import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava1PageRoutingModule } from './cardjava1-routing.module';

import { Cardjava1Page } from './cardjava1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava1PageRoutingModule
  ],
  declarations: [Cardjava1Page]
})
export class Cardjava1PageModule {}
