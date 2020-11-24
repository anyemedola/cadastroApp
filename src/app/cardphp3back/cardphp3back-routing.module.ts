import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp3backPage } from './cardphp3back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp3backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp3backPageRoutingModule {}
