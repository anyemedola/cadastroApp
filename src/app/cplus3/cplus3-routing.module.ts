import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cplus3Page } from './cplus3.page';

const routes: Routes = [
  {
    path: '',
    component: Cplus3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cplus3PageRoutingModule {}
