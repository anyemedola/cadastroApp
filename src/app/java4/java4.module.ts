import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Java4PageRoutingModule } from './java4-routing.module';

import { Java4Page } from './java4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Java4PageRoutingModule
  ],
  declarations: [Java4Page]
})
export class Java4PageModule {}
