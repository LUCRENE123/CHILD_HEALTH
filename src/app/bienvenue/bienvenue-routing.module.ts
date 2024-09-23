import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenuePage } from './bienvenue.page';

const routes: Routes = [
  {
    path: 'bienvenue',
    component: BienvenuePage
  },
  {
    path: '',
    redirectTo: '/bienvenue/bienvenue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BienvenuePageRoutingModule {}
