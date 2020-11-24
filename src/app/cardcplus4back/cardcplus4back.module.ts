import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus4backPageRoutingModule } from './cardcplus4back-routing.module';

import { Cardcplus4backPage } from './cardcplus4back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus4backPageRoutingModule
  ],
  declarations: [Cardcplus4backPage]
})
export class Cardcplus4backPageModule {}
