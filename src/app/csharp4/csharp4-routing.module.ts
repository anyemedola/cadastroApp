import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Csharp4Page } from './csharp4.page';

const routes: Routes = [
  {
    path: '',
    component: Csharp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Csharp4PageRoutingModule {}
