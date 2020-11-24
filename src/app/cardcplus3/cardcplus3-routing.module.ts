import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus3Page } from './cardcplus3.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus3PageRoutingModule {}
