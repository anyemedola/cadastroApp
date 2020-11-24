import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus4PageRoutingModule } from './cardcplus4-routing.module';

import { Cardcplus4Page } from './cardcplus4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus4PageRoutingModule
  ],
  declarations: [Cardcplus4Page]
})
export class Cardcplus4PageModule {}
