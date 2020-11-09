import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Html1PageRoutingModule } from './html1-routing.module';

import { Html1Page } from './html1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Html1PageRoutingModule
  ],
  declarations: [Html1Page]
})
export class Html1PageModule {}
