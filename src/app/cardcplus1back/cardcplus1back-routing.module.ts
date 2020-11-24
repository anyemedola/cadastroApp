import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus1backPage } from './cardcplus1back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus1backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus1backPageRoutingModule {}
