import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp2backPageRoutingModule } from './cardphp2back-routing.module';

import { Cardphp2backPage } from './cardphp2back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp2backPageRoutingModule
  ],
  declarations: [Cardphp2backPage]
})
export class Cardphp2backPageModule {}
