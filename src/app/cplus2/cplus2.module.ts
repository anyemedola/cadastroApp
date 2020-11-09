import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cplus2PageRoutingModule } from './cplus2-routing.module';

import { Cplus2Page } from './cplus2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cplus2PageRoutingModule
  ],
  declarations: [Cplus2Page]
})
export class Cplus2PageModule {}
