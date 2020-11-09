import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Css4Page } from './css4.page';

const routes: Routes = [
  {
    path: '',
    component: Css4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Css4PageRoutingModule {}
