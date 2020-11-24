import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus4backPage } from './cardcplus4back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus4backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus4backPageRoutingModule {}
