import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Profils2Page } from './profils2.page';

const routes: Routes = [
  {
    path: '',
    component: Profils2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PROFILS2PageRoutingModule {}
