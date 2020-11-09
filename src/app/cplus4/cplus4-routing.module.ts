import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cplus4Page } from './cplus4.page';

const routes: Routes = [
  {
    path: '',
    component: Cplus4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cplus4PageRoutingModule {}
