import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava4backPage } from './cardjava4back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava4backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava4backPageRoutingModule {}
