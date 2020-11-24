import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp1backPage } from './cardphp1back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp1backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp1backPageRoutingModule {}
