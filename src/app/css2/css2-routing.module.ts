import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Css2Page } from './css2.page';

const routes: Routes = [
  {
    path: '',
    component: Css2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Css2PageRoutingModule {}
