import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Csharp1Page } from './csharp1.page';

const routes: Routes = [
  {
    path: '',
    component: Csharp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Csharp1PageRoutingModule {}
