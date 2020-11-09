import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Csharp4PageRoutingModule } from './csharp4-routing.module';

import { Csharp4Page } from './csharp4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Csharp4PageRoutingModule
  ],
  declarations: [Csharp4Page]
})
export class Csharp4PageModule {}
