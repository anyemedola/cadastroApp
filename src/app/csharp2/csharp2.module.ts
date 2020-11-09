import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Csharp2PageRoutingModule } from './csharp2-routing.module';

import { Csharp2Page } from './csharp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Csharp2PageRoutingModule
  ],
  declarations: [Csharp2Page]
})
export class Csharp2PageModule {}
