import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationManagementPage } from './consultation-management.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultationManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultationManagementPageRoutingModule {}
