import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardcplus2backPageRoutingModule } from './cardcplus2back-routing.module';

import { Cardcplus2backPage } from './cardcplus2back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardcplus2backPageRoutingModule
  ],
  declarations: [Cardcplus2backPage]
})
export class Cardcplus2backPageModule {}
