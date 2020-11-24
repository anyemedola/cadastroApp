import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardphp3Page } from './cardphp3.page';

const routes: Routes = [
  {
    path: '',
    component: Cardphp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardphp3PageRoutingModule {}
