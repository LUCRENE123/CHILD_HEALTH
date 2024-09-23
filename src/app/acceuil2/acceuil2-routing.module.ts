import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ACCEUIL2Page } from './acceuil2.page';

const routes: Routes = [
  {
    path: '',
    component: ACCEUIL2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ACCEUIL2PageRoutingModule {}
