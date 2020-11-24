import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp4Page } from './cardphp4.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp4PageRoutingModule {}
