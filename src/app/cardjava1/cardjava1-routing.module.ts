import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava1Page } from './cardjava1.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava1PageRoutingModule {}
