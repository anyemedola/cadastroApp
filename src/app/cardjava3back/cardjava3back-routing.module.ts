import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava3backPage } from './cardjava3back.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava3backPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava3backPageRoutingModule {}
