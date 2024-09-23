import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PROFILS2PageRoutingModule } from './profils2-routing.module';
import { Profils2Page } from './profils2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PROFILS2PageRoutingModule
  ],
  declarations: [Profils2Page]
})
export class PROFILS2PageModule {}
