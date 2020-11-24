import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cardjava3Page } from './cardjava3.page';

const routes: Routes = [
  {
    path: '',
    component: Cardjava3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cardjava3PageRoutingModule {}
