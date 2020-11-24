import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp1PageRoutingModule } from './cardphp1-routing.module';

import { Cardphp1Page } from './cardphp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp1PageRoutingModule
  ],
  declarations: [Cardphp1Page]
})
export class Cardphp1PageModule {}
