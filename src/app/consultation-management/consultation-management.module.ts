import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationManagementPageRoutingModule } from './consultation-management-routing.module';

import { ConsultationManagementPage } from './consultation-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultationManagementPageRoutingModule
  ],
  declarations: [ConsultationManagementPage]
})
export class ConsultationManagementPageModule {}
