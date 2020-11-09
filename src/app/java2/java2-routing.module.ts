import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Java2Page } from './java2.page';

const routes: Routes = [
  {
    path: '',
    component: Java2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Java2PageRoutingModule {}
