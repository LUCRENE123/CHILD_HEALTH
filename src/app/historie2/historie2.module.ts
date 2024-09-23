import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HISTORIE2PageRoutingModule } from './historie2-routing.module';

import { HISTORIE2Page } from './historie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HISTORIE2PageRoutingModule
  ],
  declarations: [HISTORIE2Page]
})
export class HISTORIE2PageModule {}
