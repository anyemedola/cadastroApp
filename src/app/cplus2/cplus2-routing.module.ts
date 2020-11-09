import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cplus2Page } from './cplus2.page';

const routes: Routes = [
  {
    path: '',
    component: Cplus2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cplus2PageRoutingModule {}
