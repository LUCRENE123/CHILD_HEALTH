import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoChatComponentPage } from './video-chat-component.page';

const routes: Routes = [
  {
    path: '',
    component: VideoChatComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoChatComponentPageRoutingModule {}
