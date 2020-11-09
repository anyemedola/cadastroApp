import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Html1Page } from './html1.page';

const routes: Routes = [
  {
    path: '',
    component: Html1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Html1PageRoutingModule {}
