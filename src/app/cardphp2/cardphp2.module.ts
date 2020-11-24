import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp2PageRoutingModule } from './cardphp2-routing.module';

import { Cardphp2Page } from './cardphp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp2PageRoutingModule
  ],
  declarations: [Cardphp2Page]
})
export class Cardphp2PageModule {}
