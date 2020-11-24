import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardcplus3backPage } from './cardcplus3back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardcplus3backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardcplus3backPageRoutingModule {}
