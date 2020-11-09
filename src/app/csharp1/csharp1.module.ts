import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Csharp1PageRoutingModule } from './csharp1-routing.module';

import { Csharp1Page } from './csharp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Csharp1PageRoutingModule
  ],
  declarations: [Csharp1Page]
})
export class Csharp1PageModule {}
