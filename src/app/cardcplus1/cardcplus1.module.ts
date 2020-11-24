import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus1PageRoutingModule } from './cardcplus1-routing.module';

import { Cardcplus1Page } from './cardcplus1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus1PageRoutingModule
  ],
  declarations: [Cardcplus1Page]
})
export class Cardcplus1PageModule {}
