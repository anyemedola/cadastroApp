import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Java3Page } from './java3.page';

const routes: Routes = [
  {
    path: '',
    component: Java3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Java3PageRoutingModule {}
