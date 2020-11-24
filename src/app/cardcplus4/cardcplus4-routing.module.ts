import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus4Page } from './cardcplus4.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus4PageRoutingModule {}
