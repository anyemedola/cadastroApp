import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardphp3PageRoutingModule } from './cardphp3-routing.module';

import { Cardphp3Page } from './cardphp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardphp3PageRoutingModule
  ],
  declarations: [Cardphp3Page]
})
export class Cardphp3PageModule {}
