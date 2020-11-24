import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus3PageRoutingModule } from './cardcplus3-routing.module';

import { Cardcplus3Page } from './cardcplus3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus3PageRoutingModule
  ],
  declarations: [Cardcplus3Page]
})
export class Cardcplus3PageModule {}
