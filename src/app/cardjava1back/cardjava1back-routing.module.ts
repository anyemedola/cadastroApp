import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava1backPage } from './cardjava1back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava1backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava1backPageRoutingModule {}
