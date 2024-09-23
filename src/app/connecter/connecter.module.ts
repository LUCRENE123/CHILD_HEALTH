import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ConnecterPage } from './connecter.page';
import { ConnecterPageRoutingModule } from './connecter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnecterPageRoutingModule,


  ],
  declarations: [ConnecterPage]
})
export class ConnecterPageModule {}
