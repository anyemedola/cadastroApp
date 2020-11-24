import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava3backPageRoutingModule } from './cardjava3back-routing.module';

import { Cardjava3backPage } from './cardjava3back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava3backPageRoutingModule
  ],
  declarations: [Cardjava3backPage]
})
export class Cardjava3backPageModule {}
