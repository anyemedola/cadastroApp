import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cplus1Page } from './cplus1.page';

const routes: Routes = [
  {
    path: '',
    component: Cplus1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cplus1PageRoutingModule {}
