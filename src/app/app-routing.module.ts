import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConsultationDetailModalComponent } from './consultation-detail-modal/consultation-detail-modal.component'; // Importer le composant de modal
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'connecter',
    loadChildren: () => import('./connecter/connecter.module').then( m => m.ConnecterPageModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'acceuil2',
    loadChildren: () => import('./acceuil2/acceuil2.module').then( m => m.ACCEUIL2PageModule)
  },
  {
    path: 'historie2',
    loadChildren: () => import('./historie2/historie2.module').then( m => m.HISTORIE2PageModule)
  },
  {
    path: 'profils2',
    loadChildren: () => import('./profils2/profils2.module').then( m => m.PROFILS2PageModule)
  },
  {
    path: 'activitydetail',
    loadChildren: () => import('./activitydetail/activitydetail.module').then( m => m.ActivitydetailPageModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./consultation/consultation.module').then( m => m.ConsultationPageModule)
  },
  {
    path: 'consultation-management',
    loadChildren: () => import('./consultation-management/consultation-management.module').then( m => m.ConsultationManagementPageModule)
  },
  {
    path: 'video-chat-component',
    loadChildren: () => import('./video-chat-component/video-chat-component.module').then( m => m.VideoChatComponentModule)
  }
];
@NgModule({
  declarations: [ConsultationDetailModalComponent],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ,IonicModule.forRoot(),FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

