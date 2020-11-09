import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Css3PageRoutingModule } from './css3-routing.module';

import { Css3Page } from './css3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Css3PageRoutingModule
  ],
  declarations: [Css3Page]
})
export class Css3PageModule {}
