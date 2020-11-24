import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava4PageRoutingModule } from './cardjava4-routing.module';

import { Cardjava4Page } from './cardjava4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava4PageRoutingModule
  ],
  declarations: [Cardjava4Page]
})
export class Cardjava4PageModule {}
