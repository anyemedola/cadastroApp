import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava1backPageRoutingModule } from './cardjava1back-routing.module';

import { Cardjava1backPage } from './cardjava1back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava1backPageRoutingModule
  ],
  declarations: [Cardjava1backPage]
})
export class Cardjava1backPageModule {}
