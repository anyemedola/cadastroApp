import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Java3PageRoutingModule } from './java3-routing.module';

import { Java3Page } from './java3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Java3PageRoutingModule
  ],
  declarations: [Java3Page]
})
export class Java3PageModule {}
