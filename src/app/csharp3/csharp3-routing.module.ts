import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Csharp3Page } from './csharp3.page';

const routes: Routes = [
  {
    path: '',
    component: Csharp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Csharp3PageRoutingModule {}
