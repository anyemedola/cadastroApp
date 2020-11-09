import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Java1Page } from './java1.page';

const routes: Routes = [
  {
    path: '',
    component: Java1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Java1PageRoutingModule {}
