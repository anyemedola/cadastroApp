import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus2Page } from './cardcplus2.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus2PageRoutingModule {}
