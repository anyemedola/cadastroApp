import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Csharp3PageRoutingModule } from './csharp3-routing.module';

import { Csharp3Page } from './csharp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Csharp3PageRoutingModule
  ],
  declarations: [Csharp3Page]
})
export class Csharp3PageModule {}
