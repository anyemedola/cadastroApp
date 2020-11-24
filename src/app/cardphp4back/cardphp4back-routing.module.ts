import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp4backPage } from './cardphp4back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp4backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp4backPageRoutingModule {}
