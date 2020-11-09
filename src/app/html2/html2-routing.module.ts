import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Html2Page } from './html2.page';

const routes: Routes = [
  {
    path: '',
    component: Html2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Html2PageRoutingModule {}
