import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cardjava3PageRoutingModule } from './cardjava3-routing.module';

import { Cardjava3Page } from './cardjava3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cardjava3PageRoutingModule
  ],
  declarations: [Cardjava3Page]
})
export class Cardjava3PageModule {}
