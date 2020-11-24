import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava4backPageRoutingModule } from './cardjava4back-routing.module';

import { Cardjava4backPage } from './cardjava4back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava4backPageRoutingModule
  ],
  declarations: [Cardjava4backPage]
})
export class Cardjava4backPageModule {}
