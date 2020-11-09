import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Java2PageRoutingModule } from './java2-routing.module';

import { Java2Page } from './java2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Java2PageRoutingModule
  ],
  declarations: [Java2Page]
})
export class Java2PageModule {}
