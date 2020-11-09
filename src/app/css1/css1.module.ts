import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Css1PageRoutingModule } from './css1-routing.module';

import { Css1Page } from './css1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Css1PageRoutingModule
  ],
  declarations: [Css1Page]
})
export class Css1PageModule {}
