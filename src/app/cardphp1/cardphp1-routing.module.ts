import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp1Page } from './cardphp1.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp1PageRoutingModule {}
