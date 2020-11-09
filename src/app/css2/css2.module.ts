import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Css2PageRoutingModule } from './css2-routing.module';

import { Css2Page } from './css2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Css2PageRoutingModule
  ],
  declarations: [Css2Page]
})
export class Css2PageModule {}
