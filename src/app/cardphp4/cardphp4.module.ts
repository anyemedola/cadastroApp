import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp4PageRoutingModule } from './cardphp4-routing.module';

import { Cardphp4Page } from './cardphp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp4PageRoutingModule
  ],
  declarations: [Cardphp4Page]
})
export class Cardphp4PageModule {}
