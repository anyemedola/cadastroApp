import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cplus1PageRoutingModule } from './cplus1-routing.module';

import { Cplus1Page } from './cplus1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cplus1PageRoutingModule
  ],
  declarations: [Cplus1Page]
})
export class Cplus1PageModule {}
