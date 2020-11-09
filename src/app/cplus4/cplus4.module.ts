import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cplus4PageRoutingModule } from './cplus4-routing.module';

import { Cplus4Page } from './cplus4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cplus4PageRoutingModule
  ],
  declarations: [Cplus4Page]
})
export class Cplus4PageModule {}
