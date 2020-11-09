import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Css4PageRoutingModule } from './css4-routing.module';

import { Css4Page } from './css4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Css4PageRoutingModule
  ],
  declarations: [Css4Page]
})
export class Css4PageModule {}
