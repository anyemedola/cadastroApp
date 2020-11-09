import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cplus3PageRoutingModule } from './cplus3-routing.module';

import { Cplus3Page } from './cplus3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cplus3PageRoutingModule
  ],
  declarations: [Cplus3Page]
})
export class Cplus3PageModule {}
