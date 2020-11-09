import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Html3Page } from './html3.page';

const routes: Routes = [
  {
    path: '',
    component: Html3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Html3PageRoutingModule {}
