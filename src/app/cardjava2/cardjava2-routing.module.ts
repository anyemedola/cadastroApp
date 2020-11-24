import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava2Page } from './cardjava2.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava2PageRoutingModule {}
