import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus1backPageRoutingModule } from './cardcplus1back-routing.module';

import { Cardcplus1backPage } from './cardcplus1back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus1backPageRoutingModule
  ],
  declarations: [Cardcplus1backPage]
})
export class Cardcplus1backPageModule {}
