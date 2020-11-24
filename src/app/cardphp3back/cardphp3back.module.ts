import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp3backPageRoutingModule } from './cardphp3back-routing.module';

import { Cardphp3backPage } from './cardphp3back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp3backPageRoutingModule
  ],
  declarations: [Cardphp3backPage]
})
export class Cardphp3backPageModule {}
