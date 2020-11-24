import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus3backPageRoutingModule } from './cardcplus3back-routing.module';

import { Cardcplus3backPage } from './cardcplus3back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus3backPageRoutingModule
  ],
  declarations: [Cardcplus3backPage]
})
export class Cardcplus3backPageModule {}
