import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Csharp2Page } from './csharp2.page';

const routes: Routes = [
  {
    path: '',
    component: Csharp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Csharp2PageRoutingModule {}
