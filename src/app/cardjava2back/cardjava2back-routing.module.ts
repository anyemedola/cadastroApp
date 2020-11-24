import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava2backPage } from './cardjava2back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava2backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava2backPageRoutingModule {}
