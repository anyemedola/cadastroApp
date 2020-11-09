import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Html3PageRoutingModule } from './html3-routing.module';

import { Html3Page } from './html3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Html3PageRoutingModule
  ],
  declarations: [Html3Page]
})
export class Html3PageModule {}
