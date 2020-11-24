import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus1Page } from './cardcplus1.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus1PageRoutingModule {}
