import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Html4PageRoutingModule } from './html4-routing.module';

import { Html4Page } from './html4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Html4PageRoutingModule
  ],
  declarations: [Html4Page]
})
export class Html4PageModule {}
