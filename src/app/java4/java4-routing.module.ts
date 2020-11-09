import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Java4Page } from './java4.page';

const routes: Routes = [
  {
    path: '',
    component: Java4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Java4PageRoutingModule {}
