import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp1backPageRoutingModule } from './cardphp1back-routing.module';

import { Cardphp1backPage } from './cardphp1back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp1backPageRoutingModule
  ],
  declarations: [Cardphp1backPage]
})
export class Cardphp1backPageModule {}
