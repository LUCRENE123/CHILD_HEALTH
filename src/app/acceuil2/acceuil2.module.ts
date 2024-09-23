import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ACCEUIL2PageRoutingModule } from './acceuil2-routing.module';

import { ACCEUIL2Page } from './acceuil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ACCEUIL2PageRoutingModule
  ],
  declarations: [ACCEUIL2Page]
})
export class ACCEUIL2PageModule {}
