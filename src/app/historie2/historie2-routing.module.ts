import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HISTORIE2Page } from './historie2.page';

const routes: Routes = [
  {
    path: '',
    component: HISTORIE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HISTORIE2PageRoutingModule {}
