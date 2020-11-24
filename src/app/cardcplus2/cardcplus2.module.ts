import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus2PageRoutingModule } from './cardcplus2-routing.module';

import { Cardcplus2Page } from './cardcplus2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus2PageRoutingModule
  ],
  declarations: [Cardcplus2Page]
})
export class Cardcplus2PageModule {}
