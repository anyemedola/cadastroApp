import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp4backPageRoutingModule } from './cardphp4back-routing.module';

import { Cardphp4backPage } from './cardphp4back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp4backPageRoutingModule
  ],
  declarations: [Cardphp4backPage]
})
export class Cardphp4backPageModule {}
