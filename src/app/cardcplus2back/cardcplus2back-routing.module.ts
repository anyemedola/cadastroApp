import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus2backPage } from './cardcplus2back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus2backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus2backPageRoutingModule {}
