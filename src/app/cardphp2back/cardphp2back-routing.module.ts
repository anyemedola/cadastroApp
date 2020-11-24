import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp2backPage } from './cardphp2back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp2backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp2backPageRoutingModule {}
