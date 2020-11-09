import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Html2PageRoutingModule } from './html2-routing.module';

import { Html2Page } from './html2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Html2PageRoutingModule
  ],
  declarations: [Html2Page]
})
export class Html2PageModule {}
